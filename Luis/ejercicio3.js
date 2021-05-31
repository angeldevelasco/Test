//Ejercicio realizado por Luis Eduardo Corral Corona 30/05/2021
/*Staircase detail This is a staircase of size n=4:

   .
  ..
 ...
....
Its base and height are both equal to n. It is drawn using . symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size n.

Example Input
6

Example Output
     .
    ..
   ...
  ....
 .....
......
Extra
Print the staircase upside down*/

const n= 6;

console.log("Escalera normal:");
const piramide =  n  => 
{
   for(i=0; i<n; i++)
   {
       let aste= "*".repeat(i+1);
       let espa= " ".repeat(n-(i+1));    

       console.log(espa+aste);
   }
}

piramide(n);

console.log("Escalera volteado:");

const piramide2 =  n  => 
{
   for(i=n; i>0; i--)
   {
       
      let aste2= "*".repeat(i);
      let espa2= " ".repeat(n-i);   
      
      console.log(espa2+aste2);
   }
}
piramide2(n);