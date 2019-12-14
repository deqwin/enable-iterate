export default function enableIterate (obj) {
  Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    value () {
      const _this = this;
      const keys = Object.keys(_this);
      let i = 0;

      return {
        next () {
          i++;
          return {
            value: i > keys.length ? null : _this[keys[i-1]],
            done: i > keys.length
          }
        }
      };
    }
  })

  return obj;
}