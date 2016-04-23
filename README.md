[![Build Status](https://travis-ci.org/georapbox/jsEssentials.svg?branch=master)](https://travis-ci.org/georapbox/jsEssentials) [![Dependencies](https://david-dm.org/georapbox/jsEssentials.svg?theme=shields.io)](https://david-dm.org/georapbox/jsEssentials) [![devDependency Status](https://david-dm.org/georapbox/jsEssentials/dev-status.svg)](https://david-dm.org/georapbox/jsEssentials#info=devDependencies)

# jsEssentials

A collection of standalone javascript utility functions.

## Array

|Name|Description|
|--------|-----------|
|[chunk](src/arrays/chunk)|Creates an array of elements split into groups the length of size specified.|
|[compact](src/arrays/compact)|Creates an array with all falsey values removed. 'false', 'null', '0', '""', 'undefined', and 'NaN' are falsey.|
|[diff](src/arrays/diff)|Returns an array with only the unique values from the first array, by excluding all values from the second array using strict equality for comparisons.|
|[filter](src/arrays/filter)|Creates a new array with all elements that pass the test implemented by the provided callback function.|
|[findIndex](src/arrays/findIndex)|Returns the index of the first element of a collection that passes the callback check.|
|[findLastIndex](src/arrays/findLastIndex)|Returns the index of the first element of a collection that passes the callback check, iterating from right to left.|
|[forEach](src/arrays/forEach)|Executes a provided callback function once per array element.|
|[pluck](src/arrays/pluck)|Retrieves the value of a specified property from all elements in an array.|
|[shuffle](src/arrays/shuffle)|Returns a new array with its elements' order randomized, using the Fisher-Yates (aka Knuth) Shuffle algorithm.|
|[reverse](src/arrays/reverse)|Reverses an array (not in place). The first array element becomes the last and the last becomes the first.|
|[sort](src/arrays/sort)|Sorts an **array of primitive values**.|
|[sortBy](src/arrays/sortBy)|Sorts an **array of objects** by a property.|
|[uniq](src/arrays/uniq)|Removes duplicate primitive values from an array.|
|[zip](src/arrays/zip)|Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.|


|[Polyfills](src/arrays/polyfills) - Collection of array polyfills.|Description|
|------------------------------------------------------------------|-----------|
|[Array.prototype.every()](src/arrays/polyfills#arrays--arrayprototypeevery)|Tests whether all elements in the array pass the test implemented by the provided function.|
|[Array.prototype.filter()](src/arrays/polyfills#arrays--arrayprototypefilter)|Creates a new array with all elements that pass the test implemented by the provided function.|
|[Array.prototype.forEach()](src/arrays/polyfills#arrays--arrayprototypeforeach)|Executes a provided function once per array element.|
|[Array.prototype.indexOf()](src/arrays/polyfills#arrays--arrayprototypeindexof)|Returns the first index at which a given element can be found in the array, or -1 if it is not present.|
|[Array.prototype.lastIndexOf()](src/arrays/polyfills#arrays--arrayprototypelastindexof)|Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.|
|[Array.prototype.map()](src/arrays/polyfills#arrays--arrayprototypemap)|Creates a new array with the results of calling a provided function on every element in this array.|
|[Array.prototype.some()](src/arrays/polyfills#arrays--arrayprototypesome)|Tests whether some element in the array passes the test implemented by the provided function.|
|[Array.prototype.reduce()](src/arrays/polyfills#arrays--arrayprototypereduce)|Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.|


## String
|Name|Description|
|--------|-----------|
|[camelize](src/strings/camelize)|Converts a string into camel casing, removing "underscores", "dashes" or spaces (spaces is optional).|
|[capitalize](src/strings/capitalize)|Capitalizes the first character of a string ( Optionally, converts the rest of the string to lower case).|
|[collapseWhitespace](src/strings/collapseWhitespace)|Converts all adjacent whitespace characters to a single space.|
|[contains](src/strings/contains)|Determines whether one string may be found within another string, returning true or false as appropriate.|
|[count](src/strings/count)|Counts the occurrences of substring in a string.|
|[countWords](src/strings/countWords)|Counts words in a string.|
|[dasherize](src/strings/dasherize)|Converts a camel cased string into a string delimited by dashes.|
|[endsWith](src/strings/endsWith)|Determines whether a string ends with the characters of another string, returning true or false as appropriate.|
|[escapeHTML](src/strings/escapeHTML)|Escapes a HTML string.|
|[lines](src/strings/lines)|Returns an array with the lines of a a string.|
|[pad](src/strings/pad)|Pad <code>subjectString</code> on **both** sides to the given <code>len</code>, with optional <code>chars</code> defaulting to a space.|
|[padLeft](src/strings/padLeft)|Pad <code>subjectString</code> on **left** side to the given <code>len</code>, with optional <code>chars</code> defaulting to a space.|
|[padRight](src/strings/padRight)|Pad <code>subjectString</code> on **right** side to the given <code>len</code>, with optional <code>chars</code> defaulting to a space.|
|[randomString](src/strings/randomString)|Generates a random string of <code>n</code> characters, from the <code>chars</code> string provided by the user.|
|[removePrefix](src/strings/removePrefix)|Removes substring (prefix) from start of a string.|
|[removeSuffix](src/strings/removeSuffix)|Removes substring (suffix) from end of a string.|
|[repeat](src/strings/repeat)|Returns a string repeated <code>count</code> times.|
|[replaceAll](src/strings/replaceAll)|Returns a new string with all occurrences of subStr replaced with replaceStr.
|[startsWith](src/strings/startsWith)|Returns true if string begins with substring (prefix).|
|[strip](src/strings/strip)|Returns a new string with all occurrences of arguments passed removed.|
|[stripHTML](src/strings/stripHTML)|Returns a new string with all HTML tags removed.|
|[stripPunctuation](src/strings/stripPunctuation)|Returns a new string with all of punctuation removed.|
|[subStr](src/strings/subStr)|Returns a substring denoted by n (positive or negative) characters.|
|[subStrAfterChars](src/strings/subStrAfterChars)|Returns a substring after a specific sequence of character(s).|
|[subStrBeforeChars](src/strings/subStrBeforeChars)|Returns a substring before a specific sequence of character(s).|
|[supplant](src/strings/supplant)|supplant() does variable substitution on a string. It scans through the string looking for expressions enclosed in {{ }} braces. If an expression is found, use it as a key on the object, and if the key has a string value or number value, it is substituted for the bracket expression and it repeats.|
|[trim](src/strings/trim)|Removes whitespace from both ends of a string.|
|[trimLeft](src/strings/trimLeft)|Removes whitespace from the left end of a string.|
|[trimRight](src/strings/trimRight)|Removes whitespace from the right end of a string.|
|[truncate](src/strings/truncate)|Truncates a string based on character count.|
|[unescapeHTML](src/strings/unescapeHTML)|Unescapes a HTML string.|
|[urlSearchParams](src/strings/urlSearchParams)|Factory to access the URL search parameters.|
|[wrapHTML](src/strings/wrapHTML)|Wraps a string with a HTML tag with attributes if specified.|


## Number
|Name|Description|
|--------|-----------|
|[average](src/numbers/average)|Calculates the average of a set of numbers.|
|[inRange](src/numbers/inRange)|Checks if a number is between start and up to but not including, end.|
|[max](src/numbers/max)|Returns the largest of zero or more numbers.|
|[min](src/numbers/min)|Returns the smallest of zero or more numbers.|
|[numberFormat](src/numbers/numberFormat)|Formats a number based on the number of decimal points, the decimal seperator and the thousands seperator.|
|[randomBetween](src/numbers/randomBetween)|Returns a pseudo-random number (integer or floating-point) between a min (inclusive) and a max (exclusive) value.|


## Object
|Name|Description|
|--------|-----------|
|[extend](src/objects/extend)|Merges (deep copy) the contents of two or more objects together into the first object.|
|[forIn](src/objects/forIn)|Iterates over **own and inherited** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[forOwn](src/objects/forOwn)|Iterates over **own** enumerable properties of an object, executing the callback for each property. The callback is invoked with three arguments (value, key, object)|
|[container](src/objects/container)|Acts as a wrapper/container around the `value` passed in.|


## Function
|Name|Description|
|--------|-----------|
|[compose](src/function/compose)|Chains together functions to create a new function following the mathematical model of function composition.|
|[curry](src/function/curry)|Transforms a function of N arguments in such a way that it can be called as a chain of N functions each with a single argument.|
|[debounce](src/function/debounce)|Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for 'n' milliseconds.|
|[negate](src/function/negate)|Creates a function that negates the result of the predicate `func`.|
|[once](src/function/once)|Ensure a given functionality only runs once.|
|[partial](src/function/partial)|Creates a function that invokes `func` with `args` **prepended** to the arguments it receives.|
|[partialRight](src/function/partialRight)|Creates a function that invokes `func` with `args` **appended** to the arguments it receives.|
|[throttle](src/function/throttle)|Limits the number of times a function can be called in a given period.|


## is
[is.api](src/is/is.api) - A minimal API for the ```is``` functions below that provides ```not```, ```all``` and ```any``` interfaces. <br>
<small>(Inspired by the [is.js](https://github.com/arasatasaygin/is.js) library)</small>

|Name|Description|
|--------|-----------|
|[isArray](src/is/isArray)|Checks if `value` is an array.|
|[isBoolean](src/is/isBoolean)|Checks if `value` is a boolean value.|
|[isDate](src/is/isDate)|Checks if `value` is a date.|
|[isElement](src/is/isElement)|Checks if `value` is a DOM element.|
|[isEmail](src/is/isEmail)|Validates a string as email address.|
|[isEmpty](src/is/isEmpty)|Checks if `value` is empty.|
|[isEvenNum](src/is/isEvenNum)|Checks if a number is even.|
|[isExisty](src/is/isExisty)|Checks if `value` is existy (Not null or undefined).|
|[isFalse](src/is/isFalse)|Checks if `value` is false (strict equality).|
|[isFalsy](src/is/isFalsy)|Checks if `value` is falsy.|
|[isFiniteNum](src/is/isFiniteNum)|Checks if `value` is a finit number.|
|[isFunction](src/is/isFunction)|Checks if `value` is a function.|
|[isHexadecimal](src/is/isHexadecimal)|Checks if `value` matches a hexadecimal regular expression.|
|[isHexColor](src/is/isHexColor)|Checks if `value` matches a hexadecimal color regular expression.|
|[isInfiniteNum](src/is/isInfiniteNum)|Checks if `value` is an infinit number.|
|[isInteger](src/is/isInteger)|Checks if `value` is an integer number.|
|[isNaN](src/is/isNaN)|Determines whether a value is NaN or not.|
|[isNonExisty](src/is/isNonExisty)|Checks if `value` is non existy (null or undefined).|
|[isNull](src/is/isNull)|Checks if `value` is null.|
|[isNumber](src/is/isNumber)|Checks if `value` is a number.|
|[isObject](src/is/isObject)|Checks if `value` is a plain object, i.e. is constructed by the built-in Object constructor and inherits directly from `Object.prototype` or `null`.|
|[isOddNum](src/is/isOddNum)|Checks if a number is odd.|
|[isPlainObject](src/is/isPlainObject)|Checks if `value` is a plain object (created using "{}" or "new Object")|
|[isRegexp](src/is/isRegexp)|Checks if `value` is a regular expression.|
|[isString](src/is/isString)|Checks if `value` is a string.|
|[isTrue](src/is/isTrue)|Checks if `value` is true (strict equality).|
|[isTruthy](src/is/isTruthy)|Checks if `value` is truthy.|
|[isUndefined](src/is/isUndefined)|Checks if `value` is undefined.|


## DOM
|Name|Description|
|--------|-----------|
|[preloadImages](src/dom/preloadImages)|Asynchronsouly load images to browser so that can be cached.|
|[isEventSupported](src/dom/isEventSupported)|Checks if an event is supported in a browser environment.|
|[scroll](src/dom/scroll)|Easing based scrolling to a specified y point inside page.|
|[whichAnimationEnd](src/dom/whichAnimationEnd)|Detects the supported property name for the "animationend" event.|
|[whichTransitionEnd](src/dom/whichTransitionEnd)|Detects the supported property name for the "transitionend" event.|


## HTML5 Canvas
|Name|Description|
|--------|-----------|
|[CanvasContext](src/canvas/canvasContext)|A class that provides jQuery-style chained access to 2D context methods and properties.|
|[convertImageToBase64](src/canvas/convertImageToBase64)|Converts an image's content to Data URI scheme.|


## Misc
|Name|Description|
|--------|-----------|
|[cookie](src/misc/cookie)|Create, read and delete cookies.|
|[poll](src/misc/poll)|Periodically check for application's status updates.|


## Installation
- To clone the repository, run: <code>git clone https://github.com/georapbox/jsEssentials.git</code>
- To install dev dependancies, (from the root folder of the project) run: <code>$ npm install</code><br/>
(Required to build the documentation, run the tests, etc)

## Build the documentation
From the root folder of the project, run: <code>$ npm run docs</code>.
This will create a <code>docs</code> folder to the root of the project, containing all <code>README</code> files converted to HTML documents.

## Run the tests
From the root folder of the project, run: <code>$ npm run test</code>.
Apart from the results in terminal, this will create a <code>tests-reporter</code> folder to the root of the project, that contains an HTML document with the tests results.
