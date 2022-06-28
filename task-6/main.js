const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input;  
    let str = a.split(" ");
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "") {
           count++;
        }
    }
    console.log(count);
  
});
