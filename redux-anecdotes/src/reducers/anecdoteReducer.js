import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  const newState = [...state]
  switch(action.type) {
    case 'UPDATE_ANECDOTE':
      return newState.map(anecdote => anecdote.id === action.data.id ? action.data : anecdote)
    case 'NEW_ANECDOTE':
      newState.push(action.data)
      return newState
    case 'INIT_ANECDOTES':
      return action.data
    default: return newState
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    anecdote.votes++
    const updatedAnecdote = await anecdoteService.update(anecdote)
    dispatch({
      type: 'UPDATE_ANECDOTE',
      data: updatedAnecdote
    })
  }
}

export const newAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer