import React, {useRef, forwardRef, useImperativeHandle} from "react";

const Input = forwardRef(function Input({label, textArea, ...props}, ref) {

  return (

    <div className="pb-3">
        <p>
        <label className="font-medium">{label}:</label>
        <br />
        {!textArea ?

        <input className="w-full h-9"  {...props} ref={ref}/> :
        <textarea className="w-full h-20" {...props} ref={ref}/>

        }
        </p>
    </div>
  );
});

export default Input;