/**
 * مزايا Ternary Operator:

    كتابة مختصرة مقارنة بـ if-else.
    مناسب للقرارات البسيطة.
*/

const age = 20;

const resultAge = age >= 18 ? "Adult" : "Mineur";

console.log(`l'age ${age} est: ${resultAge}`);

const typeNumber = 5;

const type = typeNumber % 2 === 0 ? "Even" : "Odd";

console.log(`Le nombre ${typeNumber} est: ${type}`);

const numPosOrNeg = 8;

const posOrNeg = numPosOrNeg > 0 ? "Positive" : "Negative";

console.log(`Le nombre ${numPosOrNeg} est: ${posOrNeg}`);


const price = 7;

const priceTicket = price < 12 ? "5 Dh" : "10 Dh"

console.log(`Le prix du ticket l'âge: ${price}  est: ${priceTicket}`);

/**
 * التمرين 1 (سهل):

الوصف:
اكتب تعبيرًا شرطيًا يتحقق ما إذا كان الرقم موجبًا أو سالبًا.
المطلوب:
إذا كان الرقم موجبًا، أرجع "Positive"، وإذا كان سالبًا أرجع "Negative".

المثال:

const num = -5;
// التعبير الشرطي هنا
const result = ...;

 */
const num = -5;

const result = num > 0 ? "Positive" : "Negative" ;

console.log(`Le numero: ${num} est : ${result}`);


/**
 * التمرين 2 (سهل):

    تحقق إذا كان الشخص مؤهلاً للتصويت (العمر >= 18).

    const age = 16;

 */

const ageElection = 16;

const resultElection = ageElection < 20 ? "Permis" : "Non Permis";

console.log(`L'age ${ageElection} est ${resultElection}`);

/**
 * التمرين 3 (متوسط):

    اكتب تعبيرًا يتحقق إذا كان النص يحتوي على أكثر من 5 أحرف أم لا.

    const text = "Hello";

*/

const text = "Marhaban";

const lengthText = text.length > 5 ? "Sa taille est correcte" : "Sa taille est non correcte";

console.log(`Le texte : ${text} est: ${lengthText}`);


/**
 *التمرين 4 (متوسط):

حدد الدرجة بناءً على العلامة:

    إذا كانت العلامة >= 90، أرجع "A".
    إذا كانت < 90، أرجع "B".

    const score = 85;
 
*/

const score = 85;

const scoreLetter = score >= 90 ? "A" : "B";

console.log(`Le numero ${score} est convertie en : ${scoreLetter}`);


/**
 * التمرين 5 (متقدم):

تحقق ما إذا كان الرقم موجبًا أو صفرًا أو سالبًا باستخدام ternary operator متداخل.

const numTernaryOperator = 0;

const testTernaryOperator = numTernaryOperator > 0 ? "Positive" : "Negative" : "Neutre";

console.log(testTernaryOperator);
*/

const numTernaryOperator = 0;

const testTernaryOperator = numTernaryOperator > 0 ? "Positive" 
        : numTernaryOperator < 0 
            ? "Negative" 
            : "Neutral";

console.log(`Le numero ${numTernaryOperator} est: ${testTernaryOperator}`); // "Neutral"

const testNum = 2;

const testTernary = testNum > 0 ? "Positive" : testNum < 0 ? "Negative" : "Neutre";

console.log(`Le numero ${testNum} est: ${testTernary}`);

/**
 * التمرين 6 (متقدم):

    اكتب تعبيرًا يتحقق إذا كان المستخدم مسجل الدخول أم لا.
    إذا كان مسجلًا أرجع "Welcome"، وإذا لم يكن كذلك أرجع "Please log in".

    const isLoggedIn = false;

*/

const isLoggedIn = false;

const testLog = isLoggedIn ? "Welcome" : "Please log in";

console.log(testLog);