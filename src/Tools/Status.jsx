import React from 'react'

const Status = () => {
  return (
    <div className='status-view'>
        <div className="status-body">Active</div>
        <div className="active-btn">
            <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative flex justify-center items-center m-auto animate-pulse rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
        </div>
    </div>
  )
}

export default Status