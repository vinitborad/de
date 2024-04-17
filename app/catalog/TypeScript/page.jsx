import React from 'react';

const TypeScript = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>TypeScript Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Enhance JavaScript with static types using TypeScript with our TypeScript course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/typescript.png" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Enhance JavaScript with static types using TypeScript with our TypeScript course. TypeScript is a superset of JavaScript that adds static typing to the language, enabling developers to catch errors early and write more reliable code. Whether you're a JavaScript developer looking to adopt TypeScript or a beginner starting from scratch, this course covers everything you need to know to become proficient in TypeScript. From basic syntax and data types to advanced features like interfaces, classes, generics, and decorators, you'll gain a comprehensive understanding of TypeScript and how to use it to build scalable and maintainable JavaScript applications.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to TypeScript and static typing<br/>
                        • TypeScript syntax and data types<br/>
                        • Advanced types: unions, intersections, type guards<br/>
                        • Interfaces and classes<br/>
                        • Generics and type inference<br/>
                        • Enums and tuples<br/>
                        • Functions and arrow functions<br/>
                        • Modules and namespaces<br/>
                        • Decorators and metadata<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of JavaScript is required. This course is suitable for developers looking to enhance their JavaScript skills with TypeScript.<br/><br/>

                        <b>Duration:</b> The course is self-paced and can be completed in approximately [X weeks/months]. Each module includes video lectures, coding exercises, quizzes, and projects to reinforce learning.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Rs.200/-</h2>
                    <button style={{ backgroundColor: '#1E40AF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginBottom: '1rem' }}>BUY</button>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Created by Academind.</p>
                </div>
            </div>
        </div>
    );
};

export default TypeScript;
