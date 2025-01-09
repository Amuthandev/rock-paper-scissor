function ComputerMove(){
    let random = Math.random();
    let computer ;
    if(random>=0 && random<1/3){
        computer='rock'
    }else if(random>=1/3 && random <2/3){
        computer='paper'
    }else if(random>=2/3 && random <1){
        computer='scissor'

         }


    return computer;
}
// here i saved into object to string
const score=JSON.parse(localStorage.getItem('score')) ||  ///if left side is true game will save , if right is true game will reset
{
    won:0,
loss:0,
tie:0
}   


function UserMove(user){
// let userimage = document.querySelector(".userImage")
// userimage.textContent = `${user}`   
   let result;
   let ScoreResult = document.querySelector(".ScoreResult")

   //   let mark = document.querySelector(".mark")
  
let computer = ComputerMove();
if(user==='rock'){
if(computer==='rock'){
     result='tie'
    }else if(computer==='paper'){
     result = 'fail'
    }else if(computer==='scissor'){
     result = 'won'
    }
}else if(user==='paper'){
    if(computer==='rock'){
        result='won'
       }else if(computer==='paper'){
        result = 'tie'
       }else if(computer==='scissor'){
        result = 'loss'
       }
}else if(user==='scissor'){
    if(computer==='rock'){
        result='loss'
       }else if(computer==='paper'){
        result = 'won'
       }else if(computer==='scissor'){
        result = 'tie'
       }
        
}



if(result==='won'){
    score.won+=1
}else if(result==='loss'){
    score.loss+=1
}else if(result === 'tie'){
    score.tie+=1
}
ScoreResult.innerHTML = `won ${score.won},loss:${score.loss}, tie;${score.tie}`






localStorage.setItem("score",JSON.stringify(score));

document.querySelector(".js-moves").innerHTML = `
<img src="${user}-emoji.png" 
   class="rockemojipng">
   <img src="${computer}-emoji.png"
    class="rockemojipng">
   `
   document.querySelector(".js-result").innerHTML=`${result}`

console.log(`youre move is ${user},computer move is ${computer},result is ${result},
    won : ${score.won},loss : ${score.loss},tie  ;${score.tie}
    `
 
)

}





