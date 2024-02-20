import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Currency from './components/Currency'

function App() {
  const [currency,setCurrency]=useState();

  const apiURL=`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_iZw1FXhqg84GtVu6DeKhyYerTGvPFpQMI16zYQPH&currencies=INR`;
  useEffect (()=>{
    fetch(apiURL)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Error");
      }
       return response.json();
    })
    .then((data)=>{
      console.log(data);
      setCurrency(data);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])
  
  return (
    <>
      <Navbar/>
      <Currency
      stats={{
        INR: currency?.data.INR
      }}
      />
    </>
  )
}

export default App
