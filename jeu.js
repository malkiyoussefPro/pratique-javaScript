/**
 تمرين مركب: برمج لعبة بسيطة ديال "Guess the Number"، بحيث المستخدم يدخل رقم، والبرنامج يقارن الرقم المقدم بالرقم المخفي ويعطي نصائح (أكبر أو أصغر) حتى يوصل للرقم الصحيح.
*/

$(document).ready(function () {
    let i = 0; // عداد المحاولات

    // التعامل مع زر "pista"
    $('#btnPista').click(function () {
        const $message = $('#btnSpan');

        if ($message.text().trim() !== "") {
            // إزالة الرسالة إذا كانت موجودة
            $message.empty();
        } else {
            // إضافة الرسالة إذا لم تكن موجودة
            $message.text("C'est un numéro multiple de 5").css({
                color: 'green',
                padding: '10px',
                borderRadius: '5px',
                fontSize: '24px',
            });

            setTimeout(() => {
                $message.fadeOut(500, function () {
                    $message.empty(); // تنظيف النص بعد الاختفاء
                    $message.show(); // إعادة العرض لتجنب مشكلات التبديل
                });
            }, 10000); // الانتظار لمدة 10 ثوانٍ
        }
    });

    // التعامل مع زر "jeu"
    $('#btnJeu').click(function () {
        const numCache = 25; // الرقم المخفي
        const numSaisi = parseInt($('#numJeu').val()); // الرقم المدخل من المستخدم
        const $result = $('#resultJeu');

        $result.empty(); // تنظيف الرسائل السابقة

        if (isNaN(numSaisi)) {
            $result.append('<p style="color:red;">Veuillez entrer un numéro valide.</p>');
            return; // إنهاء الوظيفة إذا كان الإدخال غير صالح
        }

        i++; // زيادة عداد المحاولات عند كل إدخال صالح

        if (numSaisi > numCache) {
            $result.append(`<p style="color:orange; font-size:28px;">Le numéro saisi est plus grand.</p>`);
        } else if (numSaisi < numCache) {
            $result.append(`<p style="color:#96A22E; font-size:28px;">Le numéro saisi est plus petit.</p>`);
        } else {
            $result.append(`<p id="messageSuccess" style="color:green;">Bien joué! Vous avez trouvé le numéro en ${i} tentative(s).</p>`);
            i = 0; // إعادة تعيين العداد عند الفوز
            $('#numJeu').val('');
            setTimeout(() => {
                $('#messageSuccess').fadeOut(3000, function () {
                    $(this).remove(); // إزالة الرسالة بعد الاختفاء
                });
            }, 3000); // الانتظار لمدة 3 ثوانٍ
        }
    });
});


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
