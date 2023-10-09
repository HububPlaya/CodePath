import React,{useState} from 'react';
import APIForm from '../components/APIForm';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const App = () => {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: ""
  })
  return (
    <></>
  )
}