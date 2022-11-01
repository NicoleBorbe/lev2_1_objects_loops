let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
  ];

let namen = [];
edelMetallPreise.forEach(function (metalle) {
  console.log(metalle.name);
  namen.push(metalle.name);
});
console.log(namen);

let map1 = edelMetallPreise.map(metalle => {
  return metalle.name;
});
console.log(map1);

let preise = [];
edelMetallPreise.forEach(function (metalle) {
  console.log(metalle.preiseGramEuro);
  preise.push(metalle.preiseGramEuro);
});
console.log(preise);

let map2 = edelMetallPreise.map(metalle => {
  return metalle.preiseGramEuro;
});
console.log(map2);

let prozente = [];
edelMetallPreise.forEach(function (metalle) {
  console.log(metalle.veraenderung);
  prozente.push(metalle.veraenderung);
});
console.log(prozente);

let map3 = edelMetallPreise.map(metalle => {
  return metalle.veraenderung;
});
console.log(map3);

let expensive = edelMetallPreise.filter(metalle => {
  return metalle.preiseGramEuro > 50;
});
console.log (expensive);

document.write("<table cellspacing='2' cellpadding='5' border='2' width='50%'>");
document.write("<th>" + "Name");
document.write("<th>" + "PreiseGrammEuro");
document.write("<th>" + "Veränderung");
for (i of edelMetallPreise) {
  document.write("<tr>");
  document.write("<td>" + i.name + "</td>");
  document.write("<td>" + i.preiseGramEuro + "</td>");
  document.write("<td>" + i.veraenderung + "</td>");
  document.write("</tr>");
};
document.write("</table>");

