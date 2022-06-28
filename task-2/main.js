const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input.split(',')[0];
    
    for (let i = 0; i < a.length; i++) {
        if (a[0] > a[a.length - 1]) {
            console.log(a[0]);
            break;
        }else if(a[0] < a[a.length - 1]) {
            console.log(a[a.length - 1]);
            break;
        }else {
            console.log('=');
            break;
        }
    }
});
