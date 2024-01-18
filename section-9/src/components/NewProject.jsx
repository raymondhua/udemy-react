import React, { useState } from "react";
import Input from "./UI/Input"
export default function NewProject() {

    const [userInput, setUserInput] = useState({
        title: '',
        description: '',
        dueDate: '2024-01-01',
    });

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput(prevUserInput => {
          return {
            ...prevUserInput,
            [inputIdentifier]: newValue
          };
        })
    };

    return <form className="w-1/2 px-8 py-40" onSubmit={formSubmitHandler}>
        <menu className="flex items-stretch place-content-end">
            <li><button className="px-4 py-2 text-xs md:text-base rounded-md hover:text-stone-500">Cancel</button></li>
            <li><button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Save</button></li>
        </menu>
        <Input
            type="text"
            label="Title"
            onChange={(event) => handleChange('title', event.target.value)}
          />
        <Input
            type="text"
            label="Description"
            onChange={(event) => handleChange('description', event.target.value)}
            textArea />
        <Input
            type="date"
            label="Due Date"
            onChange={(event) => handleChange('dueDate', event.target.value)}
          />
    </form>
}