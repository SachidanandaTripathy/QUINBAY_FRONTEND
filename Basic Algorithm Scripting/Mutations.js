function mutation(arr) {
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();
    const charMap = new Map();
    for (let char of first) {
      charMap.set(char, true);
    }
  
    for (let char of second) {
      if (!charMap.has(char)) {
        return false;
      }
    }
    return true;
  }
  