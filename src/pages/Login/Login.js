import React from 'react'
import Button from '../../components/Button'
import Cardboard from '../../components/Cardboard'
import Input from '../../components/Input'
import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 style={{justifySelf:'bottom'}}>E-COMMERCE</h1>
      </div>
      <Cardboard style={{backgroundColor:'#687478'}}>
        <h1>Login</h1>
        <Input/>
        <Input/>
        <Button/>
      </Cardboard>
        <div className={styles.down}>down</div>
    </div>
  )
}

export default Login