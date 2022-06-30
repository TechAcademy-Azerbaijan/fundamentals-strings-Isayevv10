const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input.split('');
   
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            var firstIndex = str.indexOf(' ');
            var lastIndex = str.lastIndexOf(' '); 
        }
    }
    console.log(firstIndex);
    console.log(lastIndex);
  
});
