/**
 * 
 * . JSON.stringify

    الغرض:
        تستخدم لتحويل كائن (object) أو مصفوفة (array) في JavaScript إلى نص JSON (عبارة عن سلسلة نصية).

    لماذا نحتاجها؟
        نقل البيانات: إذا كنت تريد إرسال البيانات إلى خادم (server) أو تخزينها في مكان مثل localStorage، تحتاج لتحويلها إلى نص.
        التعامل مع البيانات: نص JSON سهل القراءة للأجهزة والأنظمة المختلفة.

كيف تعمل؟

    كائن بسيط:

const employe = {
    nom: "Youssef Malki",
    age: 42,
    fonction: "PDG"
};

const employeJson = JSON.stringify(employe);
console.log(employeJson); 
// الإخراج: '{"nom":"Youssef Malki","age":42,"fonction":"PDG"}'

    حولت الكائن إلى نص JSON.
    النص الناتج يمكن مشاركته مع أنظمة أخرى.

مصفوفة:

const numbers = [1, 2, 3, 4];
const numbersJson = JSON.stringify(numbers);
console.log(numbersJson); 
// الإخراج: '[1,2,3,4]'

كائن معقد (متداخل):

    const data = {
        user: "Aicha",
        orders: [
            { id: 1, total: 150 },
            { id: 2, total: 200 }
        ]
    };

    const dataJson = JSON.stringify(data);
    console.log(dataJson);
    // الإخراج: '{"user":"Aicha","orders":[{"id":1,"total":150},{"id":2,"total":200}]}'

ملاحظات على JSON.stringify:

    تجاهل الوظائف (functions):
        إذا احتوى الكائن على دوال، سيتم تجاهلها.

const obj = {
    name: "Test",
    greet: function () { console.log("Hello!"); }
};

console.log(JSON.stringify(obj));
// الإخراج: '{"name":"Test"}'

القيم التي لا تدعمها JSON:

    القيم مثل undefined أو الرموز (Symbol) تُحذف عند التحويل.

تحكم في التحويل باستخدام معلمات إضافية:

    يمكنك تحديد خصائص محددة للتحويل.

    const obj = { name: "Test", age: 30, city: "Rabat" };
    const json = JSON.stringify(obj, ["name", "city"]);
    console.log(json); 
    // الإخراج: '{"name":"Test","city":"Rabat"}'

2. 
 */