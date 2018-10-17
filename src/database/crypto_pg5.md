# Frequency Analysis
Challenge 4: [Detect single-character XOR](https://cryptopals.com/sets/1/challenges/4)

### Table Of Contents
* [Main Page](../)
* [Encoding Magic Numbers: Integers](../problem1/)
* [Digital Logic](../problem2/)
* [One Time Pad](../problem3/)
* Frequency Analysis
* [Time Complexity](../problem5/)
* [Hamming Distance](../problem6/)
* [link] AES-128 in ECB? *what?*
* [link] TBD
---
### Detection
In the previous challenge, we were fortunate that the secret message was written in plain text english, but what if we were attempting to decrypt something that was not a silly string of words.  We would need a function that is a bit more pragmatic in its approach.  Something more elegant than a brute force search, which is why we were given a hint to create a function that would check for character frequency.

By doing so, we can minimize the number of possible answers to a small fraction of the original output.

##### Parts of Challenge 3's solution
We are going to briefly discuss bits of the solution for challenge three in order to better understand today's challenge.

Below is one of the functions we used to solve the previous challenge.
```
const decodeSingleByteXOR = ( toDecode ) => {
    // First, we decode the string from its hex to ASCII characters
    let decoded = decodeFromHex( toDecode );

    // Next we convert our characters in the decoded string to binary
    // and set it inside an Object for quick access
    const keys = {};

    Object.keys( decoded ).forEach( ch => {
      keys[ ch ] = convertLetterToBinary( ch );
    });


    // Max Score, Possible Answer, Possible Key
    let key, answer;
    let highScore = 0;

    // Once that is completed, we are going to iterate through all possible ASCII characters/symbols and convert them to binary
    for( let i=0; i< 256; i++ ) {
      let scored = 0;

      let character = String.fromCharCode( i );

      let binaryASCII = convertLetterToBinary( character );

      // building a possible answer as we go
      let possibleAnswer = '';

      // We now iterate through the keys object to do our XOR comparisons
      Object.keys( keys ).forEach( binaryOfKey => {
        let binaryResult = xorConversion( binaryASCII, binaryOfKey );

        // Add the frequency score to the parent score
        scored += xorScore( binaryResult );

        possibleAnswer += binaryToLetter( binaryResult );
      });

      // Check if score is valid, then add choose this answer and key
      if( scored > highScore ) {
        highScore = scored;
        key = character;
        answer = possibleAnswer;
      }
    }

    // Return the key and answer
    return key, answer;
};
```

As you can see, this parent function is simple, but long.  All it does is step through all possible ASCII letters and does the comparisons for us.  The objective of the function is to look for all possible answers after each XOR conversion has been done.

The important thing to note in this function is why we counted the characters after the XOR comparison and not before the XOR comparison.  The reason for it is because we are _heuristically_ assuming that the solution to today's problem will be one written in plain text and not an additional layer of cipher text that we need to decode.

When decoding other cipher blocks, we need to ensure that we always consider the importance of cipher/decypher orders, and we may sometimes have to try different orders to see which works best.

In the next function, we will see another _heuristic_ approach to our solution.  In it we count the number of times symbols appear in the given possible answer, but given that we are assumming the actual answer will be written in plain text English, we only account for capital and lower case English letters. (_[example 1](./example1.js)_)
```
const frequencyScores = ( binaryResult ) => {
  // This frequency object was taken off http://norvig.com/mayzner.html
  const frequencies = {
    'a': 0.0651738,
    'b': 0.0124248,
    'c': 0.0217339,
    'd': 0.0349835,
    'e': 0.1041442,
    'f': 0.0197881,
    'g': 0.0158610,
    'h': 0.0492888,
    'i': 0.0558094,
    'j': 0.0009033,
    'k': 0.0050529,
    'l': 0.0331490,
    'm': 0.0202124,
    'n': 0.0564513,
    'o': 0.0596302,
    'p': 0.0137645,
    'q': 0.0008606,
    'r': 0.0497563,
    's': 0.0515760,
    't': 0.0729357,
    'u': 0.0225134,
    'v': 0.0082903,
    'w': 0.0171272,
    'x': 0.0013692,
    'y': 0.0145984,
    'z': 0.0007836,
    ' ': 0.1918182 
  };

  // Convert binary to character
  let character = binaryToLetter( binaryResult );

  // make sure its lowercase
  character = character.toLowerCase();

  // Check if character is in the frequency object
  if( character in frequencies ) {
    // return the frequency percentage
    return frequencies[ character ];
  } 
  
  // else return nadda
  else {
    return 0;
  }
};
```

Here, our score function is evaluating the character itself.  When the XOR'd binary string turns out to be within the English language, or a space character, then we want to give the overarching key _points_ for a positive result, else we have it return 0 for not being so. (_[example 2](./example2.js)_)

Hopefully this helps!  Off you go to tackle today's challenge: [Detect single-character XOR](https://cryptopals.com/sets/1/challenges/4)

Good luck!

#### Bonus
##### Symmetric-Key Encryption
Symmetric-Key Encryptions are algorithms that use the same cryptographic keys for both encryption of plain text and decryption of cipher text.  The keys themselves can be identical when used or is some transformation that occurs between the two keys.  For the last few challenges, we have been learning how to manipulate the most basic forms of symmetric-key encryptions.  The more advanced algorithms used on today's computers can be listed here: [GlobalSign](https://www.globalsign.com/en/blog/glossary-of-cryptographic-algorithms/).

