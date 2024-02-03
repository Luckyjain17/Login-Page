import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppleIcon from '@mui/icons-material/Apple';
import { Button } from '@mui/material';
import google from "../logo/google.webp";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
  };

  const blueHalfStyle = {
    flex: 1,
    backgroundColor: '#7866fa',
    position: 'relative',
  };

  const skewedBackground = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '200%',
    backgroundColor: '#7866fa',
    transform: 'skewX(-12deg)',
  };

  const centeredTextContainer = {
    position: 'absolute',
    fontSize: '50px',
    fontWeight: 'bold',
    top: '20%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
  };

  const iconContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const normalHalfStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    right: "100px",
  };


  const signInText = {
    fontSize: '35px',
    fontWeight: 'bold',
  };

  const signInSubtitle = {
    fontSize: '15px',
    position: "relative",
    left: "20px",
  };

  const signInGoogle = {
    fontSize: '13px',
    position: "relative",
    left: "140px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffafa",
    borderRadius: '5px',
    padding: "5px",
    margin: "40px",
    marginLeft: "10px",
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    color: "#696865"
  };
  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0',
    backgroundColor: "#fffafa",
    padding: "50px 70px 50px 60px",
    position: "relative",
    left: "130px",
    borderRadius: '15px',
    width: "240px"
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    paddingBottom: "15px"
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    backgroundColor: "#e9ecf0",
    marginBottom: "10px"
  };
  const logoStyle = {
    width: '45px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  };
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Redirect to the Home page
    navigate('/home');
  };
  return (
    <div style={containerStyle}>
      <div style={blueHalfStyle}>
        <div style={skewedBackground}>
          <div style={centeredTextContainer}>BASE</div>
          <div style={iconContainer}>
            <GitHubIcon style={{ fontSize: '40px', marginRight: '40px' }} />
            <TwitterIcon style={{ fontSize: '40px', marginRight: '40px' }} />
            <LinkedInIcon style={{ fontSize: '40px', marginRight: '40px' }} />
          </div>
        </div>
      </div>

      <div style={normalHalfStyle}>
        <div style={signInText}>Sign In</div>
        <span style={signInSubtitle}>Sign in to your account</span>
        <div style={{ display: "flex" }}>
          <div style={signInGoogle}><img src={google} alt="Google Logo" style={logoStyle} /><span>Sign in with google</span></div>
          <div style={signInGoogle}><AppleIcon style={{ marginRight: "5px" }} /><span>Sign in with apple</span></div>
        </div>
        <div style={inputContainerStyle}>
          <div style={labelStyle}>Email address</div>
          <input style={inputStyle} type='email' />
          <div style={labelStyle}>Password</div>
          <input style={inputStyle} type='password' />
          <div style={{ color: "#1182f2", marginBottom: "15px" }}>Forgot Password?</div>
          <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
