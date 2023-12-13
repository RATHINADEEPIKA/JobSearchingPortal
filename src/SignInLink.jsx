// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
function SignInLink() {
    const history = useHistory();
  
    const handleSignInClick = () => {
      history.push('/Users/kalaivarshaa/Documents/reactjs/vite-project/src/signin.jsx'); 
    };
  
    return (
      <Link variant="body2" onClick={handleSignInClick}>
        Already have an account? Sign in
      </Link>
    );
  }
  
  export default SignInLink;
    