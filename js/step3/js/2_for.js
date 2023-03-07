/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    *실무사용의 예
    *1. 게시판의 게시글 목록 불러올 때
    *2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    *3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    *4. 갤러리의 이미지 목록을 출력 할 때
    *5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    *1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    *3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계


    for (1.초기화식; 2.조건식; 4.증감식){
        3.실헹 문장


        조건식에 대한 범위를 벗어난 거짓판별이나면 for문 종료
    }

*/


//*ex1. 이름을 10번 출력하기.
function namePrint10(){
    var userName = "홍길동";
    for (var i = 1; i <= 10; i+=2){
        document.write(i+"."+userName+"<br>");
    }
}


//todo.1 1 - 10 까지 출력되는 반복문을 직접 짜보기.
//? 10 보다 작을때 (0~9)까지만 반복 수행
//? 1~ 10번 까지 출력
function answer1(){
    for(var i=0; i<10; i++){
        document.write((i+1)+"<br>");
    }
}

//? 110보다 작을때 (100~109)까지만 반복 수행
//? 1~10 번 까지 출력
function answer2(){
    for(var i=100; i<110; i++){
        document.write((i - 99)+"<br>");
    }
}


//? 1보다 크거나 같을때 (10~1)까지만 반복 수행.
//? 1~10번까지 출력
function answer3(){
    for(var i=10; i>=1; i--){
        document.write((11 - i)+"<br>");
    }
}


//todo.2 * 10개가 찍힌 결과를 출력해보기.
function star10(){
    var star = "";
    for(var i=0; i<9; i++){
    // 0,1,2,3,4,5,6,7,8,9
        star+="*";
        
    }
    document.write("result =" + star);
}

//? array(배열) - data들이 저장되는 방. -> ex) ['data'(0), 'data'(1), 'data'(2)];
//? index (배열 안쪽에 있는 순서에 맞는 것을 선택할때), length()
//*ex 4. 자신이 좋아하는 과일 4개를 배열로 배치하고, alert 으로 출력하라.
function faverFluit(){
    var array = ['딸기','사과','바나나','망고'];
    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}


//*ex.5 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function arrayFor(){
    var data = ["변수","형변환","조건문 if", "반복문 while", "조건문 switch", "반복문 for"];
    for (var i = 0; i<data.length; i++){
        document.write((i+1) + " 번째 내용 =" + data[i] + "<br>" );
        // 1번째 내용 = "변수"
        // 2번째 내용 = "형변환"
        // 3번째 내용 = "조건문 if"
    }
}


//*ex.6 역반복 배열
function reverseFavorFluit(){
    var array = ['딸기','사과','바나나','망고'];
    for (var i = array.length-1; i >= 0; i--){
        document.write(array[i]);
    }
}


//*ex.7 break 문
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + "<br>");
    }
}


//? 다중 for
//*ex8 반절 피라미드
function halfPyramid(){
    var star = "";
    for (var i = 1; i <=10; i++){ //?  1~10 까지 수행
        for (var j = 0; j < i; j++){ //? j가 i보다 작을때까지 반복 수행 
            star += "*";//? 변수 star에 생성된 *dmf
        }
        star += '<br>';//? ifor 만큼 <br> 을 변수 star에 넣음.
    
    }
    document.write(star);//? 피라미드 출력.
}

//? '&nbsp;'
//* 피라미드(변수 3개로 작성해보기)
function pyramid(){
    var star = "";
    for (var i = 1; i <= 10; i++){ //? ifor = 1~10 까지 수행
        for (var e = 10; e >= i; e--){ //? efor = 10~1 까지 수행
            star += '&nbsp;'; //? 공백이 10개부터 1개까지 들어감.
        }
        for (var s = 0; s < 2*i-1; s++){ //? sfor = i가 들어올때마다 홀수화 됨.(1,3,5,7,9 ...)
            star += '*';//? 홀수화된 s의 수치만큼 반복해서 *이 들어감
        }
        star += '<br>';//? ifor 만큼 <br> 을 변수 star에 넣음
    }
    document.write(star);
}
