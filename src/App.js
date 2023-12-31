import React, {useState} from 'react';
import ContractGenerator from './ContractGenerator';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

function handleLoginButton () {
  if (!loggedIn) {
    setLoggedIn(true)
    return <ContractGenerator />
  } setLoggedIn (false)
};

  if (!loggedIn) {
    return <>
      <button className='btn-primary' onClick={handleLoginButton}>Login</button>
    </>
  } return (<>
      <button className='btn-primary' onClick={handleLoginButton}>Logout</button>
      <div className="app-front">
      <ContractGenerator />
    </div>
    </>);
}

export default App;
