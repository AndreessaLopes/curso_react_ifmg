let faixa_etaria = 25;

if(faixa_etaria >= 0 && faixa_etaria <= 12){
    console.log("Criança");
}
else if(faixa_etaria >= 13 && faixa_etaria <= 17){
    console.log("Adolescente");
}
else if(faixa_etaria >= 18 && faixa_etaria <= 59){
    console.log("Adulto");
}
else{
    console.log("Idoso");
}