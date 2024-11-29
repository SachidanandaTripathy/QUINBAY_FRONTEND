function chunkArrayInGroups(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) {
      let sp = [];
      for (let j = 0; j < size && i + j < arr.length; j++) {
        sp.push(arr[i + j]);
      }
      res.push(sp);
    }
    return res;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));