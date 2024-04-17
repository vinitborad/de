import React from 'react';

const Go = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>Go Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Develop scalable and efficient software with Go with our Go course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/go.png" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Develop scalable and efficient software with Go with our Go course. Go, also known as Golang, is a statically typed, compiled programming language designed for simplicity and performance. Whether you're a beginner looking to learn the fundamentals of programming or an experienced developer seeking to explore new technologies, this course covers everything you need to know to become proficient in Go. From basic syntax and data types to advanced topics like concurrency, web development, and microservices, you'll gain a comprehensive understanding of Go and how to use it to build reliable and high-performance applications.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to Go programming language<br/>
                        • Go syntax and data types<br/>
                        • Control flow statements: if-else, loops<br/>
                        • Functions and methods<br/>
                        • Pointers and memory management<br/>
                        • Error handling<br/>
                        • Concurrency with Goroutines and Channels<br/>
                        • Web development with Go using frameworks like Gin<br/>
                        • Building RESTful APIs<br/>
                        • Database integration with SQL or NoSQL databases<br/><br/>

                        <b>Prerequisites:</b> No prior programming experience is required, but familiarity with basic concepts of computer science and programming will be helpful. This course is suitable for beginners as well as intermediate learners looking to enhance their Go skills.<br/><br/>

                        <b>Duration:</b> The course is self-paced and can be completed in approximately [X weeks/months]. Each module includes video lectures, coding exercises, quizzes, and projects to reinforce learning.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Rs.200/-</h2>
                    <button style={{ backgroundColor: '#1E40AF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginBottom: '1rem' }}>BUY</button>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Created by LearnCodeOnline.</p>
                </div>
            </div>
        </div>
    );
};

export default Go;
