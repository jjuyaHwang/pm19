/*
    ! 함수의 종류
    * 큰 분류상 사용자 정의 함수(function name(){}) js core function(기본제공되는 함수)로 나뉜다

    ? 큰 분류 이하 용도에 따른 함수 종류
    * 1. 일반 함수 - 지금까지 우리가 썼던 함수들.
    * 2. 중첩 함수 - 함수 안에 함수가 또 있는 경우.
    * 3. 콜백 함수 - 함수 실행 결과값을 리턴이 아니라.
    * 매개변수를 통해 들어온 함수를 호출해서 넘겨주는 방식(방식자체의 이름 : callback).
    * 넘어온 매개변수(함수)자체가 콜백함수(callBack function). (ex> plugin, api...)
    * 4. 클로저 함수 - 일반적인 함수의 경우 함수 호출에 의해 함수내부의 실행구문을 모두 실해하게 되면
    * 함수 내부에서 만든 지역변수는 자동으로 사라지지만(죽는다.) 특정 경우에는 사라지지않고
    * 남는 경우가 있는데 이 현상을 클로저(closure)라 부르고, 이 현상을 일으키는 함수를 클로저함수.
    * 5. 멤버함수 - 멤버함수는 클래스 내부에 만들어지며 이를 보통 메서드(method)라고 함.
 */

    //* case.1 1초에 한번씩 'hi' 출력
    function sayHi(){
        var count = 0;
        setInterval(function(){
            count++;
            document.write(count + 'hi <br>');
        },1000);
    }

    function innerFunctionTest(){
        var a = 10;
        var b = 20;
        var c = 30;
        function outerFunc(){
            var b = 200;
            var c = 300;
            function innerFunc(){
                var c = 3000;
                //? 실행시에 자신과 인접한 함수 내의 지역변수부터 찾는다.
                console.log('1. = ' + a);
                console.log('2. = ' + b);
                console.log('3. = ' + c);
            }
            innerFunc();
        }
        outerFunc();
    }
