import React from 'react';

const NextJS = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>Next.js Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Build next-level frontend of websites with Next.js with our Next.js course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/next.jpeg" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Build next-level frontend of websites with Next.js with our Next.js course. Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. Whether you're a beginner looking to learn the fundamentals of frontend development or an experienced developer seeking to master Next.js, this course covers everything you need to know to become proficient in Next.js. From basic concepts like pages, routing, and layouts to advanced topics like API routes, data fetching, and authentication, you'll gain a comprehensive understanding of Next.js and how to use it to build modern and performant web applications.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to Next.js framework<br/>
                        • Pages and routing<br/>
                        • Layouts and components<br/>
                        • Server-side rendering (SSR)<br/>
                        • Static site generation (SSG)<br/>
                        • Dynamic routes and data fetching<br/>
                        • API routes and serverless functions<br/>
                        • Authentication and authorization<br/>
                        • Error handling and debugging<br/>
                        • Optimization and deployment considerations<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of HTML, CSS, and JavaScript is recommended. Familiarity with React will be helpful but not required. This course is suitable for beginners as well as intermediate learners looking to enhance their frontend development skills with Next.js.<br/><br/>

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

export default NextJS;
