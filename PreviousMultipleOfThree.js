/*Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9*/

const prevMultOfThree = n => {

    if (n === 0) return null;
    if (n%3 === 0) return n;
    return prevMultOfThree(+n.toString().slice(0, -1));
  }