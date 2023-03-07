/*
    ?while
    * while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문처럼도 사용 가능하지만,
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리,
    전송(java, php ...), DB데이터 출력하기.

*/

// *exp.1 패스워드 '1234'가 입력되면 '접속승인', 아니면 ' 잘못 입력하였습니다.'
function pwCheck(){
     while(true){
        var value = window.prompt("패스워드를 입력하세요.");

        if(value==1234){
            alert('접속승인');
            break;    
        }else{
            alert('잘못 입력하였습니다.');
        }
        
     }
}


// *exp.2 while Continue
function whileContinue(){
    var i=0;
    while(i<=10){ //? 총 10회 반복
        i++; //? i 초기값부터 10번 증가
        break;

        document.write(i+"<br>");


    }
    document.write("최종 i = "+ i + "<br>"); //? 최종결과만 출력.
}


// * class01 ~ class07


// * 구구단만들기 9단이하로만 입력받기. ex> 9단이 넘어 갈시 '9단 이하로 입력하세요.'







