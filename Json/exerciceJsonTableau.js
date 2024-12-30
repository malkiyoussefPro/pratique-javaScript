/**
 * تمارين متنوعة حول تداخل الكائنات والمصفوفات
1. تمرين - تحليل الطلبات (Order Analysis)

    أنشئ دالة analyzeOrders تأخذ مصفوفة من الطلبات. كل طلب عبارة عن كائن يحتوي على:

        client (كائن يحتوي على name و email)
        items (مصفوفة تحتوي على كائنات name و price)

    الدالة تقوم بـ:

        طباعة اسم كل عميل وعدد العناصر في طلبه.
        حساب المجموع الكلي لكل طلب وإرجاع مصفوفة تحتوي على أسماء العملاء مع مجموع طلباتهم.

مثال الإدخال:
********************************************************************************************************

*/

const orders = [
    {
        client: { name: "Ahmed", email: "ahmed@example.com" },
        items: [
            { name: "Product 1", price: 100 },
            { name: "Product 2", price: 50 }
        ]
    },
    {
        client: { name: "Fatima", email: "fatima@example.com" },
        items: [
            { name: "Product A", price: 200 },
            { name: "Product B", price: 300 },
            { name: "Product C", price: 150 }
        ]
    }
];


function analyzeOrders(orders) {
    // مصفوفة النتائج النهائية
    const result = [];

    orders.forEach(order => {
        const clientName = order.client.name;
        const itemCount = order.items.length;

        // حساب المجموع الكلي للطلب
        const totalAmount = order.items.reduce((acc, item) => acc + item.price, 0);

        // طباعة التفاصيل
        console.log(`Nom client: ${clientName}, Nombre d'articles: ${itemCount}, Total à payer: ${totalAmount}`);

        // إضافة النتائج إلى المصفوفة
        result.push({ clientName, totalAmount });
    });

    return result;
}

// استدعاء الدالة وتحصل على النتائج
const analysisResult = analyzeOrders(orders);
console.log("Résultat final:", analysisResult);
/*

********************************************************************************************************
الخروج المتوقع:

Client: Ahmed, Items: 2, Total: 150
Client: Fatima, Items: 3, Total: 650

[ 
  { clientName: "Ahmed", total: 150 },
  { clientName: "Fatima", total: 650 }
]
********************************************************************************************************
*/

/*
********************************************************************************************************
2. تمرين - إدارة الطلاب (Student Manager)

    أنشئ دالة manageStudents تأخذ كائنًا يحتوي على:

        class (اسم الصف)
        students (مصفوفة تحتوي على كائنات فيها: name، scores وهي مصفوفة من الأرقام).

    تقوم الدالة بـ:

        طباعة اسم الصف.
        لكل طالب، طباعة اسمه ومتوسط درجاته.
        إرجاع الطالب الحاصل على أعلى متوسط درجات.

مثال الإدخال:
********************************************************************************************************


const classroom = {
    class: "Mathematics",
    students: [
        { name: "Ali", scores: [80, 90, 85] },
        { name: "Sara", scores: [95, 100, 90] },
        { name: "Kamal", scores: [70, 75, 80] }
    ]
};

function manageStudents(classroom){
    const namClass = classroom.class;
    console.log(`Nom class: ${namClass}`);

    const resultat = [];
    
    classroom.students.forEach(student => {

        const namStudent = student.name;

        const averegStudent = student.scores.reduce((acc , score)=> acc + score , 0 ) / student.scores.length;

        console.log(`Nom etudiant: ${namStudent}, Averege: ${averegStudent} `);

        resultat.push(namClass, namStudent, averegStudent);

    });

    
    return resultat;

}
   
    manageStudents(classroom);

    الملاحظات والتقييم:

    الملاحظات:
        تجنب الخلط بين أسماء الحقول والكائنات.
        استخدم أسماء متغيرات واضحة، مثل average وtopStudent.

    التقييم:
        الكود الأصلي يحتوي على العديد من الأخطاء ولكن الفكرة الأساسية واضحة.
*/
const classroom = {
    class: "Mathematics",
    students: [
        { name: "Ali", scores: [80, 90, 85] },
        { name: "Sara", scores: [95, 100, 90] },
        { name: "Kamal", scores: [70, 75, 80] }
    ]
};

