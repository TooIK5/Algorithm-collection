
//найти сумму нод
var tree = [{
  valueNode: 3,
  next: [{
    valueNode: 1,
    next: null
  },
  {
    valueNode: 3,
    next: null
  },
  {
    valueNode: 2,
    next: null
  },
  {
    valueNode: 2,
    next: [
      {
        valueNode: 1,
        next: null
      },
      {
        valueNode: 5,
        next: [
          {
            valueNode: 1,
            next: null
          },
          {
            valueNode: 5,
            next: null
          }
        ]
      }
    ]
  }]
}];

let sum = 0;

let foo1 = (arr) => {
  arr.next.forEach((e) => {
    sum += e.valueNode;
    if (e.next !== null) { foo(e) };
  })
  console.log(sum + arr.valueNode);
}

foo(tree);

//проверить совпадают ли буквы в словах

var arr = ['kot', 'tok', 'okt'],
  arr1 = ['kot', 'tok', 'otp'];

let f = (arr) => {
  let compireList = [];
  for (let i = 0; i < arr[0].length; i++) {
    compireList.push(arr[0][i]);
  }
  arr = arr.join('');
  for (let i = 0; i < arr.length; i++) {
    if (compireList[0] === arr[i] || compireList[1] === arr[i] || compireList[2] === arr[i]) {
      if (i === arr.length - 1) { console.log(true) }
    } else { return console.log(false) }
  }

  f(arr1);

  //Дает одинаковый результат при вызове второй функции и первой

  let f1 = function (a, b) {
    if (b !== undefind) { return a + b }
    return function (b) { return a + b };
  };

  f1(1, 1);
  f1(1)(1);

  //Сумма элементов
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr = eval(arr.join("+"));
  console.log(arr);

  Анаграмма
  let string1 = "Finder";
  let string2 = "rFiend";

  let f3 = (a, b) => {
    a = a.split('').sort().join("").toLowerCase();
    b = b.split('').sort().join("").toLowerCase();
    return a === b;
  }

  console.log(f3(string1, string2))

  //Поиск согласных в строке

  let f2 = (word) => {
    let re = /[aeiou]/g;
    let str = "hello"
    let arr = word.match(re);
    console.log(arr.length);
  }

  f2();

  //Deep object copy with not relevant way
  let animal = {
    name: "animal",
    age: 10,
    childs: ["child 1", "child 2"]
  };


  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  let b = clone(animal);
  animal.childs.push("new Child")
  console.log(b, "animal: ", animal);

//Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
  let a22 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  a22 = a.filter(e => !(e % 2)).reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0);

  console.log(a22);


  //Клик по элементу спіска
  let el = document.getElementsByClassName("list");
  console.log(el);
  let ar = Array.from(el);
  ar[0].addEventListener("click", (e) => { console.log(e.target) });

  //Найти наименьшее число 
  let str = "let the world to begin crash and say u tahn i'm not tough guy";

  let f = () => {
    return str.split(' ').sort((a, b) => a.length - b.length)[0];
  }

  console.log(f(str));


//Поиск мин макс из массива и возврат массивом
  let minMax = (arr) => {
  [Math.min(...arr), Math.max(...arr)]
}

//need get "A-Dd-Ddd-Aaaa"
let str55 = 'adda'; 

let accum = (str) => {
  return str.toUpperCase().split("").map((e, i) => {
    return `${e}${e.repeat(i).toLowerCase()}`
  }).join("-");
}

console.log(accum(str55));

//форматировать номер
let num = 987654565;

