let data = 42;

//does not work yet ...
switch (typeof data) {
  case data === typeof undefined:
    console.log("undefined!");
    break;
  case data === typeof null:
    console.log("null!");
    break;
  case data === typeof Number:
    console.log("number!");
    break;
  case data === typeof NaN:
    console.log("not a number!");
    break;
  case data === typeof String:
    console.log("string!");
    break;
  case data === typeof Boolean:
    console.log("boolean!");
    break;
  case data === typeof Function:
    console.log("function!");
    break;
  case data === typeof Object:
    console.log("object!");
    break;
  case data === typeof Array:
    console.log("object!");
    break;
  default:
    console.log("I have no idea!");
}
