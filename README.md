# jsEssentials
> Not yet another Javascript library.

**jsEssentials** is by no means a library and it's not meant to be one. It's just a collection of javascript standalone functions to cherrypick from, for everyday tasks.

*Because sometimes we don't need a whole library to get the job done.*

### Table of contents

#### Arrays

|Method|Description|
|------|-----------|
|[compact](src/arrays/compact)|Creates an array with all falsey values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.|
|[diff](src/arrays/diff)|Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.|
|[filter](src/arrays/filter)|Creates a new array with all elements that pass the test implemented by the provided callback function.|
|[findIndex](src/arrays/findIndex)|Returns the index of the first element of a collection that passes the callback check.|
|[findLastIndex](src/arrays/findLastIndex)|Returns the index of the first element of a collection that passes the callback check, iterating from right to left.|
|[forEach](src/arrays/forEach)|Executes a provided callback function once per array element.|
|[pluck](src/arrays/pluck)|Retrieves the value of a specified property from all elements in an array.|
|[sortBy](src/arrays/sortBy)|Sorts an **array of objects** by a property.|
|[uniq](src/arrays/uniq)|Removes duplicate primitive values from an array.|


|[Polyfills](src/arrays/polyfills) - Collection of array polyfills.|
|------|
|[Array.prototype.every()](src/arrays/polyfills#arrays--arrayprototypeevery)|
|[Array.prototype.filter()](src/arrays/polyfills#arrays--arrayprototypefilter)|
|[Array.prototype.forEach()](src/arrays/polyfills#arrays--arrayprototypeforeach)|
|[Array.prototype.indexOf()](src/arrays/polyfills#arrays--arrayprototypeindexof)|
|[Array.prototype.lastIndexOf()](src/arrays/polyfills#arrays--arrayprototypelastindexof)|
|[Array.prototype.map()](src/arrays/polyfills#arrays--arrayprototypemap)|
|[Array.prototype.some()](src/arrays/polyfills#arrays--arrayprototypesome)|
|[Array.prototype.reduce()](src/arrays/polyfills#arrays--arrayprototypereduce)|

#### Strings
|Method|Description|
|------|-----------|
|[beginsWith](src/strings/beginsWith)|Returns true if string begins with substring (prefix).|
|[camelize](src/strings/camelize)|Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).|
|[capitalize](src/strings/capitalize)|Capitalizes the first character of a string ( Optionally, converts the rest of the string to lower case).|
|[chompLeft](src/strings/chompLeft)|Removes a prefix from the beginning of a string.|
|[chompRight](src/strings/chompRight)|Removes a suffix from the end of a string.|
|[collapseWhitespace](src/strings/collapseWhitespace)|Converts all adjacent whitespace characters to a single space.|
|[contains](src/strings/contains)|Returns true if the string contains the passed string, else returns false.|
|[count](src/strings/count)|Counts the occurrences of substring in a string.|
|[countWords](src/strings/countWords)|Counts words in a string.|
|[dasherize](src/strings/dasherize)|Converts a camel cased string into a string delimited by dashes.|
|[endsWith](strins/endsWith)|Returns true if string ends with substring (suffix).|
|[escapeHTML](src/strings/escapeHTML)|Escapes a HTML string.|
|[pad](src/strings/pad#strings--pad)|Pad <code>str</code> on **both** sides to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.|
|[padLeft](src/strings/pad#strings--padleft)|Pad <code>str</code> on **left** side to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.|
|[padRight](src/strings/pad#strings--padright)|Pad <code>str</code> on **right** side to the given <code>len</code>, with optional <code>ch</code> defaulting to a space.|
|[randomString](src/strings/randomString)|Generates a random string of <code>n</code> characters, from the <code>chars</code> string provided by the user.|
|[removePrefix](src/strings/removePrefix)|Removes substring (prefix) from start of a string.|
|[removeSuffix](src/strings/removeSuffix)|Removes substring (suffix) from end of a string.|
|[repeat](src/strings/repeat)|Returns a string repeated <code>count</code> times.|
|[replaceAll](src/strings/replaceAll)|Returns a new string with all occurrences of subStr replaced with replaceStr.
|[strip](src/strings/strip)|Returns a new string with all occurrences of arguments passed removed.|
|[stripHTML](src/strings/stripHTML)|Returns a new string with all HTML tags removed.|
|[subStr](src/strings/subStr)|Returns a substring denoted by n (positive or negative) characters.|
|[subStrAfterChars](src/strings/subStrAfterChars)|Returns a substring after a specific sequence of character(s).|
|[supplant](src/strings/supplant)|supplant() does variable substitution on a string. It scans through the string looking for expressions enclosed in {{ }} braces. If an expression is found, use it as a key on the object, and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.|
|[trim](src/strings/trim#strings--trim)|Removes whitespace from both ends of a string.|
|[trimLeft](src/strings/trim#strings--trimleft)|Removes whitespace from the left end of a string.|
|[trimRight](src/strings/trim#strings--trimright)|Removes whitespace from the right end of a string.|
|[truncate](src/strings/truncate)|Truncates a string based on character count.|
|[unescapeHTML](src/strings/unescapeHTML)|Unescapes a HTML string.|
|[wrapHTML](src/strings/wrapHTML)|Wraps a string with a HTML tag with attributes if specified.|

#### Numbers
|Method|Description|
|------|-----------|
|[average](src/numbers/average)|Calculates the average of a set of numbers.|
|[isEven](src/numbers/isEven)|Checks if a number is even.|
|[isOdd](src/numbers/isOdd)|Checks if a number is odd.|
|[max](src/numbers/max)|Returns the largest of zero or more numbers.|
|[min](src/numbers/min)|Returns the smallest of zero or more numbers.|
|[numberFormat](src/numbers/numberFormat)|Formats a number based on the number of decimal points, the decimal seperator and the thousands seperator.|
|[randomBetween](src/numbers/randomBetween)|Returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.|

#### Objects
|Method|Description|
|------|-----------|
|[extend](src/objects/extend)|Merges (deep copy) the contents of two or more objects together into the first object.|
|[forIn](src/objects/forIn)|Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[forOwn](src/objects/forOwn)|Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[isArray](src/objects/isArray)|Checks if a "value" is an array.|
|[isBoolean](src/objects/isBoolean)|Checks if a "value" is a boolean value.|
|[isDate](src/objects/isDate)|Checks if a "value" is a date.|
|[isElement](src/objects/isElement)|Checks if "value" is a DOM element.|
|[isEmpty](src/objects/isEmpty)|Checks if a "value" is empty.|
|[isFunction](src/objects/isFunction)|Checks if "value" is a function.|
|[isNumber](src/objects/isNumber)|Checks if a "value" is a number.|
|[isObject](src/objects/isObject)|Checks if <code>value</code> is the language type of <code>Object</code>.|
|[isPlainObject](src/objects/isPlainObject)|Checks if <code>value</code> is an object created by the <code>Object</code> constructor.|
|[isString](src/objects/isString)|Checks if a "value" is a string.|

#### DOM
|Method|Description|
|------|-----------|
|[scroll](src/dom/scroll)|Easing based scrolling to a specified y point inside page.|
|[whichAnimationEnd](src/dom/whichAnimationEnd)|Detects the supported property name for the "animationend" event.|
|[whichTransitionEnd](src/dom/whichTransitionEnd)|Detects the supported property name for the "transitionend" event.|

#### Misc
|Method|Description|
|------|-----------|
|[debounce](src/misc/debounce)|Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds.|
|[throttle](src/misc/throttle)|Limits the number of times a function can be called in a given period.|

## Installation
- To clone the repository, run: <code>git clone https://github.com/georapbox/jsEssentials.git</code>
- To install dev dependancies, (from the root folder of the project) run: <code>$ npm install</code><br/>
(Required to build the documentation, run the tests, etc)

## Bundle up
Although **jsEssentials** is meant to be used as standalone functions to cherrypick from, there is also the possibility to bundle up all the methods in one file, to be used in the browser.
To bundle up, [browserify](http://browserify.org/) was used. If you need to customize the bundle, you can change the <code>main.js</code> file by removing any of the methods that you don't need.

When you have decided which methods to include run <code>$ npm run build:dev</code> to generate the unminified bundle or <code>$ npm run build:live</code> to generate the minified bundle.
These two commands will generate the final bundles (jsEssentials.js & jsEssentials.min.js respectively) under <code>dist/</code> foler.

## Build the documentation
From the root folder of the project, run: <code>$ npm run docs</code>.
This will create a <code>docs</code> folder to the root of the project, containing all <code>README</code> files converted to HTML documents.

## Run the tests
From the root folder of the project, run: <code>$ npm run test</code>.
Apart from the results in terminal, this will create a <code>tests-reporter</code> folder to the root of the project, that contains an HTML document with the tests results.
