import React from 'react';

const SQL = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>SQL Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Manage and query relational databases with SQL with our SQL course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/sql.png" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Manage and query relational databases with SQL with our SQL course. SQL (Structured Query Language) is a standard language for managing and querying data in relational database management systems (RDBMS). Whether you're a beginner looking to learn the fundamentals of database management or an experienced developer seeking to enhance your SQL skills, this course covers everything you need to know to become proficient in SQL. From basic SQL commands like SELECT, INSERT, UPDATE, and DELETE to advanced topics like joins, subqueries, transactions, and stored procedures, you'll gain a comprehensive understanding of SQL and how to use it to manipulate and analyze data effectively.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to relational databases and SQL<br/>
                        • SQL syntax and data types<br/>
                        • Database creation and management<br/>
                        • Retrieving data with SELECT statement<br/>
                        • Filtering and sorting data<br/>
                        • Modifying data with INSERT, UPDATE, and DELETE statements<br/>
                        • Joins and subqueries<br/>
                        • Indexes and constraints<br/>
                        • Transactions and concurrency control<br/>
                        • Stored procedures and functions<br/><br/>

                        <b>Prerequisites:</b> No prior knowledge of SQL is required. This course is suitable for beginners as well as intermediate learners looking to enhance their database management skills with SQL.<br/><br/>

                        <b>Duration:</b> The course is self-paced and can be completed in approximately [X weeks/months]. Each module includes video lectures, coding exercises, quizzes, and projects to reinforce learning.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Rs.200/-</h2>
                    <button style={{ backgroundColor: '#1E40AF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginBottom: '1rem' }}>BUY</button>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Created by Programming with Mosh.</p>
                </div>
            </div>
        </div>
    );
};

export default SQL;
