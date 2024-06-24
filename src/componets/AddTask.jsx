import React, { useEffect, useState } from 'react';
import ListTask from './ListTask';

function AddTask() {
    const [value, setValue] = useState("");
    const [itemArray, setItemArray] = useState([]);

    // Update document title on itemArray change
    useEffect(() => {
        document.title = `Todo List: ${itemArray.length}`;
    }, [itemArray]);

    // Function to handle form submission
    const addValue = (e) => {
        e.preventDefault();
        const trimmedValue = value.trim();
        if (trimmedValue === "") return; // Prevent adding empty tasks

        const newArray = [...itemArray, trimmedValue];
        setItemArray(newArray);
        setValue("");
    };

    return (
        <div className="container">
            <form className="new-item-form" onSubmit={addValue}>
                <div className="form-row">
                    <label htmlFor="input-box">New Task</label>
                    <input
                        type="text"
                        id="input-box"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter task..."
                        required
                    />
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </div>
            </form>
            <ListTask itemArray={itemArray} setItemArray={setItemArray} />
        </div>
    );
}

export default AddTask;
