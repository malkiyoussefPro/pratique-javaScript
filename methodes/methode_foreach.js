/**
     * 4. forEach()
    شرح:

    الميثود forEach() تُستخدم لتنفيذ وظيفة على كل عنصر في المصفوفة، لكنها لا تُرجع قيمة جديدة.
    مثال:

    const numbers = [1, 2, 3];
    numbers.forEach(num => console.log(num * 2));
    // الإخراج:
    // 2
    // 4
    // 6

    
    */
   
   /**
    تمارين:


 *         قم بطباعة جميع العناصر في المصفوفة التالية مع إضافة 10 لكل عنصر:

    const numbers = [5, 10, 15];
 */
    const numbers = [5, 10, 15];

    const foreachNumber = numbers.forEach( number => console.log(number));


/**
     لديك المصفوفة:

    const names = ["Ali", "Sara", "Amina"];

    استخدم forEach() لعرض رسالة "مرحبًا [الاسم]" لكل اسم.
 */

    const names = ["Ali", "Sara", "Amina"];
    //const foreachName = names.forEach(name => console.log(name+" :مرحبًا"));
     names.forEach(name =>{
        console.log(name+" :مرحبًا");
    })


/**
 *     لديك قائمة منتجات:

    const products = [
        { name: "phone", price: 800 },
        { name: "laptop", price: 1500 },
        { name: "tablet", price: 500 }
    ];

    استخدم forEach() لطباعة كل منتج مع سعره.
 */
    const products = [
        { name: "phone", price: 800 },
        { name: "laptop", price: 1500 },
        { name: "tablet", price: 500 }
    ];


    //const foreachProduct = products.forEach(product => console.log("Nom du produit: "+product.name+", prix du produit: "+product.price)); 


    products.forEach(product => {
        console.log("اسم المنتج: " + product.name + ", سعر المنتج: " + product.price);
    });
    

/**
 * 
 * تمارين إضافية عن forEach:


*/
//******************************************************************************************* */
/**
 * التمرين 1: حساب مجموع الأرقام

لديك المصفوفة التالية:

const numbers = [10, 20, 30, 40];

استخدم forEach() لحساب مجموع كل الأرقام وطباعة النتيجة النهائية.

 */

const numbersExtra = [10, 20, 30, 40];
let sum = 0;
numbersExtra.forEach(num =>{
    sum += num;
})
console.log(sum);



//******************************************************************************************* */

/**
 *  التمرين 2: إنشاء رسائل مخصصة

لديك قائمة بالأسماء:

const students = ["Hassan", "Youssef", "Salma"];

استخدم forEach() لطباعة رسالة:

"
مرحبًا [الاسم], نتمنى لك يومًا سعيدًا!

 " لكل اسم.
 */

const students = ["Hassan", "Youssef", "Salma"];

students.forEach(student => console.log(" مرحبًا  "  + student+", نتمنى لك يومًا سعيدًا!") );



//******************************************************************************************* */
/**
 * التمرين 3: البحث عن المنتج الأرخص

لديك قائمة المنتجات التالية:

const items = [
    { name: "TV", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Book", price: 50 },
    { name: "Laptop", price: 2000 }
];

استخدم forEach() للعثور على المنتج الذي يحتوي على أقل سعر وطباعة اسمه وسعره.
 */

//******************************************************************************************* */

/**
 * 
التمرين 4: تصنيف الأرقام إلى زوجية وفردية

لديك مصفوفة الأرقام:

const nums = [3, 8, 15, 24, 7, 10];

استخدم forEach() لإنشاء مصفوفة جديدة للأرقام الزوجية ومصفوفة جديدة للأرقام الفردية وطبع المصفوفتين.
 */




//******************************************************************************************* */
/**
     التمرين 5: تنسيق النصوص

    لديك مصفوفة نصوص:

    const strings = ["hello", "world", "javascript", "forEach"];

    استخدم forEach() لتحويل النصوص إلى أحرف كبيرة (UPPERCASE) وطباعة كل نص بعد التغيير. 
*/