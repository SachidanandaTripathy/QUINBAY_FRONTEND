function titleCase(str) {
    let words = str.split(" ");
    let result = '';  
    for (let i = 0; i < words.length; i++) {
      let word = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      result += word + " ";
    }
    return result.trim();
  }
  
  titleCase("I'm a little tea pot");