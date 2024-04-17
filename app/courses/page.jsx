"use client"

import React from 'react';
import Image from 'next/image';

const ProgramCatalog = () => {
  const programs = [
    {
      id: 1,
      title: 'JAVA',
      description: 'Explore the exciting world of Java programming with our java course.',
      imageUrl: '/java.jpg',
    },
    {
      id: 2,
      title: 'Python',
      description: 'Lets learn one of the most popular language of current time.',
      imageUrl: '/python.jpeg',
    },
    {
      id: 3,
      title: 'React_js',
      description: 'Delve deep into dynamics of react js framework',
      imageUrl: '/react.png',
    },
    {
      id: 4,
      title: 'Node_js',
      description: 'learn backend programming of websites using node',
      imageUrl: '/node.png',
    },
    {
      id: 5,
      title: 'C#',
      description: 'Build powerful desktop and web applications with C#.',
      imageUrl: '/csharp.png',
    },
    {
      id: 6,
      title: 'Ruby',
      description: 'Discover the elegance of programming with Ruby.',
      imageUrl: '/ruby.jpeg',
    },
    {
      id: 7,
      title: 'PHP',
      description: 'Create dynamic websites and web applications with PHP.',
      imageUrl: '/php.png',
    },
    {
      id: 8,
      title: 'Go',
      description: 'Develop scalable and efficient software with Go.',
      imageUrl: '/go.png',
    },
    {
      id: 9,
      title: 'Swift',
      description: 'Build native iOS and macOS applications with Swift.',
      imageUrl: '/swift.jpeg',
    },
    {
      id: 10,
      title: 'Kotlin',
      description: 'Develop modern Android applications with Kotlin.',
      imageUrl: '/kotlin.jpeg',
    },
    {
      id: 11,
      title: 'Rust',
      description: 'Write fast and safe system software with Rust.',
      imageUrl: '/rust.png',
    },
    {
      id: 12,
      title: 'TypeScript',
      description: 'Enhance JavaScript with static types using TypeScript.',
      imageUrl: '/typescript.png',
    },
    {
      id: 13,
      title: 'R',
      description: 'Analyze and visualize data using R programming language.',
      imageUrl: '/r.jpeg',
    },
    {
      id: 14,
      title: 'SQL',
      description: 'Manage and query relational databases with SQL.',
      imageUrl: '/sql.png',
    },
    {
      id: 15,
      title: 'Next_js',
      description: 'build next level frontend of webstites with Next js.',
      imageUrl: '/next.jpeg',
    }
  ]

  return (

    <div>
      <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Available Courses</h1>
      </div>
      <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {programs.map(program => (
          <div key={program.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="program-image mb-4">
              <Image src={program.imageUrl} alt={program.title} width={300} height={200} className="rounded-lg" />
            </div>
            <div className="program-details">
              <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
              <p className="text-gray-600">{program.description}</p>
              <a href={`/catalog/${program.title}`} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>);
};

export default ProgramCatalog;