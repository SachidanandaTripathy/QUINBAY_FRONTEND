function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longest = "";
    let maxLength = 0; 
    for (let i = 0; i < arr.length; i++) {
      let length = arr[i].length;
      if (length > maxLength) {
        longest = arr[i];  
        maxLength = length;
      }
    }
    return maxLength;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  