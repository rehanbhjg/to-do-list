import { useState } from "react";

export default function ShowTask({ taskList, setTaskList, setTask }) {
  const [search, setSearch] = useState("");

  const toggleComplete = (id) => {
    setTaskList(taskList.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const filteredTasks = taskList.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="showTask">
      <div className="head">
        <div className="stats">
          <span className="title">Progress</span>
          <span className="count">{taskList.filter(t => t.completed).length} / {taskList.length}</span>
        </div>
        
        <div className="searchBar">
          <i className="bi bi-search"></i>
          <input 
            type="text" 
            placeholder="Search tasks..." 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>

        <button className="clearAll" onClick={() => window.confirm("Clear all?") && setTaskList([])}>
          Clear All
        </button>
      </div>

      <ul>
        {filteredTasks.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="taskContent" onClick={() => toggleComplete(todo.id)}>
              <i className={todo.completed ? "bi bi-check-circle-fill" : "bi bi-circle"}></i>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
            </div>
            <div className="actions">
              <i onClick={() => { setTask(todo); window.scrollTo(0,0); }} className="bi bi-pencil-square edit"></i>
              <i onClick={() => setTaskList(taskList.filter(t => t.id !== todo.id))} className="bi bi-trash delete"></i>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}