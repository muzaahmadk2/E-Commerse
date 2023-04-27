import React, { useRef } from 'react';
import classes from './Contact.module.css'

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
    <section className={classes.auth}>
      <h3>Contact Us</h3>
    <form onSubmit={submitHandler} className="mt-5">
        
      <div className={classes.control}>
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" ref={nameRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="email">E-Mail</label>
        <input type="text" id="email" ref={emailRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">PHONE</label>
        <input type="number" id="phone" ref={phoneRef}/>
      </div>
      <div className={classes.actions}>
        <button>SUBMIT</button>
      </div>
    </form>
    </section>
  );
};

export default Contact;
