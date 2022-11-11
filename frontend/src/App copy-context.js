import "./App.css";
import { useContext } from "react";
import Calendar from "./components/Calender";
import EthContext from "./contexts/eth-context";

function App() {
  const ethCtx = useContext(EthContext);

  const buttonHandler = async () => {
    try {
      ethCtx.connectWallet();
      console.log("ethCtx.accounts");
      console.log(ethCtx.accounts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calend3</h1>
        {!ethCtx.accounts && (
          <div>
            <button className="button" onClick={buttonHandler}>
              Connect
            </button>
          </div>
        )}
        {ethCtx.accounts && <p>Show the Calender</p>}

        <p>Connect with MetaMask</p>
        <Calendar account={ethCtx.accounts} />
      </header>
    </div>
  );
}

export default App;
