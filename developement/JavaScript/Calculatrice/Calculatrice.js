var op1
var operateur
var op2
var result

const listOperateur = ['/','*','-','+'];

while (!op1)
{
  op1 = parseFloat(window.prompt('saisissez votre valeur pour a'));
  while (!op1)
  {
    op1 = parseFloat(window.prompt('saisissez une valeur numerique pour a'));
  }
}

while (!operateur)
{
  operateur = window.prompt('saisissez votre operateur')
  while (!listOperateur.includes(operateur))
  {
    operateur = window.prompt('saisissez un operateur valide')
  }
}

while (!op2) {
  op2 = parseFloat(window.prompt('saisissez votre valeur'));
  while (!op2) {
    op2 = parseFloat(window.prompt('saisissez une valeur numerique'));
  }
}

switch (operateur) {
  case '/': result = op1 / op2
    break;
  case '*': result = op1 * op2
    break;
  case '-': result = op1 - op2
    break;
  case '+': result = op1 + op2
    break;
  default:
}




alert(result)
