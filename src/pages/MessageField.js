import React from 'react'
import PropTypes from 'prop-types'
import WithLabel from './WithLabel'

const MessageField = ({ messageFieldType, inputRef }) => {
  return messageFieldType.key === 'text_selection' ? (
    <select
      ref={inputRef}
      id={`${messageFieldType.key}`}
      disabled={!messageFieldType.editable}
      className="form-control"
    >
      {messageFieldType.value.map(option => (
        <option value={`${option.value}`} key={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  ) : (
    <input
      ref={inputRef}
      id={`${messageFieldType.key}`}
      disabled={!messageFieldType.editable}
      type="text"
      className="form-control"
      defaultValue={messageFieldType.value}
    />
  )
}

const MessageButton = Component => ({ messageFieldType, sendMessageToChat, inputRef }) => {
  const handleClick = event => {
    event.preventDefault()
    sendMessageToChat(messageFieldType.key, inputRef.current.value)
  }
  return (
    <div className="input-group">
      <Component messageFieldType={messageFieldType} inputRef={inputRef} />
      <span className="input-group-btn">
        <button
          type="button"
          className="btn btn-default"
          disabled={!messageFieldType.editable}
          onClick={handleClick}
        >
          Send
        </button>
      </span>
    </div>
  )
}

export default WithLabel(MessageButton(MessageField))

MessageField.propTypes = {
  messageFieldType: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string,
    editable: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  }).isRequired,
  inputRef: PropTypes.object.isRequired
}

MessageButton.propTypes = {
  messageFieldType: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string,
    editable: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  }).isRequired,
  inputRef: PropTypes.object.isRequired
}
