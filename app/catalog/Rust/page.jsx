import React from 'react';

const Rust = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>Rust Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Write fast and safe system software with Rust with our Rust course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/rust.png" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Write fast and safe system software with Rust with our Rust course. Rust is a modern systems programming language known for its performance, reliability, and memory safety guarantees. Whether you're a beginner looking to learn the fundamentals of systems programming or an experienced developer seeking to explore Rust's unique features, this course covers everything you need to know to become proficient in Rust. From basic syntax and data types to advanced topics like concurrency, error handling, and macros, you'll gain a comprehensive understanding of Rust and how to use it to build robust and efficient software.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to Rust programming language<br/>
                        • Ownership, borrowing, and lifetimes<br/>
                        • Control flow and data structures<br/>
                        • Functions and modules<br/>
                        • Error handling with Result and Option types<br/>
                        • Concurrency with threads and message passing<br/>
                        • Trait-based generics and polymorphism<br/>
                        • Unsafe Rust and FFI (Foreign Function Interface)<br/>
                        • Testing and documentation<br/>
                        • Macros and metaprogramming<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of programming concepts is recommended. This course is suitable for beginners as well as intermediate learners looking to explore systems programming with Rust.<br/><br/>

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

export default Rust;
