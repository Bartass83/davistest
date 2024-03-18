import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import './App.css';
import {
  withAuthenticator,
  Button,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Davis Tinder!</h1>
        <Button onClick={signOut}>Sign Out</Button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);