import React from "react";

/**
 * Loading component to display a simple loading animation.
 */
const Loading = () => {
  return (
    <div className='dots-container'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
  );
};

export default Loading;
