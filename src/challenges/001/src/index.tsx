import React from 'react';
import { Button } from './components/Button';
import { TextInput } from './components/TextInput';
import { CheckBox } from './components/Checkbox';
import  styles from './styles/Challenge001.module.css'

const App = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formContent}>
        {/* Left: Form Elements */}
        <div className={styles.leftSection}>
          <div className={styles.signUpContainer}>
            <span className={styles.mainHeading}>Sign up</span>
            <span className={styles.subHeading}>Welcome to Daily-UI - Let's create an account</span>
            <div>
            <Button title="Log in with Google" onClick={() => console.log("Logging in with Google")} />
            <Button title="Log in with Apple" onClick={() => console.log("Logging in with Apple")} />
            </div>
          </div>

          <div className={styles.userInfoTextinputContainer}>
            <TextInput name="name" label="Name" placeholder="John Doe" />
            <TextInput name="e-mail" label="E-mail" placeholder="jdoe@gmail.com" />
            <TextInput name="password" label="Password" type='password' />
            <CheckBox
              label="privacy-agreement"
              title="I agree to the Privacy&Policy"
              onChange={() => console.log("Agreed to Privacy&Policy")}
            />
          </div>
        </div>

        {/* Right: Image Section */}
        <div className={styles.rightSection}></div>
      </div>
    </div>
  );
};

export default App;
