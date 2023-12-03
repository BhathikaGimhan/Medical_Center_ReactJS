import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import { firestore } from '../firebase';

const NoticeView = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Subscribe to real-time updates on the notices collection
    const unsubscribe = onSnapshot(collection(firestore, 'notices'), (snapshot) => {
      const noticesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Sort notices by timestamp in descending order (newest first)
      const sortedNotices = noticesData.sort((a, b) => {
        const timestampA = a.timestamp?.toDate();
        const timestampB = b.timestamp?.toDate();

        // Check if both timestamps are defined before comparison
        if (timestampA && timestampB) {
          return timestampB - timestampA;
        }

        // If either timestamp is undefined, don't perform the comparison
        return 0;
      });

      setNotices(sortedNotices);
    });

    // Unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div id="services" className="container mx-auto px-6 py-16">
      <h3 className="text-3xl text-center text-gray-800 font-bold mb-8">Notice</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl mb-4"
          >
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3">{notice?.title}</h4>
              <p className="text-gray-600 text-sm">{notice?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeView;
