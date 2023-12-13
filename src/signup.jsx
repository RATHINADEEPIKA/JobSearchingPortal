// import React, { useState } from 'react';
// import './signup.css'
// import axios from 'axios';
// import { Link,useNavigate} from 'react-router-dom';


// const Signup = () => 
// {
//   const styles = 
//   {
//     form: 
//     {
//       display: 'flex',
//       flexDirection: 'column',
//       width: '350px',
//       height :'650px',
//       padding: '20px',
//       borderRadius: '4px',
//       borderRadius:'25px'
//     },
//     error: 
//     {
//       color: 'red',
//       marginBottom: '10px',
//       fontSize: '14px',
//       textAlign: 'center',
//       fontStyle: 'italic',
//       fontWeight: 'bold',
//       backgroundColor: '#FBE3E4',
//       padding: '8px',
//       borderRadius: '4px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//     },
//   };
  
//   const navigate=useNavigate('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');


//   const[isSubmit,setIsSubmit]=useState(false);

//   const handleSubmit=async(event)=>
//   {
//     event.preventDefault();


    
  
//       setIsSubmit(true);
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
//         name:username,
//         email:email,
//         password:password
  
//       });
//       console.log(response.status);
//       if(response.status===200)
//       {
//         setUsername("");
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         navigate("/");
//       }
      
//     }
//     catch(error){
//       alert(error);
//       setIsSubmit(false);
  
//     }
  
//     if(isSubmit){
//       navigate("/");
//     }
//   };

//   return (
//     <div style={styles.container} className='signmain'>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <center>
//         <h2 style={styles.title}>Signup</h2>
        
        
            
//         {error && <div style={styles.error}>{error}</div>} 
//         <div>
//           <input
//             style={{height:'45px',width:'250px'}} 
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
        
//         <div>
//           <input
//             style={{height:'45px',width:'250px'}} 
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <br></br>

//         <div>
//           <input
//             style={{height:'45px',width:'250px',border:'1px solid #ccc'}} 
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <br></br>

//         <div>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             style={{height:'45px',width:'250px' ,border:'1px solid #ccc'}} 
//             required
//           />
//         </div>

//         <br></br>
        
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <button style={{width: '30%',
//     padding: '10px',
//     fontSize: '16px',
//     color:'black',
//     backgroundColor:'#4CAF50',
//     border:'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     }}
//     type="submit">Sign Up</button>
//         </div>
        
        
        
//         <p><Link to="/"> Already have an account? Login</Link></p>

//         </center>   
//       </form>
//     </div>
//   );
// };

// export default Signup;