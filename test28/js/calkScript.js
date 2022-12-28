let a='';//первое число
let b='';//второе число
let sign='';//знак опеации
let finish=false;
//=====================
const digit=['0', '1', '2', '3', '4','5','6','7','8','9','.'];
const action=['-', '+','*','/'];
//=====================
const out=document.querySelector('.calc-screen')
const clearC=document.querySelector('.col1')
function clearAll(){
    a='';
    b='';
    sign=''
    finish=false;
    out.textContent=0
}
clearC.onclick=clearAll

//=====================
document.querySelector('#container').onclick=(event)=>{
     if(!event.target.classList.contains('btn')) return;
     if(event.target.classList.contains('col1')) return;
     out.textContent='';
     //
     const key=event.target.textContent;
     //цифры от 0-9 и .
    if(digit.includes(key)){
        if(b==='' && sign===''){
        a+=key;
        out.textContent=a;}
        else if(a!='' && b!='' && finish){
          b=key;
          finish=false;
          out.textContent=b;
        }
       else{
           b+=key;
           out.textContent=b;
       }
    }
    if(action.includes(key)){
        sign=key;
        out.textContent=sign;
        return;
    }
    console.log(a,b,sign)
    if(key==='='){
        if(b==='')b=a
        switch(sign){
            case '+':
        a=(+a)+(+b); break;
         case '-':
         a=(+a)-(+b); break;
         case '*':
         a=(+a)*(+b); break;
         case '/':
         a=(+a)/(+b); break;

        }
        out.textContent=a;
        finish=true;
    }
}