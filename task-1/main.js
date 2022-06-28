const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let arr2 = [31,15,30];
    arr2.sort((a,b) => {
        return a - b;
    })
    console.log(arr2[0]);
  
});
