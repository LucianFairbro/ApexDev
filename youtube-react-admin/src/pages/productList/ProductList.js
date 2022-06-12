import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FormatAlignCenter, SpaceBar } from '@material-ui/icons';
import { Tab } from '@material-ui/core';
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkyzkpe");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    
    
<div style={{width:"100%"}}>
  <div style={{color:'white', fontSize:'60px', textAlign:"center", paddingTop:"10px"}}> Contact Us</div>

    <div >
     
      <form onSubmit={handleSubmit} style={{alignSelf:"center", backgroundColor:"white", width:"100%", alignItems:"center", paddingLeft:"20%"}}>
      <div style={{paddingLeft:'10%',paddingTop:'2%'}}>
      <label htmlFor="email" styles={{color:"white"}}>
        Email Address:  
      </label>
      <Tab></Tab>
      <input
        id="email"
        type="email" 
        name="email"
      />
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <div style={{paddingTop:'1%',paddingLeft:'10%'}}>
         Enter Message: 
         <Tab></Tab>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <Tab></Tab>
      <button class='btn' type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
   
    </form>
    </div>
    </div>
  );
}
function ProductList() {
  return (
    <ContactForm />
  );
}
export default ProductList;
