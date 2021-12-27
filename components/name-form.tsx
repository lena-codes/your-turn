import React, { useState } from "react"
import { ReactSortable } from "react-sortablejs";
import { ItemType } from "../pages"


export const NameForm: React.FC = () => {
    const [state, setState] = useState<ItemType[]>([]);
    const [input, setInput] = useState<string>('');

    const addName = () => {
        setState([...state, { id: state.length, name: input }])
    };

    return (
        <div className="text-blue-400">
            <form onSubmit={addName}>
                <label htmlFor="name" className="mr-2">Name</label>
                <input id="name" type="text" autoComplete="name" className="mr-2" required onChange={e => setInput(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <ReactSortable list={state} setList={setState} >
                {state.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ReactSortable>
        </div>
    )
}
