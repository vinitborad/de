import React from 'react';

const Kotlin = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <div className="space-x-4">
        <a href="/login" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</a>
        <a href="/signup" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Sign Up</a>
        <a href="/" className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md">Go to Home</a>
      </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}><b>Kotlin Course</b></h1>
            <p style={{ marginBottom: '2rem' }}>Develop modern Android applications with Kotlin with our Kotlin course.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ marginBottom: '2rem', marginRight: '2rem' }}>
                    <img src="/kotlin.jpeg" alt="image" style={{ width: '16rem', margin: 'auto', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <p style={{ color: '#374151', textAlign: 'left' }}>
                        <b>Description:</b> Develop modern Android applications with Kotlin with our Kotlin course. Kotlin is a statically-typed programming language that runs on the Java Virtual Machine (JVM) and is fully interoperable with Java. It is officially supported for Android development by Google and is known for its concise syntax, null safety, and interoperability with existing Java code. Whether you're a beginner looking to learn Android app development or an experienced developer seeking to transition to Kotlin, this course covers everything you need to know to become proficient in Kotlin for Android development. From basic syntax and data types to advanced topics like coroutines, Jetpack libraries, and building UI with Jetpack Compose, you'll gain a comprehensive understanding of Kotlin and how to use it to build modern, efficient, and user-friendly Android applications.
                        <br/>
                        <b>Topics Covered:</b><br/>
                        • Introduction to Kotlin programming language<br/>
                        • Kotlin syntax and basic data types<br/>
                        • Control flow statements: if-else, loops, when<br/>
                        • Functions and lambdas<br/>
                        • Object-oriented programming with Kotlin<br/>
                        • Null safety and smart casts<br/>
                        • Collections and functional programming<br/>
                        • Coroutines for asynchronous programming<br/>
                        • Android app development with Kotlin<br/>
                        • Jetpack libraries: Room, ViewModel, LiveData, etc.<br/>
                        • Building UI with Jetpack Compose<br/><br/>

                        <b>Prerequisites:</b> Basic understanding of programming concepts is recommended. This course is suitable for beginners as well as intermediate learners looking to enhance their Android development skills with Kotlin.<br/><br/>

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

export default Kotlin;