let fun = (int) => {
  let str = int.toString();
  return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 9)}`;
}

console.log(fun(num));

//вывод вложенного значения
let o = { big: { awsome: { dick: "weewee" } } };



let f = () => {
  let arr = str.split(".");
  let b = o[arr[0]];
  arr.forEach((e, i) => {
    arr[i + 1] ? b = b[arr[i + 1]] : null;
  })
  return b;
}

console.log(f());

//Плоский массив
let array = [[3], [[3, 3, 3]], [[4]]];

let f = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = f(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j])
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(f(array))

//Удалить дубликаты из строки
let array2 = "sadddsadasdasasscxvxcvv";

let f = (arr) => {
  let set = new Set(arr.split(''));
  return [...set].join('');
}

console.log(f(array2))


//Вывести строку которая встречается несколько раз при чем если таких несколько то первую, которая идет слева

let arr = ['sad', "gms", "gms", 'abc', 'ad', 'ac', 'abc'];

let countRepeats = (array) => {
  let o = {};
  let max = 0;
  let maxStr = array[0];

  let maxIndex = 0;
  array.forEach(e => {
    if (e in o) {
      o[e]++;
    } else {
      o[e] = 1;
    }
    if (o[e] > max) {
      max = o[e];
      maxStr = e;
    }
  })

  return maxStr;
}

console.log(countRepeats(arr));


//Является ли массив подмассивом

let a1 = [[1, 4, 2], [1, 2, 3, 4]];
let a2 = [[1, 2, 3, 4], [1, 2, 3, 4]];

let f = (source, subset) => {
  let compArr = new Set(source);
  compArr = Array.from(compArr);

  let flag = true;
  for (let i = 0; i < subset.length; i++) {
    console.log(compArr.indexOf(subset[i]))
    if (compArr.indexOf(subset[i]) === -1) {
      return false;
    }
  }
  return flag;
}

console.log(f(a1[0], a2[1]));


//Перевернуть матрицу 
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let f = (matrix) => {
  let rotated = [
    [],
    [],
    []
  ]
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < rotated.length; j++) {
      rotated[i].unshift(matrix[i][j]);
      count++
    }
    count = 0;
  }
  return rotated;
}

console.log(f(arr));

//Бинарный поиск 
let sort = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let f = (arr, num) => {
  let middle = Math.floor(arr.length / 2);

  while (middle !== 0) {
    console.log("iteration");
    if (num === arr[middle]) {

      return arr.indexOf(arr[middle]);
    } else if (num > arr[middle]) {
      if (arr[middle + 1] === num) { return arr.indexOf(arr[middle + 1]) }
      middle = Math.floor((arr.length - middle) / 2) + middle;
    } else if (num < arr[middle]) {
      if (arr[middle - 1] === num) { return arr.indexOf(arr[middle - 1]) }
      middle = Math.floor(middle / 2);
    }
  }
  return -1;
}

console.log(f(sort, 70))

//отбалансить скобочки

let str1 = "(({[42]})32)-";
let str2 = "[{[{]}]";

let f = (string) => {
  let balance = 0;
  string = string.split('');
  string.forEach(e => {
    if (e === "(" || e === "[" || e === "{") {
      balance += 1;
    }
    if (e === ")" || e === "]" || e === "}") {
      balance -= 1;
    }
  })
  return !balance;
}

console.log(f(str2));

//Последовательность фибоначчи 

let f = (n) => {
  let prev = 0;
  let next = 1;
  let sum = null;
  let fibos = [0, 1];
  for (let i = 0; i <= n; i++) {
    sum = prev + next;
    prev = next;
    next = sum;
    fibos.push(sum);
  }
  return fibos;
}

console.log(f(10));

//Вывести 1,2...n при n вызовах фун-ии без глобальной переменной;
let a = (function f() {
  let sum = 0;
  return function () {
    return sum++;
  }
})();

console.log(a());
console.log(a());

//Сумматор по n вызовов 

function f(n) {
  let sum = n;
  return function sumF(a) {
    if (a) {
      sum += a
      return sumF
    } else {
      return sum;
    }
  }
}

console.log(f(2)(2)(2)());

//отсортировать уникальными значениями, в массив, по порядку частоты встречаемости.

let words = ["banana", "grapefruit", "orange", "orange", "banana", "banana"];

let f = (arr) => {
  let o = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in o) {
      o[arr[i]] += 1;
    } else {
      o[arr[i]] = 1;
    }
  }//по ES6 решается с reduce(() => {},{})
  let temp = Object.keys(o);
  temp.sort((a, b) => {
    if (o[a] < o[b]) {
      return 1;
    } else {
      return -1;
    }
  })
  return temp;
}

console.log(f(words));

//Вернуть сумму всех prime nums до num 
function sumPrimes(num) {
  let arr = [];
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      arr.push(i)
    }
  }
  arr = arr.join("+");
  return eval(arr);
}

console.log(sumPrimes(977))

//Гига чад палидром с любыми мыслимыми символами 
// palindrome("eye") should return a boolean.
// Waiting:palindrome("eye") should return true.
// Waiting:palindrome("_eye") should return true.
// Waiting:palindrome("race car") should return true.
// Waiting:palindrome("not a palindrome") should return false.
// Waiting:palindrome("A man, a plan, a canal. Panama") should return true.
// Waiting:palindrome("never odd or even") should return true.
// Waiting:palindrome("nope") should return false.
// Waiting:palindrome("almostomla") should return false.
// Waiting:palindrome("My age is 0, 0 si ega ym.") should return true.
// Waiting:palindrome("1 eye for of 1 eye.") should return false.
// Waiting:palindrome("0_0 (: /-\ :) 0-0") should return true.
// Waiting:palindrome("five|\_/|four") should return false.

function palindrome(str) {
  str = str.toLowerCase();
  let reg = /[a-z0-9]/g;

  str = str.match(reg);

  let center1 = Math.floor(str.length / 2);
  let rightSide = str.length - 1;
  let flag = true;
  for (let i = 0; i <= center1; i++) {
    if (!(str[i] === str[rightSide])) {
      return false;
    }
    rightSide -= 1;
  }

  str.join('');
  return flag;
}

console.log(palindrome("almostomla"));

//нужно преобразовать к римским цифрам значения 1 - 9999 таблица в самой задаче.
//мне кажется это кринж решение, как минимум. тут черт ногу сломит.

function convertToRoman(num) {
  let romanStr = '';
  let ranks = [{
    1000: "M"
  }, {
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
  }, {
    90: "XC",
    50: "L",
    40: "XL",
    10: "X"
  }, {
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  }];
  ranks = ranks.reverse();
  let newNum = num.toString().split('');
  let multiple = 1;

  for (let i = newNum.length - 1; i >= 0; i--) {
    newNum[i] = +newNum[i] * multiple;
    multiple *= 10;
  }

  for (let i = newNum.length - 1; i >= 0; i--) {
    let temp = [];

    for (let key in ranks[i]) {

      temp.push(+key);
      if (newNum[i] === +key) {
        romanStr += ranks[i][temp[temp.length - 1]];
      }
      if (newNum[i] >= 1000) {
        let repeat = newNum[i] / 1000 === 1 ? 0 : newNum[i] / 1000;
        romanStr += ranks[i][temp[temp.length - 1]].repeat(repeat);
      }
      if (newNum[i] < +key && !(newNum[i].toString() in ranks[i])) {
        if (newNum[i] === 0) {
          break
        }
        let preValue = null;
        for (let h = 0; h < temp.length; h++) {
          if (temp[h] < newNum[i]) {
            preValue = +temp[h];
          }
        }

        let multiplier = newNum[i] - preValue;
        multiplier = +multiplier.toString().split('')[0];
        romanStr += ranks[i][preValue] + ranks[i][temp[0]].repeat(multiplier)
        break
      }
    }
  }
  return romanStr;
}

console.log(convertToRoman(649));

//Шифр цезаря сдвиг на 13 символов с сохранением знаков препинания.

function rot13(str) {
  let alphebet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    let newIndex = 0;
    if (str[i].match(/[A-Z]/g)) {
      newIndex = alphebet.indexOf(str[i]);
      if (newIndex - 13 >= 0) {

        str[i] = alphebet[newIndex - 13];
      }
      if (newIndex - 13 < 0) {
        newIndex = newIndex - 13;
        str[i] = alphebet[alphebet.length + newIndex];
      }
    }
  }
  return str.join('');
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))

//American phone validator 

function telephoneCheck(str) {
  //555-555-5555
  let pattern1 = /^([1{1}]?)(\s?)([0-9]{3})-([0-9]{3})-([0-9]{4})$/g;
  //(555)555-5555
  let pattern2 = /^([1{1}]?)(\s?)[(]([0-9]{3})[)]([0-9]{3})-([0-9]{4})$/g;
  //(555) 555-5555
  let pattern3 = /^([1{1}]?)(\s?)[(]([0-9]{3})[)] ([0-9]{3})-([0-9]{4})$/g;
  //555 555 5555
  let pattern4 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/g;
  //5555555555
  let pattern5 = /^([0-9]{10})$/g;
  //1 555 555 5555
  let pattern6 = /^([1]{1})(\s?)([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/g;

  if (!!str.match(pattern1)) {
    return true;
  }
  if (!!str.match(pattern2)) {
    return true;
  }
  if (!!str.match(pattern3)) {
    return true;
  }
  if (!!str.match(pattern4)) {
    return true;
  }
  if (!!str.match(pattern5)) {
    return true;
  }
  if (!!str.match(pattern6)) {
    return true;
  }
  return false;
}

console.log(telephoneCheck("1 555 555 5555"))


// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let denomination = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
   let quontity = [];
   let ranks = [];
   let res = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
   let status = "OPEN";
   let change = cash - price;
   let allSum = 0;
   
   //convert numbers according to their  ranks
    let modifier = 10;
    if (change > 1) {
        change = change.toString().split(''); 
        change.splice(change.indexOf("."), 1);
      for (let i = 0; i < change.length; i++) {
         change[i] *= modifier
         ranks.push( +change[i].toFixed(2));
         modifier /= 10
    }
    } else {
      ranks.push(change)
    }
   
   // calculate quontity of items
    for (let i = 0; i < cid.length; i++) {
      allSum += cid[i][1];
      quontity.push(cid[i][1])
    }
   
   //calc nums
   let itemCounter = (maxVal, limit, nominal) => {
   let co = 0;
         if (limit === 0) {
           return 0
         }
         if (maxVal < 1) {
           maxVal = +maxVal.toFixed(2);
         }
         if (nominal <= maxVal) {
            for (let i = 0; i < 20; i++) {
               co += nominal;
            if (co === limit || co + nominal > maxVal) {
               return co;
              }
           }
         } else return 0;
 }
   
    //calculate filling numbers
   quontity.reverse(); 
   denomination.reverse();
   res.reverse();
   
   let sum = 0;
     let m = []
     for (let v = 0; v < ranks.length; v++) {
         let buff = 0;
         let curr = ranks[v];
          for (let i = 0; i < denomination.length; i++) {
           buff = itemCounter(curr, quontity[i], denomination[i]);
           if (buff) {
             res[i][1] += buff;
             sum += buff;
           }
            curr = curr - buff;
            if (curr === 0) {break}
         }
     }
 
   res = res.filter(e => {
   return e[1]
  });
  
   if (+sum.toFixed(2) < change) {
     status = "INSUFFICIENT_FUNDS";
     res = [];
   }
   
   if (allSum === change) {
     status = "CLOSED";
     res = cid;
   }
   
   let obj = {
     status: status,
     change: res
   }
   
  return obj;
 }
 
 checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//В этой задаче нужно было вычислить для диапазона чисел массива наименьшее общее кратное. СУществует несколько вариантов математического решения такой задачи 
//выбранный мною скорее всключает в себя несколько отдельных функций потому, конечно писать такую огромную это не рационально, но в условии это должна делать одна фун-я

 function smallestCommons(arr) {
  arr.sort((a,b) => a - b)

  let sqrValues = null;
  let numRange = [];
  let primeRows = [];
  let multipliers = [];
  
  //pushInitialNums;
  for (let i = arr[0]; i <= arr[1]; i++) {
    if (i !== 1) {
       numRange.push([i])
       primeRows.push([])
    }  
  }
  
  //create Array With prime nums for range items;
    const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
        return num > 1;
  }
 
   for (let n = 0; n < numRange.length; n++) {
      for (let i = 0; i <= numRange[n][0]; i++) {
        if (isPrime(i)) {
          primeRows[n].push(i)
        }
    }
  }  

    //Collect multiplies arrays in array
  for (let c = 0; c < numRange.length; c++) {
      multipliers.push(getMultiplies(numRange[c][0], primeRows[c]));
  }
  
  sqrValues = calculacteNOK(multipliers);
  let finishVal = 1;
  //And finally we multiplie each other 
  
  for (let key in sqrValues) {
       finishVal *= Math.pow(key, sqrValues[key]);
  }
  return finishVal;
    }

//We need determine which values has max pow and filter its in collection
  var calculacteNOK = (arr) => {
  let collector = {};
  
  for (let i = 0; i < arr.length; i++) {
    let temp = {};
    for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] in temp && arr[i][j] !== undefined) {  
            temp[arr[i][j]] += 1;
        } else {
            if (arr[i][j] !== undefined) {
              temp[arr[i][j]] = 1;
            }
        }
      
       if (!(arr[i][j] in collector) && arr[i][j] !== undefined) {
          collector[arr[i][j]] = 1;
       }
        
        if((arr[i].length - 1) === j) {
            for (let key in temp) {
                  if (temp[key] > collector[key]) {
                      collector[key] = temp[key];
                  }
            }
        }
    }
  }
   return collector;
}
  
//We need calculate multiplies
var getMultiplies = (num, arr) => { 
  let n = 0;
  let sum = 0;
  let result = [];
    for (let i = 0; i < arr.length * 2; i++) {
         sum = num / arr[n];
         if (Number.isInteger(sum)) {   
                 result.push(arr[n]);
           if(arr[n] / sum === 1) {
             result.push(arr[n]);
             break;
           }
            num = sum;
        } else {
          n++
        }
     }  
  return result;
}

console.log(smallestCommons([5, 18]))
