//IMPORTACIONES DE REACT:
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//FIREBASE:
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFrzPMGaJsm8Egy0-TmNpz9zByPq_puQg",
  authDomain: "entregafinal-react-trendy.firebaseapp.com",
  projectId: "entregafinal-react-trendy",
  storageBucket: "entregafinal-react-trendy.appspot.com",
  messagingSenderId: "557343218417",
  appId: "1:557343218417:web:53fe83632f4f3bcbece750",
  measurementId: "G-D5RSTXC5LT"
};

 initializeApp(firebaseConfig);

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
