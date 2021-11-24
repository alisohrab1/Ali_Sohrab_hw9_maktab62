const fs = require('fs');

fs.open('newfile.txt', 'w', function (err, file) {
  if (err){
      console.log(err);
  };
  console.log('Saved!');
});

fs.access('./newfile.txt',function (err, file){
    if (err){
        console.log(err);
    };
    console.log('Exists!');

});


/////////SYNC
try{
    fs.openSync('newfileSync.txt','w')
} catch(err){
    console.error(err)
}

try{
   if(fs.existsSync('newfileSync.txt')) {
       console.log("exists!");
   }
}catch(err){
    console.log(err);
}