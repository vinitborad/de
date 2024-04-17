import React from 'react';

const NodeJS = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>Node.js Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Learn backend programming of websites using Node.js with our Node.js course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/node.png" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Learn backend programming of websites using Node.js with our Node.js course. Node.js is a powerful JavaScript runtime environment known for its asynchronous and event-driven architecture, making it ideal for building scalable and efficient server-side applications. Whether you're a beginner looking to learn the fundamentals of backend development or an experienced developer seeking to master Node.js, this course covers everything you need to know to become proficient in Node.js. From basic concepts like modules, file system, and HTTP server to advanced topics like Express.js framework, database integration, and authentication, you'll gain a comprehensive understanding of Node.js and how to use it to build robust and high-performance web applications.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to Node.js and NPM<br/>
                        • Modules and CommonJS<br/>
                        • File system operations<br/>
                        • HTTP server and routing<br/>
                        • Asynchronous programming with callbacks, promises, and async/await<br/>
                        • Express.js framework and middleware<br/>
                        • Database integration with MongoDB or SQL<br/>
                        • Authentication and authorization<br/>
                        • Error handling and debugging<br/>
                        • Deployment and production considerations<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of JavaScript and web development concepts is recommended. This course is suitable for beginners as well as intermediate learners looking to enhance their backend development skills with Node.js.<br/><br/>

                        <b>Duration:</b> The course is self-paced and can be completed in approximately [X weeks/months]. Each module includes video lectures, coding exercises, quizzes, and projects to reinforce learning.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Rs.200/-</h2>
                    <button style={{ backgroundColor: '#1E40AF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginBottom: '1rem' }}>BUY</button>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Created by The Net Ninja.</p>
                </div>
            </div>
        </div>
    );
};

export default NodeJS;
