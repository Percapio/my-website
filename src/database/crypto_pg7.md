# Hamming Distance
Challenge 6: [Break repeating-key XOR](https://cryptopals.com/sets/1/challenges/6)

### Table Of Contents
* [Main Page](../)
* [Encoding Magic Numbers: Integers](../problem1/)
* [Digital Logic](../problem2/)
* [One Time Pad](../problem3/)
* [Frequency Analysis](../problem4/)
* [Time Complexity](../problem5/)
* Hamming Distance
* [link] AES-128 in ECB? *what?*
* [link] TBD
---
### Hamming Distance
What is Hamming Distance?  According to everyone's best friend, [Wikipedia](https://en.wikipedia.org/wiki/Hamming_distance), Hamming Distance is an information theory where the distance "between two strings of equal length is the number of positions at which the corresponding symbols are different". In short, it is the measurement of the *minimum* number of character substitutions required to transform one string into another.


##### Kasiski examination
When coupled with Frequency Analysis, we are able to discover the most likely length of the key needed to decipher a cipher string.  This method of attacking a cipher is called [Kasiski examination](https://en.wikipedia.org/wiki/Kasiski_examination), and it "involve's looking for strings of characters that are repeated in a ciphertext".  The reason this works is due to how, as you may have noticed when we were encrypting the message in the last challenge, the key is dependent upon the length of the key.  Once we are able to deduce the length of the key, we can then break down the cipher text into chunks the length of the key itself.
```
      Cipher text-  wsluiw rcoh vsto rys
      key-          KEY

      break into chunks of length 3:
      wsl | uiw | rco | h v | sto | rys
```

Following this, we do a single-key decryption on the position of the key using the Frequency analysis function we wrote up before, and then repeat it on every following position.
```
      position 1 of the key includes letters:
      w u r h s r

      position 2 of the key includes letters:
      s i c   t y
      
      position 3 of the key includes letters:
      l w o v o s
```

Doing this allows for the decryption process to be a lot more manageable by breaking up the cipher text into smaller chunks.  It also helps that we know how the original plain text was encrypted as well.

##### JavaScript
Let us cover step two of the challenge. "_Write a function to compute the edit distance/Hamming distance between two strings. The Hamming distance is just the number of differing bits. The distance between_:"
```
String A-  'monkey need love too'
String B-  'haters going to hate'

Distance- 53
```

Our first step is the conversion of each ASCII character into binary format.
```
// First half of the function
const findHammingDistance = ( stringA, stringB ) => {

  // Counter of non-same bits
  let nonSameBitCounter = 0;

  // We are going to assume the string lengths are the same
  // and iterate through them using an index value to choose
  // each corresponding character in the string to do our
  // bit checks
  for( let i=0; i< stringA.length; i++) {

    // We have a small function that converts our characters
    // to ASCII number then to binary
    let bitsOfA = convertToBits( stringA[ i ] );
    let bitsOfB = convertToBits( stringB[ i ] );

    // We make sure our binary strings are of the same lengths
    bitsOfA, bitsOfB = checkBinarySize( bitsOfA, bitsOfB );
  }
}
```

After we have the necessary binary strings for the character, we are going to go through and check each bit in the binary to see if they are the same.
```
// Second-half of findHammingDistance

    // Another for-loop to check the bits within the binary strings
    // against one another for similarity

    for( let j=0; j< bitsOfA.length; j++ ) {
      if( bitsOfA[ j ] !== bitsOfB[ j ] ) {

        // if they are not the same, raise the counter by one
        nonSameBitCounter++;
      }
    }
  }

  return nonSameBitCounter;
```

Once we have completely iterating over both input strings, then we return _nonSameBitCounter_ for further use.

Simple, yeah?  Cool.  

If you want to see the full function in its entirety head on over to [example 1](./example1.js)

Once you've got the practice down, head on over to the challenge: [Break repeating-key XOR](https://cryptopals.com/sets/1/challenges/6)

Good Luck!

Oh! and if you haven't started already, try desigining your functions with the pre-built methods/functions/prototypes that comes with your given programming language.