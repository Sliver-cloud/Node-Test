const fs = require('fs');
fs.readFile('dazafile.text', 'utf-8',

(err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});


