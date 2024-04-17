import React from 'react';

const PHP = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>PHP Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Create dynamic websites and web applications with PHP using our PHP course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/php.png" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Create dynamic websites and web applications with PHP using our PHP course. PHP is a widely-used server-side scripting language known for its simplicity, versatility, and compatibility with various databases and web servers. Whether you're a beginner looking to learn the fundamentals of web development or an experienced developer seeking to master PHP, this course covers everything you need to know to become proficient in PHP. From basic syntax and data types to advanced topics like database integration, session management, and security best practices, you'll gain a comprehensive understanding of PHP and how to use it to build powerful and scalable web solutions.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to PHP and server-side scripting<br/>
                        • Basic syntax and data types<br/>
                        • Control structures: if-else, loops<br/>
                        • Functions and arrays<br/>
                        • Form handling and validation<br/>
                        • Database integration with MySQL<br/>
                        • Session management and cookies<br/>
                        • File handling and manipulation<br/>
                        • Security best practices<br/>
                        • Introduction to PHP frameworks like Laravel or Symfony<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of HTML, CSS, and JavaScript is recommended. This course is suitable for beginners as well as intermediate learners looking to enhance their web development skills with PHP.<br/><br/>

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

export default PHP;
