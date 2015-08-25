# remove-class

> Remove a given class from elements.


## Install

```
$ npm install --save remove-class
```


## Usage

```js
var removeClass = require('remove-class');
var el = document.querySelector('div');
var els = document.querySelectorAll('span');

removeClass(el, 'foo');
removeClass(els, 'bar');
```


## Browser API

### removeClass(element, className)

#### element

*Required*  
Type: HTML DOM element

Element(s) to remove class from.

#### className

*Required*  
Type: `string`

Class name to be removed.


## Related

* [add-class](https://github.com/gillstrom/add-class) - Add a given class to elements.
* [has-class](https://github.com/gillstrom/has-class) - Check if an element has a given class.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
