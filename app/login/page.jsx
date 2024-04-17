import Head from 'next/head';
import './index.css'

export default function StudentLogin() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <div className="login-container">
        <h1 className=' font-bold text-centerd' >Login</h1>
        <form action="login.php" method="post">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          <p>already have account?
          <a href='signup'><b>signup</b></a>
          </p>
        </form>
      </div>
    </div>
  );
}
