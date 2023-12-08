import React from 'react';

const About = () => {
    return (
        <div className='pt-28 max-w-screen-xl mx-auto'>
            <h1 className="text-5xl text-center font-bold mb-16">About <span className="text-sky-400">Us!</span></h1>
            <div className='grid md:grid-cols-2 justify-between items-center'>
                <img className='w-full sm:w-[541px] rounded' src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                
                    <div>
                        <h1 className='text-lg font-bold text-sky-400 mb-4'>What About Us?</h1>
                    <p className='font-medium w-full sm:w-[541px]'>Music theory is a foundational discipline unraveling the elements of musical expression. It encompasses note organization into scales, chord construction, rhythmic patterns, and the dynamic interplay of melody and harmony. Key signatures, modes, and musical forms contribute to overall structure. This theoretical framework extends to nuances like dynamics, articulation, and expressive techniques, becoming a universal language for musicians and composers. Whether analyzing existing compositions or creating new ones, a grasp of music theory deepens understanding and appreciation of the diverse and rich tapestry of music. It serves as a guide, offering insights into composition, performance, and the emotional resonance of sound.</p>
                    </div>
            </div>
                {/* <div>
                    <h1 className='text-4xl text-center font-bold my-20'>Our Mission</h1>
                    <div className='grid md:grid-cols-2'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4YZK7dsy1up0qO6FeEYqrKl4en12LObRkmVUQR5cNnlg--uC24D9vloywVHOnKd9OSQ&usqp=CAU" alt="" />
                        <div>
                        <p className='text-xl font-bold mb-6'>The mission of the Music Theory may be categorized by 3 principal activities as follows.</p>
                    <h1 className='text-lg font-semibold text-sky-500'>Education and Learning:</h1>
                    <p className='ms-5 text-sm font-bold'>Provide a comprehensive and accessible platform for users to learn and understand music theory. Offer tutorials, articles, videos, or interactive tools that cater to various skill levels, from beginners to advanced musicians.</p>
                    <br />
                    <h1 className='text-lg font-semibold text-sky-500'>Community Engagement and Collaboration:</h1>
                    <p className='ms-5 text-sm font-bold'>Foster a vibrant and supportive community where musicians and music enthusiasts can connect, share knowledge, and collaborate. Encourage discussions, forums, or other interactive features to facilitate a sense of community among your users.</p>
                    <br />
                    <h1 className='text-lg font-semibold text-sky-500'>Promotion of Musical Creativity:</h1>
                    <p className='ms-5 text-sm font-bold'>Inspire and empower musicians to express themselves creatively by applying music theory concepts. Encourage the creation of original music, compositions, or arrangements, and provide resources or challenges that stimulate artistic exploration within the framework of music theory.</p>
                    <br />
                        </div>
                    </div>
                </div> */}

                <section className="text-gray-100 text-justify">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-sky-400">
            Our Vision & Mission
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-700">
            This system will make the Learning enjoyable
          </p>
        </div>
        <div className="grid justify-between lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracki text-sky-400 sm:text-3xl ">
              Our Vision
            </h3>
            <p className="mt-3 text-lg text-gray-700">
              To be the leader of domestic Learning, with
              world-class service standards, efficient management, employing
              modern technologies and quality personnel.
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-violet-400 text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi text-sky-400">
                  Empowering Musicians Globally:
                  </h4>
                  <p className="mt-2 text-gray-700">
                  Our vision is to empower musicians worldwide by being the premier destination for music learning. We strive for excellence in service standards, efficient management, and the incorporation of cutting-edge technologies, all while nurturing a team of highly skilled and passionate individuals.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-violet-400 text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi text-sky-400">
                  Setting the Standard for Music Education:
                  </h4>
                  <p className="mt-2 text-gray-700">
                  We aspire to set the standard for music education on a national level. Our commitment to world-class service, streamlined management, and the integration of modern technologies aims to revolutionize the way individuals engage with music theory. 
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-violet-400 text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi text-sky-400">
                  Innovating Music Learning Experiences:
                  </h4>
                  <p className="mt-2 text-gray-700">
                  Our vision is to be at the forefront of innovation in music learning, offering a dynamic platform that seamlessly blends tradition with modernity. Through world-class service standards, efficient management practices, and the use of cutting-edge technologies, we strive to provide an enriching.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              src="https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&w=300"
              alt=""
              className="rounded-lg h-[600px] shadow-lg bg-gray-500 ml-auto "
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracki sm:text-3xl text-sky-400">
                Our Mission
              </h3>
              <p className="mt-3 text-lg text-gray-700">
                The mission of the Music Theory may be categorized by 3
                principal activities as follows.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-violet-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-sky-400">
                    Education and Learning:
                    </h4>
                    <p className="mt-2 text-gray-700">
                    Provide a comprehensive and accessible platform for users to learn and understand music theory. Offer tutorials, articles, videos, or interactive tools that cater to various skill levels, from beginners to advanced musicians.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-violet-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-sky-400">
                    Community Engagement and Collaboration:
                    </h4>
                    <p className="mt-2 text-gray-700">
                    Foster a vibrant and supportive community where musicians and music enthusiasts can connect, share knowledge, and collaborate. Encourage discussions, forums, or other interactive features to facilitate a sense of community among your users.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-violet-400 text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leadi text-sky-400">
                    Promotion of Musical Creativity:
                    </h4>
                    <p className="mt-2 text-gray-700">
                    Inspire and empower musicians to express themselves creatively by applying music theory concepts. Encourage the creation of original music, compositions, or arrangements, and provide resources or challenges that stimulate artistic exploration within the framework of music theory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                src="https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="me-auto rounded-lg h-[600px] shadow-lg bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default About;