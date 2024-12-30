/**
 *  تمرين سهل: إنشاء وتحويل كائن JSON

المهمة:

    قم بإنشاء كائن يحتوي على اسم كتاب، مؤلفه، وسنة نشره.
    قم بتحويل هذا الكائن إلى نص JSON باستخدام JSON.stringify.
    اطبع النص الناتج في وحدة التحكم.
 */

book = {

    nameBook : "Mémoire personel",
    date : 1982
}

const bookStringify = JSON.stringify(book);
console.log(bookStringify);

/**
 * 2. تمرين سهل: قراءة JSON

المهمة:

    لديك النص التالي في JSON:

{ "name": "Ali", "age": 25, "city": "Casablanca" }

    قم بتحويله إلى كائن JavaScript باستخدام JSON.parse.
    اطبع القيم الخاصة بـ name, age, و city.
*/

citoyen = {
            "name": "Ali",
            "age": 25,
            "city": "Casablanca"
          }
console.log("Affichage object citoyen: ",citoyen);
const citoyenStringift = JSON.stringify(citoyen);
console.log("Affichage object Stringify citoyen: ",citoyen);
function citoyenObject(citoyen){
    return(` -Name: ${citoyen.name} \n  -Age: ${citoyen.age} \n  -City: ${citoyen.city}`)

}
console.log("Function pour afficher l'objet: \n", citoyenObject(citoyen));
const citoyenPerse = JSON.parse(citoyenStringift);

console.log("Affichage object Parse citoyen: ",citoyenPerse);

function showCoyen(citoyen){

    return(`-Name: ${citoyen.name} \n  -Age: ${citoyen.age} \n  -City: ${citoyen.city}`)
}

console.log("On utilsant une fonction:\n ", showCoyen(citoyenPerse));

/**
 * 3. تمرين متوسط: كائن متداخل

المهمة:

    قم بإنشاء كائن يحتوي على بيانات موظف (الاسم، العمر، الوظيفة)، وعنوان يحتوي على المدينة والرمز البريدي.
    قم بتحويله إلى نص JSON ثم عُد لتحويله إلى كائن JavaScript.
    اطبع جميع القيم.


 */

employe = {
    name : "Youssef malki",
    age : 42,
    fonction : "PDG",
    address : {
        city : "Casablanca",
        codePostal : 225500
    }
}

const employeStringify = JSON.stringify(employe);
const employeParse = JSON.parse(employeStringify);

function showEmploye(employe){
    return (` -Name: ${employe.name}\n -Age: ${employe.age}\n -Fonction: ${employe.fonction}\n -City: ${employe.address.city}\n -Code Postal: ${employe.address.codePostal}`)
}

console.log(showEmploye(employeParse));

/**
 4. تمرين متوسط: لائحة من العناصر في JSON

المهمة:

    قم بإنشاء كائن JSON يحتوي على اسم شخص وقائمة بالكتب التي قرأها (اسم الكتاب وسنة النشر).
    اطبع اسم الشخص مع أسماء الكتب فقط باستخدام حلقة.
*/

const biblioteque = {
    name : "Youssef malki",
    bookReaded : [
        {title : "HTML", year :2015},
        {title : "JAVA", year : 2018},
        {title : "PHP", year : 2020},
        {title : "CSS", year : 2022}
    ]
}


console.log(`Nom: ${biblioteque.name}`);
console.log("Livres lus: ")
biblioteque.bookReaded.forEach(book => {
    console.log(`-${book.title}`);
})

Object.entries(biblioteque.bookReaded).forEach(([key, value]) =>{
   console.log(`${key}: ${value.title}, ${value.year}`);
});

/**
 5. تمرين متوسط: تعديل JSON

المهمة:

    قم بإنشاء كائن JSON يمثل منتجًا يحتوي على اسم المنتج، السعر، والحالة (متوفر أو غير متوفر).
    قم بتحويل النص إلى كائن JavaScript.
    قم بتعديل السعر وإعادة تحويل الكائن إلى نص JSON.
*/
const product = {
    nameProduct: "Laptop",
    price: 699,
    stock: ["disponible", "indisponible"]
};

// تحويل الكائن إلى نص JSON
const productStringifys = JSON.stringify(product);

// تحويل النص JSON مرة أخرى إلى كائن JavaScript
const productParses = JSON.parse(productStringifys);

// تعديل السعر
productParses.price = productParses.price - (productParses.price * 20) / 100;

// تحويل الكائن المعدل مرة أخرى إلى نص JSON
const updatedProductJSON = JSON.stringify(productParses);

// عرض النتائج
console.log("Product JSON Stringify: ", productStringifys); // النص الأصلي
console.log("Updated Product JSON: ", updatedProductJSON); // النص المعدل

function showProduct(product) {
    return `- Produit: ${product.nameProduct}, - Prix: ${product.price}, Stock: ${product.stock[0]}\n`;
}

document.write(showProduct(productParses)); // استخدام الكائن المعدل

console.log("Product Parsed Object: ", productParses); // الكائن المعدل

/**
 6. تمرين متوسط-صعب: JSON داخل مصفوفة

المهمة:

    لديك مصفوفة JSON تحتوي على معلومات موظفين.
    لكل موظف، اطبع الاسم والوظيفة فقط.
    مثال:

[
  { "name": "Sara", "job": "Developer", "age": 30 },
  { "name": "Youssef", "job": "Designer", "age": 25 }
]

*/

const stagiaire = [
    { "name": "Sara", "job": "Developer", "age": 30 },
    { "name": "Youssef", "job": "Designer", "age": 25 }
];

// تحويل المصفوفة إلى نص JSON
const stagiaireStringify = JSON.stringify(stagiaire);

