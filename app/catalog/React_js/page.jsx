import React from 'react';

const React_js = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>React JS Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Delve deep into the dynamics of React JS framework with our React JS course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/react.png" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Delve deep into the dynamics of React JS framework with our React JS course. React JS is a powerful JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering. Whether you're a beginner looking to learn the fundamentals of front-end development or an experienced developer seeking to master React JS, this course covers everything you need to know to become proficient in React JS. From basic concepts like components, props, and state to advanced topics like hooks, context API, and Redux, you'll gain a comprehensive understanding of React JS and how to use it to build modern, interactive web applications.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to React JS library<br/>
                        • Components and props<br/>
                        • State and lifecycle methods<br/>
                        • Handling events<br/>
                        • Conditional rendering<br/>
                        • Lists and keys<br/>
                        • Forms and controlled components<br/>
                        • Hooks: useState, useEffect, useContext, etc.<br/>
                        • Context API<br/>
                        • Redux: actions, reducers, store<br/>
                        • React Router<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of HTML, CSS, and JavaScript is recommended. This course is suitable for beginners as well as intermediate learners looking to enhance their front-end development skills with React JS.<br/><br/>

                        <b>Duration:</b> The course is self-paced and can be completed in approximately [X weeks/months]. Each module includes video lectures, coding exercises, quizzes, and projects to reinforce learning.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Rs.200/-</h2>
                    <button style={{ backgroundColor: '#1E40AF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginBottom: '1rem' }}>BUY</button>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Created by Traversy Media.</p>
                </div>
            </div>
        </div>
    );
};

export default React_js;
