import React, { useState, useRef } from "react";
import Input from "./UI/Input"
export default function NewProject({...props}) {
    const [isValid, setIsValid] = useState(true);
    // const title = useRef(null);
    // const description = useRef(null);
    // const dueDate = useRef(null);
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
        const titleInput = userInput.title.current.value;
        const descriptionInput = userInput.description.current.value;
        const dueDateInput = userInput.dueDate.current.value;
        event.preventDefault();
        if (titleInput.trim().length === 0 || descriptionInput.trim().length === 0 || dueDateInput.trim().length === 0) {
          setIsValid(false);
          return;
        }
        const submittedProject = {title: titleInput, description: descriptionInput, dueDate: dueDateInput};
        props.onAddProject(submittedProject);
        userInput.title.current.value = '';
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
          />
        <Input
            type="text"
            label="Description"
            ref={userInput.description}
            textArea />
        <Input
            type="date"
            label="Due Date"
            ref={userInput.dueDate}
          />
    </form>
}