import React, { useState } from "react";

const initialTasks = [
  { id: 1, title: "Configurar projeto no Emergent", done: true },
  { id: 2, title: "Conectar backend / banco de dados", done: false },
  { id: 3, title: "Publicar versão 1.0", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask.trim(), done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const done = tasks.filter((t) => t.done).length;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">⚡ Meu Sistema</div>
        <div className="nav-item active">Dashboard</div>
        <div className="nav-item">Tarefas</div>
        <div className="nav-item">Relatórios</div>
        <div className="nav-item">Configurações</div>
      </aside>

      <main className="main">
        <div className="topbar">
          <h1>Dashboard</h1>
          <button className="btn">+ Nova ação</button>
        </div>

        <div className="cards">
          <div className="card">
            <div className="label">Tarefas totais</div>
            <div className="value">{tasks.length}</div>
          </div>
          <div className="card">
            <div className="label">Concluídas</div>
            <div className="value">{done}</div>
          </div>
          <div className="card">
            <div className="label">Pendentes</div>
            <div className="value">{tasks.length - done}</div>
          </div>
        </div>

        <div className="panel">
          <h2>Gerenciador de tarefas</h2>
          <form className="task-form" onSubmit={addTask}>
            <input
              placeholder="Digite uma nova tarefa..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn" type="submit">Adicionar</button>
          </form>
          <ul className="task-list">
            {tasks.map((t) => (
              <li key={t.id} className={`task-item ${t.done ? "done" : ""}`}>
                <input type="checkbox" checked={t.done} onChange={() => toggleTask(t.id)} />
                <span>{t.title}</span>
                <button className="btn btn-danger" onClick={() => removeTask(t.id)}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
