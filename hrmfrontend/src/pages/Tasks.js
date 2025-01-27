import React, { useState, useEffect } from "react";
import axios from "axios";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/tasks/")
            .then((response) => setTasks(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Task Management</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.name} - {task.assigned_to}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
