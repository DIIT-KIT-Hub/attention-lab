import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        AttentionLab
      </h1>
      <p className="text-center text-gray-600">
        Платформа для дослідження візуального сприйняття
      </p>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Почати експеримент
        </button>
      </div>
    </div>
  );
}

export default Home;