import React, {useRef, forwardRef, useState} from "react";

const Input = forwardRef(function Input({label, textArea, valid, ...props}, ref) {
  return (

    <div className="pb-3">
        <label className="font-medium">{label}:</label>
        <br />
        {!textArea ?
          <input className="w-full h-9 " {...props} ref={ref}/> :
          <textarea className="w-full h-20" {...props} ref={ref}/>
        }
        {!valid && <p className="text-pink-600 text-xs">Please enter a valid {label.toLowerCase()}!</p>}
    </div>
  );
});

export default Input;