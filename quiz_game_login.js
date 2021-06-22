function addUser(){
    player1Name=document.getElementById("player1Input").value;
    player2Name=document.getElementById("player2Input").value;

   localStorage.setItem("Player1",player1Name);
   localStorage.setItem("Player2",player2Name);
   
    window.location="quiz_game_page.html";
}
player1Name=localStorage.getItem("Player1");
player2Name=localStorage.getItem("Player2");
player1Score=0;
player2Score=0;
document.getElementById("player1_name").innerHTML=player1Name+" : ";
document.getElementById("player2_name").innerHTML=player2Name+" : ";
document.getElementById("player1_score").innerHTML=player1Score;
document.getElementById("player2_score").innerHTML=player2Score;
document.getElementById("question").innerHTML=player1Name;
document.getElementById("answer").innerHTML=player2Name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);

    question_number="<h4>"+number1+" X "+number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(answer_turn=="player1"){
        update_player1Score=player1Score+1;
        document.getElementById("player1_score").innerHTML=update_player1Score;
    }
    else{
        update_player2Score=player2Score+1;
        document.getElementById("player2_score").innerHTML=update_player2Score;
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("question").innerHTML=player2Name;
    }
    else{
        question_turn="player1";
        document.getElementById("question").innerHTML=player1Name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("answer").innerHTML=player2Name;
    }
    else{
        answer_turn="player1";
        document.getElementById("answer").innerHTML=player1Name;
    }
    document.getElementById("output").innerHTML="";
}