import React, { useState } from "react";

const ProjectCard = ({ data, clickHandler, deleteHandler }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const descriptionStyle = showFullDescription
    ? "line-clamp-none"
    : "line-clamp-2";

  return (
    <div>
      <div
        className="bg-[#FAC67A] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer flex flex-col justify-between items-start border border-gray-200 hover:border-[#7c294f] min-h-[300px]" // Minimum height ensures uniformity
        onClick={() => clickHandler(data)}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-3">{data.name}</h3>

        <p
          className={`text-base text-gray-700 leading-relaxed ${descriptionStyle}`}
        >
          {data.description}
        </p>

        {data.description.length > 100 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDescription();
            }}
            className="text-[#7c294f] mt-2 text-sm font-medium hover:underline focus:outline-none"
          >
            {showFullDescription ? "Show Less" : "See More"}
          </button>
        )}

        <p className="text-sm font-medium text-gray-600 bg-blue-50 px-3 py-1 rounded-lg self-start mt-4">
          Type: {data.type === "sd" ? "E-R diagram" : "Database Schema"}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteHandler(data._id);
          }}
          className="mt-6 w-full z-20 py-2 bg-[#7c294f] text-white font-semibold rounded-md shadow hover:bg-[#91305c] focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
