import React, { useState, useRef } from "react";
import Input from "./UI/Input"
export default function NewProject({...props}) {
    const [titleValid, setTitleValid] = useState(true);
    const [descriptionValid, setDescriptionValid] = useState(true);
    const [dueDateValid, setDueDateValid] = useState(true);
    const [userInput, setUserInput] = useState({
        title: useRef(null),
        description: useRef(null),
        dueDate: useRef(null),
    });

    const submittedData = () => {
      var enteredData = {};
        for (const input in userInput) {
            if (input === inputIdentifier) {
                enteredData[input] = userInput[input].current.value;
                userInput[input].current.value = '';
            }
        }
      return enteredData;
    };

    const addGoalHandler = enteredText => {
      setCourseGoals(prevGoals => {
        const updatedGoals = [...prevGoals];
        updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
        return updatedGoals;
      });
    };

    const formSubmitHandler = event => {
        setTitleValid(true);
        setDescriptionValid(true);
        setDueDateValid(true);
        const titleInput = userInput.title.current.value;
        const descriptionInput = userInput.description.current.value;
        const dueDateInput = userInput.dueDate.current.value;
        event.preventDefault();
        if(titleInput.trim().length === 0){
          setTitleValid(false);
        }
        if(descriptionInput.trim().length === 0){
          setDescriptionValid(false);
        }
        if(dueDateInput.trim().length === 0){
          setDueDateValid(false);
        }
        if (!titleValid || !descriptionValid || dueDateValid) {
          return;
        }
        const submittedProject = {title: titleInput, description: descriptionInput, dueDate: dueDateInput};
        props.onAddProject(submittedProject);
    };

    return <form className="w-1/2 px-8 py-40" onSubmit={formSubmitHandler}>
        <menu className="flex items-stretch place-content-end">
            <li><button className="px-4 py-2 text-xs md:text-base rounded-md hover:text-stone-500">Cancel</button></li>
            <li><button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Save</button></li>
        </menu>
    
        <Input
            type="text"
            label="Title"
            ref={userInput.title}
            valid={titleValid} />
        <Input
            type="text"
            label="Description"
            ref={userInput.description}
            valid={descriptionValid}
            textArea />
        <Input
            type="date"
            label="Due Date"
            valid={dueDateValid}
            ref={userInput.dueDate}
          />
    </form>
}