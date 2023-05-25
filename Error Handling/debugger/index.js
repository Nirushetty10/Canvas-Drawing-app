// onload = function () {
//     console.log(frames[0].document);
// }


// function loop(x) {
//     if (x >= 1000000000000) return;
//     // do stuff
//     loop(x + 1);
//   }
//   loop(0);

// try {
//     throw new Error("Whoops!");
//   } catch (e) {
//     console.error(`${e.name}: ${e.message}`);
//   }
  
// try {
//     foo.bar();
//   } catch (e) {
//     if (e instanceof EvalError) {
//       console.error(`${e.name}: ${e.message}`);
//     } else if (e instanceof RangeError) {
//       console.error(`${e.name}: ${e.message}`);
//     }

//     else {
//       console.log("hi");
//       throw e;
//     }
//   }

try {
    null.f();
  } catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message); // "null has no properties"
    console.log(e.name); // "TypeError"
    console.log(e.fileName); // "Scratchpad/1"
    console.log(e.lineNumber); // 2
    console.log(e.columnNumber); // 2
    console.log(e.stack); // "@Scratchpad/2:2:3\n"
  }
  