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


    const items = [
        { name: "TV", price: 1200 },
        { name: "Phone", price: 800 },
        { name: "Book", price: 50 },
        { name: "Laptop", price: 2000 }
    ];
 
    produit = [];
    for(let i = 0; i < items.length; i++){
        if(items[i].price < items[i].price){

            produit.push(items[i].price);
        }
    }

    console.log(produit);

    ///////////////////////////////////////////////////////////////////////////
        let produitRkhis = [];
    let prixMinimum = Infinity; // Nbdaw b a3la prix momkin
    
    // Nlgaw l prix l sgher
    for(let i = 0; i < items.length; i++){
        if(items[i].price < prixMinimum){
            prixMinimum = items[i].price;
        }
    }
    
    // Njm3o ga3 l produits li 3ndhom had l prix
    for(let i = 0; i < items.length; i++){
        if(items[i].price === prixMinimum){
            produitRkhis.push(items[i]);
        }
    }
    
    console.log(produitRkhis);
 */


    const items = [
        { name: "TV", price: 1200 },
        { name: "Phone", price: 800 },
        { name: "Book", price: 50 },
        { name: "Laptop", price: 2000 }
    ];
    
    let maxPrix = Infinity;

     let produitMoinCher = [];
    items.forEach(item => {
        if(item.price < maxPrix){
           maxPrix = item.price;
        }
    });
    //console.log(maxPrix);
    items.forEach(item => {
        if(item.price === maxPrix){
            produitMoinCher.push(item);
        }
    });

    console.log(produitMoinCher);


    let minPrice = Infinity;
    let cheapestItem = null;
    
    items.forEach(item => {
        if (item.price < minPrice) {
            minPrice = item.price; 
            cheapestItem = item; // تحديث المنتج الأرخص مباشرة
        }
    });
    
    console.log(`The cheapest item is: ${cheapestItem.name} with price: ${cheapestItem.price}`);
    
  
    const cheapestItems = items.reduce((min, item) => (item.price < min.price ? item : min), items[0]);
    
    console.log(`The cheapest item is: ${cheapestItems.name} with price: ${cheapestItems.price}`);
    

//******************************************************************************************* */

/**
 * 
التمرين 4: تصنيف الأرقام إلى زوجية وفردية

لديك مصفوفة الأرقام:

const nums = [3, 8, 15, 24, 7, 10];

استخدم forEach() لإنشاء مصفوفة جديدة للأرقام الزوجية ومصفوفة جديدة للأرقام الفردية وطبع المصفوفتين.

const nums = [3, 8, 15, 24, 7, 10];

const numPair = [];
const numImpair = [];

const result = nums.forEach( num => {
    if(num % 2 === 0){
        numPair.push(num);
    }else{
        numImpair.push(num);
    }
});

console.log("-Les numéros paire sont: "+numPair);
console.log("-Les numéros impaire sont: "+numImpair);

الملاحظات:

    تنسيق الناتج:
        يمكن تحسين صياغة الرسائل لجعلها أكثر وضوحًا.
        يُفضل إضافة مسافات أو أسطر جديدة للفصل بين الرسائل.

    إزالة المتغير غير المستخدم (result):
        forEach لا تُرجع قيمة. لذا تعريف result غير ضروري ويمكن حذفه.

    التسمية:
        الأسماء numPair و numImpair واضحة، ولكن يمكن استخدام أسماء أكثر وضوحًا مثل evenNumbers و oddNumbers لتكون متوافقة مع اللغة الإنجليزية (كون الكود مكتوب بها).
*/
//correction:

const nums = [3, 8, 15, 24, 7, 10];

const evenNumbers = []; // الأرقام الزوجية
const oddNumbers = [];  // الأرقام الفردية

nums.forEach((num) => {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
});

console.log("- Les numéros pairs sont: " + evenNumbers.join(", "));
console.log("- Les numéros impairs sont: " + oddNumbers.join(", "));



//******************************************************************************************* */
/**
     التمرين 5: تنسيق النصوص

    لديك مصفوفة نصوص:

    const strings = ["hello", "world", "javascript", "forEach"];

    استخدم forEach() لتحويل النصوص إلى أحرف كبيرة (UPPERCASE) وطباعة كل نص بعد التغيير. 

    const strings = ["hello", "world", "javascript", "forEach"];
    capital = [];
    strings.forEach(str => {

        capital.push(str.toUpperCase());

    });

    console.log(capital);

    الملاحظات:

    المتغير capital:
        لم يتم تعريف المتغير باستخدام let أو const.
            يفضل استخدام let لتعريف المتغير capital لأنه يتم تعديله أثناء التنفيذ.

    اختيار forEach:
        الكود يستخدم forEach() بطريقة صحيحة، ولكن في هذه الحالة، map() هو الخيار الأمثل لأنه يُرجع مصفوفة جديدة.

    التسمية:
        يُفضل تسمية المتغير capital باسم أكثر وضوحًا يعبر عن محتواه، مثل uppercaseStrings.

    إزالة الحاجة إلى push:
        استخدام map() سيجعل الكود أبسط وأكثر مباشرة.

        الفرق بين forEach و map:

    forEach: يقوم بتنفيذ كود على كل عنصر ولكنه لا يُرجع مصفوفة جديدة.
    map: يُرجع مصفوفة جديدة تحتوي على النتائج، وهو الأنسب عندما تحتاج إلى إنشاء مصفوفة جديدة بناءً على تعديل عناصر مصفوفة أخرى.

*/

const strings = ["hello", "world", "javascript", "forEach"];
const capital = strings.map((str) => str.toUpperCase());

console.log("- On utilisant la methode map(): "+capital);


let uppercaseStrings = []; // تعريف المتغير باستخدام let

strings.forEach((str) => {
    uppercaseStrings.push(str.toUpperCase());
});

console.log("- On utilisant la methode forEach(): "+ uppercaseStrings);



    