import "./App.css";
import detectEthereumProvider from "@metamask/detect-provider";
import { useEffect, useState } from "react";
import Calendar from "./components/Calender";

function App() {
  const [account, setAccount] = useState(false);
  useEffect(() => {
    isConnected();
  }, []);

  const isConnected = async () => {
    const provider = await detectEthereumProvider();
    const accounts = await provider.request({ method: "eth_accounts" });
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      console.log("No authorized account found");
    }
  };
  const buttonHandler = async () => {
    try {
      const provider = await detectEthereumProvider();
      // returns an array of accounts
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      // check if array at least one element
      if (accounts.length > 0) {
        console.log("account found", accounts);
        setAccount(accounts[0]);
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calend3</h1>
        {!account && (
          <div>
            <button className="button" onClick={buttonHandler}>
              Connect
            </button>
          </div>
        )}
        {account && <p>Show the Calender</p>}

        <p>Connect with MetaMask</p>
        <Calendar account={account} />
      </header>
    </div>
  );
}

export default App;
