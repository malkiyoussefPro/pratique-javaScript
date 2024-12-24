/**
 * شرح find

الميثود find في JavaScript تُستخدم لإيجاد أول عنصر في المصفوفة يحقق شرطًا معينًا.

    إذا وُجد العنصر الذي يطابق الشرط، ترجع find هذا العنصر.
    إذا لم تجد أي عنصر يطابق الشرط، فإنها ترجع undefined.

     البنية:

        array.find(callback(element, index, array), thisArg);

        المعطيات:

            callback:
                دالة تُحدد الشرط الذي نبحث عنه.
                تأخذ 3 معطيات:
                    element: العنصر الحالي.
                    index: فهرس العنصر الحالي (اختياري).
                    array: المصفوفة نفسها (اختياري).
            thisArg: (اختياري)
                قيمة this التي تُمرر إلى الـ callback.
    أمثلة مبسطة:
        مثال 1: العثور على أول رقم أكبر من 10

        const numbers = [5, 12, 8, 130, 44];

        const result = numbers.find(num => num > 10);

        console.log(result); // 12

        مثال 2: العثور على اسم يبدأ بحرف "S"

        const names = ["Ali", "Sara", "Ahmed", "Samira"];

        const result = names.find(name => name.startsWith("S"));

        console.log(result); // Sara

        مثال 3: البحث في كائنات

        const products = [
            { name: "TV", price: 1200 },
            { name: "Phone", price: 800 },
            { name: "Book", price: 50 }
        ];

        const result = products.find(product => product.price < 100);

        console.log(result); // { name: "Book", price: 50 }

        حالات خاصة:

            عندما لا يتم العثور على العنصر

        const numbers = [5, 8, 10];

        const result = numbers.find(num => num > 20);

        console.log(result); // undefined

            عندما تحتوي المصفوفة على عناصر متكررة

        const numbers = [5, 10, 15, 10];

        const result = numbers.find(num => num === 10);

        console.log(result); // 10 (العنصر الأول فقط)

            عندما تكون المصفوفة فارغة

        const emptyArray = [];

        const result = emptyArray.find(num => num > 0);

        console.log(result); // undefined

 */

    /*
                تمارين متنوعة:
        تمرين 1 (سهل):

        لديك مصفوفة أرقام:

        const nums = [2, 4, 7, 8, 10];

        استخدم find للعثور على أول عدد فردي.
    */
        const nums = [2, 4, 7, 8, 10];

        const numeroImpare=  nums.find(num => num % 2 !== 0);

        console.log(numeroImpare);

    /**
     * تمرين 2 (متوسط):

لديك مصفوفة أسماء:

    const names = ["Youssef", "Zain", "Nora", "Ali", "Nada"];

    استخدم find للعثور على أول اسم طوله أكبر من 3 حروف.
    */
    const names = ["Youssef", "Zain", "Nora", "Ali", "Nada"];

    const lenghtWord = names.find(name => name.length > 3);

    console.log(lenghtWord);

/**
 * 
    * تمرين 3 (متوسط):

    لديك قائمة منتجات:

    const products = [
        { name: "Tablet", price: 300 },
        { name: "Phone", price: 600 },
        { name: "Laptop", price: 1200 }
    ];

    استخدم find للعثور على المنتج الذي سعره أقل من 500.
*/

    const products = [
        { name: "Tablet", price: 300 },
        { name: "Phone", price: 600 },
        { name: "Laptop", price: 1200 }
    ];

        let produitMoinCher = null;
        produitMoinCher = products.find( product => product.price < 500);

    console.log(produitMoinCher);
    

/**
 * تمرين 4 (متقدم):

    لديك مصفوفة تحتوي على كائنات للطلاب:

    const students = [
        { name: "Ali", grades: [80, 90, 85] },
        { name: "Sara", grades: [70, 60, 65] },
        { name: "Ahmed", grades: [95, 85, 90] }
    ];

    استخدم find للعثور على أول طالب جميع درجاته فوق 80.


    const students = [
        { name: "Ali", grades: [80, 90, 85] },
        { name: "Sara", grades: [70, 60, 65] },
        { name: "Ahmed", grades: [95, 85, 90] }
    ];

    const upGrade = students.find(student => student.grades > 80);

    console.log(upGrade);
*/
//correction:

    const students = [
        { name: "Ali", grades: [80, 90, 85] },
        { name: "Sara", grades: [70, 60, 65] },
        { name: "Ahmed", grades: [95, 85, 90] }
    ];

    const upGrade = students.find(student => student.grades.every(grade => grade > 80));

    console.log(upGrade); // { name: "Ahmed", grades: [95, 85, 90] }


/**
 * تمرين 5 (متقدم):

لديك مصفوفة للمهام:

const tasks = [
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: true }
];

استخدم find للعثور على أول مهمة لم تُكمل بعد.
 */

const tasks = [
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: true }
];

const taskIncompleted = tasks.find(task => task.completed === false);

console.log(taskIncompleted);