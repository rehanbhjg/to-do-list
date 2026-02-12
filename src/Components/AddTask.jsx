export default function AddTask({ taskList, setTaskList, task, setTask }) {
  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const stamp = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;

    if (task.id) {
      const updated = taskList.map((t) =>
        t.id === task.id ? { ...t, name: task.name, time: stamp } : t
      );
      setTaskList(updated);
      setTask({});
    } else {
      const val = e.target.task.value.trim();
      if (!val) return;
      const newTask = { id: date.getTime(), name: val, time: stamp, completed: false };
      setTaskList([...taskList, newTask]);
      e.target.task.value = "";
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          name="task"
          autoComplete="off"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add Task"}</button>
      </form>
    </section>
  );
}