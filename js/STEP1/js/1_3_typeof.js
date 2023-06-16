/*
    ? 자료형
    *1. 숫자형(Number)
    * 정수형 10진수(일상생활 사용 숫자 소숫점 x) ex> 22,44
    * 정수형 16진수(#000000 모든 숫자 표현)
    * 실수형 (소숫점을 갖는 숫자) ex> 60.5
    

    *2. 문자형(string)
    *   일상생활 사용 글자
    
    *3. 논리형(Boolean)
    *   true(참), false(거짓)
    *   true : 맞음, 1, 같음, 진실, 성공
    *   false : 틀림, 0, 같지않음, 거짓, 실패
    
    *4. undefined 
    * 미정의된 (초기화 되지않은, 기본 초기값), 들어오지 않는 자료형.
    
    *5. null
    * 아무것도 참조하지 않은 자료형. (객체를 담기위한 변수를 초기화 하는 상태).
*/

// *case.1 자신이 가장 좋아하는 숫자를 favorNumber변수에 담아 자료형을 check해보자.
function testTypeof(){
    var favorNumber = 7;
    console.log(typeof(favorNumber));
}

// *case.2 자신의 영어이름을 engName 변수에 담아 자료형을 check해보자.
function textTypeof(){
    var engName = "juhyun";
    console.log(typeof(engName) + "=" + engName);
}

// todo.3 현재 자신이 춥다, 아니다를 cold변수에 담아 자료형을 check해보자.
function check1(){
    var cold = false;
    console.log(typeof(cold) + "=" + cold);
}

// todo.4 현재 로그인 상태가 아니다를 loginStatus 변수에 담아 자료형을 check 해보자.
function check2(){
    var loginStatus = false;
    console.log(typeof(loginStatus) + "=" + loginStatus);
}

//todo.5 test변수를 선언하고 초기화 하지 않은 상태에서 자료형을 check 해보자.
function check3(){
    var test;
    console.log(typeof(test) + "=" + test);
}

//todo.6 obj 변수에 객체를 담을 예정이니 null로 초기화해서 자료형을 check해보자.
function check4(){
    var obj = null;
    console.log(typeof(obj) + "=" + obj);
}