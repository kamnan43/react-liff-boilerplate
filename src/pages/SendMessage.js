import React, { Component } from 'react';

const messageTypes = [
  { key: 'text', label: 'Text', editable: true, value: 'Some Text' },
  { key: 'image', label: 'Image', editable: true, value: 'https://scontent.fbkk1-1.fna.fbcdn.net/v/t1.0-9/29389275_1901092573269456_3839896059081916416_o.jpg?_nc_fx=fbkk1-5&_nc_cat=0&_nc_eui2=AeHkPXfv3Tgud9Gr5ZAKjd6ckQk3BefxkIjTbJ4mMzvuD6C1HwNQV5BY5PeIVNDXttAiSo8vWBVYr5rJu6C-XF4Wvyfs8MqxRwtR6DLgZqTpZg&oh=f1d2e14385b2ecfa259baae39cfbb6e7&oe=5C0BACFE' },
  { key: 'video', label: 'Video', editable: false, value: 'Some Video' },
  { key: 'audio', label: 'Audio', editable: false, value: 'Some Audio' },
  { key: 'location', label: 'Location', editable: false, value: 'Location' },
  { key: 'button', label: 'Template - Button', editable: false, value: 'Button' },
  { key: 'confirm', label: 'Template - Confirm', editable: false, value: 'Confirm' },
  { key: 'carousel', label: 'Template - Carousel', editable: false, value: 'Carousel' },
  { key: 'image-carousel', label: 'Template - Image carousel', editable: false, value: 'Image carousel' },
  { key: 'sticker', label: 'Sticker', editable: false, value: 'LIFF Can\'t send Sticker', disabled: true },
  { key: 'image-map', label: 'Image Map', editable: false, value: 'LIFF Can\'t send Image Map', disabled: true },
  { key: 'flex', label: 'Flex', editable: false, value: 'LIFF Can\'t send Flex Message', disabled: true },
];

export default class SendMessage extends Component {
  sendMessageToChat(messageType) {
    alert(messageType);
  }

  render() {
    let formGroups = messageTypes.map(messageType => {
      return (
        <div className="form-group">
          <label htmlFor={`msg_${messageType.key}`} className="message-label">{messageType.label}:</label>
          <div className="input-group">
            <input id={`msg_${messageType.key}`} disabled={!messageType.editable} type="text" className="form-control" placeholder={messageType.value} />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" disabled={messageType.disabled} onClick={this.sendMessageToChat.bind(this, `${messageType.key}`)} >Send</button>
            </span>
          </div>
        </div>
      );
    });
    return (
      <div className="page-content">
        <div className="col-lg-3" />
        <div className="col-lg-6">
          {formGroups}
          <hr />
          <button type="button" className="btn btn-default">Close LIFF</button>
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}