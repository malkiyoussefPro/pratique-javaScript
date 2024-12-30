/**
 مقارنة الأداء:

    map أكثر كفاءة عند تحويل العناصر مباشرةً، لأن الهدف واضح: معالجة وإرجاع مصفوفة جديدة.


    تُستخدم عندما تحتاج إلى معالجة أو تحويل العناصر -
    تُعيد مصفوفة جديدة بناءً على المعالجة -
     غير مخصصة للتغييرات المباشرة على المصفوفة الأصلية -

     forEach يُستخدم عادةً عندما تحتاج إلى تنفيذ تعليمات إضافية أو تغييرات على المصفوفة الأصلية.

     لا تُعيد أي قيمة (undefined) -
     تُستخدم للتنفيذ الجانبي (side effects) فقط -
     ستخدم غالبًا لتحديث المصفوفة أو تنفيذ عمليات منفصلة -

الخلاصة:

    استخدم map عندما تحتاج إلى إنشاء أو معالجة قائمة جديدة بناءً على البيانات.
    استخدم forEach عندما يكون الهدف هو التكرار دون الحاجة إلى إنشاء قيمة جديدة.
 */
/**
 * 1. إدارة المستخدمين (User Management):

    وصف:
        قم بإنشاء دالة addUser تضيف مستخدمًا جديدًا إلى قائمة مستخدمين.
        دالة removeUser تقوم بحذف مستخدم باستخدام id.
        دالة getUserDetails تعرض تفاصيل مستخدم معين باستخدام id.

    مثال الإدخال:

    const users = [
        { id: 1, name: "Youssef", age: 25 },
        { id: 2, name: "Aicha", age: 30 }
    ];
//********************************************************************************************************
*/
const users = [
    { id: 1, name: "Youssef", age: 25 },
    { id: 2, name: "Aicha", age: 30 }
];

function addUser(nameUser, ageUser) {
    // العثور على أعلى قيمة id في المصفوفة
    const lastId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;

    // إضافة مستخدم جديد مع id تلقائي
    users.push({
        id: lastId + 1, // id الجديد يكون أعلى من أعلى id موجود
        name: nameUser,
        age: ageUser
    });

    console.log(`User added successfully: {id: ${lastId + 1} , name: ${nameUser}, age: ${ageUser}}`);
}


function removeUser(idUser) {
    const index = users.findIndex(user => user.id === idUser);
    if (index !== -1) {
        users.splice(index, 1); // حذف المستخدم عند إيجاد الفهرس
        return true; // العملية نجحت
    } else {
        console.log(`User with id ${idUser} not found.`);
        return false; // العملية فشلت
    }
}


function showUsers(){
    users.forEach(user =>{
        console.log(user);
    });
}
function showUsersId(idUser){
  return  users.find(user => user.id === idUser);
}



    removeUser(2);

    removeUser(2);
    removeUser(3);
    addUser("malki", 42);

    removeUser(5);
    showUsers();

/*

2. إدارة المكتبة (Library System):

    وصف:
        دالة addBook تضيف كتابًا جديدًا إلى قائمة الكتب.
        دالة searchBook تبحث عن كتاب باستخدام العنوان.
        دالة getBooksByAuthor تعرض جميع الكتب لمؤلف معين.

    مثال الإدخال:

    const library = [
        { id: 1, title: "JavaScript for Beginners", author: "John Doe" },
        { id: 2, title: "CSS Mastery", author: "Jane Smith" }
    ];
*/

const library = [
    { id: 1, title: "JavaScript for Beginners", author: "John Doe" },
    { id: 2, title: "CSS Mastery", author: "Jane Smith" }
];

function addBook(title, author){

    const lastId = library.length > 0 ? Math.max(...library.map(libre => libre.id)) : 0;

    library.push({
        id : lastId +1,
        title : title,
        author : author
    })

    console.log(`Book: ${title} by ${author} has been added to the libary.`)
 
}

function searchBook(titles){

   return library.find(title => title.title === titles ) || "Book Not Found";
   
}

function getBooksByAuthor(authors){

    const books = library.find(author => author.author === authors);
    return books.length > 0 ? books : "No books found by this author.";
}


console.log(addBook("Html", "Youssef Malki"));
console.log(searchBook("CSS Mastery"));
console.log(getBooksByAuthor("Youssef Malki"));

/*
//********************************************************************************************************
3. نظام الجرد (Inventory System):

    وصف:
        دالة addProduct تضيف منتجًا جديدًا إلى الجرد.
        دالة updateStock تقوم بتحديث كمية منتج باستخدام id.
        دالة getLowStockProducts تعرض المنتجات التي كمية مخزونها أقل من 5.

    مثال الإدخال:

    const inventory = [
        { id: 1, name: "Laptop", stock: 10 },
        { id: 2, name: "Mouse", stock: 3 }
    ];

*/

    const inventory = [
        { id: 1, name: "Laptop", stock: 10 },
        { id: 2, name: "Mouse", stock: 3 }
    ];