function manageStudents(classroom) {
    // طباعة اسم الصف
    console.log(`Class Name: ${classroom.class}`);

    let topStudent = null; // الطالب الحاصل على أعلى متوسط
    let highestAverage = 0; // أعلى متوسط درجات

    classroom.students.forEach(student => {
        // حساب متوسط الدرجات
        const average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;

        // طباعة اسم الطالب ومتوسط درجاته
        console.log(`Student: ${student.name}, Average Score: ${average.toFixed(2)}`);

        // تحديث أعلى طالب بناءً على المتوسط
        if (average > highestAverage) {
            highestAverage = average;
            topStudent = student;
        }
    });

    // إرجاع الطالب الحاصل على أعلى متوسط درجات
    return topStudent;
}

// استدعاء الدالة
const topStudent = manageStudents(classroom);
console.log("Top Student:", topStudent);

/*

الخروج المتوقع:

Class: Mathematics
Student: Ali, Average: 85
Student: Sara, Average: 95
Student: Kamal, Average: 75

Top Student: Sara with Average: 95


********************************************************************************************************
3. تمرين - حساب الفواتير (Invoice Summarizer)

    أنشئ دالة summarizeInvoices تأخذ مصفوفة من الفواتير. كل فاتورة تحتوي على:

        id (رقم الفاتورة)
        client (اسم العميل)
        items (مصفوفة من كائنات فيها name و quantity و price).

    تقوم الدالة بـ:

        طباعة رقم الفاتورة واسم العميل.
        لكل فاتورة، حساب مجموع الأسعار وضربها في الكمية.
        إرجاع مصفوفة تحتوي على أرقام الفواتير مع مجموع الفواتير.

مثال الإدخال:
********************************************************************************************************



const invoices = [
    {
        id: 101,
        client: "Youssef",
        items: [
            { name: "Item A", quantity: 2, price: 50 },
            { name: "Item B", quantity: 3, price: 20 }
        ]
    },
    {
        id: 102,
        client: "Amina",
        items: [
            { name: "Item C", quantity: 1, price: 100 },
            { name: "Item D", quantity: 4, price: 25 }
        ]
    }
];

function summarizeInvoices(invoices){
  
  const arrayInvoice = [];

  invoices.forEach(invoice => {

    const  idInvoice = invoice.id;
   
    const  nomClient = invoice.client;
    
    const total = invoice.items.reduce((acc, item) => acc + item ,0);

    console.log(`Invoice Id: ${idInvoice}, Client:${nomClient}, Total: ${total}`);

    arrayInvoice.push(idInvoice);

  });

  return arrayInvoice;


}

summarizeInvoices(invoices);
*/
const invoices = [
    {
        id: 101,
        client: "Youssef",
        items: [
            { name: "Item A", quantity: 2, price: 50 },
            { name: "Item B", quantity: 3, price: 20 }
        ]
    },
    {
        id: 102,
        client: "Amina",
        items: [
            { name: "Item C", quantity: 1, price: 100 },
            { name: "Item D", quantity: 4, price: 25 }
        ]
    }
];

function summarizeInvoices(invoices) {
    const invoiceSummaries = [];

    invoices.forEach(invoice => {
        // حساب المجموع الكلي للفاتورة
        const total = invoice.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        //const total = invoice.items.reduce((acc, item) => acc + item.price , 0);// hna kay3tik total safi walakin makayhsebhch quantite * tota

        // طباعة رقم الفاتورة واسم العميل والمجموع
        console.log(`Invoice ID: ${invoice.id}, Client: ${invoice.client}, Total: ${total}`);

        // إضافة بيانات الفاتورة للمصفوفة
        invoiceSummaries.push({ id: invoice.id, total });
    });

    // إرجاع ملخص الفواتير
    return invoiceSummaries;
}

// استدعاء الدالة
const summaries = summarizeInvoices(invoices);
console.log("Invoice Summaries:", summaries);

