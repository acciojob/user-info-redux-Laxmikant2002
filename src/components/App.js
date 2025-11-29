
import React from "react";
import { connect } from "react-redux";
import { updateName, updateEmail } from "../redux/actions";
import './../styles/App.css';

const App = ({ name, email, updateName, updateEmail }) => {
  
  const handleNameChange = (e) => {
    updateName(e.target.value);
  };

  const handleEmailChange = (e) => {
    updateEmail(e.target.value);
  };

  return (
    <div className="container">
      <h1>User Information</h1>
      
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Some Name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          placeholder="some@a"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      
      <h3>Current values in store:</h3>
      
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email
});

// Map dispatch to props
const mapDispatchToProps = {
  updateName,
  updateEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
