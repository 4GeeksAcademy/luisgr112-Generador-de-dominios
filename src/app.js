let pronoun = ['the', 'our', 'the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


for (let element of pronoun) {
 for (let adjs of adj) {
  for(let nouns of noun) {

    let dominios = "www."+ element + adjs + nouns +".com"
    console.log(dominios)

  }
 }
}