/*

********************************************************************************************************
الخروج المتوقع:

Invoice ID: 101, Client: Youssef, Total: 190
Invoice ID: 102, Client: Amina, Total: 200

[ 
  { invoiceId: 101, total: 190 },
  { invoiceId: 102, total: 200 }
]

********************************************************************************************************



********************************************************************************************************
4. تمرين - تصفية المنتجات (Filter Products)

    أنشئ دالة filterProducts تأخذ كائنًا يحتوي على:

        storeName (اسم المتجر)
        products (مصفوفة تحتوي على كائنات فيها name، category، و price).

    تقوم الدالة بـ:

        طباعة اسم المتجر.
        تصفية المنتجات بناءً على السعر (أقل من قيمة معينة تُمرر كوسيط).
        إرجاع قائمة بأسماء المنتجات المصنفة حسب الفئة.

مثال الإدخال:
********************************************************************************************************


const stores = {
    storeName: "Tech Store",
    products: [
        { name: "Laptop", category: "Electronics", price: 1500 },
        { name: "Mouse", category: "Accessories", price: 20 },
        { name: "Keyboard", category: "Accessories", price: 50 },
        { name: "Phone", category: "Electronics", price: 800 }
    ]
};

function filterProducts(store, number){

    console.log(`Store Name: ${stores.storeName}`);
    const listProduct = [];

    const filtrPrix = store.products.filter(product => product.price <= number);



    console.log("Filtered Products: ");
    return filtrPrix;

}

filterProducts(stores, 1000);
*/

const stores = {
    storeName: "Tech Store",
    products: [
        { name: "Laptop", category: "Electronics", price: 1500 },
        { name: "Mouse", category: "Accessories", price: 20 },
        { name: "Keyboard", category: "Accessories", price: 50 },
        { name: "Phone", category: "Electronics", price: 800 }
    ]
};

function filterProducts(store, maxPrice) {
    console.log(`Store Name: ${store.storeName}`);

    // تصفية المنتجات حسب السعر
    const filteredProducts = store.products.filter(product => product.price < maxPrice);

    // تصنيف المنتجات حسب الفئة
    const categorizedProducts = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product.name);
        return acc;
    }, {});

    console.log("Filtered Products by Category:");
    console.log(categorizedProducts);

    return categorizedProducts;
}

    const result = filterProducts(stores, 100);
    console.log("Result:", result);


/*

********************************************************************************************************
الخروج المتوقع:

Store: Tech Store

Filtered Products: 
Category: Accessories, Products: [ "Mouse", "Keyboard" ]
Category: Electronics, Products: [ ]
********************************************************************************************************



********************************************************************************************************
5. تمرين - حساب رواتب الموظفين (Salary Calculator)

    أنشئ دالة calculateSalaries تأخذ مصفوفة من الكائنات. كل كائن يمثل موظفًا يحتوي على:

        name (اسم الموظف)
        salary (الراتب الأساسي)
        bonuses (مصفوفة تحتوي على الأرقام الإضافية).

    تقوم الدالة بـ:

        طباعة اسم الموظف وراتبه الكلي (الأساسي + المكافآت).
        إرجاع مصفوفة تحتوي على أسماء الموظفين مع رواتبهم الكلية.

مثال الإدخال:

*/

const employees = [
    { name: "Khadija", salary: 3000, bonuses: [200, 300, 150] },
    { name: "Omar", salary: 2500, bonuses: [100, 150] },
    { name: "Aicha", salary: 4000, bonuses: [500, 600, 400] }
];

function calculateSalaries(){

    const tableEmploye = [];

     employees.forEach(employe =>{
        const salary = employe.bonuses.reduce((acc, buletin) => acc + buletin ,0);
        tableEmploye.push(employe.name, salary);
        console.log(`Nom employée:${employe.name}, Salaire: ${salary + employe.salary}` )
    });

    return tableEmploye;

}

const result2 = calculateSalaries();

console.log(result2);

/*


********************************************************************************************************
الخروج المتوقع:

Employee: Khadija, Total Salary: 3650
Employee: Omar, Total Salary: 2750
Employee: Aicha, Total Salary: 5500

[
  { name: "Khadija", totalSalary: 3650 },
  { name: "Omar", totalSalary: 2750 },
  { name: "Aicha", totalSalary: 5500 }
]

********************************************************************************************************
 */

