# Encoding Magic Numbers: Integers
Challenge 1: [Convert hex to base64](https://cryptopals.com/sets/1/challenges/1)

### Table Of Contents
* [Main Page](../)
* Encoding Magic Numbers: Integers
* [Digital Logic](../problem2/)
* [One Time Pad](../problem3/)
* [Frequency Analysis](../problem4)
* [Time Complexity](../problem5/)
* [Hamming Distance](../problem6/)
* [link] AES-128 in ECB? *what?*
* [link] TBD
---
### Refreshing our minds with the number systems ( Magic Numbers )
BaseN encoding is the process of representing a number system through a set of symbols or characters.  The standard decimal system, the one we are most familiar with (which counts 0, 1, 2... 10, 11, 12... 20, 21, etc...), is one such system.  The other systems you may have heard of differs slightly based on how many N symbols or characters used to be a representation of the value we wish to encode.
```
For example: 
Base2 encoding system, otherwise known as Binary, which uses 1's and 0's.
Base16 encoding system, aka Hexadecimal, which uses the numbers 0 - 9 and the characters from A - F.
```

In our case to solve the first challenge, Base64 encoding is used to encode binary data with 64 symbols and characters.  The characters usually being capitalized and lowercase letters from A-Z, while the symbols are + and /. 

Additionally, BaseN encoding is positionally set.  Meaning, that the position of the number within a given number, or the position of a symbol and/or character, matters for both encrypting and decrypting.
```
For example:
In a Base2 binary system: 11100111 is always going to equal to 231, and 231 will always equal 11100111.
```

The reason behind the importance of the placement of the number lies in how we would go about encoding and decoding the given value.

### Encoding a decimal system
Encoding a number system from our standard decimal system is a simple process that can broken up into a few repeating steps that slightly varies from BaseN number system to BaseN number system.

##### Encoding to Binary
Binary system is usually represented by a byte, which is 8 characters long of 1's and 0's, with each bit (the 1 or 0) in the binary string a representation of 2 to the M power ordered from greatest to least.
```
2^7  2^6  2^5  2^4  2^3  2^2  2^1  2^0
128  64   32   16   8    4    2    1
```
Encoding a decimal number into binary means that we are checking whether or not a number can be subtracted by 2 ^ M until the number is zero.
```
For example:
Given value-  132

128 < 132, so 1 for true : leaving us with 132 - 128 = 4
64  < 4,   so 0 for false
32  < 4,   so 0
16  < 4,   so 0
8   < 4,   so 0
4   = 4,   so 1
2   < 0,   so 0
1   < 1,   so 0

Final answer: 1000100
``` 
This is but one way of converting decimal to binary, but its definitly not the most efficient method if we wish to write a small function to convert decimals to binary.  The are a number of other ways to do so.  Let's choose a simpler method, so that it will be easier for us to write a function for.

In the next method, we first take our given value, and long divide it by 2 ( since there are only 2 symbols/characters that can be represented ).
```
For example:
Given value-  2411

2411 / 2 = 1205 remainder 1

Binary Result = 1
```

Our remainder is the last digit in our soon to be Binary encoded string.  We repeat the above step and continuously add on to the front of our Binary encoded string until there is no more possible divsions.
```
1250 / 2 = 602 remainder 1
Binary Result = 11

602 / 2  = 301 remainder 0
Binary Result = 011

301 / 2  = 150 remainder 1
Binary Result = 1011

150 / 2  = 75 remainder 0
Binary Result = 01011

75  / 2  = 37 remainder 1
Binary Result = 101011

37  / 2  = 18 remainder 1
Binary Result = 1101011

18  / 2  = 9 remainder 0
Binary Result = 01101011

9   / 2  = 4 remainder 1
Binary Result = 101101011

4   / 2  = 2 remainder 0
Binary Result = 0101101011

2   / 2  = 1 remainder 0
Binary Result = 00101101011

With the 1 we have left (which is less than two, but not zero), we take the value and concat it to the front of the Binary Result.
Binary Result = 100101101011
```

_well, that was fun doing by hand... so, glad we have computers for this_

Last, our Binary result usually is representated as bytes (remember 8 bits in a byte), so we have to tack on a few zeros to the beginning of the encoded system to fill it out to 16 bits (or two bytes).
```
Binary Result = 0000100101101011
```

Easy, right?  Sweet.

Here's a short ES5 JavaScript function, found in [example 1](./example1.js), to help cemete the understanding.

Onwards!  To Hexadecimal.

##### Encoding to Hexadecimal
Hexadecimal representation is the same as binary, and if we opted to we could do the long method of converting decimal numbers to binary.  But, since we are planning to write a short function for this, let's do this the easy way.

First, we look at our given value we wish to encode, and long divide it by 16 ( yup, 16 for 16 symbols/characters that can be represented ).
```
For example:
Given value-  2411

2411 / 16 = 150 with 11 remaining
```

We then take the remainder left over and that number will be our first hex digit, with A represented as 10, B being 11, and so on.
```
Hex digit-  0 1 2 3 4 5 6 7 8 9 A B C D E F

Remainder of 2411 / 16 is 11

First Hex Digit-  B
```

If, the result of the division is greater than 16, we repeat the steps above with each Hex Digit added on before the previous Hex Digit result until the result of the division is no longer greater than 16.
```
Result from previous dvision-  150
First Hex-  B

150 / 16 = 9 with 6 remaining

Second Hex Digit-  6
Hex conversion so far-  6B
```

Once we have a divided result that falls within the Hex Digit range, we take that result and convert it to a Hex Digit and add it to our conversion thus far.
```
Result from previous division-  9
Hex Conversion so far-  6B

Hex Conversion final result-  96B
```

Yeah!  We got our first Hex conversion.  Easy peezy.

Now, to write that out in JavaScript.  [Example 2](./example2.js) is a simple function is written in ES5 JavaScript.

Cool, and let's cover decoding these two number systems before we move on to base64.

### Decoding a number system
Decoding is exactly as it sounds like, we reverse the process which took us from a decimal number to its BaseN number.  So, from BaseN to decimal number system.

##### Decoding binary
Since we know that a binary number is the representation of whether or not 2 ^ M exists, all we have to do is write out the binary number, and its corresponding 2 ^ M value.
```
For example:
Given binary-  0001011010101101

0    0    0    1    0    1    1    0    1    0    1    0    1    1    0    1
2^15 2^14 2^13 2^12 2^11 2^10 2^9  2^8  2^7  2^6  2^5  2^4  2^3  2^2  2^1  2^0
```

We then take the number of occurrences and sum up each 2 ^ M power to get our final answer.
```
2^12 + 2^10 + 2^9 + 2^7 + 2^5 + 2^3 + 2^2 + 2^0
4096 + 1024 + 512 + 128 + 32  + 8   + 4   + 1 

Final answer- 5805
```

Now, our simple ES5 Function: [example 3](./example3.js).

##### Decoding hexadecimal
For converting hexadecimal to decimal, there are a number of ways we can go about doing it, but one of the simplest method is to break up each hexadecimal into its individual octet (4 bits) of binary strings.
```
For example:
Given Hexadecimal-  B8F3

HEX DIGITS = 0 1 2 3 4 5 6 7 8 9 A B C D E F
Binary     = 2^3 2^2 2^1 2^0  =  8 4 2 1

B = 11 =>  1 0 1 1
8 = 8  =>  1 0 0 0
F = 15 =>  1 1 1 1
3 = 3  =>  0 0 1 1
```

Concat the binary strings into one string
```
1 0 1 1 + 1 0 0 0 + 1 1 1 1 + 0 0 1 1

Binary string = 1011100011110011
```

Math it from binary to decimal.
```
1    0    1    1    1    0    0    0    1    1    1    1    0    0    1    1
2^15 2^14 2^13 2^12 2^11 2^10 2^9  2^8  2^7  2^6  2^5  2^4  2^3  2^2  2^1  2^0

32768 + 8192 + 4096 + 2048 + 128 + 64 + 32 + 16 + 2 + 1

Final answer- 47347
```

You got this?  Great job!  Here's a function for you: [example 4](./example4.js).

### Base64
Given that Base64 encoding uses Roman letters instead of integers, there is one additional step we would have to take to do our encoding and decoding, and that is converting around the ASCII, [American Standard Code for Information Interchange](http://www.asciitable.com/), system where we use the numbers in said system to convert into 3 binary strings called octetats, 6-bits in length, to form 24-bit strings of length.

##### Encoding to base64
We only have a few additional steps to do before we do our standard conversion which is to convert the given value, broken up into its respective part, into ASCII using this [chart](http://www.flexcomm.com/library/ASCII256.htm) (if there is an algorithm for it, please let me know).
```
For example:
Given value-  2411

ASCII value- 50 52 49 49
```

Then we convert this value to binary 8-bit strings.
```
Using what we learned earlier:

50 / 2 = 25 R 0  Binary String = 0
25 / 2 = 12 R 1  Binary String = 10
12 / 2 = 6  R 0  Binary String = 010
6  / 2 = 3  R 0  Binary String = 0010
3  / 2 = 1  R 1  Binary String = 10010
1  / 2 = 0  R 1  Binary String = 110010

Final result-  00110010

ASCII 52-      00110100
ASCII 49-      00110001
ASCII 49-      00110001
```

Concat the strings and then break them up into 6-bit lengths, octeats.
```
Our binary number-  00110010 + 00110100 + 00110001 + 00110001

001100 | 100011 | 010000 | 110001 | 001100 | 01
```

Now from binary to base64
```
base64-  { 0: A, B: 1, C: 2... Z: 25, a: 26, b: 27... 9: 61, +: 62, /: 63 }
binary-  [ 2^5, 2^4, 2^3, 2^2, 2^1, 2^0 ] = [ 32, 16, 8, 4, 2, 1 ]

001100 = 4  + 8     = 12     = M
100011 = 32 + 2 + 1 = 35     = j
010000 = 16         = 16     = Q
110001 = 32 + 16    = 49     = x
001100 = 8  + 4     = 12     = M

Final result-  MjQxM
```

Given that each octeats is 6-bits long, we need to pad out the last value with zeros to accomodate for this.  
```
01 -> 010000 = 16 = Q

Final result- MjQxMQ
```

Finally, base64 encoded strings are represented as 4 bits in length, so we again pad out any remaining positions.  This time we use the equal ( '=' ) sign. 
```
MjQx MQ==

Final result-  MjQxMQ==
```

Ta da!  Our first encoded string to base64.  Very good.

Now time for some JavaScript: [example 5](./example5.js)

##### Decoding hexadecimal
Time to reverse this bad boy.

First up, we seperate the base64 characters and symbols and convert to its numerical value.
```
For example:
Given base64-  bW9ua2V5

const BASE_64 = {
  0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J',
  10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P', 16: 'Q', 17: 'R', 18: 'S',
  19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X', 24: 'Y', 25: 'Z', 26: 'a', 27: 'b',
  28: 'c', 29: 'd', 30: 'e', 31: 'f', 32: 'g', 33: 'h', 34: 'i', 35: 'j', 36: 'k',
  37: 'l', 38: 'm', 39: 'n', 40: 'o', 41: 'p', 42: 'q', 43: 'r', 44: 's', 45: 't',
  46: 'u', 47: 'v', 48: 'w', 49: 'x', 50: 'y', 51: 'z', 52: '0', 53: '1', 54: '2',
  55: '3', 56: '4', 57: '5', 58: '6', 59: '7', 60: '8', 61: '9', 62: '+', 63: '/'
};

b = 27, W = 22, 9 = 61, u = 46, a = 26, 2 = 54, V = 21, 5 = 57
```

Then we convert the results to its binary value and concat the strings.
```
27 = 011011
22 = 010110
61 = 111101
46 = 101110
26 = 011010
54 = 110110
21 = 010101
57 = 111001

011011 + 010110 + 111101 + 101110 + 011010 + 110110 + 010101 + 111001

Result-  011011010110111101101110011010110110010101111001
```

Seperate them by 8-bit lengths.
```
01101101 | 01101111 | 01101110 | 01101011 | 01100101 | 01111001
```

Convert from binary to number to ASCII numbers.
```
01101101 = 109 = m
01101111 = 111 = o
01101110 = 110 = n
01101011 = 107 = k
01100101 = 101 = e
01111001 = 121 = y

Result-  monkey
```

Yea!  We did it!  Before we forget, here's the function: [example 6](./example6.js) 

If you read all the way through to this point, you are definitely awesome!  Check it, now that we have the basics down, let's try our hand with the challenge.  Here's the link... [Convert hex to base64](https://cryptopals.com/sets/1/challenges/1)

Good Luck!

P.S.  If there are any improvements I can make in this project, let me know!  I wanna be better.

---
#### Bonus:
* [YouTube: schenken](https://www.youtube.com/watch?v=g8OhjcudKAo) - an excellent 4-min explanation on the basic concept behind Base64 Encoding
* [base64 chart](https://www.garykessler.net/library/base64.html) - for a quick reference