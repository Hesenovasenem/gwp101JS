let startBtn=document.querySelector(".start")
let stopBtn=document.querySelector(".stop")
let result=document.querySelector("#result")
let resetBtn=document.querySelector(".reset")
let incrementBtn=document.querySelector(".increment")
let decrementBtn=document.querySelector(".decrement")

let  count=0;
let interval;
startBtn.addEventListener("click",function(){
   interval= setInterval(()=>{
count++;
result.innerText=count;
    },1000);
    this.setAttribute("disabled","true");
    stopBtn.removeAttribute("disabled")
}
)

stopBtn.addEventListener("click",function(){
    clearInterval(interval);
    startBtn.removeAttribute("disabled");
    this.setAttribute("disabled","true");
})
incrementBtn.addEventListener("click",function(){
    result.innerText++;
})
decrementBtn.addEventListener("click",function(){
    result.innerText--;
})
resetBtn.addEventListener("click",function(){
    result.innerText=0;
    count=0;
    clearInterval(interval);
    startBtn.removeAttribute("disabled");
    stopBtn.removeAttribute("disabled")
})

let $button = $('.increment-btn');
let $counter = $('.counter');

$button.click(function(){
  $counter.val( parseInt($counter.val()) + 1 );
});