//varuables 

const cells = document.querySelectorAll('.cell');
const replaybtn = document.getElementById('replay')
 huplayer = 'O';
let aiplayer = 'X';
let available = [];
const one = document.getElementById('1');
const tow = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const obox = document.getElementById('obox');
const xbox = document.getElementById('xbox');
let  onum = 0;
let  xnum = 0;
obox.innerText=onum
xbox.innerText=xnum
const tab = document.getElementById('tab');
const cl = document.getElementById('close');
let winnom = 'false';
const mainBox = document.getElementById('mainBox');
const bax = document.querySelectorAll('.theBox');
let whois = 'no one';
const flexdiv = document.getElementById('flexDiv');




turn(miniMaxt(), aiplayer)
turn(bestMove(), aiplayer)
turn(miniMax(), aiplayer)

 for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click',click,{ once:true });
            
        
    }
   




replaybtn.addEventListener('click',replay)
function replay(){
    
    tab.style.cssText = 
    "display: none\;"
    mainBox.style.cssText =
    "height:250px ;"+
    "transition: 0.5s ease-in-out;"

    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
    }
     winnom = 'false'
     whois = 'no one';
     turn(miniMaxt(), aiplayer)
turn(bestMove(), aiplayer)
turn(miniMax(), aiplayer)
    for (var i = 0; i < cells.length; i++) {
		cells[i].addEventListener('click',click,{ once:true });
    }

}

function click(square){
    turn(square.target.id, huplayer)
    console.log(available)
    turn(bestMove(), aiplayer)
}
function turn(squareId,player) {
    document.getElementById(squareId).innerText = player;
    checkWin(huplayer)
    checkWin(aiplayer)
    checktie()



}

 function checkWin(player) {
   if (one.innerText === player && tow.innerText === player && three.innerText === player) {
        gameOver()
        theLine(one,tow,three,player)
         winnom = 'true'
        if(player === huplayer){

             whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }
    }
    else if (four.innerText === player && five.innerText === player && six.innerText === player) {
        gameOver()
        theLine(four,five,six,player)
        winnom = 'true'
        if(player === huplayer){

            whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }
    }
    else if (seven.innerText === player && eight.innerText === player && nine.innerText === player) {
        gameOver()
        theLine(seven,eight,nine,player)
        winnom = 'true'
        if(player === huplayer){

            whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }

    }
    else if (one.innerText === player && four.innerText === player && seven.innerText === player) {
        gameOver()
        theLine(one,four,seven,player)
        winnom = 'true'
        if(player === huplayer){

            whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }
    }
    else if (tow.innerText === player && five.innerText === player && eight.innerText === player) {
        gameOver()
        theLine(tow,five,eight,player)
        winnom = 'true'
        if(player === huplayer){

 
            whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }
    }
    else if (three.innerText === player && six.innerText === player && nine.innerText === player) {
        gameOver()
        theLine(three,six,nine,player)
        winnom = 'true'
        if(player === huplayer){

            whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }
    }
    else if (nine.innerText === player && five.innerText === player && one.innerText === player) {
        gameOver()
        theLine(nine,five,one,player)
        winnom = 'true'
        if(player === huplayer){

            whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }
    }
    else if (seven.innerText === player && five.innerText=== player && three.innerText === player) {
        gameOver()
        theLine(seven,five,three,player)
        winnom = 'true'
        if(player === huplayer){

            whois = 'huplayer'
        }
        if(player === aiplayer){

             whois = 'aiplayer'
        }
    }

} 


function gameOver() {

	for (i=0; i < cells.length; i++){
        cells[i].removeEventListener('click',click)

    }
}
function theLine(x,y,z,who){

    if (who === huplayer){
        x.style.backgroundColor = "green"
        y.style.backgroundColor = "green"
        z.style.backgroundColor = "green"
        numbero()
        tap(huplayer)
    }
    else if (who === aiplayer){
        x.style.backgroundColor = "red"
        y.style.backgroundColor = "red"
        z.style.backgroundColor = "red"
        numberx()
        tap(aiplayer)
    }


}
function numbero(){

   onum++
   obox.innerText=onum
    
}
function numberx(){

    xnum++
    xbox.innerText=xnum
     
 }
 function tap(whoWin){
     if(whoWin === huplayer){
         tab.style.display = 'block'
         tab.innerText = "you win!"
         mainBox.style.cssText =
         "height:300px ;"
     }
     else if(whoWin === aiplayer){
         tab.style.cssText = 
         "display: block\;"+
         "position: absolute\;"+
         "top: 62%\;"+
         "left: 50%\;"+
         "transform: translate(-50%,-40%)\;"+
         "text-align: center\;"+
         "color: #000000\;"+
         "font-size: 40px\;"+
         "font-family: fredericka-the-greatest, sans-serif\;"+
         "font-weight: 400\;"+
         "font-style: normal\;"+
         "padding-top:50px\;"+
         "padding-bottom:30px \;"+
         "transition: 1s ease-in-out\;"+
         "opacity: 100%;"
         tab.innerHTML = "you lose <br><span id= \"lastBreak\"> and you never win!</span>"

         mainBox.style.cssText = "height:400px \;"
         bax.style.cssText ="transform: translate(-50%,-70%)\;"
         
     }
     else{
        tab.style.display = 'block'
        tab.innerText = "tie!"
        mainBox.style.cssText =
        "height:300px ;"
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "#f19a37"
        }
     }
    }

    function isAvailable(){
        available = []
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].innerText === ""){
                available.push(i)
            }
        }    
    }
 function checktie(){
     isAvailable()

     if (winnom === 'false' && available.length === 0){
         tap("hi")
         whois = "tie"
         for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "#f19a37"
        }
     }
 }   

function bestMove(){
    return 1;
}



function miniMax(isMaximazing){
    return 7;


}
function miniMaxt(isMaximazing){
    return 9;
    

}


