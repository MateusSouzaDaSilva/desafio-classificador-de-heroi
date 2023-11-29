let heroi;
let xp;
let nivel 

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual o nome do seu herói? ", (heroiInput) => {
  heroi = heroiInput;
  console.log("Você escolheu o herói:", heroi);

  rl.question("Qual a quantidade de xp do seu herói? ", (xpInput) => {
    xp = parseInt(xpInput)
    console.log("Seu herói tem: ", xp);
    
    if (xp < 1000) {
        nivel = "Ferro";
      } else if (xp >= 1000 && xp <= 2000) {
        nivel = "Bronze";
      } else if (xp > 2000 && xp <= 5000) {
        nivel = "Prata";
      } else if (xp > 5000 && xp <= 7000) {
        nivel = "Ouro";
      } else if (xp > 7000 && xp <= 8000) {
        nivel = "Platina";
      } else if (xp > 8000 && xp <= 9000) {
        nivel = "Ascendente";
      } else if (xp > 9000 && xp <= 10000) {
        nivel = "Imortal";
      } else if (xp >= 10001) {
        nivel = "Radiante";
      }
      
    
    console.log(`O herói de nome ${heroi} está no nível de ${nivel}`)
    rl.close();
  });
});

