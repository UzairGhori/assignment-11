'use client'
import { useState } from "react";
import ParentComponent from "./Parent/page";

export default function Home() {
const [fullName,setfullname] =useState("Abdul Uzair");
const [Age,setAge] = useState(23);
const [Gender,setGender] = useState("Male");
const [City,setCity] = useState("Karachi");
const [State,setState] = useState("Sindh");
const [Country,setCountry] = useState("Pakistan");


  const handleChange = () => {
    setfullname(fullName);
    setAge(Age);
    setGender(Gender);
    setCity(City);
    setState(State);
    setCountry(Country);  
    console.log(fullName, Age, Gender, City, State, Country); 
    
  };

  return (
    <div >
       <h1 className="text-5xl text-white mx-48 mt-20 font-semibold  justify-center items-center">Well to Assignment 11 </h1>
       <br />

       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white w-4/6 h-96 ml-40 p-5 space-x-2 justify-center items-center">
       
        <div className="bg-orange-500 w-40 h-28 "></div>
        <div className="bg-blue-500 w-40 h-28 "></div>
        <div className="bg-green-500 w-40 h-28 "></div>
        <div className="bg-yellow-500 w-40 h-28 "></div>
    
       </div>
      <div className=" bg-slate-400 justify-center items-center p-5 m-40 border-white border-2 ">

     
      <br />
      <h2 className="text-2xl text-black font-serif justify-center">Hello, {fullName}</h2>
      <br />
      <p className="text-2xl text-black font-serif justify-center">Your age is {Age} and you are a {Gender}. You live in {City}, {State}, {Country}.</p>

      </div>

      <div>

      <ParentComponent />
      </div>

    </div>
  );
}
