import React from 'react'
// import PropTypes from 'prop-types'

// const Alert = alert => {
const Alert = (props) => {
  const { alert } = props
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i> {alert.msg}
      </div>
    )
  )
}

// Alert.propTypes = {
//   alert: PropTypes.object.isRequired
// }

export default Alert
