import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux';

const Filter = (props) => {
  const handleChange = event => {
    props.setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={props.filter}/>
    </div>
  )
}

const mapStateToProp = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  setFilter
}

export default connect(mapStateToProp, mapDispatchToProps)(Filter)