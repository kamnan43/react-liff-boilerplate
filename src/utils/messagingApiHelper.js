function createTextMessage(text) {
  return {
    type: 'text',
    text: text
  };
}

function createImageMessage(originalContentUrl, previewImageUrl) {
  return {
    type: 'image',
    originalContentUrl: originalContentUrl,
    previewImageUrl
  };
}

function createVDOMessage(originalContentUrl, previewImageUrl) {
  return {
    type: 'video',
    originalContentUrl: originalContentUrl,
    previewImageUrl: previewImageUrl
  };
}

function createAudioMessage(originalContentUrl, duration) {
  return {
    type: 'audio',
    originalContentUrl: originalContentUrl,
    duration: duration
  };
}

function createButtonMessage(title, actions) {
  return {
    type: 'template',
    altText: title,
    template: {
      type: 'buttons',
      text: title.substring(0, 60),
      actions: actions,
    },
  };
}

function createButtonMessageWithImage(title, text, imageUrl, actions) {
  return {
    type: 'template',
    altText: title,
    template: {
      type: 'buttons',
      thumbnailImageUrl: imageUrl,
      title: title.substring(0, 40),
      text: text.substring(0, 60),
      // defaultAction: actions.getImageAction(extra),
      actions: actions,
    },
  };
}

function createLocationMessage(latitude, longitude) {
  return {
    type: 'location',
    title: 'my location',
    address: `@ ${latitude}:${longitude}`,
    latitude: latitude,
    longitude: longitude
  }
}

function createConfirmMessage(title, actions) {
  return {
    type: 'template',
    altText: title,
    template: {
      type: 'confirm',
      text: title,
      actions: actions,
    },
  };
}

function createCarouselMessage(title, columns) {
  return {
    type: 'template',
    altText: title,
    template: {
      type: 'carousel',
      columns: columns,
    },
  };
}

// function createCarouselColumns(title, text, imageUrl, extra, isFriend) {
//   let columnOptions = options.getCandidateProfileAction(extra, isFriend);
//   return {
//     thumbnailImageUrl: imageUrl,
//     title: title.substring(0, 40),
//     text: text.substring(0, 60),
//     defaultAction: options.getImageAction(extra),
//     actions: columnOptions

//   };
// }

function createImageCarouselMessage(title, columns) {
  return {
    type: 'template',
    altText: title,
    template: {
      type: 'image_carousel',
      columns: columns,
    },
  };
}

// function createImageCarouselColumns(actionText, imageUrl, extra) {
//   return {
//     imageUrl: imageUrl,
//     action: options.getCandidateImageAction(actionText, extra)
//   };
// }

function createFlexMessage(title, containers) {
  return {
    "type": "flex",
    "altText": title,
    "contents": containers
  };
}

function createFlexCarouselMessage(title, containers) {
  return createFlexMessage(title, {
    "type": "carousel",
    "contents": containers,
  });
}

module.exports = {
  createTextMessage: createTextMessage,
  createImageMessage: createImageMessage,
  createVDOMessage: createVDOMessage,
  createAudioMessage: createAudioMessage,
  createButtonMessage: createButtonMessage,
  createButtonMessageWithImage: createButtonMessageWithImage,
  createConfirmMessage: createConfirmMessage,
  createLocationMessage: createLocationMessage,
  createCarouselMessage: createCarouselMessage,
  // createCarouselColumns: createCarouselColumns,
  createImageCarouselMessage: createImageCarouselMessage,
  // createImageCarouselColumns: createImageCarouselColumns,
  createFlexMessage: createFlexMessage,
  createFlexCarouselMessage: createFlexCarouselMessage,
  // maxCarouselColumns: maxCarouselColumns
};