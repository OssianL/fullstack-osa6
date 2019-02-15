import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = props => {

  const anecdoteSubmit = async e => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    props.newAnecdote(content)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={anecdoteSubmit}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default connect(null, { newAnecdote })(AnecdoteForm)