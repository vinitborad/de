import React from 'react';

const Swift = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>Swift Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Build native iOS and macOS applications with Swift with our Swift course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/swift.jpeg" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Build native iOS and macOS applications with Swift with our Swift course. Swift is a powerful and intuitive programming language developed by Apple for building apps for iOS, macOS, watchOS, and tvOS. Whether you're a beginner looking to learn app development or an experienced developer seeking to master Swift, this course covers everything you need to know to become proficient in Swift. From basic syntax and data types to advanced topics like optionals, protocols, generics, and SwiftUI, you'll gain a comprehensive understanding of Swift and how to use it to create beautiful and functional apps for Apple platforms.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to Swift programming language<br/>
                        • Swift syntax and data types<br/>
                        • Control flow statements: if-else, switch<br/>
                        • Optionals and error handling<br/>
                        • Collections: arrays, dictionaries, sets<br/>
                        • Functions and closures<br/>
                        • Object-oriented programming with Swift<br/>
                        • Protocols and generics<br/>
                        • Concurrency and multithreading<br/>
                        • Introduction to SwiftUI for building user interfaces<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of programming concepts is recommended. This course is suitable for beginners as well as intermediate learners looking to develop iOS and macOS applications with Swift.<br/><br/>

                        <b>Duration:</b> The course is self-paced and can be completed in approximately [X weeks/months]. Each module includes video lectures, coding exercises, quizzes, and projects to reinforce learning.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Rs.200/-</h2>
                    <button style={{ backgroundColor: '#1E40AF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginBottom: '1rem' }}>BUY</button>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Created by CodeWithChris.</p>
                </div>
            </div>
        </div>
    );
};

export default Swift;
