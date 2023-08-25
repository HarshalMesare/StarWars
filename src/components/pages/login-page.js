import React, { useState } from 'react';
import styles from './login-page.module.css';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    setLoggedIn(true);
    history.push('/home');
  };

  return (
    <div className={styles.loginPage}>
    {!loggedIn ? (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Login Here</h2>
          <button className={styles.loginButton} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    ) : (
      <div className={styles.homepage}>
        <h2>Welcome to the Homepage!</h2>
      </div>
    )}
  </div>
);
}

export default LoginPage;