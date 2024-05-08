import React, { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha({onReCAPTCHAChange}) {
  
  const recaptchaRef = useRef();
  return (    
              <ReCAPTCHA
                ref={recaptchaRef}
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              /> 
  
);
} 

