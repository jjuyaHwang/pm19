/*
    ? 기본사칙(숫자열) 연산자
    * +, =, *, / 나누기, % 나머지, ()우선

    ? 문자열 연산자
    * + 문자열을 합친다.

    ? 복합 대입 연산자
    * += 기존 변수의 값에 값을 더함 ,  -= 기존 변수의 값에 값을 뻄
    * *= 기존 변수의 값에 값을 곱함, /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함.
    * ex > a += 10   ->   a + 10
    

    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소

    ? 조건비교 연산자
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    * == 좌변과 우변이 같다.
    * != 좌변과 우변이 다르다.

    ? 논리 연산자
    * &&(곱) 그리고 ,||(합) 이거나

    ? 논리 부정연산자
    * !
    ex) 
    true(참) -> !true(거짓)


*/

// * case.1 변수 a 공간에 10이라는 값을 담아주세요
function numbOP1(){
    var a = 10;
    console.log(a + 10);
}

// * case.2 변수 a 에  50값을 담아지정하기,\
// * 변수 b 에 20값을 담아지정하기.
// * 변수 a 와 변수 b 를 곱한 값을 result 라는 변수안에 담기
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b;
    console.log(result);
}


// * case.3 변수 a 에 hi 라는 값을 담아지정하기,
// *        변수 b 에 web 이라는 값을 담아지정하기,
//* 합쳐서 hi web 을 출력.
function stringOP(){
    var a = 'hi';
    var b = 'web';
    console.log(a + b);
}



// * case.3 ul, li 구조의 태그를 html 페이지에 삽입 후 출력.
// function operatorEX(){
//     var list = '';
//     list += '<ul>';
//     list += '<li>test</li>'
//     list += '</ul>'

//     console.log('<ul>' + '<li>test</li>' + '</ul>');

// }


function numberPlusAfter(){
    var number = 10; //? 변수 선언 및 초기화
    alert(number++); // 10 (11) 
    alert(number++); // 11 (12)
    alert(number++); // 12 (13)
    console.log(number); // 13
} 


// * case.4 변수 a 에 40 값을 담아
// * console에 a = 40 이라고 출력하기.
function compareOpaerator(){
    var a = 40;
    console.log("a =" + a);
}


//* case.5 숫자 10이 담긴 변수 a 와 숫자 20이 담긴 변수 b 의 크기를 비교하여 결과를 출력.
function compareOpaerator1(){
    var a = 10;
    var b = 20;
    var result = a < b;
    console.log('10 < 20 = ' + result);
}

//* case.6  숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b 가 같은지 비교하여 결과를 출력. 
function compareOpaerator2(){
    var a = 10;
    var b = 20;
    var result = a == b;
    console.log('10 = 20 = ' + result);  //거짓
}