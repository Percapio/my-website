# One Time Pad
Challenge 3: [Single-byte XOR cipher](https://cryptopals.com/sets/1/challenges/3)

### Table Of Contents
* [Main Page](../)
* [Encoding Magic Numbers: Integers](../problem1/)
* [Digital Logic](../problem2/)
* One Time Pad
* [Frequency Analysis](../problem4/)
* [Time Complexity](../problem5/)
* [Hamming Distance](../problem6/)
* [link] AES-128 in ECB? *what?*
* [link] TBD
---
### XOR cipher
In the last challenge, we figured out that in order to manipulate a given string and have it return the correct answer, we first had to hex decode the two strings and the run a simple XOR comparison against both strings to find our final groups of binary bytes which we would later encode into hex for the final result.

What we had just completed is called XOR cipher.  It is an encryption algorithm where we convert our secret message into their ASCII code, then to its binary form, and finally run a comparison of it with some given key's binary string ( in the challene, it was the single string that was given to us ).  The resulting 1's and 0's of the XOR comparison would be the binary string we would later encode into hex for our final result.

All the steps we did to decrypt the given string is called _Additive Cipher_, a substitution cipher where the plain-text alphabet is rearranged by a cipher alphabet.  Essentially, shifting the alphabets by some given value.  One of the most simplest forms of _Additive Cipher_ is called the [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher).  If the last challenge was harder then we expected, we should have a go at the link as it is a good starting point to strengthen our ability to encode/decode in an additive way.

##### One Time Pad
_What we are going to cover next doesn't directly relate to solving the challenge, but instead talks about why having a fixed XOR is not the "perfect" cipher._

In today's challenge, our objective is to solve a single-byte XOR that was already set in advance.  During the course of attempting to solve this problem, we will attempt to solve the challenge by looking for patterns that we can recognize.  These patterns is the fundamental reason why a fixed password, whether XOR'd or not, is far from the "perfect" cipher.  Instead, there is something out there that could be considered the "perfect" cipher, but it comes with its own downfall.  This particular cipher is known as the One Time Pad.

The One Time Pad is a XOR cipher, much like the ones we have recently completed, but the difference lies in how the key is generated before encoding a plain text message into cipher text.  The generation of this key requires that it is randomized and only paired **once** to each decryption.  For example, imagine a lock with only one key in the world capable of unlocking it, and after we use the key to unlock the lock, both key and lock disintegrates--never to be used again.  That is the One Time Pad.

Sounds perfect right?  Well, yes.  Especially, if we have something of significance to keep hidden away, but what if we needed to share what we have to a business partner, or an employee?  How many keys would have we to go through to keep our private information continuously hidden from unwanted eyes?   

The number to that answer is probably somewhere close to inifinity, as there will always be someone seeking to unlock the 'perfect' lock.

Encrypting information is a tricky business.  On one hand, we want to ensure an encryption is secure, and by randomizing XOR, we ensure the chances of any third party is able to gain access to our private information is reduced significantly.  Yet, at the same time, consistently changing our key to some random value is not a feasible solution, especially if we have to share this information with another party.

Now that we briefly covered the background to One Time Pad algorithms, lets explore it further by creating a simple encryption funciton.

##### JavaScript Example
First, we create a simple array to create an array of 9 numbers, and we save it to a constant variable called _POSSIBLE_KEYS_ to be used in the future.
```
const oneTimePadKey = () => {
  const numbers = [];

  for( let i=0; i< 10; i++ ) {
    numbers.push( i );
  }

  return numbers;
};

const POSSIBLE_KEYS = oneTimePadKey();
```

Then, we create a simple encryption function using one of the possible keys.  In this function, we save the key we need to unlock it, and then we delete it from the constant _POSSIBLE_KEYS_ array to ensure we never use it again.
```
const oneTimePadEncryption = ( theSecretMessage ) => {
  const randIdx = [ Math.floor ( Math.random() * POSSIBLE_KEYS.length ) ];

  const key     = POSSIBLE_KEYS[ randIdx ];
  POSSIBLE_KEYS = POSSIBLE_KEYS.slice( 0, randIdx ).concat( POSSIBLE_KEYS.slice( randIdx + 1) );
};
```

We are going to use it to encrypt the secret message we were given with the key we have saved.  Before we do so, we need to turn our key into a binary string in order to XOR convert our secret message.
```
const convertKeyToBinary = ( key ) => {
  let number         = key.charCodeAt(0);
  const binaryResult = [];   

  while (number > 0) {
    let remainder = number % 2;
    
    binaryResult.unshift( remainder );

    number = Math.floor( number / 2 );
  }

  if ( binaryResult.length !== 8 ) {
    let numberOfIterations = 8 - binaryResult.length;

    for ( let i=0; i< numberOfIterations; i++ ) {
      binaryResult.unshift( 0 );
    }
  }

  return binaryResult.join('');
};
```

Now we step through the secretmessage, convert each character to binary and XOR it, and then return the encrypted message.
```
const secretMessageEncryptor = ( theSecretMessage, key ) => {
  const encryptedMessage = [];

  theSecretMessage.split('').forEach( letter => {
    let binaryOfLetter = convertLetterToBinary( binaryOfLetter );

    let XORd = testForXOR( binaryOfLetter, key );

    let encryptedCharacter = convertBinaryToLetter( XORd );

    encryptedMessage.push( encryptedCharacter );
  });

  return encryptedMessage.join('');
};
```

Voila!  Our encrypted message.  You may have noticed there are a number of functions that were pre-written and used in our _secretMessageEncryptor_, that we didn't cover.  It was done on purpose, for the sake of the challenge, but I'm sure you can quickly figure it out.

Here's the challenge: [Single-byte XOR cipher](https://cryptopals.com/sets/1/challenges/3)

Once your done with that, go ahead and check out [example 1](./example1.js) and see if we were on the same page when building our One Time Pad functions.

Good luck!

___