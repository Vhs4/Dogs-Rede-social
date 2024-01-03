import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to="/my-account" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={ <LoginForm /> }/>
          <Route path="create-account" element={ <LoginCreate /> }/>
          <Route path="forgot-password" element={ <LoginPasswordLost /> }/>
          <Route path="reset-password" element={ <LoginPasswordReset /> }/>
        </Routes>
      </div>
    </section>
  )
}

export default Login