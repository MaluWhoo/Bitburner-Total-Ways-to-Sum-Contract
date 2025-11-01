# Bitburner - Total Ways to Sum Contract

Solution for the "Total Ways to Sum" contract in the Bitburner game.

```contract-458222-JoesGuns.cct```

---

## 📋 Problem Description

Total Ways to Sum
You are attempting to solve a Coding Contract. You have 10 tries remaining, after which the contract will self-destruct.

It is possible write four as a sum in exactly four different ways:

    3 + 1
    2 + 2
    2 + 1 + 1
    1 + 1 + 1 + 1

How many different distinct ways can the number 87 be written as a sum of at least two positive integers?

If your solution is an empty string, you must leave the text box empty. Do not use "", '', or ``.

---

## 💻 Usage
```javascript
// For the contract with number 87
const answer = totalWaysToSum(87);
// Answer: [38887672]
```

## 🧠 Algorithm
- Approach: Dynamic Programming (Bottom-Up)
- Complexity: O(n²)
- Logic: Build smaller solutions to solve the larger problem
  

## 📊 How It Works
The algorithm uses dynamic programming to count partitions:

- dp[0] = 1 (base case - one way to make sum 0: use no numbers)
- For each number from 1 to n-1, update all possible sums
- dp[soma] += dp[soma - num] means "add all ways to make (sum - num) using current number"
