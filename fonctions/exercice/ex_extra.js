/**
 * ) اكتب دالة فيها حلقة for تستخدم var مرة و let مرة أخرى لعداد الحلقة. شوف الفرق في السلوك

console.log("-Boucle avec var:");
for(var i = 0; i < 10; i++){
   
    console.log(i);
}
console.log("-Boucle avec let:");
for(let j = 0; j < 10; j++){
 
    console.log(j);
} 
 */
/**
 * b) اكتب دالة فيها شرط if يعرف متغير باستخدام var. حاول استخدام هذا المتغير خارج بلوك if.
 */



function checkName() {
    var nom = "youssef";

    if (nom === "youssef") {
        var varMessage = "Bienvenue sur notre plateforme (var)";
        let letMessage = "Bienvenue sur notre plateforme (let)";
        console.log(nom + " !! " + varMessage);
        console.log(nom + " !! " + letMessage);//hna maghadich i3ti erreur hit mdeclarer f wast l bloc

        //nb:  ila 3arafti chi variable b let kay3rafha ghir f l bloc fin 3araftiha 
    }

    // هنا نحاول استخدام المتغيرات خارج بلوك if
    console.log("Message en dehors du bloc if (var): " + varMessage);
    // console.log("Message en dehors du bloc if (let): " + letMessage); // هذا السطر سيعطي خطأ hit kharej l bloc
}

checkName();


function externe(x) {
    function interne(y) {
      return x + y;
    }
    return interne;
  }
  
  var fn_interne = externe(3);
  var resultat = fn_interne(5); // renvoie 8
  