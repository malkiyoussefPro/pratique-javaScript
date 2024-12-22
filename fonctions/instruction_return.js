/**
 *     Achno hiya 'return':
    'return' hiya instruction f JavaScript, machi method wla function. Hiya wahd l'mot clé li kayst3ml dakhel l functions.
    Achno katdir 'return':

    Kat7bes l'exécution dyal function fin ma kant.
    Katrje3 chi valeur l l'endroit fin t3aytet 3la function.

    Kifach khedama:

    Katkoun ghir dakhel l functions.
    Katkteb 'return' metbou3a b valeur li bghiti trje3ha.

 * 
 */
    console.log("ana exemple dial return 9bel:")
    function testRerurn() {
      return "Salam";
      console.log("rani maghadin ntba3 f l console.log khasni nkon 9bel return jareb ila bghiti")
    }
    
    console.log(testRerurn());

    console.log("ana exemple dial return be3d:")
    function test() {
     
      console.log("Daba ghadi ntb3 hit ana 9bel return");
      return "Salam";
    }
    
    console.log(test());
    

/**
 *     function checkAge(age) {
        if (age > 18) {

         var  message = "Rak kabir";

        }else{
          var  message = "Rak sghir";
        }
        return message;  // Kat7bes function ila l3mer s8ir men 18
        
      }
      
      console.log(checkAge(20));
      console.log(checkAge(15));
      
 */

/*

    tamrine 1:
    Kteb function smiytha 'kber' li kat-accepti joj numbers o katrje3 l'kber binthom.


*/

function kber(a, b) {
  if(a<b){
    return b;
  }else{
    return a;
  }
}

console.log(kber(5, 10)); // Khasso yt-afficher 10
console.log(kber(15, 7)); // Khasso yt-afficher 15

/*
 tamrine 2:

  Dir function smiytha 'wach_zawj' li kat-accepti number o katrje3 "Zawj" ila kan zawj, o "Fard" ila kan fard.

*/

function wach_zawj(num) {
  if(num % 2 === 0){
    return "Zawj";
  }else{
    return "Fard";
  }
}

console.log(wach_zawj(16)); // Khasso yt-afficher "Zawj"
console.log(wach_zawj(7)); // Khasso yt-afficher "Fard"


/*
 tamrine 3:
  Kteb function smiytha 'first_last' li kat-accepti array o katrje3 array jdid fiha ghir l'ewwel o l'ekher element.
*/

function first_last(arr) {

   const affichage = [];

  for(i = 0; i < arr.length; i++){
    affichage.push(arr[0], arr[arr.length-1]);
    return affichage ;
  }
}

console.log(first_last([1, 2, 3, 4, 5])); // Khasso yt-afficher [1, 5]
console.log(first_last(['a', 'b', 'c'])); // Khasso yt-afficher ['a', 'c']

/**
 * 
    tamrine 4:
    Dir function smiytha 'count_vowels' li kat-accepti string o katrje3 3adad l'7orouf li homa vowels (a, e, i, o, u).

 */

    function count_vowels(str) {
      let count = 0;
      const vowels = ['a', 'e', 'o', 'u', 'i'];
     
     for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
          count ++;
        }
      }
      return count;
  }
  
  console.log(count_vowels("hello")); // Khasso yt-afficher 2
  console.log(count_vowels("javascript")); // Khasso yt-afficher 3
  