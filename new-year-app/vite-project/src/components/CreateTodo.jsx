import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      ></input>
      <br></br>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        type="text"
        placeholder="description"
      ></input>
      <br></br>
      <button
        onClick={() => {
          const requestBody = JSON.stringify({
            title: title,
            description: desc,
          });
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: requestBody,
            headers: {
              "Content-Type": "application/json",
              "Content-Length": requestBody.length.toString(),
            },
          }).then(async function (res) {
            await res.json();
            alert("Todo created");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