function addProduct(name, stock) {  
    const lastId = inventory.length > 0 ? Math.max(...inventory.map(inventaire => inventaire.id)) : 0;

    inventory.push({
        id : lastId + 1,
        name : name,
        stock : stock,
    });
     
    console.log(`New product added succsssfully Id : ${lastId+1}, name: ${name}, stock: ${stock}`);
}

function updateStock(idProduct, newStock){
    
    const product =  inventory.find(invent => invent.id === idProduct);
    
    if (product) {
        product.stock = newStock;
        console.log(`Stock updated for ${product.name}: New Stock = ${newStock}`);
    } else {
        console.log(`Product with id ${idProduct} not found.`);
    }

}

function getLowStockProducts(){

 return  inventory.filter(invent => invent.stock < 5);


}

    addProduct("Phone", 9);
    addProduct("Tv", 8);
    addProduct("Tablet", 4);

    function allproduct(){
        inventory.forEach(invent => {
            console.log(invent);
        });
    }

    allproduct();
    updateStock(5, 10);
    console.log(getLowStockProducts());
    
    allproduct();
/*
//********************************************************************************************************
4. إدارة الطلبات (Order Management):

    وصف:
        دالة addOrder تضيف طلبًا جديدًا.

        دالة calculateTotalOrder تحسب مجموع الأسعار في الطلب.
        دالة getOrdersByClient تعرض جميع الطلبات لعميل معين.

    مثال الإدخال:

    const orders = [
        { orderId: 1, clientName: "Youssef", items: [{ name: "Burger", price: 50 }] }
    ];

        
    const orders = [
        { orderId: 1, clientName: "Youssef", items: [{ name: "Burger", price: 50 }] }
    ];


  function  addOrder(client, item ){
        tableOrder = [];
        orders.forEach(order => {
            tableOrder.push({
                clientName : client,
                items : item
           });
        })
        
    }

  console.log(addOrder("malki", ["pizza" , 35]));
*/

const orders = [
    { orderId: 1, clientName: "Youssef", items: [{ name: "Burger", price: 50 }] }
];

function addOrder(client, items) {
    // تحديد آخر رقم طلب
    const lastOrderId = orders.length > 0 ? Math.max(...orders.map(order => order.orderId)) : 0;

    // إضافة الطلب الجديد
    const newOrder = {
        orderId: lastOrderId + 1, // رقم الطلب الجديد
        clientName: client,       // اسم العميل
        items: items.map(item => ({
            name: item[0],        // اسم المنتج
            price: item[1]        // سعر المنتج
        }))
    };

    orders.push(newOrder); // إضافة الطلب إلى القائمة

    return newOrder; // إرجاع الطلب الجديد
}

// استدعاء الدالة وإضافة طلب جديد
console.log(addOrder("Malki", [["Pizza", 35], ["Soda", 10]]));

// دالة calculateTotalOrder تحسب مجموع الأسعار في الطلب.

function calculateTotalOrder(){

    orders.forEach(order => {
    const total = order.items.reduce((acc, item) => acc + item.price, 0);
        
    console.log(`Le total du commande numero : ${order.orderId} est : ${total} Dh`);
    });

}

//  دالة getOrdersByClient تعرض جميع الطلبات لعميل معين.

function getOrdersByClient(nameClient) { 
    orders.filter(order=> order.clientName === nameClient)
    .forEach(order => {
        console.log(`La liste des commandes du client: ${nameClient}` )
        console.log(`Order Id :${order.orderId}, Items: ${order.items.map(item => item.name).join(", ")} `);
    });
 }
 
 function allorders(){
    console.log(`- Liste de toutes les ordres: `)
    orders.forEach(order => {
        console.log(order);
    })
 }
  
 getOrdersByClient("Malki");

 allorders();

 calculateTotalOrder();
/*
//********************************************************************************************************
5. نظام المدرسة (School System):

    وصف:
        دالة addStudent تضيف طالبًا جديدًا.
        دالة calculateAverageGrade تحسب المعدل العام للطالب.
        دالة getTopStudents تعرض الطلاب ذوي أعلى معدل.

    مثال الإدخال:

    const students = [
        { id: 1, name: "Amine", grades: [15, 18, 17] },
        { id: 2, name: "Sara", grades: [10, 12, 14] }
    ];
*/

