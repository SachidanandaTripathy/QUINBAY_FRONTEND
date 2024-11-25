function removeFirstTwo(list) {
    const [, , ...remain] = list;
    return remain;
}

const source = [1, 2, 3, 4, 5];
const sourceWithoutFirstTwo = removeFirstTwo(source);