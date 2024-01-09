export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                const requestBody = JSON.stringify({
                  id: todo._id,
                });
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: requestBody,
                  headers: {
                    "Content-Type": "application/json",
                    "Content-Length": requestBody.length.toString(),
                  },
                }).then(async function (res) {
                  await res.json();
                  alert("Todo updated");
                });
              }}
            >
              {todo.completed == true ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
