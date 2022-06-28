const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input;  
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == "!") {
            count++;
        }else if(a[i] == "?") {
            count++;
        }else if(a[i] == ".") {
            count++;
        }
    }
    console.log(count);
  
});
