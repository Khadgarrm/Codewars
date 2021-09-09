/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.*/

function between(a, b) {
    let result = [];
    for (let i = a + 1; i < b ; i++) {
      result.push(i);
    }
    result.push(a, b);
    return result.sort((a, b) => a -b);
  }