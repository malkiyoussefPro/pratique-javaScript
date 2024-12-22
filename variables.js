// Variables: 


/**
 *تمرين 1:

برمج متغيرات تخزن:

    اسمك.
    عمرك.
    بلدك.

 */

    // const nom = "Youssef";
    // const age = 42;
    // const country = "Morocco";

    // console.log(nom);
    // console.log(age);
    // console.log(country);

    /**
     Exemple:
            // طباعة الأرقام من 1 إلى 5
        for (let i = 1; i <= 5; i++) {
        console.log(i);
        }

        // طباعة الأرقام حتى يصبح العدد أقل من 5
        let count = 10;
        while (count > 5) {
        console.log(count);
        count--;
        }

     */

  /**
   *   تمرين 2:

    برمج حلقة تطبع الأرقام الزوجية من 1 إلى 10.
    برمج حلقة تطبع حروف كلمة (JavaScript) واحد بواحد.
   */

    // for(let i = 1; i <= 10; i++){
    //     if(i % 2 === 0 ){
    //         console.log(i);
    //     }
    // }

    // const mot = "JavaScript";

    // for(let i = 0; i < mot.length; i++){
    //     console.log(mot.charAt(i));
    // }


/**
 *     تستخدم لاتخاذ قرارات بناءً على القيم.
    if و else: لاتخاذ قرار بناءً على شرط.
    switch: لاتخاذ قرار بين اختيارات متعددة.

أمثلة:

let score = 80;

if (score > 90) {
  console.log("A");
} else if (score > 75) {
  console.log("B");
} else {
  console.log("C");
}

// باستخدام switch
let color = "red";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Wait!");
}

تمرين 3:

    برمج كود يتحقق واش الرقم موجب، سالب، ولا صفر.
    برمج switch تتحقق من نوع الفاكهة وتعرض سعرها.


 */
    // let number;
    //  number = prompt('Entrez un numero: ' );
    
    // if(isNaN(number) || number.trim() === ""){
    //     console.log('le numero saisi est non valide ou le numero non saisi')
    // }else{
    //     if(number < 0){
    //         console.log('le numero saisie : ' + number + ' est Négatif.')
    //     }else if(number > 0){
    //         console.log('le numero saisie : ' + number + ' est Positif.')
    //     }else
    //     if(number === 0){
    //         console.log('le numero saisie : ' + number + ' est Zéro.')
    //     }
    
    // }
    
  
    //switch
    // let fruit;
    // fruit = prompt('Entrez le nom du fruit: ');

    // if(fruit.trim() === ""){
    //     console.log('assurez vous de saisir un fruit');
    // }
    //     else{
    //     switch(fruit){
    //         case "orange":
    //             console.log('le prix du '+ fruit + " est 7 DH.");
    //             break;
    //         case "pomme":
    //             console.log('le prix du '+ fruit + " est 8 DH.");
    //             break;
        
    //         default:
    //             console.log('le fruit saise '+ fruit + " est introuvable sur la liste.");

    //     }
    // }

    /**
     * تمرين مركب: برمج لعبة بسيطة ديال "Guess the Number"، بحيث المستخدم يدخل رقم، والبرنامج يقارن الرقم المقدم بالرقم المخفي ويعطي نصائح (أكبر أو أصغر) حتى يوصل للرقم الصحيح.
تمرين على الشروط والحلقات: برمج كود يتحقق من القيم في مصفوفة ويطبع فقط الأرقام الفردية.
تمرين عملي: خدم كود يولد جدول ضرب (Multiplication Table) لأي رقم يتم إدخاله.

     */
/**
 تمرين مركب: برمج لعبة بسيطة ديال "Guess the Number"، بحيث المستخدم يدخل رقم، والبرنامج يقارن الرقم المقدم بالرقم المخفي ويعطي نصائح (أكبر أو أصغر) حتى يوصل للرقم الصحيح.
*/

// const numCache = 25; // الرقم المخفي
// let numSaisi; // المتغير الذي يخزن إدخال المستخدم
// let i = 1; // عداد المحاولات

// while (true) { // حلقة لا نهائية، ستتوقف بـ break عند الشرط
//     numSaisi = parseInt(prompt('Entrer un numero: ')); // تحويل الإدخال إلى رقم
//     if (isNaN(numSaisi)) { // التحقق من الإدخال
//         console.log("Veuillez entrer un numéro valide.");
//         continue; // العودة لبداية الحلقة
//     }
//     if (numSaisi > numCache) {
//         console.log("Le numéro saisi est plus grand.");
//     } else if (numSaisi < numCache) {
//         console.log("Le numéro saisi est plus petit.");
//     } else {
//         console.log(`Bien joué! Vous avez trouvé le numéro en ${i} tentatives.`);
//         break; // الخروج من الحلقة
//     }
//     i++; // زيادة عدد المحاولات
// }


/**
 * تمرين على الشروط والحلقات: برمج كود يتحقق من القيم في مصفوفة ويطبع فقط الأرقام الفردية.
 */

let tableNumeros = [1, -2, 6,22, 63, 101, 502, "youssef"];
let tablImpair = [];
for(let i = 0; i < tableNumeros.length; i++){
  if((!isNaN(tableNumeros[i])) && (tableNumeros[i] % 2 !== 0) ){
    tablImpair.push(tableNumeros[i]);
  }
  
}
console.log("les numeros impaires sont:  "+ tablImpair);


/**
 * تمرين عملي: خدم كود يولد جدول ضرب (Multiplication Table) لأي رقم يتم إدخاله.
      let numeroAleatoir ;

      let numeroAleatoire = parseInt(prompt("Entrez un numéro pour faire la multiplication: "));
  
      if (isNaN(numeroAleatoire)) {
        console.log("Veuillez entrer un numéro valide.");
      } else if (numeroAleatoire === 0) {
        console.log("Le numéro zéro sa multiplication est toujours 0.");
      } else {
        for (let i = 0; i <= 10; i++) {
          console.log(`${numeroAleatoire} * ${i} = ${numeroAleatoire * i}`);
        }
      } 
*/


$(document).ready(function(){
  $('#btnMult').click(function(){
    // الحصول على الرقم المدخل
      const numeroAleatoire = parseInt($('#num').val());
      // العنصر الذي سنعرض فيه النتائج
      const $result = $('#result');
      // تنظيف النتائج السابقة
      $result.empty();
      // التحقق من الإدخال
      if (isNaN(numeroAleatoire)) {
        $result.append('<p style="color:red;"> Veuillez entrer un numéro valide.</p> ');

      } else if (numeroAleatoire === 0) {
        $result.append('<p style="color:green;"> Le numéro zéro sa multiplication est toujours 0.</p> ');

      } else {
        // إنشاء جدول الضرب
        for (let i = 0; i <= 10; i++) {

          $result.append(`<p>${numeroAleatoire} * ${i} = ${numeroAleatoire * i}</p>`);
        }
      }

  });
});
