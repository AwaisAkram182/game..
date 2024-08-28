 let userscore=0;
 let  computerscore=0;
 let choices=document.querySelectorAll(".choice");
 let msg=document.querySelector("#msg");
 let scoreofUser=document.querySelector("#yourscore");
 let scorefComputer=document.querySelector("#computerscore");

 //userclick function//
  choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
 let userchoice=choice.getAttribute("id"); 
  let computerpick=computerchoice();
 winning(userchoice, computerpick);
  });
 });


 ///computerchoice function///
 const computerchoice=()=>{
    let options=["rock","paper","scissors"];
    let randomchoice=Math.floor(Math.random()*3);
    return options[randomchoice];
 }



 //draw function//
 const drawgame=()=>{
      msg.innerText="It's a tie";
      msg.style.color="white";
      msg.style.backgroundColor=" #495057";
 }



///print mmsg and update score///
const showwinner=(userwin,userchoice,computerchoice)=>{
   
   if(userwin){
      msg.innerText = `You Win! Your ${userchoice} beats ${computerchoice}`;
      msg.style.backgroundColor="green";
      userscore++;

   }
   else if(!userwin){
      msg.innerText = `You Lose! Comptr's ${computerchoice} beats ${userchoice}`;
      msg.style.backgroundColor="Red";
      computerscore++;
   }
   else{
     drawgame();

   }
   scoreofUser.innerText = userscore;
    scorefComputer.innerText = computerscore;
}




 ///winnin logic///
 const winning=(userchoice,computerpick)=>{
 if(userchoice===computerpick){
        drawgame();
 }
 else{
    let userwin=false;
    if(userchoice==="rock"&&computerpick==="scissors"||
        userchoice==="paper"&&computerpick==="rock"||
        userchoice==="scissors"&&computerpick==="paper"){
     userwin=true;
        }
        
        showwinner(userwin,userchoice,computerpick);
 }
}
