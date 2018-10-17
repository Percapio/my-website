# Digital Logic
Challenge 2: [Fixed XOR](https://cryptopals.com/sets/1/challenges/2)

### Table Of Contents
* [Main Page](../)
* [Encoding Magic Numbers: Integers](../problem1/)
* Digital Logic
* [One Time Pad](../problem3/)
* [Frequency Analysis](../problem4/)
* [Time Complexity](../problem5/)
* [Hamming Distance](../problem6/)
* [link] AES-128 in ECB? *what?*
* [link] TBD
---
### XOR Foundations
Digital Logic is a sub-field of math that only allows variables to take one two possible outcomes: true and false.  One of the most common forms of using Digital Logic is AB testing, which is a variant test across multiple test groups to see which scenario performs the best when compared against variable A vs variable B.
```
0 = false
1 = true
```

##### AND
AND is testing two distinct variables to test whether or not both outcomes comes true in a given scenario.
```
                        A | B        AND  OR
        Scenario 1      0 | 0         0    0
        Scenario 2      1 | 0         0    1
        Scenario 3      0 | 1         0    1
        Scenario 4      1 | 1         1    1
```

In the above example we see that in Scenario 1, both are false, so this particular scenario is false.  In Scenario 2 & 3, only one variable returned true, so these scenarios are now considered false as well.  Leaving us with only Scenario 4, which both returned true thereby showing us only 1 out of 4 possible scenarios is true when testing for AND.

##### OR
OR testing is an inclusive test to check whether or not a variable has returned true in a given scenario.

Using the example we wrote out above, we once again see that in Scenario 1 both variables returned false, so testing for OR is false here.  While the remaining Scenarios, there are always at least 1 variable that returns true which means that the given scenarios are also true in OR testing.  Leaving us with 3 out of 4 possible scenarios when testing for OR.

##### XOR
XOR is a another form of AB testing that tests for whether or not a variant is true, much like OR testing.  The difference between the two is OR is inclusive while XOR is exclusive.  What this means is only one variable can be true, and not both variables, when testing in a given scenario.

For example, we have test group A and test group B.  They are given four scenarios to perform some task, and the results are as follows:
```
           _A_|_B_                         XOR
            0 | 0         Scenario: 1   =   0
            1 | 0         Scenario: 2   =   1
            0 | 1         Scenario: 3   =   1
            0 | 0         Scenario: 4   =   0
```

As we can see, in Scenario 1, both test groups were given a false indication when performing its task.  While in Scenario 4, both tests were given a true indication to perform the same task.  In XOR testing, these Scenarios would not be considered positive possiblities as XOR testing only looks for one successful outcome when both are being tested.

So, in short the positive results of XOR testing here would only return: Scenario 2 & 3.

Easy enough.  Let's put this into practice with a simple problem based on HackerRank's [XOR Strings](https://www.hackerrank.com/challenges/strings-xor/problem).

Given two input strings of Ones and Zeros, XOR test the two strings without modifying the original order of those strings.
```
    Scenario-  abcde
    String A-  00101
    String B-  10100
```

In scenarios _a_, _b_, _c_, _d_, and _e_, we can consider any scenario that returns the same result will be considered false by XOR standards, and true if they do not return the same results.
```
          A  |  B  
      a   0  |  1   not same : 1
      b   0  |  0   same     : 0
      c   1  |  1   same     : 0
      d   0  |  0   same     : 0
      e   1  |  0   not same : 1
```

In conclusion, the results of XOR is two cases: scenarios _a_ and _e_. 

##### NOT
The last thing to note is NOT testing.  When testing for NOT, we test one variable against itself.  In particular, we test for whether a variable returns true, and if by not having the variable wether it would return true still during a given scenario.

Everything made sense so far?  Awesome.

### Example Function
Now that we have the basics down.  Let's write a simple function out that would test two strings against each other to find XOR possibilities.
```
const testForXOR = ( stringA, stringB ) => {
  // the array we want to return our XOR results with
  const results = [];

  for(let i=0; i< stringA.length; i++) {

    // if the strings match as being both false or true return 0
    if( stringA[i] === stringB[i] ) {
      results.push( '0' );
    } 
    
    // else we return 1 for true
    else {
      results.push( '1' );
    }
  }

  return results.join('');
};
```

We take in both binary strings, A & B, and we do a simple _for_ loop and check each common positions against one another.  What we are looking for is exclusivity, meaning they cannot be similar.  We then return the results. (_[example](./example1.js)_)

Very easy!  Yeah!

You've got more then enough to get this problem a shot, so have at it! [Fixed XOR](https://cryptopals.com/sets/1/challenges/2)

Good Luck!

---