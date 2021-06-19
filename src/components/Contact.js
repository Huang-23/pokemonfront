import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_lfiisfw', 
            'template_jphbrr4', 
            e.target,
            'user_gZ0iMe09ynASoV6XhebyU'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
    }


    return (
        <div className="container border"
        style={{marginTop:"50px",
        width:'50%',
        backgroundImage:`url('https://img.alicdn.com/imgextra/i4/2431218892/TB27jlnkItnpuFjSZFKXXalFFXa_!!2431218892.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        }}
        >
            <h1 style={{marginTop:'25px'}}>Contact us</h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='name' className="form-control"/>

                <label>Email</label>
                <input type='email' name='user_email' className="form-control"/>

                <label>Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type='submit' value='Send' className='form-control btn btn-primary' style={{marginTop: "30px"}}/>
            </form>
        </div>
    );
}

export default Contact;
