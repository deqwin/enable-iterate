# enable-iterate

make your javascript object iterable.

## how to use

```sh
npm install enable-iterate
```

```js
import enableIterate from 'enable-iterate';

const a = enableIterate({
  a: 1,
  b: '2',
  c: true,
  d() {},
})

for (var item of a) {
  console.log(item);
}
/**
 * 1
 * 2
 * true
 * [Function: d]
 */
```