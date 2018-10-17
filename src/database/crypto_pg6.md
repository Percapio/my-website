# Time Complexity
Challenge 5: [Implement repeating-key XOR](https://cryptopals.com/sets/1/challenges/5)

### Table Of Contents
* [Main Page](../)
* [Encoding Magic Numbers: Integers](../problem1/)
* [Digital Logic](../problem2/)
* [One Time Pad](../problem3/)
* [Frequency Analysis](../problem4/)
* Time Complexity
* [Hamming Distance](../problem6/)
* [link] AES-128 in ECB? *what?*
* [link] TBD
---
### Time Complexity
We may have noticed when dealing with large chunks of data, like in the last challenge, that running these encryption/decryption functions can be taxing to our machines.  This is due to the way we have been building our functions.  So far, we have been writing them to be simple and easy to understand, but by doing so we have also not been focusing on designing our functions in such a way as to perform well at a reduced time.  Designing our functions as such, which from here on out we will be calling this design style as _time complexity_, is as important as decrypting/encrypting any data.  The reason for this is simple, time isn't on our side and sitting around waiting for a function to complete its task is time wasted.

Which is why to prep for today's challenge, we will be visiting some of the most common basic pre-written methods and libraries that we can use for today's and previous days' challenges, as many of these have already been optimized time and time again by previous hackers.

_Sorry, we weren't able to cover any algorithms today.  Considering the challenge we have seems more to do with efficient code and encrypting using what we have learned thus far, rather then code decoding, I thought this route may be the best course for us._

###### JavaScript Standard Methods and Operators
* [String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype): the basics is always important
* [Window Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto): to be honest, I have no idea what this standard API does
* [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators): Bits & XOR
* [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): joining two arrays together for bit manipulation and manipulation

###### Node
* [String Decoder](https://nodejs.org/api/string_decoder.html): Unicode & JavaScript
* [Buffer](https://nodejs.org/api/buffer.html): allows for base64 conversion and more!
```
var encoded = new Buffer(url).toString('base64');
var decoded = new Buffer(encoded, 'base64').toString('ascii')
```
* [Convert-Hex](https://www.npmjs.com/package/convert-hex): a node package that does what it says
* [JS-Binary](https://github.com/sitegui/js-binary): node package converts strings to binary

###### API
* [JS Crypto Libraries](https://gist.github.com/jo/8619441): for use in our projects

#### Bonus
###### Python Libraries
_I am mostly providing this portion for my sake, as I am completing the challenges in Python 2.  Let me know if there are any libraries / modules you feel would be important to know as a fledgling cryptographer._

###### Built in Functions
* [Unicode](https://docs.python.org/2/howto/unicode.html): [Tom on Stack Overflow](Tom here on Stack Overflow does an excellent job of explaining what Unicode is how Python interacts with it) does a great job explaining the relationship between Unicode and Python.  Given that we haven't really covered it yet, I don't want to bumble an explanation on it.
* [Encode / Decode](https://docs.python.org/2/library/codecs.html): pretty important to know.  See examples below as to why:
```
print 'monkey'.encode('base64')    => 'bW9ua2V5'
print 'bW9ua2V5'.decode('base64')  => 'monkey'
```
* [Bin](https://docs.python.org/3/library/functions.html#bin): from number to bin in just a few clicks. Sweet!
* [Hex](https://docs.python.org/3/library/functions.html#hex): same as bin, but with hex
* [Bitwise](http://python-reference.readthedocs.io/en/latest/docs/operators/bitwise_XOR.html): XOR operations
* [Zip](https://www.programiz.com/python-programming/methods/built-in/zip): joining two arrays/lists with one another for comparisons and manipulations

###### Standard Libraries
* [Collections](https://docs.python.org/3/library/collections.html): deque would have definitely come in handy so far
* [String](https://docs.python.org/3/library/string.html): many modules we have just learned come pre-built, optimized, and ready to use
* [Re](https://docs.python.org/3/library/re.html): [Regular expression](https://ryanstutorials.net/regular-expressions-tutorial/regular-expressions-basics.php)- an absolute must have library to use
