$(document).ready(function(){
    if(document.title=="TradeX"){
        $(".owl-carousel").owlCarousel({
            nav:true,
            loop:true,
            items:2,
            margin:30,
            navText:['<i class="fa-solid fa-left-long text-white"></i>','<i class="fa-solid fa-right-long text-white"></i>'],
           dots:false,
           autoplay:true,
           responsive:{
        
            0:{
                items:1,
                autoplay:true
            },
            993:{
                
            }
           }
            });
    }
    else{
        $(".owl-carousel").owlCarousel({
            nav:true,
            loop:true,
            items:4,
            margin:30,
            navText:['<i class="fa-solid fa-left-long text-white"></i>','<i class="fa-solid fa-right-long text-white"></i>'],
           dots:false,
           autoplay:true,
           responsive:{
        
            0:{
                items:1,
                autoplay:true
            },
            993:{
                
            }
           }
            });
    }

  });



  let counter1 = document.querySelector(".counter1");
  let counter2 = document.querySelector(".counter2");
  let counter3 = document.querySelector(".counter3");
  let counter4 = document.querySelector(".counter4");
  let flag=false;
  
  
  
  let usernameInput = document.getElementById("user_name");
  let emailInput = document.getElementById("user_email");
  let passInput = document.getElementById("user_password");
  let msgInput = document.getElementById("msg-area");
  let form= document.querySelector("#form_id");
  let nameFlag= false;
  let emailFlag= false;
  let passFlag = false;
  let msgFlag = false;
  let btn = document.querySelector("#btn-send");
  let eye=document.querySelector("#custom-pos-eye");


  
  if(passInput!=null){

    passInput.type = "password";
  }
  
  
  
  var cv1 = document.getElementById("Canvas-1");
  var cv2 = document.getElementById("Canvas-2");
  var cv3 = document.getElementById("Canvas-3");
  var cv4 = document.getElementById("Canvas-4");
  let str1= "71%";
  let str2= "87%";
  let str3= "80%";
  let str4= "92%";
window.addEventListener("scroll",function(){

if (document.documentElement.scrollTop > 320){

this.document.querySelector("#scroll-back-up").style.opacity = "1";
if(this.document.querySelector("#scroll-back-up").style.opacity > "0.5"){
    this.document.querySelector("#scroll-back-up").style.visibility="visible";
}

}
else{

    this.document.querySelector("#scroll-back-up").style.opacity = "0";
    if(this.document.querySelector("#scroll-back-up").style.opacity < "0.5"){
        this.document.querySelector("#scroll-back-up").style.visibility="hidden";
    }
}
if(document.documentElement.scrollTop > 1075 && document.documentElement.scrollTop < 1970 && flag == false && document.title=="TradeX"){
incrementFunction(counter1,25,8000,8);
incrementFunction(counter2,9,810,28);
incrementFunction(counter3,25,2000,30);
incrementFunction(counter4,1,20,120);
}
else if(document.documentElement.scrollTop > 2300 && document.documentElement.scrollTop < 3100 && flag == false && document.title=="About"){
    incrementFunction(counter1,25,8000,8);
    incrementFunction(counter2,9,810,28);
    incrementFunction(counter3,25,2000,30);
    incrementFunction(counter4,1,20,120);
}
  })


  function incrementFunction(counter,incrementValue,maxVal,repeat){
    let i = 0;
    let interval = setInterval(()=>{
        if(i == maxVal){
            clearInterval(interval);
           }
            counter.innerText = i;
            i+=incrementValue;
    },repeat)
    flag=true;
   }



function drawCircle(c ,text,partial){
    if(c!=null){   
    var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(95,60,40,0,2*Math.PI);
            ctx.font = "18px Verdana";
            ctx.fillText(text, 75 , 65);
            ctx.strokeStyle = "blue";
            ctx.stroke();
    
            ctx.beginPath();
            ctx.arc(95,60,53,partial,2*Math.PI,true);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 10;
            ctx.stroke();
    }
        }

 drawCircle(cv1,str1,4.5);
 drawCircle(cv2,str2,5.5);
 drawCircle(cv3,str3,5);
 drawCircle(cv4,str4,5.75);




