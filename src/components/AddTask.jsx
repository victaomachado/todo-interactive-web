import Input from "./Input";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
             type="text"
             placeholder="Digite o título da tarefa"
             value={title}
             onChange={(event) => setTitle(event.target.value)}
             />

            <Input
             type="text"
             placeholder="Digite a descricao da tarefa"
             value={description}
             onChange={(event) => setDescription(event.target.value)}
            />

            <button onClick={() => {
                // verificar se o titulo e decricao estao preenchidos / trim() eh para tirar espacos em branco
                if (!title.trim() || !description.trim()) {
                    return alert("Preencha o título e a descricao da tarefa!");
                }
                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }}
             className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar
            </button>
        </div>
    );
}

export default AddTask;