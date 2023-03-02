/*
    조건문
    
    실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/


// *case.1 현재시간이 오후인가 오전인가ㅣ
function amORpn(){
    var date = new Date();
    var hour = date.getMinutes();
    console.log(hour);

    // 조건문
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}

// *case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();

    // console.log(day);
    if(day < 27){
        alert('아직 말일이 아닙니다.')
    }else{
        alert('말일입니다.')
    }
}


// *case.3 아침?점심?저녁
function mealTime(){
    var date = new Date();
    var hour = date.getHours;

    if(hour < 11){
        alert('아침먹을 시간');
    }else if(hour < 15){
        alert('점심먹을 시간');
    }else{
        alert('저녁먹을 시간');
    }
}

// *case.4 숫자판별
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요.', '양수음수상관없음');
    console.log(typeof(numb) + '=' + numb);

    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('0입니다.');
    }
}


//*exp.3 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오', '');
    var englishScore = prompt('영어점수를 입력하시오', '');
    var mathScore = prompt('수학점수를 입력하시오', '');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;


    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라.')
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다.');
    }
    else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다.');
    }
    else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다.');
    }
    else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다.');
    }
    else{
        alert('평균' + avg + '점 \n' + '가 입니다.');
    }
}


// *case.6 사용자 id를 입력받아 맞다면 승인 메세지 출력.
function userIDCheck(){
    var userID = window.prompt("사용자의 아이디");
    if(userID=="userID"){
        alert('접속을 승인합니다.');
    }else if(userID!="userID"){
        alert('잘못된 ID입니다.');
    }
}

// *case.7 사용자 id 와 password 를 입력받고 둘다 맞을 경우에만 승인메세지 출력.
function userInfoCheck(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');

    if(userID=="userID"&&userPW=="1234"){
        alert("userID님으로 확인되었습니다.");
    }else{
        alert("ID 혹은 Password가 틀렸습니다.");
    }
}

// *case.8 간소화(조건부연산자)
function userInfoCheck1(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');

    (userID=="userID"&&userPW=="1234")? alert("userID님으로 확인되었습니다.") : alert("ID 혹은 Password가 틀렸습니다.")
    //? (조건식)?(참일경우실행):(거짓일경우실행);
}