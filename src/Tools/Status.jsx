import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase'; // import your firebase config
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';

const Status = () => {
  const [status, setStatus] = useState(null);
  const user = localStorage.getItem('userRole');
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'status'));
    
      querySnapshot.forEach(doc => {
        const StatusData = doc.data();
        console.log(StatusData.status);
        setStatus(StatusData.status);
      });
    };
    
    fetchData();
  }, []);

  const handleStatusChange = async () => {
    // Check if the user has admin role before updating the status
    if (user === 'admin') {
      // Toggle the status (1 to 0 or 0 to 1)
      const newStatus = status === 1 ? 0 : 1;

      // Update the status in firestore
      const statusRef = doc(firestore, 'status', 'MFYzJK5Ql5IUKT9TKVZI');
      await updateDoc(statusRef, { status: newStatus });

      // Update the local state
      setStatus(newStatus);
    }
  };

  if (status === null) return null;

  return (
    <>
      

      {/* <div className={`status-view ${status === 1 ? 'active' : 'deactive'} bg-white`}>
        <div className={`status-body ${status === 1 ? 'text-blue-500' : 'text-red-500'}`}>
          {status === 1 ? 'Active' : 'Deactive'}
        </div>
      </div> */}



      <div className={`status-view ${status === 1 ? 'active' : 'deactive'} bg-white`}>
      {user === 'admin' ? (
        <div onClick={handleStatusChange} className={`status-body cursor-pointer ${status === 1 ? 'text-blue-500' : 'text-red-500'}`}>
          Change
        </div>
      ):(
        <div className={`status-body ${status === 1 ? 'text-blue-500' : 'text-red-500'}`}>
          {status === 1 ? 'Active' : 'Deactive'}
        </div>
      )}
        
        <div className="active-btn absolute">
          <span className="relative z-50 flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status === 1 ? 'bg-sky-400' : 'bg-rose-400'} opacity-75`}></span>
            <span className={`relative flex justify-center items-center m-auto animate-pulse rounded-full h-2 w-2 ${status === 1 ? 'bg-sky-500' : 'bg-red-500'}`}></span>
          </span>
        </div>
      </div>
    </>

  );
}

export default Status;
