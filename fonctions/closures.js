/**

    Closures (الإغلاق)

الفونكشن اللي كتحافظ على الوصول للمجال (scope) ديال المتغيرات حتى بعد ما تسالي.
مثال:

function outerFunction() {
  let counter = 0;
  return function innerFunction() {
    counter++;
    return counter;
  };
}
const increment = outerFunction();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

فائدة:

    مفيدة لتخزين بيانات بدون التأثير عليها من الخارج.

 */




//*********************************************************************************************** */

/**
 * كري Async Function باش تأجل تنفيذ فانكشن لمدة 3 ثواني.
 */










//*********************************************************************************************** */

/**
 *  كري Async Function باش تشوف واش المستخدم عندو صبيب إنترنت ولا لا.
 */















//*********************************************************************************************** */

/**
 * كري Async Function باش تجيب بيانات من API معين.
 */