function formatAsSecondsAsString(num) {
  // if(num <60){
  //     if(num === 1){
  //         return `${num} second`;
  //     }
  //     return `${num} seconds`;
  // }
  // else if(num === 60){
  //     return
  // }
  // else

  //   if (num > 60 && num <= 3600) {
  let minutes = Math.floor(num / 60);
  let seconds = num % 60;
  if (minutes > 0 && seconds > 0) {
    return `${minutes} minute ${minutes > 1 ? "s" : ""}and ${seconds} second${
      seconds > 1 ? "s" : ""
    }`;
  } else if (minutes === 0 && seconds > 0) {
    return `${seconds} second${seconds > 1 ? "s" : ""}`;
  }
  // else if(seconds === 1) {
  //     return `${minutes} minutes and ${seconds} second`;
  // }
  return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  //   }
  // else if (num > 3600) {
  //     let minutes = Math.floor((num % 3600) / 60);
  //     let seconds = num % 60;
  //     let hours = Math.floor(num / 3600);

  //     if (hours === 1 && minutes === 1 && seconds === 1) {
  //       return `${hours} hour, ${minutes} minute and ${seconds} second`;
  //     } else if (hours === 1 && minutes === 1) {
  //       return `${hours} hour, ${minutes} minute and ${seconds} seconds`;
  //     } else if (hours === 1 && seconds === 1) {
  //       return `${hours} hour, ${minutes} minutes and ${seconds} second`;
  //     } else if (minutes === 1 && seconds === 1) {
  //       return `${hours} hours, ${minutes} minute and ${seconds} second`;
  //     } else if (hours === 1) {
  //       return `${hours} hour, ${minutes} minutes and ${seconds} seconds`;
  //     } else if (minutes === 1) {
  //       return `${hours} hours, ${minutes} minute and ${seconds} seconds`;
  //     } else if (seconds === 1) {
  //       return `${hours} hours, ${minutes} minutes and ${seconds} second`;
  //     }
  //     return `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  //   }
}

// console.log(formatAsSecondsAsString(60));

test("converts time to seconds as a string", function () {
  const currentOutput = formatAsSecondsAsString(0);
  const targetOutput = "1 minute and 5 seconds";

  expect(currentOutput).toBe(targetOutput);
});

// test("converts time to minutes and seconds as a string", function () {
//   const currentOutput = formatAsSecondsAsString(89);
//   const targetOutput = "1 minute and 29 seconds";

//   expect(currentOutput).toBe(targetOutput);
//   expect(formatAsSecondsAsString(3456)).toBe("57 minutes and 36 seconds");
// });

// test("converts time to hours, minutes and seconds as a string", function () {
//   const currentOutput = formatAsSecondsAsString(4538);
//   const targetOutput = "1 hour, 15 minutes and 38 seconds";

//   expect(currentOutput).toBe(targetOutput);
//   expect(formatAsSecondsAsString(78535)).toBe(
//     "21 hours, 48 minutes and 55 seconds"
//   );
// });
