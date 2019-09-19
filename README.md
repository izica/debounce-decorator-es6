# debounce-decorator-es6
Debounce decorator for es6+, with promise support
### Features
* Easy to use as decorator
* Promise support
* Debounce firing result in Promise chain(.then())

### Usage
Default debounce time = 500ms
```javascript
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
