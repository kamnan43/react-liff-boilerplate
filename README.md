# react-liff-boilerplate
Starter Kit for ReactJs developer to run and learn [LINE Frontend Framework](https://developers.line.me/en/docs/liff/overview/) (LIFF)

## How it work
This project build from [create-react-app](https://github.com/facebook/create-react-app) and [bootstrap](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap). Then add Line Frontend Framework (LIFF) [SDK](https://developers.line.me/en/docs/liff/developing-liff-apps/) and also provide `LiffHelper` and `messagingApiHelper` to help in communicate with LINE LIFF Platform.

# Install
Clone and run
```
npm install
```
Create config file in JSON and named it as `config.json`
```json
{
  "line" : {
    "channelAccessToken": "YOUR_CHANNEL_ACCESS_TOKEN"
  }
}
```
Run
```
npm start
```
then you can access [http://localhost:3000](http://localhost:3000)

## Demo
**Profile** : [http://localhost:3000](http://localhost:3000)

**SendMessage** : [http://localhost:3000/message](http://localhost:3000/message)

**LIFF Window** : [http://localhost:3000/window](http://localhost:3000/window)


# API
## Get Profile
Utility class `liffHelper` automatic initial LIFF when application launched. You can get user profile with command
```js
liffHelper.getProfile()
   .then(profile => {
      // do something
   });
```
## Get LIFF Info
Get User Context information
```
liffHelper.getLIFFInfo();
```
return [result](https://developers.line.me/en/reference/liff/#liffinit())

## Send Message
```
const message = messagingApiHelper.createTextMessage('text');
liffHelper.sendMessages(message);
```
## LIFF Window
```
liffHelper.openWindow('https://url.com', false);   // open url in LINE browser
liffHelper.openWindow('https://url.com', true);    // open url in external browser
liffHelper.closeWindow();                          // close LIFF window
```

## Author
Sitthi Thiammekha
