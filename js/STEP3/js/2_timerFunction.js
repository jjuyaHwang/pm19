/*
    ? setInterval() : 일정 시간마다 주기적으로 특정 구문을 실행하는 기능.
    ? setTimeout() : 일정 시간이 지난 후 특정 구문을 한번만 실행하는 기능.
    ? clearInterval() : 실행 중인 타이머 함수를 멈추는 기능.
 */

    $(document).ready(function(){
        var $output = $("#output");
        var count = 0;
        var timerID = 0;

        function funcCount(){
            count++;
            $output.text(count);
        }

        timerID = setInterval(funcCount, 1000);

        $("#countStop").click(function(){
            clearInterval(timerID);
            alert("중지되었습니다.");
        })
    });


    function timeout3s(){
        var $output = $("#output");
        setTimeout(function(){
            $output.text('hi');
        },3000);
    }

    // *ex.1-1 1초에 한 번씩 변숫값 1씩 증가. #output 출력. setInterval 사용
    function addCount(){
        var $output = $("#output");
        var count = 0;

        setInterval(function(){
            count ++;
            $output.text(count);
        },1000);
    }