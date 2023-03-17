let numerando1="";
let numerando2="";
let operador="";

window.onload=function(){
   
}

function teste(){alert("hello");}

function calc(x){
    if(x=="back"  && operador==""){
        numerando1=numerando1.substring(0,numerando1.length-1);
        document.getElementById("texto").innerHTML=numerando1;
        console.log(numerando1);
        return;
    }
    else if(x=="back"  && operador!=""){
        numerando2=numerando2.substring(0,numerando2.length-1);
        document.getElementById("texto").innerHTML=numerando1;
        console.log(numerando1);
        return;
    }
    else if(x=="c"){
        numerando1=numerando2=operador="";
        document.getElementById("texto").innerHTML="";
    }
    else if(isNaN(x) && numerando2!="" ){
        switch(operador){
            case '+':
                numerando1=(Number(numerando1)+Number(numerando2));
                document.getElementById("texto").innerHTML=numerando1;
                
            break;
            case '-':
                numerando1=String(Number(numerando1)-Number(numerando2));
                document.getElementById("texto").innerHTML=numerando1;
            break;
            case '/':
                numerando1=String(Number(numerando1)/Number(numerando2));
                document.getElementById("texto").innerHTML=numerando1;
            break;
            case 'pow':
                numerando1=String(Number(numerando1)**Number(numerando2));
                document.getElementById("texto").innerHTML=numerando1;
            break;
            case '%':
                numerando1=(numerando1*numerando2)/100;
                document.getElementById("texto").innerHTML=numerando1;
            break;
            case 'square':
                numerando1=Math.pow(numerando1,1/numerando2);
                document.getElementById("texto").innerHTML=numerando1;
            break;  
            case '*':
                numerando1=String(Number(numerando1)*Number(numerando2));
                document.getElementById("texto").innerHTML=numerando1;

        }
        if(x=='=')
            operador="";
        else
            operador=x;
        console.log(numerando1);
        numerando2="";
        return;
    }
    else if(isNaN(x) && numerando1!=""){
        if(x!="=")
            operador=x;
        console.log(operador);
        return;
    }
    else if(!isNaN(x) && operador!=""){
        numerando2+=String(x);
        document.getElementById("texto").innerHTML=numerando2;
        console.log(numerando2);
        return;
        
    }
    
    else if (!isNaN(x)){
        numerando1+=String(x);
        document.getElementById("texto").innerHTML=numerando1;
        console.log(numerando1);
        return;
    }
    

}