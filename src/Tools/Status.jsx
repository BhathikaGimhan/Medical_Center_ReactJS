import React from 'react';

const Status = () => {
  let status = 1;
  return (
    <>
      <div className={`status-view ${status === 1 ? 'active' : 'deactive'} bg-white`}>
        <div className={`status-body ${status === 1 ? 'text-blue-500' : 'text-red-500'}`}>
          {status === 1 ? 'Active' : 'Deactive'}
        </div>
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
