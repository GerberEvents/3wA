var a ;
var i;
var j;
var color_td;
var resultat;

a = prompt()
display (a);

display(l){
  ("<table border='1px'>")
  for(j = 0; j <= a ; j++) {

    if (i == 0) {
      if (j == 0){
        resultat = "0";
        color_td = "#ccc";
      } else {
        resultat = j;
        color_td = "#ccc";
      }
    } else {
      if (j == 0){
        resultat = i;
        color_td = "#ccc";
      } else if (i == j){
        resultat = j;
        color_td = "red";
      } else {
        resultat = i*j;
        color_td = "#fff";
      }
    }

}





do
{
  a = prompt("saisissez un nombre");
} while(isNaN(a) || a%1!==0);

document.write('<h2> La Table de multiplication du nombre : ' + a + '</h2>')

document.write("<table border='1px'>");



for(i = 0; i <= a ; i++) {

	document.write("<tr style='height:30px;'>");

	for(j = 0; j <= a ; j++) {

    if (i == 0) {
      if (j == 0){
        resultat = "0";
        color_td = "#ccc";
      } else {
        resultat = j;
        color_td = "#ccc";
      }
    } else {
      if (j == 0){
        resultat = i;
        color_td = "#ccc";
      } else if (i == j){
        resultat = j;
        color_td = "red";
      } else {
        resultat = i*j;
        color_td = "#fff";
      }
    }

		document.write("<td style='width:30px;background-color:" + color_td + "'>" + resultat + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");
