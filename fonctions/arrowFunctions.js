/**


        3. الـ Arrow Functions (الفونكشنز بالأسهم)

        هاد النوع كيتكتب بطريقة مختصرة باستعمال =>.
        مثال:

        const square = (num) => num * num;
        console.log(square(5)); // Output: 25

        تمارين:


 */

//*********************************************************************************************** */

/**
 * كري Arrow Function باش تضرب رقم فـ 2.
 */


const double = (numero) => numero * 2;
console.log(double(6));

//*********************************************************************************************** */

/**
 * 
            كري Arrow Function باش تحسب الطول ديال نص معين.
 */

const letterWord = (caracter) => caracter.length;

console.log(letterWord("youssef"));

//*********************************************************************************************** */

/**
 *             
    كري Arrow Function باش ترجع النص مقلوب (reversed string).
 */
    

/*
   const reversWord = (str) => str.reverse();

      console.log(reversWord("youssef"));

       ملاحظات:

    يوجد خطأ هنا:
        reverse():
            الدالة reverse() تعمل فقط على المصفوفات (arrays)، وليس النصوص.
        لتحويل النص إلى مصفوفة من الأحرف، يجب استخدام split('') أولاً.
        بعد عكس الأحرف بـ reverse()، يجب تحويلها مرة أخرى إلى نص بـ join('').

تصحيح:


*/

const reverseWord = (textString) => textString.split('').reverse().join('');

console.log(reverseWord("youssef"));
    
