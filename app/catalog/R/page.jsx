import React from 'react';

const RLanguage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>R Programming Language Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Analyze and visualize data using R programming language with our R course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/r.jpeg" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Analyze and visualize data using R programming language with our R course. R is a powerful and widely-used programming language and software environment for statistical computing and graphics. Whether you're a beginner looking to learn the fundamentals of data analysis or an experienced data scientist seeking to enhance your skills, this course covers everything you need to know to become proficient in R. From basic data types and operations to advanced topics like data manipulation, visualization, and statistical modeling, you'll gain a comprehensive understanding of R and how to use it to explore and analyze data effectively.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to R programming language<br/>
                        • Basic data types and operations<br/>
                        • Data structures: vectors, matrices, data frames<br/>
                        • Data manipulation with dplyr and tidyr<br/>
                        • Data visualization with ggplot2<br/>
                        • Statistical analysis and modeling<br/>
                        • Importing and exporting data<br/>
                        • R Markdown for reproducible research<br/>
                        • Advanced topics: machine learning, time series analysis, etc.<br/><br/>

                        <b>Prerequisites:</b> No prior programming experience is required, but familiarity with basic concepts of statistics and data analysis will be helpful. This course is suitable for beginners as well as intermediate learners looking to enhance their data analysis skills with R.<br/><br/>

                        <b>Duration:</b> The course is self-paced and can be completed in approximately [X weeks/months]. Each module includes video lectures, coding exercises, quizzes, and projects to reinforce learning.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Rs.200/-</h2>
                    <button style={{ backgroundColor: '#1E40AF', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'background-color 0.3s ease-in-out', marginBottom: '1rem' }}>BUY</button>
                    <p style={{ color: '#4B5563', marginBottom: '1rem' }}>Created by DataCamp.</p>
                </div>
            </div>
        </div>
    );
};

export default RLanguage;