/**
 * تمرين - إدارة الفريق (Team Manager)

الفكرة:
قم بإنشاء تمرين يحتوي على فريق عمل. كل عضو هو كائن يحتوي على name, role, وsalary.

    أكتب دالة تطبع أسماء الأعضاء ورواتبهم.
    أكتب دالة تحسب مجموع رواتب الفريق.

مثال:

const team = [
    { name: "Ali", role: "Developer", salary: 3000 },
    { name: "Sara", role: "Designer", salary: 2500 },
    { name: "Omar", role: "Manager", salary: 4000 }
];

الأسئلة:

    صمم دالة listTeamMembers تطبع أسماء الأعضاء.
    أكتب دالة calculateTotalSalary لحساب المجموع الكلي للرواتب.
 */

    const team = [
        { name: "Ali", role: "Developer", salary: 3000 },
        { name: "Sara", role: "Designer", salary: 2500 },
        { name: "Omar", role: "Manager", salary: 4000 }
    ];

    function listTeamMembers(){
       team.forEach(names=> {
          console.log(`Nom: ${names.name}`);
       });
    }

    function calculateTotalSalary(){
      const total =  team.reduce((acc, salaries) => acc + salaries.salary, 0);
     return total;
    }

    listTeamMembers();
    const resultTotal = calculateTotalSalary();
    console.log(resultTotal);

//********************************************************************************************************

/*
تمرين - متجر إلكتروني (E-Commerce Store)

الفكرة:
صمم قائمة منتجات تحتوي على كائنات. كل منتج يحتوي على name, category, price, وinStock.

    أكتب دالة تطبع المنتجات المتوفرة فقط.
    أكتب دالة تصفي المنتجات بناءً على الفئة (Category).

مثال:

const products = [
    { name: "Laptop", category: "Electronics", price: 1500, inStock: true },
    { name: "Chair", category: "Furniture", price: 300, inStock: false },
    { name: "Phone", category: "Electronics", price: 800, inStock: true }
];
function listAvailableProducts(){
   const listProduct = [];
   products.forEach(product => {
    if( product.inStock)
    listProduct.push(product.name);
   });
   return listProduct;
}

function filterByCategory(category){
   const filtercategory = [];
    products.forEach(product => {
   
    if(product.category === category){

        filtercategory.push(`Nom produit: ${product.name},  categorie: ${product.category}`);
    }
   });

   return filtercategory;
}
const resultCategory = filterByCategory("Electronics").join('\n');
console.log(resultCategory);

const resultStock = listAvailableProducts();
console.log(resultStock);

الأسئلة:

    أكتب دالة listAvailableProducts تطبع المنتجات المتوفرة فقط.
    أضف دالة filterByCategory تصفي المنتجات حسب الفئة
*/



const products = [
    { name: "Laptop", category: "Electronics", price: 1500, inStock: true },
    { name: "Chair", category: "Furniture", price: 300, inStock: false },
    { name: "Phone", category: "Electronics", price: 800, inStock: true }
];



// 1. دالة لطباعة المنتجات المتوفرة فقط
function listAvailableProducts() {
    return products
        .filter(product => product.inStock) // تصفية المنتجات المتوفرة فقط
        .map(product => product.name);      // استخراج أسماء المنتجات
}

// 2. دالة لتصفية المنتجات حسب الفئة
function filterByCategory(category) {
    return products.filter(product => product.category === category);
}

// تجربة الدوال
const resultStock = listAvailableProducts();
const resultCategory = filterByCategory("Electronics");

console.log("Available Products:", resultStock);
console.log("Products in Electronics Category:", resultCategory);

//********************************************************************************************************

/*
تمرين - إدارة الرحلات الجوية (Flight Manager)

الفكرة:
قم بتصميم كائن يمثل قائمة رحلات جوية. كل رحلة تحتوي على flightNumber, destination, وpassengers (مصفوفة من الكائنات فيها name وticketNumber).

    أكتب دالة تطبع أسماء الركاب في رحلة معينة.
    أكتب دالة تضيف راكبًا جديدًا إلى الرحلة.

مثال:

const flights = [
    {
        flightNumber: "AT200",
        destination: "Paris",
        passengers: [
            { name: "Omar", ticketNumber: "T123" },
            { name: "Sara", ticketNumber: "T124" }
        ]
    }
];


الأسئلة:

    أكتب دالة listPassengers تطبع أسماء الركاب.
    أضف دالة addPassenger تضيف راكبًا جديدًا إلى الرحلة.
*/

