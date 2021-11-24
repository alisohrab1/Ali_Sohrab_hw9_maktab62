// // *****************PART A
const fs = require("fs");

// fs.readFile("from.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   let text1 = data + "Async";
//   fs.writeFile("to.txt", text1, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });
// });
// // *****************PART B
// try {
//   const data = fs.readFileSync("from.txt", "utf8");
//   var text2 = data + "Sync";
// } catch (err) {
//   console.error(err);
// }

// try {
//   fs.writeFileSync("to.txt", text2);
//   //file written successfully
// } catch (err) {
//   console.error(err);
// }

// *****************PART C
// fs.readFile("from.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   let text1 = data + "Async";
//   fs.writeFile("to.txt", text1, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });
// });

// fs.readFile("append.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   let text1 = data + "Async";
//   fs.appendFile("to.txt", text1, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   });
// });

// *****************PART D
try {
  const data = fs.readFileSync("from.txt", "utf8");
  var text3 = data + "Sync";
} catch (err) {
  console.error(err);
}

try {
  fs.writeFileSync("to.txt", text3);
  //file written successfully
} catch (err) {
  console.error(err);
}

try {
  const data = fs.readFileSync("append.txt", "utf8");
  var text4 = data + "Sync";
} catch (err) {
  console.error(err);
}

try {
  fs.appendFileSync("to.txt", text4);
  
} catch (err) {
  /* Handle the error */
}
