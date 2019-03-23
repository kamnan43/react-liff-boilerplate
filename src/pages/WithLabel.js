import React from 'react'
import PropTypes from 'prop-types'

const WithLabel = Component => ({ messageFieldType, ...props }) => {
  return (
    <React.Fragment>
      <label htmlFor={`${messageFieldType.key}`} className="message-label">
        {messageFieldType.label}
        {':'}
      </label>
      <Component messageFieldType={messageFieldType} {...props} />
    </React.Fragment>
  )
}

export default WithLabel

WithLabel.propTypes = {
  messageFieldType: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired
}
