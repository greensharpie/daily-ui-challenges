import React from 'react';
import { Button } from './components/Button';
import { TextInput } from './components/TextInput';
import { CheckBox } from './components/Checkbox';

const App = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        {/* Left: Form Elements */}
        <div className="left-section">
          <div className="sign-up-container">
            <span className="main-heading">Sign up</span>
            <span className="sub-heading">Welcome to Daily-UI - Let's create an account</span>
            <div>
            <Button title="Log in with Google" onClick={() => console.log("Logging in with Google")} />
            <Button title="Log in with Apple" onClick={() => console.log("Logging in with Apple")} />
            </div>
          </div>

          <div className="user-info-textinput-container">
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
        <div className="right-section"></div>
      </div>
    </div>
  );
};

export default App;
