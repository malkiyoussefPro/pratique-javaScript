/*
1. ما هو JSON؟

    JSON (JavaScript Object Notation) هي صيغة لتبادل البيانات.
    تُستخدم لتمثيل البيانات على شكل كائنات (objects) أو مصفوفات (arrays).
    تُعتبر JSON خفيفة وسهلة القراءة للمطورين والأنظمة.


. خصائص JSON:

    تُكتب في شكل كائنات ومصفوفات:
        الكائن: { "key": "value" }
        المصفوفة: [1, 2, 3]
    القيم في JSON تكون:
        نصوص (Strings): "Hello"
        أرقام (Numbers): 123
        كائنات (Objects): { "key": "value" }
        مصفوفات (Arrays): [1, 2, 3]
        قيم منطقية (Booleans): true, false
        قيم فارغة (Null): 

        ex:
        {
        "name": "Ali",
        "age": 25,
        "isStudent": true,
        "skills": ["HTML", "CSS", "JavaScript"],
        "address": {
            "city": "Casablanca",
            "zip": "20000"
        }
}

*/

// user = {
//     "name": "Youssef",
//     "age": 30,
//     "isStudent": false,
//     "skills": ["JavaScript", "HTML", "CSS"]
//   }
  

/**
تحويل JSON إلى JavaScript والعكس
1. JSON.stringify:

    تُستخدم لتحويل كائن JavaScript إلى نص JSON.
    مثال:

    const user = { name: "Youssef", age: 30 };
    const jsonUser = JSON.stringify(user);
    console.log(jsonUser); // {"name":"Youssef","age":30}

2. JSON.parse:

    تُستخدم لتحويل نص JSON إلى كائن JavaScript.
    مثال:

    const jsonUser = '{"name":"Youssef","age":30}';
    const user = JSON.parse(jsonUser);
    console.log(user.name); // Youssef


*/

    const users = { name: "Youssef", age: 30 };
    const jsonUsers = JSON.stringify(users);
    console.log(jsonUsers); // {"name":"Youssef","age":30}

    const jsonUser = '{"name":"Youssef","age":30}';
    const user = JSON.parse(jsonUser);
    console.log(`Nom: ${user.name}, Age: ${user.age}`); // Youssef

    /**
     * تمرين 1: تحويل كائن إلى JSON

    أنشئ كائن يحتوي على معلومات شخص (الاسم، العمر، الوظيفة).
    حوّل الكائن إلى نص JSON باستخدام JSON.stringify.
    اطبع النص الناتج في الـ console.
     */

    employe = {
        nom : "Youssef Malki",
        age : 42,
        fonction :  "PDG"
    }

    const emplyStringify = JSON.stringify(employe);

    console.log(emplyStringify);

    const employeParse = JSON.parse(emplyStringify);

    console.log(`Le nom de l'employe: ${employeParse.nom}, son age: ${employeParse.age}, sa fonction: ${employeParse.fonction}`);

    //كائن معقد (متداخل):
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
    
    /**
     * التمرين 3:

اكتب نص JSON يحتوي على:

    اسم شخص
    عمره
    لائحة بهواياته
    عنوان يحتوي على المدينة والرمز البريدي

حول النص إلى كائن JavaScript ثم اطبع جميع القيم الموجودة فيه.
     */

person = {

    nom : "youssef",
    age : 42,
    hobbies : ["read", "travel", "programming", "sport"],
    adress : {
        city : "Menorca",
        codePostal : 7769
    }

}

const personStringift = JSON.stringify(person);
console.log(personStringift);

const personParse = JSON.parse(personStringift);

//console.log(personParse);

function showObject(person){
    console.log(`Nom: ${person.nom}`);
    console.log(`Age: ${person.age}`);
    console.log(`Hobbies: ${person.hobbies.join(", ")}`);
    console.log(`City: ${person.adress.city}`);
    console.log(`Postal Code: ${person.adress.codePostal}`);

}

showObject(personParse)