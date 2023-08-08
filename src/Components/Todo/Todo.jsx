import Card from "./Card";

function Todo() {
  return (
    <>
      <h2>Todo List</h2>

      <div className="todo-container">
        <Card title="Remember State" description="useState functionality, quick use and how it works, why use state instead of else..." />
        <Card title="Remember For Loops" description="General Syntax for functions like forloops and what's needed when..." />
        <Card title="Remember Component Use" description="Manage components properly and be aware what should be exported to a seperate component.." />
      </div>
    </>)
}

export default Todo;