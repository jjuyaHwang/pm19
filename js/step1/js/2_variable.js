/*
    ? 변수란
    데이터를 저장 하는 장소, 데이터를 읽고 쓸 수 있는 장소.
    var 이름 = "담고 싶은 내용 또는 태그"

    주의사항.
    1. 숫자로 시작 할 수 없다.(에러가 나는 브라우저가 있기 때문.)
    2. 대, 소문자를 구별한다. 
    3. 변수는 대문자가 아닌 소문자로 시작한다. (암묵적인 룰)
    4. js에서 이미 정의된 예약어 사용금지.
    (break, case, catch, continue, default, delete, 
        do, else, finally, for, function, if, in, instanceof, new,
        return, switch, this, throw, try, typeof, var, void, while, with)

    변수의 종류
    1. 전역변수 - 밑에 잔뜩 있는 것들. 전체 영역에서 사용 가능한 변수.
    2. 지역변수 = 정해진 영역 내에서만 사용 할 수 있는 변수.

    var totalValue = "전역변수"
    function name(){
        var value = "지역변수";
    }
    function name01(){
        var value01 = "지역변수";
    }

    3. 매개변수 = 함수 외부에서 내부로 데이터를 전달할 때, 사용하는 변수.
    var totalValue = '전역변수';
    function (){
        var value = '지역변수';
        func1()
    }

    function func1(num1 , num2){

    }



    4. 멤버변수 = 클래스 내부에서 만들어지며,
    객체에서 사용하는 정보를 담는 변수.



*/

// case.1  name 이란 변수안에 여러분의 이름을 담아보시오.
var name = "황주현", age = 99;

console.log(name, age);
alert(name);


