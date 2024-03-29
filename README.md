# debounce-decorator-es6
Debounce decorator for es6+, with promise support

see https://www.npmjs.com/package/decorators-es6

### Install
```
npm install debounce-decorator-es6
```
```
yarn add debounce-decorator-es6
```
### Features
* Easy to use as decorator
* Promise support
* Debounce firing result in Promise chain(.then())

### Usage
Default debounce time = 500ms
```javascript
import debounce from 'debounce-decorator-es6';

class Store {
    message = 'msg';

    @debounce(1000)
    changeMessage = (message) => {
        this.message = message;
        return 'updated';
    };

    @debounce(1000)
    updateOnServer = (message) => {
        return axios.post('/message/update', {message});
    }
}

const store = new Store();
store.changeMessage('msg2');

store.changeMessage('msg2').then(value => {
    //debounce firing;
    console.log(value) // 'updated'
});

store.updateOnServer('msg2').then(response => {
    //debounce firing;
    console.log(response) // axios response from server(Promise resolve)
});

```
