function largestOfFour(arr) {
    let arrs=[];
    for(let i=0;i<arr.length;i++){
      let max=arr[i][0];
      for(let j=0;j<arr[i].length;j++){
        if(max<arr[i][j]){
          max=arr[i][j];
        }
      }
      arrs.push(max);
    }
    return arrs;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);