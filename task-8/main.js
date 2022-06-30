const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input;  
    let str = a.split(" ");
    let str1;
    let str2 = [];
    for (let i = 0; i < str.length; i++) {
        let str1 = str[i].substring(0,1).toUpperCase() + str[i].slice(1);
        str2.push(str1);
    }
    console.log(str2.join(" "));
  
});
