let herois = [
    { nome: "Arthas", xp: 7500 },
    { nome: "Jaina", xp: 1200 },
    { nome: "Thrall", xp: 15000 },
    { nome: "Illidan", xp: 9500 }
];

let i = 0;

while (i < herois.length) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

    i++;
}
