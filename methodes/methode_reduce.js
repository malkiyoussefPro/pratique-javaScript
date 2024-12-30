/**
 * . reduce()
شرح:

الميثود reduce() تُستخدم لتقليل عناصر المصفوفة إلى قيمة واحدة (مثل جمع الأرقام أو حساب المتوسط).
مثال:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10

 * 
 */

/*
تمارين:
        لديك قائمة أرقام:

        const numbers = [10, 20, 30];

        استخدم reduce() لجمع هذه الأرقام.

*/

const numbersEx1 = [10, 20, 30];


/**
 *

قم باستخدام reduce() لإيجاد أكبر رقم في المصفوفة:

const numbers = [3, 7, 2, 9, 1]; 
*/
const numbersEx2 = [3, 7, 2, 9, 1]; 

/*

    لديك قائمة منتجات مع أسعارها:

    const products = [
        { name: "phone", price: 800 },
        { name: "laptop", price: 1500 },
        { name: "tablet", price: 500 }
    ];

    استخدم reduce() لحساب مجموع أسعار جميع المنتجات.
*/

const products = [
    { name: "phone", price: 800 },
    { name: "laptop", price: 1500 },
    { name: "tablet", price: 500 }
];

/**
 
reduce كتعطيك تحكم كامل فكيفاش تتعامل مع العناصر ديال المصفوفة وتدمجهم بطريقة خاصة. الكائن (accumulator) اللي كتستعملو فـ reduce يمكن يكون:

    كائن (object): بحال المثال ديال تصنيف المنتجات حسب الفئة.
    مصفوفة (array): بحال بناء مصفوفة جديدة.
    عدد (number): بحال جمع الأرقام أو إيجاد المتوسط.
    نص (string): بحال دمج النصوص.
 */

//Exemple . إنشاء كائن (Object):
//مثال: نصنف أسماء الناس حسب أول حرف. 
const names = ["Ali", "Ahmed", "Sara", "Salma", "Amine"];

const groupedByLetter = names.reduce((acc, name) => {
    const firstLetter = name[0]; // الحرف الأول من الاسم
    if (!acc[firstLetter]) {
        acc[firstLetter] = []; // إذا ماكانتش المجموعة نضيفها
    }
    acc[firstLetter].push(name); // نضيف الاسم للمجموعة
    return acc;
}, {});

console.log(groupedByLetter);
// النتيجة: { A: ["Ali", "Ahmed", "Amine"], S: ["Sara", "Salma"] }

/*
    . إنشاء مصفوفة جديدة (Array):

    مثال: مضاعفة الأرقام في المصفوفة.
*/
const numbers = [1, 2, 3, 4];

const doubled = numbers.reduce((acc, num) => {
    acc.push(num * 2); // نضيف الرقم مضاعف للمصفوفة الجديدة
    return acc;
}, []);

console.log(doubled);
// النتيجة: [2, 4, 6, 8]

/**
 * . حساب قيمة رقمية (Number):

مثال: جمع الأرقام.

 */

const numbersExemple3 = [10, 20, 30];

const sum = numbersExemple3.reduce((acc, num) => acc + num, 0);

console.log(sum);
// النتيجة: 60

/**. بناء نص (String):

مثال: دمج الأسماء في نص واحد.
 */

const namesExample4 = ["Ali", "Sara", "Kamal"];

const mergedNames = namesExample4.reduce((acc, name) => acc + ", " + name, "");

console.log(mergedNames);
// النتيجة: ", Ali, Sara, Kamal"
