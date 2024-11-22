import React,{ useState } from 'react';
import Student from './Student';
import Dataget from './Dataget';
import Hideshow from './HIdeshow';
import Formdata from './Formdata';
import Profile from './Profile';
import Login from './Login';
import Mapfunctions from './Mapfunctions';

export default function Home() {
    const [data, setData] = useState(0)
  function apple() {
    setData(data + 1)
  }
  console.log("_______");
  return (
    <>
     <h1>{data}</h1>
      <Student name="Sidhu" email="test@gmail.com" />
      <button onClick={apple}>Click me</button>
      <Dataget />
      <Hideshow />
      <Formdata />
      <Profile />
      <Login />
      <Mapfunctions />
    </>
  )
}
