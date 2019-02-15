import React from 'react';
import { connect } from 'react-redux'

const Notification = props => {
  const text = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if(text.length > 0) {
    return (
    <div style={style}>
        {text}
      </div>
    )
  }
  return null
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps)(Notification)
