let squares = document.getElementsByClassName('square')
let h3 = document.getElementById('h3')
let win = false;
let arr = [
    '1','2','3',
    '4','5','6',
    '7','8','9'
]
let x = "X"
for(const square of squares){
    square.addEventListener('click',()=>{
        if (win){
            return;
        }
        let value = square.getAttribute("value")
        let index = value - 1;
        if (arr[index]=="X" || arr[index]=="O" ){
            return
        }
        arr[index]=x
        let contentSQR = document.querySelector(`.square[value = "${value}"]`);
        contentSQR.innerHTML=`
            <h3>${x}</h3>
        `;
        wenner()
        
        if(x=="X"){
            x = 'O'
            h3.innerHTML= `${x} turn`
        }else{
            x = 'X'
            h3.innerHTML= `${x} turn`
        }
        
        

    })

    
    function wenner(){
        if(
            // rows
            (arr[0]==arr[1]&&arr[1]==arr[2])||
            (arr[3]==arr[4]&&arr[4]==arr[5])||
            (arr[6]==arr[7]&&arr[7]==arr[8])||
            //columns
            (arr[0]==arr[3]&&arr[3]==arr[6])||
            (arr[1]==arr[4]&&arr[4]==arr[7])||
            (arr[2]==arr[5]&&arr[5]==arr[8])||
            //diagonal
            (arr[0]==arr[4]&&arr[4]==arr[8])||
            (arr[2]==arr[4]&&arr[4]==arr[6])
        ){
            var winner = x == "O" ? "O" : "X"
            alert(`${winner} Won !`)
            win = true
            
        }
        var isDrow = true ; 
        for(sqr of arr){
            
            if(sqr != 'X' && sqr != 'O'){
                isDrow = false;
            }
        }
        if(isDrow){
            win = true
            alert('Drow')
            
        }
        
    }
    

}




let btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    reset()
})
function reset(){
    for(const square of squares){
        let value = square.getAttribute("value")
        let contentSQR = document.querySelector(`.square[value = "${value}"]`);
        contentSQR.innerHTML=""
        win = false
        arr = [
            '1','2','3',
            '4','5','6',
            '7','8','9'
        ]
        h3.innerHTML= `X turn`
        x = "X"
    }

}