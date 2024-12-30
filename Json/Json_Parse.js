/**
 * 
 * JSON.parse

    الغرض:
        تستخدم لتحويل نص JSON إلى كائن (object) أو مصفوفة (array) في JavaScript.

    لماذا نحتاجها؟
        قراءة البيانات: عندما تستقبل نص JSON (من خادم أو من تخزين محلي)، تحتاج لتحويله إلى كائن للعمل معه.

كيف تعمل؟

    نص JSON بسيط:

const employeJson = '{"nom":"Youssef Malki","age":42,"fonction":"PDG"}';
const employe = JSON.parse(employeJson);
console.log(employe);
// الإخراج: {nom: "Youssef Malki", age: 42, fonction: "PDG"}

مصفوفة JSON:

const numbersJson = '[1,2,3,4]';
const numbers = JSON.parse(numbersJson);
console.log(numbers);
// الإخراج: [1, 2, 3, 4]

كائن متداخل:

    const dataJson = '{"user":"Aicha","orders":[{"id":1,"total":150},{"id":2,"total":200}]}';
    const data = JSON.parse(dataJson);
    console.log(data);
    // الإخراج: {user: "Aicha", orders: Array(2)}

ملاحظات على JSON.parse:

    صيغة النص يجب أن تكون صحيحة تمامًا:
        إذا كان النص يحتوي على أخطاء، ستظهر رسالة خطأ.

const invalidJson = "{name: 'Test'}"; // صيغة غير صحيحة
JSON.parse(invalidJson); 
// خطأ: Uncaught SyntaxError

مفيد مع التخزين:

    يمكن استخدامه مع localStorage لاسترجاع الكائنات.

localStorage.setItem("user", JSON.stringify({ name: "Test" }));
const user = JSON.parse(localStorage.getItem("user"));
console.log(user); 
// الإخراج: {name: "Test"}

تنفيذ وظائف إضافية أثناء التحويل:

    باستخدام معالج (reviver function):

    const json = '{"price": "20.5"}';
    const obj = JSON.parse(json, (key, value) => {
        if (key === "price") return parseFloat(value);
        return value;
    });
    console.log(obj); 
    // الإخراج: {price: 20.5}


*/