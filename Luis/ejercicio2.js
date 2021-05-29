//Ejercicio realizado por Luis Eduardo Corral Corona 28/05/2021
/*Given an array of integers, find the sum of its elements, max and min values.

For example, if the array ar=[1,2,3], 1+2+3=6 so return 6 3 1.

Example Input
[10,2,3,4,8,2]

Example Output
29 10 2

Extra
Use arrow functions*/

var num = [10, 2, 3, 4, 8, 2];
var max, min, sum;
sum=0;
max= min = num[0];

for (i = 0; i < num.length; i++)
{
    if(num[i]>max)
    {
        max=num[i];
    }

    if(num[i]<min)
    {
        min=num[i];
    }

    sum=sum + num[i];
}
console.log("Sumatoria :%d  Max:%d  Min:%d", sum, max, min);



