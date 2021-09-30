/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.*/

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
      for (let i = 0; i < splitStr.length; i++) {
   
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
      return splitStr.join(' '); 
   }