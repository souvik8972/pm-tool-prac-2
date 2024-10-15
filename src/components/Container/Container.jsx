import React, { useState } from 'react'

const Container = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <div className='absolute top-0 bottom-0 left-0 right-0 w-screen h-screen z-[1001] bg-red-500'>
          {children}
        </div>
      )}
      {/* Button to toggle modal */}
      {/* <button onClick={() => setOpenModal(!openModal)}>
        {openModal ? 'Close Modal' : 'Open Modal'}
      </button> */}
    </>
  );
}

export default Container;
