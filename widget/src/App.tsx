import React, {useEffect, useState} from 'react';
import './App.css';
import {ShowPopupOptions, SolOptions} from "./lib/types";
import Popup from "./lib/components/popup";

declare global {
  interface Window {
    popup: any; // Change 'any' to the actual type if you know it
  }
}

type Message = { action: "popup:options" | "popup:data", data: ShowPopupOptions, options: SolOptions };

function App() {
  const [show, setShow] = useState(false);
  const [openOptions, setOpenOptions] = useState<ShowPopupOptions>({fiat: "EUR"})
  const [options, setOptions] = useState<SolOptions>({recipient: "ACbrEQAUrXnMmbb4Logyozwbn6kNySvSBgxsSFQqTLVZ", business: "1697412246245"})

  useEffect(() => {
    // window.postMessage({"data": {amount: "5", customer_email: "bose@mailinator.com", fiat: "EUR"}, action: "popup:data"})
    const listener = (event: MessageEvent<Message>) => {
      const data = event.data;
      if (data?.action === "popup:options") {
        setOptions(data.options)
      }
      if (data?.action === "popup:data") {
        setOpenOptions(data.data)
        setShow(true);
      }

    };

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener)
    }
  }, [])
  return (
    <Popup {...options} show={show} handleClose={() => {
      setShow(false)
    }} {...openOptions} />
  );
}

export default App;
