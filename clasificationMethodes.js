/**
 * 1. الميثودات الخاصة بالتكرار والمعالجة:
 
 * 
هذه الميثودات تُستخدم لمعالجة العناصر في المصفوفة واحدة تلو الأخرى.

forEach:
--------
    تمر على كل عنصر في المصفوفة، لكنها لا تُرجع قيمة (تُستخدم للعمليات الجانبية مثل الطباعة).

[1, 2, 3].forEach(num => console.log(num));

map:
--------
تُرجع مصفوفة جديدة تحتوي على نتائج المعالجة لكل عنصر.

const doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); // [2, 4, 6]

filter:
--------
تُرجع مصفوفة جديدة تحتوي فقط على العناصر التي تحقق شرطًا معينًا.

    const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
    console.log(evens); // [2, 4]


*/
 console.log("forEach, map, filter:   الميثودات الخاصة بالتكرار والمعالجة");

    [1, 2, 3].forEach(num => console.log(num));

    const doubled = [1, 2, 3].map(num => num * 2);
    console.log(doubled); // [2, 4, 6]

    const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
    console.log(evens); // [2, 4]

/*

//********************************************************************************************************

2. الميثودات الخاصة بالبحث:

هذه الميثودات تُستخدم للعثور على عنصر أو تحقق شرط معين.

find:
--------
    تُرجع أول عنصر يحقق الشرط.

const nums = [10, 20, 30];
const result = nums.find(num => num > 15);
console.log(result); // 20

findIndex:
-----------
تُرجع فهرس (index) أول عنصر يحقق الشرط.

const nums = [10, 20, 30];
const result = nums.findIndex(num => num > 15);
console.log(result); // 1

some:
--------
تُرجع true إذا كان هناك عنصر واحد على الأقل يحقق الشرط.

const nums = [10, 20, 30];
console.log(nums.some(num => num > 25)); // true

every:
--------
تُرجع true إذا كانت جميع العناصر تحقق الشرط.

    const nums = [10, 20, 30];
    console.log(nums.every(num => num > 5)); // true


*/
console.log("find, indIndex, some, every :    الميثودات الخاصة بالبحث");

const numsFind = [10, 20, 30];
const result = numsFind.find(num => num > 15);
console.log(result); // 20

const numsIndex = [10, 20, 30];
const resultIndex = numsIndex.findIndex(num => num > 15);
console.log(resultIndex); // 1


const numSome = [10, 20, 30];
console.log(numSome.some(num => num > 25)); // true

const numsEvery = [10, 20, 30];
console.log(numsEvery.every(num => num > 5)); // true

/*

//********************************************************************************************************

3. الميثودات الخاصة بالعمليات الرياضية:

تُستخدم لإجراء عمليات رياضية مثل الجمع أو الضرب.

reduce:
--------
    تُستخدم لتجميع القيم في مصفوفة إلى قيمة واحدة.

    const nums = [1, 2, 3, 4];
    const sum = nums.reduce((acc, num) => acc + num, 0);
    console.log(sum); // 10


*/

    console.log("reduce:  الميثودات الخاصة بالعمليات الرياضية")
    const numsReduce = [1, 2, 3, 4];
    const sum = numsReduce.reduce((acc, num) => acc + num, 0);
    console.log(sum); // 10

/*

//********************************************************************************************************

4. الميثودات الخاصة بالتحويل:

تُستخدم لتعديل أو تحويل المصفوفة أو الحصول على نسخة منها.

slice:
--------
    تُرجع نسخة من المصفوفة بناءً على نطاق معين.

const nums = [1, 2, 3, 4];
console.log(nums.slice(1, 3)); // [2, 3]

splice:
--------

تُستخدم لإضافة أو حذف عناصر من المصفوفة.

    const nums = [1, 2, 3, 4];
    nums.splice(1, 2); 
    console.log(nums); // [1, 4]


*/
    console.log("slice, splice : الميثودات الخاصة بالتحويل")
    const numSlice = [1, 2, 3, 4];
    console.log(numSlice.slice(1, 3)); // [2, 3]

    const numSplice = [1, 2, 3, 4];
    numSlice.splice(1, 2); 
    console.log(numSplice); // [1, 4]


/*

//********************************************************************************************************

5. الميثودات الخاصة بالفحص والتقييم:


تُستخدم لفحص العناصر أو المصفوفة ككل.

includes:
---------
    تتحقق إذا كانت المصفوفة تحتوي على قيمة معينة.

const nums = [1, 2, 3];
console.log(nums.includes(2)); // true

indexOf:
---------
تُرجع الفهرس الأول لعنصر معين، أو -1 إذا لم يكن موجودًا.

const nums = [1, 2, 3];
console.log(nums.indexOf(2)); // 1

lastIndexOf:
-------------
تعمل مثل indexOf، لكنها تبحث عن العنصر بدءًا من نهاية المصفوفة.

    const nums = [1, 2, 3, 2];
    console.log(nums.lastIndexOf(2)); // 3


*/
    console.log("includes, indexOf, lastIndexOf : الميثودات الخاصة بالفحص والتقييم")
    const numsInclude = [1, 2, 3];
    console.log(numsInclude.includes(2)); // true

    const numsIndexOf = [1, 2, 3];
    console.log(numsIndexOf.indexOf(2)); // 1

    const numsLastIndex = [1, 2, 3, 2];
    console.log(numsLastIndex.lastIndexOf(2)); // 3

/*


//********************************************************************************************************

6. الميثودات الخاصة بالترتيب والدمج:

تُستخدم لترتيب العناصر أو دمج المصفوفات.

sort:
-----
    تُرتب العناصر (ترتيب نصي افتراضي).

    const nums = [3, 1, 4];
    console.log(nums.sort()); // [1, 3, 4]

concat:
--------
    تُدمج مصفوفتين أو أكثر.

    const nums1 = [1, 2];
    const nums2 = [3, 4];
    console.log(nums1.concat(nums2)); // [1, 2, 3, 4]


*/
    console.log("sort, concat  : الميثودات الخاصة بالترتيب والدمج")
    const numSort = [3, 1, 4];
    console.log(numSort.sort()); // [1, 3, 4]

    const nums1 = [1, 2];
    const nums2 = [3, 4];
    console.log(nums1.concat(nums2)); // [1, 2, 3, 4]

    const string1 = "bonjour: ";
    const string2 = "youssef";
    console.log(string1.concat(string2));
/*

//********************************************************************************************************

    7. الميثودات الخاصة بالسلاسل النصية والمصفوفات:

    تُستخدم لتحويل المصفوفة إلى نصوص أو العكس.

    join:
    --------
    تُحوّل المصفوفة إلى سلسلة نصوص مفصولة بعلامة معينة.

    const nums = [1, 2, 3];
    console.log(nums.join("-")); // "1-2-3"



    split (خاصة بالنصوص):
    ----------------------
    تُحوّل سلسلة نصوص إلى مصفوفة بناءً على فاصل معين.  

    const str = "1-2-3";
    console.log(str.split("-")); // [1, 2, 3]


 */
    console.log("join, split,  الميثودات الخاصة بالسلاسل النصية والمصفوفات")
    
    const numsJoin = [1, 2, 3];
    console.log(numsJoin.join("-")); // "1-2-3"

    const strSplit = "1-2-3";
    console.log(strSplit.split("-")); // [1, 2, 3]