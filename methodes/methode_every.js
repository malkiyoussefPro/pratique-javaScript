/**
 * 8. every()
شرح:

الميثود every() تُستخدم للتحقق إذا كان جميع عناصر المصفوفة تستوفي شرطًا معينًا، وتُرجع قيمة true أو false.
مثال:

const numbers = [2, 4, 6];
const allEven = numbers.every(function(num) {
  return num % 2 === 0; // true
});

***************************************************************************************
    مثال 3: مصفوفة فارغة

    const emptyArray = [];

    const result = emptyArray.every(num => num > 0);

    console.log(result); // النتيجة: true

    النتيجة تكون دائمًا true إذا كانت المصفوفة فارغة؛ لأن الشرط لم يتم اختباره على أي عنصر.

***************************************************************************************

    مثال 2: عنصر واحد لا يحقق الشرط

    const numbers = [2, 3, 6, 8];

    const allEven = numbers.every(num => num % 2 === 0);

    console.log(allEven); // النتيجة: false

    العنصر 3 ليس زوجيًا، لذا النتيجة هي false.

***************************************************************************************

    أمثلة:
    مثال 1: كل العناصر تحقق الشرط

    const numbers = [2, 4, 6, 8];

    const allEven = numbers.every(num => num % 2 === 0);

    console.log(allEven); // النتيجة: true

    جميع العناصر زوجية (% 2 === 0)، لذا النتيجة هي true.

***************************************************************************************



تمارين:

    
 */

/**
 * 
    لديك مصفوفة [2, 4, 6]، استخدم every() للتحقق إذا كانت جميع الأرقام زوجية.
 */

    const numbers = [2, 4, 6];

    const numbersEvery = numbers.every(numeroPair => numeroPair % 2 === 0 );

    console.log(numbersEvery)


/**
     * لديك مصفوفة من الأسماء ["Ali", "Sara", "Ahmed"]، استخدم every() للتحقق إذا كانت جميع الأسماء تبدأ بحرف "A".
     */

    const persons = ["Ali", "Sara", "Ahmed"];

    const personEvery = persons.every(function (person) {
        return person.charAt(0) === "A"; // نتحقق إذا كان أول حرف هو "A"
    });

    console.log(personEvery); // النتيجة: false
