function rpsGame(yourchoice){
    
    var humanChoice,botChoice;

    humanChoice = yourchoice.id;
    botChoice = numberToChoice(randomInt())
    console.log('Bot:' + botChoice)

    result = decideWinner(humanChoice,botChoice)  
    console.log(result)
    message = finalMessage(result)
    console.log(message)
    rpsFrontEnd(humanChoice,botChoice,message)


}

function randomInt(){
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number]
}

function decideWinner(yourChoice,computerChoice){

    var rpsdata = {
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'rock':0,'scissor':0.5,'paper':1}
    }

    var humanScore = rpsdata[yourChoice][computerChoice]
    var computerScore = rpsdata[computerChoice][yourChoice]
     
    return [humanScore,computerScore]
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return{'message':'You Lost','color':'red'}
    }
    else if(yourScore===0.5){
        return{'message':'You Tied','color':'blue'}
    }
    if(yourScore===1){
        return{'message':'You Won','color':'green'}
    }

}

function rpsFrontEnd(humanImageChoice,botImageChoice,message){

    var imgData = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
        
    }
    // lets remove all the images 
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissor').remove()

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='"+imgData[humanImageChoice]+"' width=150 height=150 style='box-shadow: 0px 5px 50px blue'>"
    
    botDiv.innerHTML = "<img src='"+imgData[botImageChoice]+"' width=150 height=150 style='box-shadow: 0px 5px 50px red'>"
   
    messageDiv.innerHTML = "<h1 style ='color:"+message['color']+"; font-size:60px ; padding:1em;'>"+message['message'] +"</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    
    document.getElementById('flex-box-rps-div').appendChild(botDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
}
