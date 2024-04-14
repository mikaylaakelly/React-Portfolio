import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatedEmail(formData.email)) {
        alert('Oops! Please double check to ensure email is valid!');
        return
    }
   
    console.log(formData);
  
    setFormData({
      name: '',
      email: '',
      question: ''
    });
  };

  const validatedEmail = (email) => {
    const emailCharacters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailCharacters.test(email)
  }

  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;

// import { useState } from 'react';
// import './ContactMe.css';
// import { checkPassword, validateEmail } from './helpers';

// function Form() {
//   const [email, setEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'userName') {
//       setUserName(inputValue);
//     } else {
//       setPassword(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email) || !userName) {
//       setErrorMessage('Email or username is invalid');
//       return;
//     }
//     if (!checkPassword(password)) {
//       setErrorMessage(
//         `Choose a more secure password for the account: ${userName}`
//       );
//       return;
//     }
//     alert(`Hello ${userName}`);

//     setUserName('');
//     setPassword('');
//     setEmail('');
//   };

//   return (
//     <div className="container text-center">
//       <h1>Hello {userName}</h1>
//       <form className="form" onSubmit={handleFormSubmit}>
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="Email"
//         />
//         <input
//           value={userName}
//           name="userName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Username"
//         />
//         <input
//           value={password}
//           name="password"
//           onChange={handleInputChange}
//           type="password"
//           placeholder="Password"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;