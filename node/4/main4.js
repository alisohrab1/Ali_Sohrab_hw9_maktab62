const fs = require("fs");
let names = [];
let namesObjArr = [];
let numbers = [];
let numbersObjArr = [];
try {
  let data = fs.readFileSync("names.txt", "utf8");

  names.push(data);
} catch (err) {
  console.error(err);
}

try {
  let data = fs.readFileSync("numbers.txt", "utf8");

  numbers.push(data);
} catch (err) {
  console.error(err);
}

// console.log(names.toString().split("\r\n"));
names = names.toString().split("\r\n");
for (let i = 0; i < names.length; i++) {
  let obj = {};
  let split = names[i].split("-");
  obj["id"] = split[0].trim();
  obj["name"] = split[1].trim();
  obj["numbers"] = [];
  namesObjArr.push(obj);
}

numbers = numbers.toString().split("\r\n");
for (let i = 0; i < numbers.length; i++) {
  let obj = {};
  let split = numbers[i].split("-");
  obj["id"] = split[0].trim();
  obj["number"] = split[1].trim();
  numbersObjArr.push(obj);
}

// console.log(namesObjArr);
//  console.log(numbersObjArr);

for (let obj1 of namesObjArr) {
  for (let obj2 of numbersObjArr) {
    if (obj1.id === obj2.id) {
      obj1.numbers.push(obj2.number);
    }
  }
}

function finalFileText(list) {
  let txt = "";
  for (let obj of list) {
    if (obj.numbers.length === 1) {
      txt += `${obj.name}'s phone number is ${obj.numbers[0]}\n`;
    } else if (obj.numbers.length > 1) {
      // let numbers = obj.numbers;

      txt += `${obj.name}'s phone numbers  are  ${obj.numbers}\n`;
    } else {
      txt += `${obj.name} doesn't have any phone number\n`;
    }
  }
  return txt;
}

function writeFinalFile() {
  let txt = finalFileText(namesObjArr);
  try {
    fs.writeFileSync("final.txt", txt);
    //file written successfully
  } catch (err) {
    console.error(err);
  }
}

writeFinalFile();