// ------------------------------------------------------------------------------------------------------------------ //
if(form!=null){
    form.addEventListener('input',function(e){
        switch(e.target.id){
     
         case "user_name":
             nameValidation(e.target);
             break;    
     
             
         case "user_email":
                 emailValidation(e.target);
             break;   
     
         case "user_password":
                 passValidation(e.target);
             break;  
     
         case "msg-area":
             msgValidation(e.target);
             break; 
        }
     
     })
     
form.addEventListener("submit",function(e){
    e.preventDefault();
    if(nameFlag && msgFlag && passFlag && emailFlag){
        
        handleError(btn,"Message Sent Successfully!")
         usernameInput.value = "";
         emailInput.value = "";
         passInput.value = "";
         msgInput.value = "";
         nameFlag = false;
         emailFlag = false;
         passFlag = false;
         msgFlag = false;
    }
    else{
        
        handleError(btn,"");
        if(usernameInput.value.length == 0){
            handleError(usernameInput,"The field is required")
        }
        if(emailInput.value.length == 0){
            handleError(emailInput,"The field is required")
        }
        if(passInput.value.length == 0){
            handleError(passInput,"The field is required")
        }
        if(msgInput.value.length == 0){
            handleError(msgInput,"The field is required")
        }
    }
    
   })
}


function nameValidation(input){
 let inputVal = input.value.trim();
 let regEx = /^[A-Za-z]+$/;
 if(inputVal.length<5 && inputVal.length>0){
    handleError(input,"Username is Too Short");
    nameFlag=false;
 }
 else if(inputVal.length==0){
   handleError(input,"The field is required");
   nameFlag=false;
 }
 else  if(inputVal.length>30){
    handleError(input,"Username is Too Long");
    nameFlag=false;
 }
 else if(!regEx.test(input.value) && inputVal.length>0){
    handleError(input,"Username must contain Letters Only");
    nameFlag=false;
 }

 else{
    handleError(input);
    nameFlag=true;
    
 }
}



function emailValidation(input){
    let inputVal = input.value;
    let regEx =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regEx.test(input.value) && inputVal.length>0){
        handleError(input);
        emailFlag = true;
    } 
    else if(!regEx.test(input.value) && inputVal.length>0){
        handleError(input,"Email Format Invalid ex: john@example.com");
        emailFlag = false;
    }
    else if(inputVal.length==0){
        handleError(input,"The field is required");
        emailFlag=false;
    }
   }


function passValidation(input){
    let inputVal = input.value.trim();
    let regEx =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(inputVal.length<8 && inputVal.length>0){
       handleError(input,"Password is Too Short min: 8 Characters");
       passFlag=false;
    }
    else if(inputVal.length==0){
      handleError(input,"The field is required");
      passFlag=false;
    }
    else if(inputVal.length > 30){
        handleError(input,"Password is Too Long");
      passFlag=false;
    }
    else if(!regEx.test(input.value) && inputVal.length>0){
        handleError(input,"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character");
        passFlag = false;
    }
   
    else{
       handleError(input);
       passFlag=true;
       
    }
   }


function msgValidation(input){
    let inputVal = input.value.trim();
    if(inputVal.length<20 && inputVal.length>0){
       handleError(input,"Message is Too Short message must be at least 20 Characters");
       msgFlag=false;
    }
    else if(inputVal.length==0){
      handleError(input,"The field is required max:2000 characters");
      msgFlag=false;
    }
    else if(inputVal.length>2000){
        handleError(input,"you have Exceeded Max:2000 characters");
      msgFlag=false;
    }
    else{
       handleError(input);
       msgFlag=true;
       
    }
   }


function handleError(element,text = ""){
    element.nextElementSibling.innerText = text;
   }



if(eye!=null){

    eye.addEventListener("click",function(){

        if(passInput.type == "password"){
            passInput.type = "text";
        }
        else{
            passInput.type = "password";
        }
        
    })
}



