import React from "react";

export default function Input({label, textArea, ...props}) {

  return (
    <div className="pb-3">
        <p>
        <label className="font-medium">{label}:</label>
        <br />
        {!textArea ?

        <input className="w-full h-9" {...props} /> :
        <textarea className="w-full h-20"{...props} />

        }
        </p>
    </div>
  );
};