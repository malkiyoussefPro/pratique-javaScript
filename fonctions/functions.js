
/**
 * 1-
         . تعريف وإنشاء الدوال
        فـ JavaScript، كاينين طرق مختلفة لتعريف الدوال
 */

//1: الطريقة التقليدية:

scopeExample();
function sayHello(name) {
    console.log("Salam " + name);
}

//2:  التعبير عن الدالة (Function Expression)

// استدعاء الدالة
sayHello("Ahmed");

let greet = function(name) {
    console.log("Merhba " + name);
};

greet("Fatima");


//3: الدوال السهمية (Arrow Functions)
let add = (a, b) => a + b;

let addition = function addition(a,b){
    return a+b;
}

console.log("Addition avec la fonction fleche: ", add(5, 3)); // Output: 8
console.log("Addition avec la fonction traditionnel: ", addition(2,8)); // output : 10


/**


    2. المعاملات والقيم المرجعة
    المعاملات (Parameters):

javascript
 */
let multip = function multiply(a, b) {
    return a * b;
}
let mult = (a,b) => a * b;
console.log("La multiplication avec la fonction fleche: ",multip(4, 5)); // Output: 20
console.log("La multiplication avec la fonction traditionnel: ",mult(3, 5)); // Output: 20

// القيم المرجعة (Return Values):


function isEve(number) {
    return number % 2 === 0;
}

console.log(isEve(4)); // Output: true
console.log(isEve(7)); // Output: false

/**
 * 3. النطاق (Scope) والمتغيرات المحلية والعامة
المتغيرات المحلية (Local Variables):

 */

function localExample() {
    let localVar = "أنا متغير محلي";
    console.log(localVar);
}

// console.log(localVar); // هذا سيعطي خطأ لأن localVar غير معرف خارج الدالة

localExample();


// المتغيرات العامة (Global Variables):

let globalVar = "أنا متغير عام";

function globalExample() {
    console.log(globalVar);
}

globalExample(); // Output: أنا متغير عام


//النطاق الوظيفي (Function Scope)
function scopeExample() {
    if (true) {
        var functionScoped = "متاح في كل الدالة";
        let blockScoped = "متاح فقط داخل هذا البلوك";
    }
    console.log(functionScoped); // هذا سيعمل
    // console.log(blockScoped); // هذا سيعطي خطأ
}

function exampleScope() {
    var a = 1;
    let b = 2;
    
    if (true) {
        var a = 3; // هذا سيغير قيمة a في كل الدالة
        let b = 4; // هذا سيخلق متغير جديد b داخل البلوك فقط
        console.log(a); // 3: had la valeur jat men block li f if
        console.log(b); // 4: had la valeur jat men block li f if
    }
    
    console.log(a); // 3: had la valeur jat men block li f if hit howa var
    console.log(b); // 2: had la valeur men la initialisation li derna f lawal dial la fonction o hit howa let
}

exampleScope();



