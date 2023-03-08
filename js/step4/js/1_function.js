/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을
    * 확보하기 위한 수단.

*/


//* exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
//! 반복문 사용시
function helloExp(){
    var comment = "안녕, 반가워!"
    for (var i = 0; i<3; i++){
        document.write(comment, "<br>");
    }
}


//! 함수로 호출시
function helloFunc(){
    var comment = "안녕, 반가워!"
    document.write(comment,"<br>");
}
// helloFunc();helloFunc();helloFunc();


//*exp.2  매개변수(parameter)가 있는 함수 만들기
//? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 
//? 해결하기 위함.


function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합은 = " + result);
}

// sumParam(10,20);


//*exp.3 매개변수의 자리가 없어도 있는것처럼.. 
//* arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용됨.)

/*
    ?arguments
    * arguments 객체 (object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 
    * 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.

*/

//! ex.1
function sumALL(){
    //? arguments는 배열같은 매개변수

    var willReturn = 0;
    for (var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}


//*exp.4 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기.
//! data의 입력순서를 arguments 내에서 조작 할 수 없다.
function showInfo(){
    console.log("0 = "+arguments[0]);
    console.log("1 = "+arguments[1]);
    alert(arguments[0]+"의 나이는"+arguments[1]+"세 입니다.");

}


/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        * function f(x){ return x * x; }
        * alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        * alert('기존매개변수', '추가매개변수');
        * prompt('기존매개변수');
*/

//*exp.5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수를 만들어보자.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}

//*exp.6 무한 루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
//! 단 입력값이 0이면 즉시 실행을 멍추게 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt("숫자만 입력하시오."));
        if(value == 0){
            document.write("종료");
            return;
        }

        sum += value;
        document.write(count+". "+sum+"<br>");
        count++;
    }
    document.write("총 "+count+"번 실행함.");
}


