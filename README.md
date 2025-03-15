# cobalt-kit

Interact with the [Cobalt API](https://github.com/imputnet/cobalt/blob/main/docs/api.md).

Visit [cobalt-kit.js.org](https://cobalt-kit.js.org) to learn more.

## Example

```ts
import { Cobalt } from 'cobalt-kit';

let cobalt = new Cobalt({
  instance: 'https://cobalt.example.org/',
  auth: {
    scheme: 'Api-Key',
    token: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
  }
});

cobalt.download('https://www.youtube.com/watch?v=VUFr92i5jkA').then(res=>{

  if(res.status == 'tunnel' || res.status == 'redirect'){
    console.log(res.url);
  }

  if(res.status == 'picker'){
    for(let item of res.picker){
      console.log(item.url);
    }
  }

  if(res.status == 'error'){
    console.error(res.error.code);
  }

});
```