const flights = [
    {
        flightNumber: "AT200",
        destination: "Paris",
        passengers: [
            { name: "Omar", ticketNumber: "T123" },
            { name: "Sara", ticketNumber: "T124" },  
        ]
    }
];

function listTickets(){
    const listTickets = [];
    flights.forEach(flight => {
        flight.passengers.forEach(ticket =>{
            listTickets.push(`Tickets: ${ticket.ticketNumber}`);
        })
    })

    return listTickets;
}

function listPassengers(){
    const arrayPassager = [];
    flights.forEach(flight =>{
        flight.passengers.forEach(pasager => {
            arrayPassager.push(`Nom passager: ${pasager.name}`);
        });
    })
    return arrayPassager;
}

function addPassenger(namePassager, tickets){

    flights.forEach(flight => {
        flight.passengers.push({
            name : namePassager,
            ticketNumber : tickets
        });
    });
}


addPassenger("youssef malki","T125");
 const namePassager = listPassengers();
 console.log(namePassager);
 const list = listTickets();
 console.log(list);
 

//********************************************************************************************************

/**
 * 
 تمرين - نظام المطاعم (Restaurant Orders)

الفكرة:
صمم تمرين يحتوي على نظام لطلبات الطعام. كل طلب عبارة عن كائن يحتوي على orderId, clientName, وitems (مصفوفة من الكائنات تحتوي على name وprice).

    أكتب دالة لحساب مجموع الطلب.
    أكتب دالة لإضافة عنصر جديد إلى الطلب.

مثال:

const orders = [
    {
        orderId: 1,
        clientName: "Youssef",
        items: [
            { name: "Burger", price: 50 },
            { name: "Fries", price: 20 }
        ]
    }
];

الأسئلة:

    صمم دالة calculateOrderTotal لحساب المجموع الكلي.
    أضف دالة addItemToOrder لتحديث العناصر في الطلب.
 */

    const ordersRestaurant = [
        {
            orderId: 1,
            clientName: "Youssef",
            items: [
                { name: "Burger", price: 50 },
                { name: "Fries", price: 20 }
            ]
        }
    ];

  function calculateOrderTotal(){

    ordersRestaurant.forEach(client =>{
        console.log(`Nom client: ${client.clientName}`);
        console.log(`details commande: `);
        client.items.forEach(item =>{
            console.log(`- ${item.name}`);
        });
        const totalNet = client.items.reduce((acc, total) => acc + total.price, 0);
        console.log(`total a payer : ${totalNet} Dh.`)
        console.log("Merci pour votre visite a bientôt")
    });
    
  }
  
  function addItemToOrder(nameproduit, prixProduit){

    ordersRestaurant.forEach(order =>{
        order.items.push({
            name : nameproduit,
            price : prixProduit
        })
    })

  }

 console.log(calculateOrderTotal()); 
 const addOrder= addItemToOrder("pizza", 150);
console.log(calculateOrderTotal());

//********************************************************************************************************

/**
 * 
 * تمرين - إدارة المكتبة (Library Management)

الفكرة:
صمم تمرين يتضمن مكتبة تحتوي على قائمة كتب. كل كتاب هو كائن يحتوي على title, author, وisAvailable.

    أنشئ دالة تطبع قائمة الكتب المتوفرة.
    أنشئ دالة تسمح باستعارة كتاب إذا كان متوفرًا.

مثال:

const library = [
    { title: "1984", author: "George Orwell", isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
];

الأسئلة:

    أكتب دالة listAvailableBooks تطبع الكتب المتوفرة فقط.
    أكتب دالة borrowBook تأخذ عنوان الكتاب وتحدّث حالة isAvailable.
*/

const library = [
    { title: "1984", author: "George Orwell", isAvailable: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
];



function listAvailableBooks(){
   return library
   .filter(available => available.isAvailable)
        .map(available => available.title );
}

const available = listAvailableBooks();
console.log(available);

//********************************************************************************************************
