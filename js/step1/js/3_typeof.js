/*
    ?자료형
    *  1. 문자형 (string)
    * 안쪽에 "" , '' 안에 작성해야한다.

    * 2. 숫자형 (Number)
    * 정수형 10진수(일상생활 사용 숫자 소숫점X) 
    * 정수형 16진수(0x ~ 로 시작하여 0~9, A~f 로 모든 숫자 표현)
    * 실수형 (소수점을 갖는 숫자) ex> 60.6

    * 3. 논리형 (Boolean)
    * true(참) or fales(거짓)
    * true : 맞음, 1, 같음, 진실, 성공
    * false : 틀림, 0, 같지않음, 거짓, 실패
    

    * 4. undefined
    * 미정의된 (초기화 되지않은, 기본 초기값), 들어오지 않은 자료형.
    * ex) var exFunc
    

    ? 형변환
    * JS  - "10" + "10" = 1010  
    
    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자.
    * 2. 불린 + 숫자 = 숫자.
    * 3. 불린 + 문자 = 문자.
    
*/


// *CASE.1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt('나이입력');
    // console.log(typeof(age) + '=' + age);
    var result = parseInt(age) + 20;
    console.log(typeof(result));
}

// *case.2 강제 숫자 = 문자형 변환.
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}


// *case.3 강제 불린 - 숫자형 변환.
function furcedNumber(){
    var result = 2 + true; //? true = 1, false = 0
    console.log(result);
}

// *case.4 강제 불린 - 문자형 변환
function forcedString2(){
    var a = '2' + true; //? 문자형으로 되어있을 경우 true 라는 문자로 인식한다.
    console.log(a);
}

// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? string
    * string(value); - 문자형으로 변환

    ? .toString()
    * Number.toString(); - 문자형(진수)변환.

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림발생))실수문자형 변환.
*/

function stringNumb(){
    var test1 = 15;
    var result = String(test1);
    console.log(typeof(result) + '=' + result);
}


function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result) + '=' + result);
}


// *case.6 test에 들어있는 문자를 숫자로 형변환.
/*
    ?Number
    * Number(value); - 정수, 실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환
    

*/

function numbString(){
    var test = '300';
    var result = parseInt(test) + 10;
    console.log('result = ' + result);
}

// * ex 변수 test 에 들어있는 숫자 100을 문자형으로 변형. result 로 출력 (typeof 로 출력하기).

function todo01(){
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + "=" + result);
}

// todo. 1-3 toString 형변환
function todo3(){
    var test = 100;
    var result = test.toString(); // todo. 형변환
    console.log(typeof(result) + " = " + result); // todo. typeof로 자료형 검수 및 출력.
}

// todo.2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들기.

// todo. 2-1 parse 형변환
function todo4(){
    var test = "100.51";
    var result = parseFloat(test) + 150 + parseInt("20"); // todo. 형변환
    console.log(typeof(result) + " = " + result); // todo. typeof로 자료형 검수 및 출력.
}

// todo. 2-2 Number 형변환
function todo5(){
    var test = "100.51";
    var result = Number(test) + 150 + Number("20"); // todo. 형변환
    console.log(typeof(result) + " = " + result); // todo. typeof로 자료형 검수 및 출력.
}