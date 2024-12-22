/**
 * . filter()
شرح:

الميثود filter() تُستخدم لتصفية العناصر التي تحقق شرطًا معينًا. تُنشئ مصفوفة جديدة ولا تغيّر الأصلية.
مثال:

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]



*/

/**
 * 
تمارين:
    لديك المصفوفة:

const ages = [12, 18, 25, 30, 8];

قم باستخدام filter() لإنشاء مصفوفة جديدة تحتوي فقط على الأعمار التي أكبر من أو تساوي 18.

 

const ages = [12, 18, 25, 30, 8];
const adultes = [];
const adulte = ages.filter( age =>{
    if(age >= 18){
        adultes.push(age);
    }   
});
console.log(adultes);

الملاحظات:

    خطأ في الكود: يتم استخدام المصفوفة mayor التي لم يتم تعريفها بدلاً من adultes.
    إضافة القيم إلى مصفوفة خارجية (adultes) ليس مطلوبًا مع filter()، لأنه يعيد مباشرة مصفوفة جديدة.

*/
  //correction:
    const ages = [12, 18, 25, 30, 8];

    const adultes = ages.filter(age => age >= 18);

    console.log(adultes);



/**
 * قم بتصفية المصفوفة التالية:

const words = ["javascript", "css", "html", "python"];

للحصول على الكلمات التي تحتوي على أكثر من 5 أحرف.

 

const words = ["javascript", "css", "html", "python"];
const lengthWords = [];
const filtrer = words.filter(word => {
    if(word.length > 5){
        lengthWords.push(word);
    }
});
console.log(lengthWords);

    الملاحظات:

    يتم دفع القيم إلى مصفوفة خارجية (lengthWords) مع أن filter() يعيد مصفوفة جديدة.
    الكود سيعمل ولكن بطريقة غير فعالة.
*/

//correction:

const words = ["javascript", "css", "html", "python"];

const lengthWords = words.filter(word => word.length > 5);

console.log(lengthWords);


/**
 * 
لديك قائمة منتجات:

const products = [
    { name: "phone", price: 800 },
    { name: "laptop", price: 1500 },
    { name: "tablet", price: 500 }
];

استخدم filter() للحصول على المنتجات التي سعرها أقل من 1000.


const products = [
    { name: "phone", price: 800 },
    { name: "laptop", price: 1500 },
    { name: "tablet", price: 500 }
];

const price =[];

const filtrationPrice = products.filter(produit => {
   if(produit.price < 1000){

     price.push(produit.name);

   }
});

console.log(price); 

الملاحظات:

    خطأ منطقي: filter() يعيد قائمة المنتجات نفسها (ككائنات)، لذلك لا حاجة لدفع الأسماء يدويًا إلى مصفوفة جديدة.
    حل غير فعال: يتم استخدام مصفوفة خارجية مع filter().

*/


const products = [
    { name: "phone", price: 800 },
    { name: "laptop", price: 1500 },
    { name: "tablet", price: 500 }
];

const filteredProducts = products.filter(product => product.price < 1000);

console.log(filteredProducts);


/**
 * التمرين الأول: تصفية المستخدمين بناءً على العمر والمهنة

لديك قائمة بالمستخدمين:

const users = [
    { name: "Ahmed", age: 20, job: "developer" },
    { name: "Sara", age: 30, job: "designer" },
    { name: "Ali", age: 17, job: "developer" },
    { name: "Mouna", age: 25, job: "manager" },
    { name: "Youssef", age: 19, job: "developer" }
];

المطلوب: استخدم filter() للحصول على جميع المستخدمين الذين عمرهم أكبر من أو يساوي 18 ووظيفتهم "developer".
 */

const users = [
    { name: "Ahmed", age: 20, job: "developer" },
    { name: "Sara", age: 30, job: "designer" },
    { name: "Ali", age: 17, job: "developer" },
    { name: "Mouna", age: 25, job: "manager" },
    { name: "Youssef", age: 19, job: "developer" }
];


const filterUsers = users.filter(user => user.age >= 18 && user.job ==="developer");

console.log(filterUsers);


/*
لتمرين الثاني: تصفية المبيعات حسب الحالة والسعر

لديك قائمة بالمبيعات:

const sales = [
    { id: 1, price: 500, status: "completed" },
    { id: 2, price: 1500, status: "pending" },
    { id: 3, price: 800, status: "completed" },
    { id: 4, price: 1200, status: "canceled" },
    { id: 5, price: 300, status: "completed" }
];

المطلوب: استخدم filter() للحصول على المبيعات التي حالتها "completed" وسعرها أكبر من 700.
*/

const sales = [
    { id: 1, price: 500, status: "completed" },
    { id: 2, price: 1500, status: "pending" },
    { id: 3, price: 800, status: "completed" },
    { id: 4, price: 1200, status: "canceled" },
    { id: 5, price: 300, status: "completed" }
];

const filterSales = sales.filter(sale => sale.price > 700 && sale.status === "completed");

console.log(filterSales);


/**
التمرين الثالث: تصفية المنتجات المتوفرة

لديك قائمة بالمنتجات:

const inventory = [
    { name: "Laptop", quantity: 0, price: 1500 },
    { name: "Phone", quantity: 10, price: 800 },
    { name: "Tablet", quantity: 5, price: 500 },
    { name: "Monitor", quantity: 0, price: 300 },
    { name: "Headphones", quantity: 15, price: 150 }
];

المطلوب: استخدم filter() للحصول على المنتجات التي الكمية الخاصة بها أكبر من 0 وسعرها أقل من 1000.
*/

const inventory = [
    { name: "Laptop", quantity: 0, price: 1500 },
    { name: "Phone", quantity: 10, price: 800 },
    { name: "Tablet", quantity: 5, price: 500 },
    { name: "Monitor", quantity: 0, price: 300 },
    { name: "Headphones", quantity: 15, price: 150 }
];

const inventoryFilter = inventory.filter(inventaire => inventaire.quantity > 0 && inventaire.price < 1000);

console.log(inventoryFilter);