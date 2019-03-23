import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert2'
import { geolocated } from 'react-geolocated'
import MessageField from './MessageField'
import LiffHelper from '../utils/LiffHelper'
import messageHelper from '../utils/MessagingApiHelper'

const textMessageOptions = [
  {
    key: 'search imgur account',
    value: 'search imgur account'
  },
  {
    key: 'upload to imgur',
    value: 'upload to imgur'
  }
]

const messageTypes = [
  {
    key: 'text',
    label: 'Text',
    editable: true,
    value: 'give me brown'
  },
  {
    key: 'text_selection',
    label: 'Text with Q&A',
    editable: true,
    value: textMessageOptions
  },
  {
    key: 'image',
    label: 'Image',
    editable: true,
    value:
      'https://developers.line.biz/media/messaging-api/using-line-url-scheme/camera-screen-3c7466e3.png'
  },
  {
    key: 'video',
    label: 'Video',
    editable: false,
    value: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4'
  },
  {
    key: 'audio',
    label: 'Audio',
    editable: false,
    value: 'https://cdn.online-convert.com/example-file/audio/m4a/example.m4a'
  },
  {
    key: 'location',
    label: 'Location',
    editable: false,
    value: 'Location'
  },
  {
    key: 'button',
    label: 'Template - Button',
    editable: false,
    value: 'Button'
  },
  {
    key: 'confirm',
    label: 'Template - Confirm',
    editable: false,
    value: 'Confirm'
  },
  {
    key: 'carousel',
    label: 'Template - Carousel',
    editable: false,
    value: 'Carousel',
    disabled: true
  },
  {
    key: 'image-carousel',
    label: 'Template - Image carousel',
    editable: false,
    value: 'Image carousel',
    disabled: true
  }
]

class SendMessage extends Component {
  closeLIFF = () => {
    LiffHelper.closeWindow()
  }

  // Declared as variable (or arrow-function) to auto-bind this or this will be undefiend
  sendMessageToChat = (messageKey, messageValue) => {
    const {
      isGeolocationAvailable,
      isGeolocationEnabled,
      coords: { latitude, longitude }
    } = this.props
    let actions = [
      {
        type: 'uri',
        label: 'Google',
        uri: `https://google.com`
      },
      {
        type: 'uri',
        label: 'Facebook',
        uri: `https://facebook.com`
      }
    ]
    let message
    switch (messageKey) {
      case 'text':
      case 'text_selection':
        message = messageHelper.createTextMessage(messageValue)
        break
      case 'image':
        message = messageHelper.createImageMessage(messageValue, messageValue)
        break
      case 'video':
        message = messageHelper.createVDOMessage(
          messageValue,
          'https://www.sample-videos.com/img/Sample-png-image-500kb.png'
        )
        break
      case 'audio':
        message = messageHelper.createAudioMessage(messageValue, 3600)
        break
      case 'button':
        message = messageHelper.createButtonMessageWithImage(
          'Select Page',
          'Send Buttton Demo',
          'https://developers.line.biz/media/messaging-api/using-line-url-scheme/camera-screen-3c7466e3.png',
          actions
        )
        break
      case 'confirm':
        actions = [
          {
            type: 'uri',
            label: 'YES',
            uri: `https://google.com`
          },
          {
            type: 'uri',
            label: 'NO',
            uri: `https://facebook.com`
          }
        ]
        message = messageHelper.createConfirmMessage('Send Message again', actions)
        break
      case 'location':
        if (isGeolocationAvailable && isGeolocationEnabled) {
          message = messageHelper.createLocationMessage(latitude, longitude)
        } else {
          swal({
            type: 'error',
            title: 'Send Error',
            text: 'Geolocation is not enabled'
          })
        }
        break
      default:
        message = messageHelper.createTextMessage('ABC')
    }
    if (message) {
      LiffHelper.sendMessages([message])
        .then(() => {
          swal({
            type: 'success',
            title: 'Send Message Complete',
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          swal({
            type: 'error',
            title: 'Send Error',
            text: err.response.data.message
          })
        })
    }
  }

  render() {
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          {messageTypes.map(messageType => (
            <div className="form-group" key={messageType.key}>
              <MessageField
                messageFieldType={messageType}
                sendMessageToChat={this.sendMessageToChat}
                setTextInput={this.setTextInputRef}
                inputRef={createRef()}
              />
            </div>
          ))}
          <hr />
          <button type="button" className="btn btn-default" onClick={this.closeLIFF}>
            Close LIFF
          </button>
        </div>
        <div className="col-lg-3" />
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(SendMessage)

// For geolocation implementation
SendMessage.propTypes = {
  isGeolocationAvailable: PropTypes.bool,
  isGeolocationEnabled: PropTypes.bool,
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  })
}

SendMessage.defaultProps = {
  isGeolocationAvailable: false,
  isGeolocationEnabled: false,
  coords: {}
}
