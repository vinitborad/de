import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online University</title>
        <link rel="stylesheet" href="front.css" />
      </Head>

      <header className="bg-gray-800 text-white py-5">
        <h1 className="text-3xl text-center">Welcome to Online University</h1>
        <nav>
          <ul className="flex justify-center mt-5">
            <li className="mx-3">
              <a href="http://localhost:3000/login" className="text-white hover:text-gray-200" >
                Login
              </a>
            </li>
            <li className="mx-3">
              <a href="http://localhost:3000/signup" className="text-white hover:text-gray-200">
                Signup
              </a>
            </li>
            <li className="mx-3">
              <a href="http://localhost:3000/courses" className="text-white hover:text-gray-200">
                Courses
              </a>
            </li>
            <li className="mx-3">
              <a href="http://localhost:3000/contact" className="text-white hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section id="programs" className="my-8">
          <h2 className="text-4xl font-bold text-blue-700">Our Programs</h2>
          <p className="text-xl font-bold text-black">we have video lectures, assignments, notes for each topic, and many more things here</p>
        </section>

        <section id="coding" className="my-8">
          <h2 className="text-4xl font-bold text-blue-700">Empower Your Future with Coding Skills</h2>
          <p className="text-xl font-bold text-black">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
          <p className="text-xl font-bold text-black">Unlock your coding potential with our online courses.</p>
          <p className="text-xl font-bold text-black">Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
        </section>

        <section id="instructors" className="my-8">
          <h2 className="text-4xl font-bold text-blue-700">Become an instructor</h2>
          <p className="text-xl font-bold text-black">Instructors from around the world teach millions of students on our platform. We provide the tools and skills to teach what you love.</p>
        </section>

        <section id="about" className="my-8">
          <h2 className="text-4xl font-bold text-blue-700">About Us</h2>
          <p className="text-xl font-bold text-black">We are giving very cost-efficient courses to the students here so that you can study much more better!!!</p>
        </section>
      </main>
    </div>
  );
}
