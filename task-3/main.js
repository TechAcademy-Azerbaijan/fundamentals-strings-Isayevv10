const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input;   
    let count = 0;
    let count2 = 0;
    for (let i = 0; i < a.length; i++) {

        if (a[i] == '2') {
            count++;
        }
        if (a[i] == '5') {
            count2++;
        }
       
    }
    if (count > count2) {
        console.log('2');
    }else if(count < count2) {
        console.log('5');
    }else {
        console.log('=');
    }
  
});
