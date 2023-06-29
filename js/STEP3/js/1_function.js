/*
    ? function (함수)
    * 기본 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기등...)
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
 */


    //* exp.1 다음 구문을 hello()라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
    // document.write("안녕, 반가워","<br>");
    // document.write("안녕, 반가워","<br>");
    // document.write("안녕, 반가워","<br>");

    function helloExp(){ //! 반복문 사용시
        var comment = "안녕, 반가워";
        for(var i=0; i<3; i++){
            document.write(comment,"<br>");
        }
    }
 
    function helloFunc(){ //! 함수로 호출시
        var comment = "안녕, 반가워";
        document.write(comment,"<br>");
    }


    //*exp.2 매개변수(Parameter)가 있는 함수 만들기
    //? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.

    
    function sumParam(num1,num2){
        var result = num1 + num2;
        // alert("두 수의 합은 =" + result);
    }

    //*exp.3 매개변수의 자리가 없어도 있는것처럼 .... arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
    /*
        ? arguments
        * arguments 객체(object)는 모든 함수 안에서 사용하는 지역함수.
        * arguments 를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
        * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
        * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
     */

    function sumAll(){
        var willReturn = 0;
        for(var i = 0; i < arguments.length; i++){
            willReturn += arguments[i];
        }
        console.log(willReturn);
    }

    // todo.1 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기.
    

    /*
        ? return(리턴)
        * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
        * 이 때 매개변수를 활용하면  함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
        * 즉, 매개변수값이 함수 외부에서 내부로 들어오는 입력부라면, 리턴값은 함수 내부에서 처리한 결과를
        * 함수 외부로 전달하기 위해 사용하는 출력 부.
        


        //* (매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
     */


        function sumReturn1(num1,num2){
            var result = num1 + num2;
            return result;
        }

        //* exp.6 무한 루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
        // ! 단 입력값이 0이면 즉시 실행을 멈추게 된다.
        function infiniteSum(){
            var sum = 0;
            var count = 1;
            while(true){
                var value = parseInt(prompt("숫자만 입력가능."));
                if(value == 0){
                    document.write("종료");
                    break; // ? return 은 함수를 빠져나오지만, break는 루프를 빠져나오기때문에 
                           // ? "총 " + count+"번 실행함." 구문이 출력가능.
                }

                sum += value;
                document.write(count+". "+sum+"<br>");
                count++;
            }
            document.write("총 " + count+"번 실행함.");
        }

        // todo.1 구구단 출력을 함수로 만들기.
        function printGugudan(){
            for(var i = 2; i <= 9; i++){
                document.write(i + "단 출력", "<br>");
                for(var m = 1; m<=9; m++){
                    document.write(i + "*" + m + "=" + (i*m), "<br>");
                }
            }
            document.write("<br>");
        }


        // todo.2 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
        //* 실행구문
        document.write("1 결과 =" + calculator("+", 20, 10)); //? 30
        document.write("2 결과 =" + calculator("-", 20, 10));
        document.write("3 결과 =" + calculator("*", 20, 10));
        document.write("4 결과 =" + calculator("/", 20, 10));
        document.write("5 결과 =" + calculator("%", 20, 10));
        "잘못된 연산자 입니다."

        function calculator(op,numb1,numb2){
            var result = '';
            switch(op){
                case "+" :
                    result = numb1+numb2;
                    break;
                case "-" :
                    result = numb1-numb2;
                    break;
                case "*" :
                    result = numb1*numb2;
                    break;
                case "/" :
                    result = numb1/numb2;
                    break;
                default:
                    result = "잘못된 연산자 입니다.";
                    break;
            }
        }



