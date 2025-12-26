import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TeamAbout = () => {
  const teamMembers = [
    {
      name: "Pooja Singh",
      img: "https://i.ibb.co/PcXD8m5/IMG-20230101-WA0070.jpg",
      linkedin: "https://www.linkedin.com/in/pooja-singh-689024278/"
    },
    {
      name: "Adharsh",
      img: "https://i.ibb.co/D1DXGLy/IMG20230313194659.jpg",
    },
    {
      name: "Arpit Shrivastava",
      img: "https://i.ibb.co/HqtxRDm/IMG-20241124-130724-290.webp",
      linkedin: "https://www.linkedin.com/in/arpit-shrivastava-85a331260"
    },
    {
      name: "Abhishek",
      img: "https://i.ibb.co/ZcK8SPs/profilepic.jpg",
    },
  ];

  return (
    <>
    <section className="py-12 bg-[#F9E6CF] pt-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-[#7c294f]">Meet Our Team</h2>
        <p className="mt-4 text-lg text-[#943560]">The talented individuals behind EntityCraft</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ml-10 pr-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card p-6 bg-transparent text-[#7c294f] rounded-lg shadow-lg overflow-hidden max-w-[400px] min-h-[380px] transform transition duration-300 hover:bg-[#FAC67A] hover:bg-opacity-20 hover:backdrop-blur-lg hover:scale-105 hover:text-[#7c294f] border border-gray-300"
            >
              <img
                className="w-80 h-70 rounded-full mx-auto"
                src={member.img}
                alt={`Team Member ${index + 1}`}
              />
              <h3 className="text-xl font-semibold mt-4 text-[#7c294f]-800">{member.name}</h3>
              <Link
                to={member.linkedin}
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                LinkedIn
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default TeamAbout;
