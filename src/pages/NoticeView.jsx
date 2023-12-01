import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { firestore } from '../firebase';

const NoticeView = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch all notices from Firebase Firestore
    const fetchNotices = async () => {
      const noticesCollection = collection(firestore, 'notices');

      try {
        const querySnapshot = await getDocs(noticesCollection);
        const noticesData = querySnapshot.docs.map((doc) => doc.data());
        setNotices(noticesData);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div id="services" className="container mx-auto px-6 py-16">
    <h3 className="text-3xl text-center text-gray-800 font-bold mb-8">Notice</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {notices.map((notice, index) => (
        <div
          key={index}
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
