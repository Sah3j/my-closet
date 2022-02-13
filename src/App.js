import React, { useEffect } from 'react';
import './App.css';
import Profile from './Profile';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open,setOpen] = React.useState(false);
  const [username,setUsername] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [user, setUser] = React.useState(null);
  const [currentLoggedInUser, setCurrentLoggedInUser] = React.useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setCurrentLoggedInUser = currentUser;
  })

  const signUp = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {

  };
  
  const logout = async () => {

  };

  return (
    <div className="app">

      <Modal
        open={open}
        onClose={()=>setOpen(false)}
      >
        <Box sx={style}>
          <form className="app__signUp">
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signUp}>Sign Up</Button>
          </form>
        </Box>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="/logo.png"
          alt="header logo"
        />

        <Button onClick={()=>setOpen(true)}>Login</Button>
      </div>

      {/*Profile*/}
      <Profile profileName="Sahejdeep Singh" profilePic="/profile-pic.png"/>

    </div>
  );
}

export default App;
