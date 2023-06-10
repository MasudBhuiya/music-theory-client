const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src='https://img.freepik.com/free-photo/people-enjoying-life-after-covid-freedom_23-2149121943.jpg?size=626&ext=jpg&uid=R76180397&ga=GA1.2.110381157.1659454590&semt=ais' className="w-3/4  rounded-lg shadow-2xl" />
    <img src='https://img.freepik.com/premium-photo/chidren-singer-girl-singing-playing-live-band-backyard_79295-2615.jpg?size=626&ext=jpg&uid=R76180397&ga=GA1.2.110381157.1659454590&semt=ais' className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-base-200 shadow-2xl" />
    </div>
    <div className='lg:w-1/2 space-y-5 p-4'>
        <h3 className='text-3xl text-orange-500 font-bold'>About...</h3>
      <h1 className="text-5xl font-bold">Summer Melodies Music Camp <br /> for get knowledge <br /> about Music Theory.</h1>
      <p className="py-6">Join us at the Summer Melodies Music Camp, a two-week musical journey designed for aspiring young musicians aged 8-14. Discover the joy of music as you explore various instruments, collaborate with fellow campers, and create beautiful melodies together. From guitar and piano to drums, violin, and more, our experienced instructors will guide you through instrument exploration and ensemble performances. Dive into music theory and ear training, develop your songwriting and composition skills, and gain a deeper appreciation for music history. With a focus on creativity and fun, our camp will inspire a lifelong love for music in a supportive and vibrant environment. </p>
    </div>
  </div>
</div>
    );
};

export default About;