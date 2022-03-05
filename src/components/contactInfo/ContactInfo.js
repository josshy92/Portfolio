import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactinfo.css'


const Contactinfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jcywjgv', 'template_ysgjhpo', form.current, 'lE1hCSWcbPFOxCMj6')
      .then((result) => {
        console.log("this is my result", result);
        window.location.reload();
      }, (error) => {
        console.log("oh no!", error.text);
      });
  };

  return (
    <div className='parentForm'>
      <h2 className='contact'>Contact Me</h2>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <label className='contact'>Name</label>
        <input type="text" name="user_name" required />
        <label className='contact'>Email</label>
        <input type="email" name="user_email" required />
        <label className='contact'>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};


export default Contactinfo