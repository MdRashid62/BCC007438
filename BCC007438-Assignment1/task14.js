var a = 2;
var b = 1
var result;

result = --a;
document.write(result,"<br/>");

result = --a - --b;
document.write(result,"<br/>");

result = --a - --b + ++b;
document.write(result,"<br/>");

result = --a - --b + ++b + b--;
document.write(result,"<br/>","<br/>");

document.write("a is "+a,"<br/>");
document.write("b is "+b,"<br/>");
result = --a - --b + ++b + b--;
document.write("result is "+result);