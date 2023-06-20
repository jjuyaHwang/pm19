/*
    ? switch 란?
    * 조건문 중 하나
    * if 가장 기본적인 조건문이지만 비교할 값이 많다면
    * 코드가 길어지고 가독성이 떨어지기때문에 이럴때에는 switch를 사용한다.
    * switch는 조건식의 결과가 case에 걸리는 경우, 비교할떄 사용된다.
    * (>,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
 */

    //*ex.1 문법
    function switchGrammar(){
        var input = Number(prompt("숫자를 입력하라","숫자"));

        // * 조건문
        switch (input % 2){
            case 0:
                alert("짝수입니다.");
                break;
            case 1:
                alert("홀수입니다.");
                break;
            default:
                alert("숫자가 아닙니다.");
                break;
        }
    }

//todo hw.1 각 수를 입력 받아 해당하는 조건의 메시지를 출력하라.
//? 1일 경우 "1등 10억", 2일 경우 "2등 5천만원", 3일 경우 "3등 300만원", 
//? 그외 수일 경우 "낙첨되었습니다."

function lotto(){
    var numbValue = window.prompt("입력하실 번호는?");

    switch(numbValue){
        case "1":
            alert("1등 10억");
            break;
        case "2":
            alert("2등 5천만원");
            break;
        case "3":
            alert("3등 300만원");
            break;
        default:
            alert("낙첨되었습니다.");
            break;
    }
}


//todo.1 switch 문을 이용한 계산기
//? 첫번째 숫자 와 연산자 와 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstNumb = window.prompt("첫번째 숫자를 입력하세요.");
    var operator = window.prompt("사칙연산 연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = window.prompt("두번째 숫자를 입력하세요.");

    //? 형변환
    firstNumb = parseInt(firstNumb);
    lastNumb = parseInt(lastNumb);

    switch(operator){
        case "+":
            alert(firstNumb + lastNumb);
            break;
        case "-":
            alert(firstNumb - lastNumb);
            break;
        case "*":
            alert(firstNumb * lastNumb);
            break;
        case "/":
            alert(firstNumb / lastNumb);
            break;
        default:
            alert("잘못된 값이 입력되었습니다.");
            break;
    }

}