// إعادة تحويل النص إلى كائن JavaScript
const stagiaireParsed = JSON.parse(stagiaireStringify);

function showStagiaire(stagiaires) {
    stagiaires.forEach(stage => {
        console.log(`- Nom: ${stage.name} - Job: ${stage.job}`);
       document.write(`- Nom: ${stage.name} - Job: ${stage.job}`);
    });
}

// تمرير المصفوفة المحوَّلة إلى الدالة
showStagiaire(stagiaireParsed);


/**
 7. تمرين صعب: البحث داخل JSON

المهمة:

    لديك مصفوفة من الكائنات JSON تمثل منتجات.
    اكتب دالة تقبل اسم منتج وتعيد الكائن الخاص به إذا كان موجودًا.
*/

 listProducts = {
    "productList" : ["laptop", "phone", "tv"]
 }

 function findProduct(product){

       const isProduct = listProducts.productList.find(productTrue => productTrue === product);
       if(isProduct){
         return(`-Le produits recherches est exixtants: ${product}`)
       }else{
        return(`-Le produits recherches est inexixtants: ${product}`)

       }
 }

 console.log(findProduct("tv"));

/**
 8. تمرين صعب: الحذف من JSON

المهمة:

    قم بإنشاء كائن JSON يمثل مستخدمًا يحتوي على الاسم، البريد الإلكتروني، والهوايات.
    قم بحذف خاصية email باستخدام JavaScript.
    اطبع النص المعدل.
*/

student = {
    "name" : "Youssef Malki",
    "email" : "youssefmalki@gmail.com",
    "hobbies" : ["sport", "read", "travel"]
}

delete student.email;

console.log(student);


/**
     * const obj = { name: "Ali", age: 25 };
    for (let key in obj) {
    document.write(`${key}: ${obj[key]}<br>`);

 */

/**
 9. تمرين صعب: استخراج القيم من JSON معقد

المهمة:

    لديك النص التالي:

{
  "store": {
    "book": [
      { "title": "Book 1", "price": 15 },
      { "title": "Book 2", "price": 25 }
    ],
    "music": { "title": "Album 1", "price": 20 }
  }
}

    قم بتحويل النص إلى كائن JavaScript.
    اطبع عناوين الكتب وأسعارها فقط.
*/


  const stores =   {
        "store": {
        "book": [
            { "title": "Book 1", "price": 15 },
            { "title": "Book 2", "price": 25 }
        ],
        "music": { "title": "Album 1", "price": 20 }
        }
    }
    const storeStringify = JSON.stringify(stores);
    const storeParse = JSON.parse(storeStringify);
    console.log(storeParse);

      stores.store.book.forEach(element =>{
        console.log(`Le titre du livre est: ${element.title}, son prix: ${element.price}`);
    });

    console.log(`Le titre de l'album: ${stores.store.music.title}, son prix: ${stores.store.music.price}`)


/**
 10. تمرين شديد الصعوبة: بناء نظام بيانات

المهمة:

    قم بإنشاء كائن JSON يمثل مدرسة تحتوي على:
        اسم المدرسة.
        قائمة الفصول الدراسية.
        في كل فصل قائمة الطلاب (كل طالب يحتوي على الاسم والعمر).
    قم بتحويل النص إلى JSON، ثم عد لتحويله إلى JavaScript.
    اطبع اسم المدرسة وأسماء جميع الطلاب.
*/


const college = {
    "name": "Imam Malik",
    "classes": [
        {
            "name": "CE1",
            "students": [
                { "name": "student1", "age": 5 },
                { "name": "student2", "age": 5 },
                { "name": "student3", "age": 5 },
                { "name": "student4", "age": 5 },
                { "name": "student5", "age": 5 },
                { "name": "student6", "age": 5 }
            ]
        },




        
        {
            "name": "CE2",
            "students": [
                { "name": "student1", "age": 6 },
                { "name": "student2", "age": 6 },
                { "name": "student3", "age": 6 },
                { "name": "student4", "age": 6 },
                { "name": "student5", "age": 6 },
                { "name": "student6", "age": 6 }
            ]
        },
        {
            "name": "CE3",
            "students": [
                { "name": "student1", "age": 7 },
                { "name": "student2", "age": 7 },
                { "name": "student3", "age": 7 },
                { "name": "student4", "age": 7 },
                { "name": "student5", "age": 7 },
                { "name": "student6", "age": 7 }
            ]
        },
        {
            "name": "CE4",
            "students": [
                { "name": "student1", "age": 8 },
                { "name": "student2", "age": 8 },
                { "name": "student3", "age": 8 },
                { "name": "student4", "age": 8 },
                { "name": "student5", "age": 8 },
                { "name": "student6", "age": 8 }
            ]
        }
    ]
};

// تحويل النص إلى JSON ثم إلى JavaScript
const collegeStringify = JSON.stringify(college);
const collegeParse = JSON.parse(collegeStringify);

// طباعة اسم المدرسة
console.log(`-Le nom de l'école: ${collegeParse.name}`);

// طباعة أسماء جميع الطلاب
collegeParse.classes.forEach(classItem => {
    console.log(`-Les classes de l'ecole: ${classItem.name}`);
    classItem.students.forEach(student => {
        console.log(`-Le nom de l'étudiant est: ${student.name}, sont âge: ${student.age}`);
    });
});










/**
 * const collegeStringify = JSON.stringify(college);
console.log(`Le nom de l'ecole est: ${collegeStringify}`);
college.classes.forEach(classe => {
    classe.CE1.forEach(ce => {
        console.log(ce.name, ce.age);
    })
})
 */