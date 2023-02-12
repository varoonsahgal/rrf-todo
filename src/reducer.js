export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }]
    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id)
    case 'RECEIVE_TODOS':
      return action.todos //when we update state, it will refresh the component UI for us
    default:
      return state
  }
}
