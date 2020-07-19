
const initialState = [{
	id: 1,
	todo: 'Comprar cena',
	done: false
}]

const todoReducer = (state = initialState, action) => {

	if (action?.type === 'ADD') {
		return [...state, action.payload]
	}
	return state;
}

let tasks = todoReducer();

// un nuevo objeto
const newTasks = {
	id: 2,
	todo: 'Comprar leche',
	done: false
}

// crear la "acción", type y payload es un estandar para enviar el objeto a useReducer
const addTaskAction = {
	type: 'ADD',
	payload: newTasks
}

tasks = todoReducer(tasks, addTaskAction)

console.log(tasks);