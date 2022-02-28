import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactinfo.css'


export default function Contactinfo() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jcywjgv', 'template_ysgjhpo', form.current, 'lE1hCSWcbPFOxCMj6')
      .then((result) => {
        console.log("yay, it worked!", result.text);
      }, (error) => {
        console.log("oh no!", error.text);
        window.alert("Please fill all fields") // Isn't working :( 
      });
  };

  return (
    <div className='parentForm'>
      <h2 className='contact'>Contact Me</h2>

      <form className='form' ref={form} onSubmit={sendEmail}>
        <label className='contact' >Name</label>
        <input type="text" name="user_name" />
        <label className='contact' >Email</label>
        <input type="email" name="user_email" />
        <label className='contact'>Message</label>
        <textarea name="message" />
        <button onClick={Contactinfo} type="submit" value="Send" >Submit</button>
      </form>
    </div>
  );
};
