import React, { useRef } from 'react';

const Contact = (props) => {

    const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    props.onContact(details);
  }

  return (
    <form onSubmit={submitHandler} className="mt-5">
      <div className="m-3">
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" ref={nameRef}/>
      </div>
      <div className="m-3">
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="email" ref={emailRef}/>
      </div>
      <div className="m-3">
        <label htmlFor="phone">PHONE</label>
        <input type="number" id="phone" ref={phoneRef}/>
      </div>
      <div className="m-3">
        <button>SUBMIT</button>
      </div>
    </form>
  );
};

export default Contact;
