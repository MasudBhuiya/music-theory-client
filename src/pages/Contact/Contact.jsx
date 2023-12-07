import React, { useRef } from 'react';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const from = e.target;
        
        emailjs.sendForm('service_7m4mho8', 'template_ikv1t3o', form.current, 'IxpmoN9K-NJorAUmo')
            .then((result) => {
                console.log(result);
                
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  from.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="md:py-10 ">
             <h1 className="text-4xl md:text-5xl text-center font-bold mt-20 mb-20 ">Contact <span className="text-cyan-400">With Us!</span></h1>
             <div className=" px-7">
                 <div className="lg:w-[70%] mx-auto">
                    {/* <h1 className="text-white text-xl font-bold">Write  me a message:</h1> */}
                 <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 my-6 gap-6">
                <div>
                {/* <p className='text-white mb-1 mt-3'>Name</p> */}
                <input className=" w-full rounded h-14 ps-3  border-2 border-cyan-500 " placeholder="Your Name" type="text" name="from_name" />
                </div>
                <div>
                {/* <p className='text-white mb-1 mt-3'>Email</p> */}
                <input className=" w-full rounded h-14 ps-3  border-2 border-cyan-500 " placeholder="Your Email" type="email" name="from_email" />
                </div>
                </div>
                <div className="grid md:grid-cols-2 my-6 gap-6">
                <div>
                {/* <p className='text-white mb-1 mt-3'>Mobile Number</p> */}
                <input className=" w-full rounded h-14 ps-3  border-2 border-cyan-500 " placeholder="Mobile Number" type="number" name="from_phone" />
                </div>
                <div>
                {/* <p className='text-white mb-1 mt-3'>Email Subject</p> */}
                <input className=" w-full rounded h-14 ps-3  border-2 border-cyan-500 " placeholder="Date" type="date" name="from_date" />
                </div>
                </div>
                {/* <p className='text-white mb-1 mt-3'>Message</p> */}
                <textarea className=" w-full rounded h-60 ps-3   border-2 border-cyan-500 " name="message" placeholder="Your Message" />
                <input className="btn bg-cyan-500 border-0 hover:bg-cyan-700 mt-4  w-full mb-8 md:mb-0 text-white font-bold" type="submit"  value="Send Message" />
            </form>
                 </div>
                
             </div>
         </div>
    );
};

export default Contact;