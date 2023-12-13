import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInSide from './SignInSide';
import Landingpage from './Landingpage';

function App() {
  // Create a state to store the username
  const [username, setUsername] = React.useState('');

  return (
    <Router>
      {/* Route for the Sign In page */}
      <Route path="/login" render={(props) => <SignInSide setUsername={setUsername} {...props} />} />
      {/* Route for the Landing page */}
      <Route path="/" render={(props) => <Landingpage username={username} {...props} />} />
    </Router>
  );
}

export default App;