const students = [
    { id: 1, name: "Amine", grades: [15, 18, 17] },
    { id: 2, name: "Sara", grades: [10, 12, 14] }
];

    function addStudent(nameStudent, gradeStudent){
        // تحديد آخر رقم طلب
        const lastStudentId = students.length > 0 ? Math.max(...students.map(student => student.id )) : 0;

        const newStudent = students.push({
            id: lastStudentId + 1,
            name : nameStudent,
            grades : gradeStudent
        });
    }
    function getTopStudents(){
        console
    }
    function calculateAverageGrade(){
        console.log("calcule avrege: ")
        students.forEach(student =>{
          const averg =  student.grades.reduce((acc, grade) => (acc + grade) , 0) / student.grades.length;
          console.log(`La moyenne de l'etudiant ${student.name} est: ${averg}`)
        })
    }

    function allStudent(){
        console.log("Liste des etudiants: ")
        students.forEach(student => {
            console.log(student);
        })
    }
    
    addStudent("Youssef Malki", [12,16,17]);
    addStudent("Karima Malki", [17,18,16]);
    calculateAverageGrade();
    allStudent();
/*
//********************************************************************************************************
6. تحليل النصوص (Text Analysis):

    وصف:
        دالة countWords تحسب عدد الكلمات في نص.
        دالة findMostFrequentWord تجد الكلمة الأكثر تكرارًا.
        دالة checkWordExists تتحقق مما إذا كانت كلمة معينة موجودة في النص.

    مثال الإدخال:

    const text = "JavaScript is fun and JavaScript is powerful.";
/*/
const text = "JavaScript is fun and JavaScript is powerful.";




/*
//********************************************************************************************************
7. نظام المتجر الإلكتروني (E-commerce System):

    وصف:
        دالة addToCart تضيف عنصرًا إلى السلة.
        دالة removeFromCart تحذف عنصرًا من السلة.
        دالة calculateCartTotal تحسب المجموع الكلي للسلة.

    مثال الإدخال:

    const cart = [
        { id: 1, name: "Laptop", price: 1500 },
        { id: 2, name: "Phone", price: 800 }
    ];
*/

    const cart = [
        { id: 1, name: "Laptop", price: 1500 },
        { id: 2, name: "Phone", price: 800 }
    ];

/*
//********************************************************************************************************
8. نظام الرحلات (Travel System):

    وصف:
        دالة addDestination تضيف وجهة جديدة.
        دالة getDestinationsByCountry تعرض جميع الوجهات في دولة معينة.
        دالة getCheapestDestination تعرض الوجهة الأرخص.

    مثال الإدخال:

    const destinations = [
        { id: 1, name: "Paris", country: "France", price: 1000 },
        { id: 2, name: "Rome", country: "Italy", price: 800 }
    ];
*/


const destinations = [
    { id: 1, name: "Paris", country: "France", price: 1000 },
    { id: 2, name: "Rome", country: "Italy", price: 800 }
];


/*
//********************************************************************************************************
9. إدارة المهام (Task Management):

    وصف:
        دالة addTask تضيف مهمة جديدة.
        دالة markTaskAsComplete تحدد المهمة كمكتملة باستخدام id.
        دالة getIncompleteTasks تعرض المهام غير المكتملة.

    مثال الإدخال:

    const tasks = [
        { id: 1, name: "Clean the house", completed: false },
        { id: 2, name: "Prepare presentation", completed: true }
    ];
*/


const tasks = [
    { id: 1, name: "Clean the house", completed: false },
    { id: 2, name: "Prepare presentation", completed: true }
];




/*
//********************************************************************************************************
10. إدارة السيارات (Car Management):

    وصف:
        دالة addCar تضيف سيارة جديدة.
        دالة findCarByModel تبحث عن سيارة باستخدام الطراز.
        دالة getCarsAbovePrice تعرض جميع السيارات التي سعرها أعلى من قيمة معينة.

    مثال الإدخال:

    const cars = [
        { id: 1, model: "Toyota Corolla", price: 20000 },
        { id: 2, model: "Honda Civic", price: 22000 }
    ];


 */

    const cars = [
        { id: 1, model: "Toyota Corolla", price: 20000 },
        { id: 2, model: "Honda Civic", price: 22000 }
    ];

function addCar(models, prices){

    const lastIdCars = cars.length > 0 ? Math.max(...cars.map(car => car.id)) : 0;
    console.log(`Added cars: `);
    const newCar = {
        id : lastIdCars + 1,
        model : models,
        price : prices
    };

    cars.push(newCar);
    console.log(`Cars added successufuly: ${newCar.model}, Prix: ${newCar.price} `)
}
function  allCars(){
    cars.forEach(car => {
        console.log(car);
    })
}
console.log("Befor Added: ");
allCars();

addCar("Ford Fiesta 2000", 1200);

console.log("After Added: ");
allCars();

function getCarsAbovePrice(){

    priceCar = Infinity;
   const growPrice = cars.map(car => car > priceCar)
   console.log(growPrice);
}

 console.log(getCarsAbovePrice())