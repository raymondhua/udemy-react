import React from "react";

export default function Input({label, textArea, ...props}) {

  return (
    <div>
        <p>
        <label>{label}</label>
        <br />
        {!textArea ?

        <input className="w-full" {...props} /> :
        <textarea className="w-full"{...props} />

        }
        </p>
    </div>
  );
};