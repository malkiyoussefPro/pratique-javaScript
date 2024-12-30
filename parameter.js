/***
 * 
 * 
 * فهم التعامل مع Object، Array، و JSON كمعاملات داخل الدوال

1. التعامل مع Objects كمعاملات

عندما تمرر كائنًا (Object) إلى دالة، يمكن الوصول إلى خصائصه أو تعديلها حسب الحاجة.
مثال:

function printUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const userObject = { name: "Youssef", age: 25 };
printUserInfo(userObject); // Name: Youssef, Age: 25


********************************************************************************************************

2. التعامل مع Arrays كمعاملات

يمكن تمرير مصفوفة (Array) إلى دالة للوصول إلى عناصرها أو التعديل عليها.
مثال:

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const numArray = [1, 2, 3, 4];
console.log(sumArray(numArray)); // 10

********************************************************************************************************

3. التعامل مع JSON كمعاملات

JSON هو نص بتنسيق خاص (عادة يتم تحليله إلى كائن JavaScript). يمكن استخدامه بعد تحويله إلى Object.
مثال:

function extractData(jsonString) {
    const data = JSON.parse(jsonString); // تحويل JSON إلى Object
    return `Name: ${data.name}, Age: ${data.age}`;
}

const jsonData = '{"name": "Khadija", "age": 30}';
console.log(extractData(jsonData)); // Name: Khadija, Age: 30

دمج Object, Array, و JSON في نفس الدالة
مثال:

function processOrder(order) {
    const { customer, products } = order; // تفكيك الخصائص
    console.log(`Customer: ${customer.name}, Total Products: ${products.length}`);
    return products.map(product => product.price).reduce((sum, price) => sum + price, 0);
}

const orderData = {
    customer: { name: "Youssef", email: "youssef@example.com" },
    products: [
        { id: 1, name: "Product A", price: 50 },
        { id: 2, name: "Product B", price: 30 }
    ]
};

console.log(`Total Price: ${processOrder(orderData)}`); // Customer: Youssef, Total Products: 2, Total Price: 80

تمارين للتطبيق:

*/




function infoUser(user){
    console.log(`Nom: ${user.nom}, Age: ${user.age}`);

    

}
const arrayUser = [
    {
        nom : "youssef",
        age : 42
    },
    {
        nom : "lwalida",
        age : 62
    },
    {
        nom : "mustapha",
        age : 32
    }
]

arrayUser.forEach((infoUser));



/**
 * ********************************************************************************************************

1. تمرين على Object

    كري دالة اسمها getCarDetails تأخذ كائن يمثل سيارة يحتوي على make، model، وyear، وترجع النص التالي:
    "Car: Toyota Corolla, Year: 2022"

 */

    function infoCars(car){

        console.log(`Car: ${car.model}, Year: ${car.year}`);

    }

    const detailCars ={
        model : "Toyota",
        make : "Japon",
        year : 2022
    }


    infoCars(detailCars);

    
/**
 * 
 * ********************************************************************************************************
    2. تمرين على Array

    كري دالة اسمها multiplyElements تأخذ مصفوفة من الأرقام وعدد معين، وترجع مصفوفة جديدة حيث تضرب جميع العناصر في هذا العدد.

 */


    function multiplyElements(array, number){
        return array.map(newArray => newArray * number);
    }

    console.log(multiplyElements([1,6,9,7],5));

/**
 * ********************************************************************************************************
    3. تمرين على JSON

    كري دالة اسمها convertAndSum تأخذ نص JSON يمثل مصفوفة من الأرقام (مثال: "[10, 20, 30]") وتحسب مجموع الأرقام.

    Dans cet exemple :

    * accumulateur est la valeur accumulée au fur et à mesure des itérations
    * valeurCourante est l'élément du tableau en cours de traitement
    * 0 est la valeur initiale de l'accumulateur


 */


    function convertAndSum(array){

        return array.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);

    }

    console.log(convertAndSum([10,20,30]))
/**
 * 
********************************************************************************************************
    4. تمرين متكامل

    كري دالة اسمها processInvoice تأخذ كائن JSON يمثل فاتورة يحتوي على خصائص client (كائن فيه name وemail) وitems (مصفوفة تحتوي على name وprice). الدالة يجب أن تطبع اسم العميل وعدد العناصر وتحسب مجموع الأسعار.

 */

function processInvoice (client, item, quantite){
    let total = items.price * quantite;
    console.log(`Nom client: ${cliens.name}, Quantité: ${quantite}, Total: ${total} `);
}


const cliens = {
    name : "yousma",
    email : "yousma@gmail.com"
}

const items = [
    {
    name : "film alimentaire",
    price : 25
    },
    {
        name : "scotch",
        price : 15
    },
    {
        name : "papier a bulle",
        price : 125
    },
];



function processInvoice(invoice) {
    const clientName = invoice.client.name;
    const totalItems = invoice.items.length;
    const totalPrice = invoice.items.reduce((acc, item) => acc + item.price, 0);

    console.log(`Nom client: ${clientName}, Nombre des articles: ${totalItems}, Total: ${totalPrice}`);
}

const invoice = {
    client: { name: "yousma", email: "yousma@gmail.com" },
    items: [
        { name: "film alimentaire", price: 25 },
        { name: "scotch", price: 15 },
        { name: "papier a bulle", price: 125 }
    ]
};

processInvoice(invoice);
