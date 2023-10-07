// IMPORTANT: Read 2.md first before using this file!
// ## Predict -> Run -> Observe -> Explain

// let count = 0;

// while(count < 10) {
//     count++;
//     console.log('*'.repeat(count))
// }


function isMultipleOfTen(n) {
  return n % 10 == 0;
}


  test("one word string gives a count of 1", function () {
  expect(isMultipleOfTen(80)).toBe(true);;
});

const testName = () => {

}