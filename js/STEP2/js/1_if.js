/*
    ? 조건문

    * 실무사용의 예
    * 1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교후
    *    같아면 승인, 아니라면 오류메세지를 띄운다.
    * 2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격했는지 여부를 판별할수있다.
    * 3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    * 4. 삭제작업 수행시 사용자가 yes를 눌렀을때와 no를 눌렀을때 수행할지 말지를 결정할 수 있다.
    * 5. slide같은 ui component의 좌,우방향으로 최대치로 이동하였는지 판별할 수 있다.
    
    ? ex >  
    * if(조건식){
    *    실행문 A;  // 조건식이 참일 경우 실행
    *   }else {
    *    실행문 B;  // 조건식이 거짓일 경우 실행
    *   }else{
    *    실행문 B;  // 조건식이 거짓일 경우 실행
    *   }
 */


// *case.1 현재시간이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();

    //? 조건문
    if(hour < 12){
        alert("오전입니다.");
    }if(hour >= 12){
        alert("오후입니다.");
    }
}

// *case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();

    if(day<30){
        alert("아직 말일이 아닙니다.");
    }else{
        alert("말일입니다.");
    }

}

// ?case.3 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    // ? 11시보다 현시각이 작으면 아침
    if(hour < 11){
        alert("아침시간입니다.");
    }
    // ? 그것이 아니고  15시보다 현시각이 작으면 점심
    else if(hour<15){
        alert("점심시간입니다.");
    }
    // ? 그것이 아닐경우 저녁
    else{
        alert("저녁시간입니다.");
    }

}

//* exp.1 숫자판별
function numbJudgment(){
    var numb = prompt("숫자를 입력하세요","양수음수상관없음");
    console.log(typeof(numb) + "=" + numb);

    // * numb 값이 0 크게 되면 양수
    if(numb > 0){
        alert("양수입니다.");
    }
    // * numb 값이 0 작게 되면 음수
    else if(numb < 0){
        alert("음수입니다.");
    }
    // * 위에꺼 둘다 아니면 0의 값이 나올수 있게 작성
    else{
        alert('0입니다.');
    }
}

//*exp.2 홀, 짝 판별
function oddOrEven(){
    var numb = prompt("숫자를 입력하세요","홀,짝을 구분해드립니다.");

    if(numb%2 == 0){
        alert("짝수입니다.");
    }else if(numb%2 == 1){
        alert("홀수입니다.");
    }else{
        alert("올바른 값을 입력하세요.");
    }
}

//*exp.3 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
//? 국어점수를 입력받을 변수 지정
//? 영어점수를 입력받을 변수 지정
//? 수학점수를 입력받을 변수 지정
//? 국어,영어,수학 다 더한후 3으로 나누어 주는 변수 (평균내기)

function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오', '');
    var englishScore = prompt('영어점수를 입력하시오', '');
    var mathScore = prompt('수학점수를 입력하시오', '');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;

    if(avg > 100 || avg < 0){
        alert("점수를 똑바로 입력하세요.");
    }else if(avg >= 90){
        alert("평균" + avg + "점 " + "수 입니다.");
    }else if(avg >= 80){
        alert("평균" + avg + "점 " + "우 입니다.");
    }else if(avg >= 70){
        alert("평균" + avg + "점 " + "미 입니다.");
    }else if(avg >= 60){
        alert("평균" + avg + "점 " + "양 입니다.");
    }else{
        alert("평균" + avg + "점 " + "가 입니다.");
    }
}

//todo.4 사용자 id를 입력받아 맞다면 승인 메시지 출력. 
function userIDCheck(){
    var userID = prompt("사용자의 아이디");
    if(userID == 'test'){
        alert("접속을 승인합니다.");
    }else if(userID != 'test'){
        alert("잘못된 ID입니다.");
    }
}

//todo.5 사용자 id "mark"와 password"1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    var userID = prompt("사용자의 아이디");
    var userPW = prompt("사용자의 패스워드");
    if(userID=="mark" && userPW=="1234"){
        alert("mark님으로 확인되었습니다.");
    }else{
        alert("id 혹은 password가 틀렸습니다.");
    }
}

//!true.4 간소화(조건부 연산자)
function userInfoCheck1(){
    var userID = prompt("사용자의 아이디");
    var userPW = prompt("사용자의 패스워드");

    //? (조건식)?(참일경우실행):(거짓일경우실행);
    (userID=="mark" && userPW=="1234")?alert("mark님으로 확인되었습니다.") : alert("id 혹은 password가 틀렸습니다.");

}

//todo hw.2 다음 코드를 간소화 시키시오.
function btnMouseEx(){
    var clickBtn = window.prompt("누르실 마우스 버튼을 입력하세요 (왼쪽,오른쪽,가운데)");

    if(clickBtn=="오른쪽"){
        document.write("오른쪽!");
    }else if(clickBtn=="왼쪽"){
        document.write("왼쪽!");
    }else if(clickBtn=="가운데"){
        document.write("가운데!");
    }else{
        document.write("올바른값을 입력하세요.");
    }

    (clickBtn == "오른쪽" || clickBtn == "왼쪽" || clickBtn == "가운데")? document.write(clickBtn + "!") : document.write("올바른값을 입력하세요.");
}