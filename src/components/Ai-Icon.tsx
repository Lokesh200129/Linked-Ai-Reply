import  { useEffect, useState } from 'react';
import  icon from '../assets/AiIcon.svg'
import Modal from './Modal';
const AiIcon = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // Function to handle focus event
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Function to handle blur event
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleShowModal =()=>{
    setShowModal(prev => !prev)
  }
  useEffect(() => {
    const messageInput = document.querySelector('.msg-form__contenteditable'); 

    if (messageInput) {
      messageInput.addEventListener('focus', handleFocus);
      messageInput.addEventListener('blur', handleBlur);

      return () => {
        messageInput.removeEventListener('focus', handleFocus);
        messageInput.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  return (
    <>
      {isFocused && (
        <div className="absolute right-4 bottom-4">
          <img
            src={icon}
            alt="AI Icon"
            className="w-8 h-8 cursor-pointer"
            onClick={handleShowModal}
          />
        </div>
      )}

      {showModal && <Modal />}

    </>
  );
};

export default AiIcon;
