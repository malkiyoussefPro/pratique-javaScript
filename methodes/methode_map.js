/**
 * . map()
شرح:

الميثود map() تُستخدم لتحويل عناصر مصفوفة إلى عناصر جديدة بناءً على دالة تقوم بتمريرها. لا تُغيّر المصفوفة الأصلية، بل تُنشئ مصفوفة جديدة.
مثال:

const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]

 */


/**
 * تمارين:

    لديك المصفوفة التالية:

const prices = [100, 200, 300];

قم باستخدام map() لإنشاء مصفوفة جديدة تحتوي على الأسعار مع إضافة 20% ضريبة.
 */

const prices = [100, 200, 300];

const tva = prices.map(numargm => numargm + ( 20 * numargm / 100 ));

console.log(tva);


/**
 * قم بتحويل المصفوفة:

const names = ["ali", "sara", "amina"];

إلى مصفوفة تحتوي على نفس الأسماء مكتوبة بالأحرف الكبيرة.
 */

const names = ["ali", "sara", "amina"];

const capitalNames = names.map(capital => capital.toUpperCase());

console.log(capitalNames);

/**
 * 

لديك قائمة درجات طلاب:

const grades = [10, 15, 20, 8];

قم باستخدام map() لتحويل الدرجات إلى "ناجح" إذا كانت الدرجة أكبر من أو تساوي 10، أو "راسب" إذا كانت أقل من 10.
 */

/**
 * const grades = [10, 15, 20, 8];
const valide = [];
for(let i = 0; i < grades.length; i++){
    if(grades[i] >= 10){
        valide.push(grades[i]);
        console.log("Reussi: " + valide[i]);
    }else{
        valide.push(grades[i]);
        console.log("Echoué: " +valide[i]);
    }
}

 */
const validMap = grades.map(reussi => {

    if(reussi >= 10){
        return "reussi";
    }else if (reussi < 10){
       return "echoué";
    }
});

    console.log(validMap);






