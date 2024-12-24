/**
 * 
 * 2. الـ Anonymous Functions (الفونكشنز بلا اسم)

هادو فونكشنز بلا اسم، غالباً كيتسجلو فمتغير.
مثال:

const greet = function(name) {
  return `Hi, ${name}!`;
};
console.log(greet("Khadija")); // Output: Hi, Khadija!

تمارين:

 */



 /**
  *const greet = function(name) {
   return `Hi, ${name}!`;
 };
 console.log(greet("Khadija"));

 const salutation = function(name){
   return "Salam, "+name;
 }
  
 console.log(salutation("youssef"));
  * أفضلية الاختيار:

الأفضلية كتكون للطريقة الأولى (template literals) لأنها:

    كتوفر قابلية قراءة أفضل فالجمل الطويلة.
    كتسمح بمرونة أكبر.
    جزء من الممارسات الحديثة فـ JavaScript (ES6+).

الخلاصة:

إلا كنت خدام فمشروع حديث أو كتسعى للكود اللي يكون واضح ومستقبلي، استعمل template literals. أما إلا كنت محتاج كود بسيط بزاف أو كتعامل مع بيئة قديمة بزاف، الطريقة الثانية كافية
  */

//*********************************************************************************************** */
/**
 *   كري فونكشن بلا اسم وخزنها فمتغير باش تحسب المساحة ديال دائرة.
 */
/**
 * 
 * @param {number} rayon 
 * @returns {number} superficie
 */

const superficiCercle = function(rayon){

   const pi = Math.PI;
   let superficie;
   return superficie = pi*rayon*rayon;
    
}

console.log(superficiCercle(3));

//*********************************************************************************************** */

/**
 * 
    استعمل فونكشن بلا اسم باش تنفذ عملية قسمة بين جوج أرقام.

 */

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */

const division = function(num1, num2){

   return num1/num2;
}

console.log(division(10,2));

//correction:
const divisionCorrection = function(num1, num2) {
   if (num2 === 0) {
      return "خطأ: القسمة على صفر غير ممكنة.";
   }
   return num1 / num2;
}
console.log(divisionCorrection(10, 2)); // 5
console.log(divisionCorrection(10, 0)); // خطأ: القسمة على صفر غير ممكنة.


//*********************************************************************************************** */

/**
 * 
    كري فانكشن بلا اسم لي كيرجع true إلا كان النص المدخل أطول من 5 حروف.

 */

const lenghtWords = function(str){

   if(str.length > 5){
      return true;
   }else{
      return false;
   }

}

console.log(lenghtWords("bonjour youssef!!!!"));

//correction

const lenghtWordsCorrection = function(str) {
   return str.length > 5;
}
console.log(lenghtWordsCorrection("bonjour")); // true
console.log(lenghtWordsCorrection("hi"));      // false
