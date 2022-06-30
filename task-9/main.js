
  let s = "This is a cat sitting on a table";
  let c = "t";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i].toLocaleLowerCase() == c) {
          count++;
      }        
  }
  console.log(count);





// const prompt = require('prompt');
// prompt.start();

// prompt.get('input',function(err, result) { 
//     let s = result.input.split(',')[0].toLocaleLowerCase(); 
//     let c = result.input.split(',')[1];
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == c) {
//             count++;
//         }        
//     }
//     console.log(count);
// });



