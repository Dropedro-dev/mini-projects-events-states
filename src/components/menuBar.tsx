type Props = {
    showProject: (n: number)=> void;
    selectProject: number;
}
const MenuBar =({showProject, selectProject}: Props)=> {
    return (
        <nav className="fixed ml-2 mt-2">
            <ul className="flex flex-col gap-4">
                <li onClick={()=>showProject(0)} className={`rounded-full bg-gray-500`}><img src="/toDoList.png" alt="" className="w-10 h-10 m-2"/></li>
                <li onClick={()=>showProject(1)} className="rounded-full bg-gray-500"><img src="/galery.png" alt="" className="w-10 h-10 m-2"/></li>
                <li onClick={()=>showProject(2)} className="rounded-full bg-gray-500"><img src="/quiz.png" alt="" className="w-10 h-10 m-2" /></li>
            </ul>
        </nav>
    )
}

export default MenuBar