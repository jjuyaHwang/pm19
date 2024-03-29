/*
    ? 형변환
    * Js = "10" + "10" = 1010(string)
    * JS = 10 + 10 = 20 
    
    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자. ex> 10 + "번"  = 10번 
    * 2. 불린 + 숫자 = 숫자
    * 3. 불린 + 문자 = 문자.
    
    ? 명시적 형변환 
    * method 나 lib core func 를 이용하여 강제로 숫자 -> 문자로 변환.

    ? String
    * String(value); - 문자형으로 변환

    ? Number
    * Number(value); - 숫자형으로 변환
*/

// *case1. 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt("나이입력");
    var result = parseInt(age) + 20; // ? Number(age) - 전역함수 Number는 정,실수 무관 변환.
    console.log(result);
}

// *case2. 강제 숫자 - 문자형 변환.
function forcedString(){
    var a = "30";
    var result = 1 + a + 10;
    console.log(result);
}

// *case3. 강제 불린 - 숫자형 변환.
function forcedNumber(){
    var result = 2 + true;
    console.log(result);
}

// *case4. 강제 불린 - 문자형 변환.
function forcedString2(){
    var a = "2" + true;
    console.log(a);
}


function stringNumb(){
    var test1 = 15;
    var result = String(test1); 
    console.log(typeof(result) + "=" + result);
}

function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result) + "=" + result);

}

// * number 형변환
function numbString(){
    var test = "300";
    var result = parseInt(test) + 10;
    console.log(typeof(result) + "=" + result);
}

// todo.1 변수 test에 들어있는 숫자 100을 문자형으로 변환. result로 출력(typeof 검수필요).

// todo. 1-1 암시적 형변환
function todo1(){
    var test = 100;
    var result = test + "";
    console.log(typeof(result) + "=" + result);
}

// todo. 1-2 String 형변환
function todo2(){
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + "=" + result);
}

// todo. 1-3 toString 형변환
function todo3(){
    var test = 100;
    var result = test.toString();
    console.log(typeof(result) + "=" + result);
}

// todo.2 문자형을 숫자형으로 변환하여 연산이 가능하게 만들기

// todo. 2-1 parse 형변환
function todo4(){
    var test = "100.58";
    var result = parent(test) + 150;
    console.log(typeof(result) + "=" + result);
}

// todo. 2-2 Number 형변환
function todo4(){
    var test = "100.58";
    var result = Number(test) + 150;
    console.log(typeof(result) + "=" + result);
}