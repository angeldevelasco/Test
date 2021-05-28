// Ejercicio realizado por Luis Eduardo Corral Corona el 28/05/2021

/*Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. Note: - 12:00:00AM on 
a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/
//Example Input
//A single string that represents a time in 12-hour clock format (i.e.: hh:mm:ss:AM or hh:mm:ss:PM).

//'12:01:00:AM'

//Example Output
//'00:01:00'

//Extra
//Create a specific function for the conversion

var entrada="11:01:00PM";
var salida="";

console.log("Hora de entrada :" + entrada);
salida=cambiar(entrada);
console.log("Hora de salida :" + salida);

function cambiar(entrada)
{
    if (entrada[8]=="A")
    {
        if((entrada[0]=="1") && (entrada[1]=="2"))
        {
            num= 0;
            num2= 0;
            salida=salida.concat(num,num2);
            for (i = 2; i < entrada.length-2; i++)
            {
                salida=salida.concat(entrada[i]);
            }

        }
        else
        {
            for (i = 0; i < entrada.length-2; i++)
            {
            salida=salida.concat(entrada[i]);
            }
        }

    }
    else
    {
        if((entrada[1]=="8") && (entrada[8]=="P"))
        {
         num= 2;
         num2= 0;
         salida=salida.concat(num,num2);
        for (i = 2; i < entrada.length-2; i++)
            {
                salida=salida.concat(entrada[i]);
            }
        }
        else
        {
            if((entrada[1]=="9") && (entrada[8]=="P"))
            {
                 num= 2;
                 num2= 1;
                salida=salida.concat(num,num2);
                for (i = 2; i < entrada.length-2; i++)
                {
                    salida=salida.concat(entrada[i]);
                }
            }   
            else
            {
                if((entrada[0]=="1") && (entrada[1]=="2") && (entrada[8]=="P"))
                {
                   
                    for (i = 0; i < entrada.length-2; i++)
                    {
                        salida=salida.concat(entrada[i]);
                    }
                }
                else
                {
                    num1= parseInt(entrada[0]);
                    num2= parseInt(entrada[1]);
    
                    num1=num1+1;
                    num2=num2+2;
    
                    salida=salida.concat(num1,num2);
                    for (i = 2; i < entrada.length-2; i++)
                     {
                        salida=salida.concat(entrada[i]);
                    }
                }
               
            }
        }
    }
    return salida;
}


