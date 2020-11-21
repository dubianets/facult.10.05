import React, {useState} from 'react';
import Colum from "./Colum";
import 'bootstrap/dist/css/bootstrap.css'

const taskArray = [
    {id: Math.random(), name: 'First task', status: 'toDo'},
    {id: Math.random(), name: 'Five task', status: 'toDo'},
    {id: Math.random(), name: 'Second task', status: 'progress'},
    {id: Math.random(), name: 'Second task', status: 'progress'},
    {id: Math.random(), name: 'Third task', status: 'review'},
    {id: Math.random(), name: 'Fourth task', status: 'done'},
    {id: Math.random(), name: 'First task', status: 'done'},
    {id: Math.random(), name: 'Second task', status: 'todo'},
    {id: Math.random(), name: 'First task', status: 'done'},
    {id: Math.random(), name: 'Third task', status: 'done'}
]

const columnArray = [
    {id: Math.random(), title: 'To Do', status: 'toDo'},
    {id: Math.random(), title: 'Progress', status: 'progress'},
    {id: Math.random(), title: 'Review', status: 'review'},
    {id: Math.random(), title: 'Done', status: 'done'},
   ]

const statuses = ['toDo','progress', 'review', 'done'];

function App() {

    const [tasks, setTask] = useState(taskArray);

const changeTaskStatus = (taskId, direction) => {
    const newTask = tasks.map(el => {
        if(el.id === taskId){
            if(direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1];
            if(direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1];
        }
        return el;
    })
    setTask(newTask);
}

console.log("tasks", tasks);
    return (
        <div className="container">

            <div className="row">

                {columnArray.map(el =>
                    <Colum
                        colum={el}
                        tasks={tasks}
                        changeTaskStatus={changeTaskStatus}
                    />
                )}

            </div>

        </div>
    );
}

export default App;
