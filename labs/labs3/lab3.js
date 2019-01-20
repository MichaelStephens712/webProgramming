class lab3 {
  testDefaultParameters(first, second = 100) {
    return {
      first,
      second
    };
  }

  testTemplateLiterals(first, middle, last) {
    return `${first}, ${middle}, ${last}`;
  }

  testMultilineStrings() {
    return `This is a
really long string
that spans multiple lines.
Isn't it cool!`;
  }

  testSortWithArrowFunction(numberArray) {
    numberArray.sort((a, b) => {
      if(a == b) {
        return 0;
      } else if(a < b) {
        return 1;
      } else {
        return -1;
      }
    });
    return numberArray;
  }
}

export {lab3};
