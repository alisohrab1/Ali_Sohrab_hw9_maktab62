function printName(fname,lname){
    console.log(fname +" "+ lname);
}
function main(fname,lname,cb){
    cb(fname,lname);
}

main("ali","sohrab",printName);