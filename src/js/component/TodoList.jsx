import React, {useState} from "react";
import '/workspace/react-hello/src/styles/index.css'

const TodoList = () => {

	const [inputValue, setInputValue ] = useState('');
	const [todoList, setTodoList] = useState([]);

	// FUNCTION THAT ALLOWS PRESS ENTER CREATE AN ARRAY WITH THE VALUE OF THE INPUT

	const pressEnterToInput = (evt) =>{
		if(evt.key === 'Enter' && inputValue !== '')
		{
			setTodoList([...todoList, inputValue])
			setInputValue("")
		}
	}

	// FUNCTION THAT DELETE TASKS FROM THE TODO LIST
	const deleteTask= (e)=>
	{
		const newListOfTodos= todoList.filter((item, idx)=>idx !== parseInt(e.target.id))
		setTodoList(newListOfTodos)
	}
	

	// CREATING THE TASK THAT DISPLAYS AS "LI's" IN THE PAGE
	const listOfTodos= todoList.map((task, index)=>
	{
	return <li className="list-group-item d-flex justify-content-between" key={index}>{task}
	<button id={index} className="button btn-close justify-content-end"  aria-label="Close" onClick={deleteTask}></button>
	</li>
	})
	
	return (
		<div>
			<h1 className="text-center my-3">Todos</h1>
			<ul className="list-group">
				<li className="list-group-item"><input onKeyDown={pressEnterToInput} onChange={ e=> setInputValue(e.target.value)} value={inputValue} type="text" className="form-control" placeholder="Add a task to do" aria-label="Recipient's username" aria-describedby="basic-addon2"/></li>
				{listOfTodos}
				{(todoList.length > 0) ? <li className="list-group-item"><b>{todoList.length}</b> tasks to do!</li> : null }
			</ul>
		</div>
	);

};

export default TodoList;
