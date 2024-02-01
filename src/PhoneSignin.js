import React from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './Phone.css'

function PhoneSignin() {
  return (
    <div className="phone-signin">
      <PhoneInput
        country={'us'}
        inputStyle={{ width: '100%',}} 
      />
    </div>
  );
}

export default PhoneSignin;
