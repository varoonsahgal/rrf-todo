export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }]
    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}
