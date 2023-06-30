import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function ContactUs() {
    const [user , setUser] = useState({})
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const sendEmail=(user)=>{
        console.log(user)
    if(window.Email){
        // user.preventDefault();
        window.Email.send({
            // Host : "smtp.elasticemail.com",
            // Username : "saitejarailla@gmail.com",
            // Password : "a51e0187-a4fa-44de-8010-9350fb3bdbc8",
            SecureToken : "a51e0187-a4fa-44de-8010-9350fb3bdbc8",
            To : 'saitejarailla1@gmail.com',
            From : 'saitejarailla@gmail.com',
            Subject : user.subject,
            Body : `${user.email} wants to say ${user.body}`
        }).then(
          message => alert(message)
        );
    }
    }
  return (
    <div>
      <form onSubmit={handleSubmit((data) => sendEmail(data))}>
      <input type='email' {...register('email', { required : true})} />
      {errors.email && <p>email id is required.</p>}
      <input type='text' {...register('subject')} />
      <input type='text' {...register('body')} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default ContactUs;
