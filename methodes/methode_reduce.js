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
