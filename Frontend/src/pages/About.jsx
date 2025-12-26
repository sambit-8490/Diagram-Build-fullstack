import React, { useState } from 'react';
import Footer from './Footer';

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F9E6CF] text-gray-900">
      <main className="flex-grow mt-12">
        <div className="min-h-screen flex flex-col items-center">
          <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl mt-24">
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-black mb-4">What is Entity Craft?</h2>
              <p className="list-disc list-inside text-gray-500 text-center">
                Entity Craft revolutionizes the way you create, edit, and share Entity-Relationship (ER) diagrams. Designed with simplicity and power in mind, it transforms complex database modeling into an intuitive and visually appealing experience. Whether you're a beginner exploring database design or an expert refining intricate systems, Entity Craft offers the perfect blend of user-friendly tools and advanced features to bring your ideas to life effortlessly.
              </p>
            </div>
            <div className="p-6 flex justify-center">
              <img
                src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-school.svg"
                alt="ER Diagram Example"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section className="mt-12 max-w-6xl w-full bg-gray-50 rounded-lg shadow-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-center text-black mb-6">Features</h2>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg animate-fade-in">
              <ul className="list-disc list-inside text-gray-800 space-y-4">
                <li>
                  <strong>User Authentication:</strong> Securely sign up, log
                  in, and manage your account.
                </li>
                <li>
                  <strong>Diagram Creation and Editing:</strong> Easily add
                  entities, attributes, and relationships to your diagrams.
                </li>
               
                <li>
                  <strong>Export Options:</strong> Save your diagrams in
                  formats like PNG, PDF, and SVG.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-12 max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-black mb-6">Why Entity Craft?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 flex flex-col justify-center">
                <ul className="list-disc list-inside text-gray-800 space-y-4">
                  <li><strong>Intuitive Interface:</strong> Designed for ease of use, making database design accessible to all.</li>
                  <li><strong>Collaboration Made Easy:</strong> Seamlessly work with teams, ensuring efficient project management.</li>
                  <li><strong>Advanced Features:</strong> Tailored for both beginners and experts, offering versatility in design.</li>
                  <li><strong>Robust Export Options:</strong> Save your work in multiple formats to suit your needs.</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-example.svg"
                  alt="Why Entity Craft"
                  className="w-2/3 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <div className="mt-12 max-w-6xl w-full bg-gray-50 rounded-lg shadow-lg p-12">
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-lg text-center flex justify-center items-center h-40">
                <h2 className="text-xl font-bold text-black">The components and features of ER Diagram</h2>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg overflow-auto max-h-96">
                <p className="text-gray-700">
                  <strong>Entity:</strong> A definable thing—such as a person, object, concept or event—that can have data stored about it. Think of entities as nouns. Examples: a customer, student, car or product. Typically shown as a rectangle.
                </p>
                <p className="text-gray-700">
                  Entity type: A group of definable things, such as students or athletes, whereas the entity would be the specific student or athlete.
                </p>
                <p className="text-gray-700">
                  Entity set: Same as an entity type, but defined at a particular point in time, such as students enrolled in a class on the first day.
                </p>
                <p className="text-gray-700">
                  Entity categories: Entities are categorized as strong, weak or associative. A strong entity can be defined solely by its own attributes, while a weak entity cannot.
                </p>
                <div className="flex space-x-4 my-4 justify-center">
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-01.svg"
                    alt="Entity Example"
                    className="w-1/6 h-auto"
                  />
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-02.svg"
                    alt="Entity Categories"
                    className="w-1/6 h-auto"
                  />
                   <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-03.svg"
                    alt="Entity Categories Example"
                    className="w-1/6 h-auto"
                  />
                </div>
                <p className="text-gray-700">
                <strong>Attribute:</strong>
                A property or characteristic of an entity. Often shown as an oval or circle.
                </p>
                <p>Attribute categories: Attributes are categorized as simple, composite, derived, as well as single-value or multi-value. 
                  Simple: Means the attribute value is atomic and can't be further divided, such as a phone number. 
                  Composite: Sub-attributes spring from an attribute. Derived: Attributed is calculated or otherwise derived from another attribute, such as age from a birthdate.
                  </p>
               
                <div className="flex space-x-4 my-4 justify-center">
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-04.svg"
                    alt="Attribute Example"
                    className="w-1/12"
                  />
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-05.svg"
                    alt="Attribute Example 2"
                    className="w-1/12"
                  />

                  <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-06.svg" 
                  alt="Attribute Example 2"
                    className="w-1/12"
                  />
                </div>
                <p className="text-gray-700">
                <strong> Cardinality:</strong>  Defines the numerical attributes of the relationship between two entities or entity sets. The three main cardinal relationships are one-to-one, one-to-many, and many-many.
                </p>
                <p className="text-gray-700">
                Cardinality views: Cardinality can be shown as look-across or same-side, depending on where the symbols are shown.
                      <br />
                  Cardinality constraints: The minimum or maximum numbers that apply to a relationship.
                </p>
                <div className="flex space-x-4 my-4 justify-center">
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-11.svg"
                    alt="Cardinality Example"
                    className="w-1/6 h-auto"
                  />
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-16.svg"
                    alt="Cardinality Example"
                    className="w-1/6 h-auto"
                  />
                  
                  <img
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-15.svg"
                    alt="Attribute Example 2"
                    className="w-1/12"
                  />
                </div>
                <p><strong>Relationship: </strong>
                    How entities act upon each other or are associated with each other.
                    Think of relationships as verbs. For example, the named student might register for a course. The two entities would be the student and the course, and the relationship depicted is the act of enrolling, 
                     the two entities in that way. Relationships are typically shown as diamonds or labels directly on the connecting lines.</p>
                  <div className="flex space-x-4 my-4 justify-center">
                  <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-09.svg" 
                   alt="Relationship" 
                   className="w-1/6 h-auto" />
                   <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/seo/ERD/discovery/erd-symbols-10.svg"
                    alt="Relationship" 
                    className="w-1/6 h-auto"  />
                    </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default AboutPage;
