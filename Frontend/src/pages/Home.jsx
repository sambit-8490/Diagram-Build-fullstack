import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 30); 

    return () => clearInterval(scrollInterval);
  }, []);

  const items = [
    {
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/ERDiagramsInDBMS_1.png",
      title: "Basic ER Diagram",
      desc: "A simple ER diagram showcasing the relationship between entities in a database."
    },
    {
      img: "https://cdn.nulab.com/learn-wp/app/uploads/2022/02/21192557/er-diagram-for-hospital-management-system.webp",
      title: "Advanced ER Diagram",
      desc: "An advanced ER diagram illustrating complex relationships with cardinalities."
    },
    {
      img: "https://images.wondershare.com/edrawmax/article2023/er-diagram-examples/er-diagram-16.png",
      title: "Collaborative ER Diagram",
      desc: "Collaboratively designed ER diagrams for large team projects."
    },
    {
      img: "https://www.researchgate.net/publication/315666255/figure/fig1/AS:476711717478400@1490668339611/Sample-ERD-diagram-of-a-typical-order-processing-system.png",
      title: "User and Orders ER Diagram",
      desc: "A detailed ER diagram representing the relationship between Users and Orders."
    },
    {
      img: "https://landing.moqups.com/img/templates/diagrams/erd/ecommerce-database-diagram.png",
      title: "E-commerce ER Diagram",
      desc: "ER diagram for an e-commerce website illustrating user accounts, products, and orders."
    },
    {
      img: "https://cdn.venngage.com/template/thumbnail/full/85f9dc7c-c79d-4657-863f-b1fc701ef62f.webp",
      title: "HR Management ER Diagram",
      desc: "A comprehensive ER diagram for managing human resources and employees within an organization."
    },
    {
      img: "https://www.slideteam.net/media/catalog/product/cache/1280x720/d/a/database_relationship_diagram_for_inventory_management_system_slide01.jpg",
      title: "Sales and Inventory ER Diagram",
      desc: "This ER diagram represents the relationship between sales and inventory management systems."
    },
    {
      img: "https://images.doclify.net/gleek-web/d/b2c44bcf-edc7-46e4-a7a7-9b672e5fc11b.png",
      title: "Library Management ER Diagram",
      desc: "A diagram representing the entities involved in a library management system such as books, members, and transactions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F9E6CF] pt-6">
      <main className="flex-grow py-8">
        <div className="container mx-auto px-6 text-center ">
          {/* Welcome Section */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 py-20 overflow-hidden">
            {/* Background Grid */}

            {/* Text Content */}
            <div className="relative flex flex-col items-start lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight lg:px-10">
                Welcome to the EntityCraft Workspace
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                A single, AI-powered collaboration platform that helps teams move faster from idea to outcome.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/whiteSpace/template"
                  className="px-6 py-3 bg-[#7c294f] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#5d223c] transition"
                >
                  Start Designing
                </Link>
                <Link
                  to="/whiteSpace/template"
                  className="px-6 py-3 bg-[#FAC67A] text-gray-800 text-lg font-semibold rounded-md shadow-md hover:bg-[#cda15f] transition"
                >
                  Sample Designing
                </Link>
                <Link
                  to="/schema/path"
                  className="px-6 py-3 bg-[#7c294f] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#5d223c] transition"
                >
                  Schema Designing
                </Link>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
              <iframe
                className="w-full max-w-lg rounded-lg shadow-lg  h-80"
                src="https://www.youtube.com/embed/roHsoD81Scw"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>


          {/* ER Diagram Images Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">Explore ER Diagrams</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden w-80 group"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-all duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#995474] bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 text-center">{item.title}</h3>
                    <p className="text-gray-800 mt-2 text-center text-lg px-4">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    <Footer/>
    </div>
  );
};

export default Home;
