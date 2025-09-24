const calPoints = (ops) => {
  if (ops.length <= 1 || ops.length >= 1000) return;
  console.log("pass");
  //   find if there is an a,b, or +
  const secondRule = ops.find((el) => {
    return el === "c" || el === "d" || el === "+";
    // return el === "a";
  });

  // if it is a then =>

  if (secondRule === "c" && ops.length > 1) {
    // "C" - Invalidate and remove the previous score, record is now [5].
  }
  if (secondRule === "+" && ops.length > 2) {
    //   it needs to add the two previos values
    // "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
  }
  if (secondRule === "d" && ops.length > 1) {
    // "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
  }

  //   console.log(secondRule);
  //   if (secondRule) return;
  //   console.log(ops);
  //   console.log("there are not string");
};

// const prove = [1, 2, "+"];
// const prove = ["c", 1, 2, 3, 4];
const prove = [1, 2, 3, 4];
calPoints(prove);
