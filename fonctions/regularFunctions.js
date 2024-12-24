/**
 *1. الـ Functions العادية (Regular Functions)

هاد النوع هو الأبسط، كيستعمل الكلمة المفتاحية function.
مثال:

function sayHello(name) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Ahmed")); // Output: Hello, Ahmed!

تمارين:       
 */

//*********************************************************************************************** */

/**
 * كري فانكشن سميتو addNumbers لي كيجمع بين جوج أرقام.
 */

function addNumbers (a,b) {  
    return a+b;
}



//*********************************************************************************************** */
/**
 *  كري فانكشن isEven لي كيشوف واش رقم معين زوجي أو لا.
 */


function isEven(number){
    if(number % 2 ===0 ){
        return true;
    }else {
        return false;
    }
}

console.log(isEven(7));
console.log(isEven(8));
console.log(addNumbers(8,10));
console.log(addNumbers(89,100));

//*********************************************************************************************** */

/** 
   
    كري فانكشن multiplyArray لي كيضرب جميع عناصر واحد المصفوفة فعدد معين.

 */

    function multiplyArray(arr, number){
        
        const result = [];
        
        for(let i = 0; i < arr.length ;i++ ){
            result.push( arr[i] * number);
        }
        return result;
    }

    console.log(multiplyArray([1,2,9,8], 5));
    console.log(multiplyArray([1,2,9,8], 2));



/**
 * كري فانكشن سميتو addNumbers لي كيجمع بين جوج أرقام.
 * @param {number} a - الرقم الأول
 * @param {number} b - الرقم الثاني
 * @returns {number} - المجموع ديال الرقمين
 */
function addNumbers2(a, b) {  
    return a + b;
}

console.log(addNumbers2(53,89));

/**
 * كري فانكشن isEven لي كيشوف واش رقم معين زوجي أو لا.
 * @param {number} number - الرقم المدخل
 * @returns {boolean} - `true` إلا كان زوجي، `false` إلا ماكانش
 */
function isEven2(number) {
    return number % 2 === 0;
}

console.log(isEven2(3));

/**
 * كري فانكشن multiplyArray لي كيضرب جميع عناصر واحد المصفوفة فعدد معين.
 * @param {number[]} arr - المصفوفة
 * @param {number} number - العدد اللي بغينا نضربو فيه
 * @returns {number[]} - مصفوفة جديدة فيها العناصر مضروبة
 */
function multiplyArray2(arr, number) {
    return arr.map(item => item * number);
}

console.log(multiplyArray2([1,3,22,5,9,77],4));