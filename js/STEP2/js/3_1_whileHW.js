//todo.1 구구단 숫자를 입력받아 출력하는 while문.
// ? 1. 숫자입력받을 prompt 출력.
// ? 2. 숫자를 입력받으면 해당 구구단을 출력.
// * 9단이내로만 입력받기. ex> 9단이 넘어 갈시 '9단 이하로 입력하세요.'
function gugudan(){
    var guguNumb = window.prompt("구구단숫자를 입력해라(1~9)");
    var i = 1;
    if(guguNumb <= 9){
         while (i <= 9){
            document.write(guguNumb + "x" + i + "=" + guguNumb*i + "<br>");
            i++;
         }
        //  guguNumb + "x" + i + "=" + guguNumb*i + "<br>"

    }else{
        alert("9단 이하로 입력하세요.");
    }
}

//todo.2 end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, 
//todo.     prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 

//? i 초기값을 넣어준 변수
//? result 결과값을 담을 변수

//? while 문을 사용하여 반복루트를 입력후 end라는 값이 입력되면 반복이 멈출수있게

function sumNumb(){
    var i = 1; //? i 초기값을 넣어준 변수
    var result = 0; //? result 결과값을 담을 변수
    while(true){
        var numb = window.prompt(i+"번째 입력"); //? 무한 루프로 입력받기
        if(numb == "end"){ //? end라는 값과 일치하면
            alert("입력이 종료되었습니다.");
            break; //? 루프 중단 및 종료 alert입력
        }else if(numb == ""){
            console.log("공백");
        }

        result += parseInt(numb); //? 결과변수에 형변환 후 더해서 저장.
        document.write("현재까지의 총합 : " + result + "<br>");
        i++; //? 수행할떄마다 카운트 증가.
    }
}