import { ToDoItem } from "@/types/toDoItem";
import { useState } from "react";

const ToDoList = () => {
    const [itemInput, setItemInput] = useState('');
    const [list, setList] = useState<ToDoItem[]>([
        {id: 1, label: "Make the leason", checked: true},
        {id: 2, label: "Take out the trash", checked: false}
    ]);

    const upFirstLetter =(i: string)=> {
        return i.charAt(0).toUpperCase() + i.slice(1)
    }

    const handleAddButton =()=> {
        if(itemInput.trim() != ''){
            setList([
                ...list,
                {
                    id: list.length +1,
                    label: upFirstLetter(itemInput),
                    checked: false
                }
            ]);
        }

        setItemInput('');
    }

    const deleteItem =(id: number)=> {
        setList(
            list.filter((item)=>item.id !== id)
        )
    }

    const toggleItem =(index: number)=> {
        let newList = [...list];

        newList[index -1].checked = !newList[index -1].checked;

        setList(newList);
    }

    return (
        <div className="
        w-screen h-screen 
        flex flex-col 
        items-center
        bg-black
        text-2xl text-white"
        >
            <h1 className="text-4xl mt-5">To do List</h1>

            <div 
            className="
            flex 
            w-full max-w-lg 
            my-3 
            p-4 
            rounded-md 
            bg-gray-700
            border-gray-600"
            >
                <input 
                type="text"
                placeholder="what to do?"
                value={itemInput}
                onChange={e => setItemInput(e.target.value)}
                className="
                flex-1 
                border border-black 
                p-3
                mr-3
                text-2xl text-black 
                rounded-md"
                />
                <button onClick={handleAddButton}>Add</button>
            </div>
            <p className="p-4 ">{list.length} {list.length === 1 ? "item": "items"} in list</p>
            {list.length > 0 &&
            <ul 
            className="
            w-full max-w-lg
            bg-gray-600 
            rounded-md 
            p-4 pt-8"
            >
                {list.map( item =>(
                    <li
                    key={item.id}
                    className="
                    border-b border-b-gray-400
                    mb-5"
                    >
                        <input
                        type="checkbox" 
                        checked={item.checked} 
                        className="w-6 h-6 mr-3" 
                        onClick={() => toggleItem(item.id)}
                        />
                        <span className="ml-2">{item.label}-</span>
                        <button 
                        onClick={()=> deleteItem(item.id)} 
                        className="hover:underline"
                        >
                            [delete]
                        </button>

                    </li>
                ))}              
            </ul>}
        </div>
    )
}

export default ToDoList;