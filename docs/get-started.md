# Get Started

To use **cobalt-kit**, you need to have access to a Cobalt instance API.

::: warning
Hosted API instances (such as `api.cobalt.tools`) use bot protection and are **not** intended to be used in other projects without explicit permission. If you want to access the Cobalt API reliably, you should [host your own instance](https://github.com/imputnet/cobalt/blob/main/docs/run-an-instance.md) or ask an instance owner for access.
:::

## Installation

1. Run this command on a terminal.

::: code-group

```sh [npm]
$ npm add cobalt-kit
```

```sh [pnpm]
$ pnpm add cobalt-kit
```

```sh [yarn]
$ yarn add cobalt-kit
```

```sh [bun]
$ bun add cobalt-kit
```

:::

2. You're ready to use **cobalt-kit**.
   
   Read the [documentation](docs/cobalt) to learn more about how to use it.

::: info
If you have any trouble understanding the documentation or find any mistake, please [reach out](https://github.com/bernzrdo/cobalt-kit/issues/new)!
:::

## Example

You can use and modify this example to help you get started.

::: info
This example will not work as the `instance` and `auth` provided are not valid. Please modify these properties to match your credentials. [Learn more about Cobalt options.](docs/interfaces/cobalt-options)
:::

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