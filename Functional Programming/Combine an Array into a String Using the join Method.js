function sentensify(str) {
    // Only change code below this line
    return str.split(/[^a-zA-Z0-9]+/).join(" ");
    // Only change code above this line
  }
  
  sentensify("May-the-force-be-with-you");