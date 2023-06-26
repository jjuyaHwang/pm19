/*
    ? for 문
    * 특정구문을 정해진 횟수만큼 반복해야 할 경우 사용하는 반복문.
    * 실무사용의 예
    * 1. 게시판의 게시글 목록 불러올때
    * 2. 구글 맵, 네이버 맵 등의 정보를 출력할때
    * 3. 메뉴의 항복 출력할 때
    * 4. 갤러리의 이미지 목록을 출력할때
    * 5. os등의 파일 탐색기의 파일 목록 출력할때...
    

    * 루프
    * 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 
    * 3. 참일 경우 이하 구문 실행 4.증감부 실행 5. 2단계
*/

//*exp.1 이름을 10번 출력하기.
function namePrint10(){
    var userName = "jh";
    for(var i = 1; i <= 10; i++){
        document.write(i+"."+userName+"<br>");
    }
}

//*exp.2 이름을 1000번 출력해보기, 1000번 출력중 홀수번째만 나오게 해보기.
function namePrint500(){
    var userName = "jh";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i+"."+userName+"<br>");
    }
}

//todo.1 1 - 10 까지 출력되는 반복문을 직접 짜보자.
//? 10보다 작을때 (0~9) 까지 만 반복 수행  (1~ 10번 까지 출력)
function answer1(){
    for(var i=0; i<10; i++){
        document.write((i+1)+"<br>");
    }
}

//? 10보다 작거나 같을때 (1~10)까지 만 반복 수행 (1~ 10번 까지 출력)
function answer2(){
    for(var i=1; i<=10; i++){
        document.write(i+"<br>");
    }
}

//? 110보다 작을때 (100~109)까지만 반복 수행  (1~ 10번 까지 출력)
function answer3(){
    for(var i=100; i<110; i++){
        document.write((i-99)+"<br>");
    }
}

//todo.2
//? 10보다 작거나 같을때 (1~10)까지 만 반복 수행, 단 루프가 끝난후 i에 2를 더함.(증감부)
//? 1, 3, 5, 7, 9 (증감이 이루어 지지 않은 iteration)
//? 2, 4, 6, 8, 10 (증감이 이루어 진 이후 iteration)
function answer4(){
    for(var i=1; i<=10; i+=2){
        document.write(i+"<br>");
        document.write((i+1)+"<br>");
    }
}

//? 1보다 크거나 같을때 (10~1)까지 만 반복 수행. (1~ 10번 까지 출력)
function answer5(){
    for(var i=10; i>=1; i--){
        document.write((11-i)+"<br>");
    }
}


//*ex.4 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하라.
function favorFluit(){
    // ? 배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다.
    //? 자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함하고 있다.
    //? 배열(array) []  대괄호안에 배치해준다.
    var array = ['망고' , '사과', '바나나', '복숭아'];
    //! ex> ['data(0)','data(1)','data(2)','data(3)'];
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}

//*exp.5 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
//* 변수, 연산자, 형변환, 조건문 if, 조건문 switch, 반복문 for, 반복문 while
//* document 에 (i 번째 내용 = array) 로 출력해보기.  
function arrayForES6(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 for", "반복문 while"]
    for(var i=0; i < data.length; i++){
        document.write(i + "번쨰 내용 =" + data[i] + "<br>");
    }
}

//*exp.6 역반복 배열
function reverseFavorFluit(){
    var array = ['망고' , '사과', '바나나', '복숭아'];

    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i]);
    }
}

//*exp.7 continue문
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue; //? 위 조건이 참일 지라도 continue가 존재하면, continue이하 구문은 실행 되지않는다.
        document.write(i+"<br>"); //? vscode 에서는 불투명하게 시각화해서 보여준다.
    }
    document.write("최종 i = "+ i + "<br>"); //? 최종적으로 변경된 i의 수치(11)만 출력된다.
}

//*exp.8 break문
function forBreak(){
    for(var i =1; i <=10; i++){
        break; //? 위 조건이 참일 지라도 break가 존재하면, 반복루프에서 강제로 빠져나오게 된다.
        document.write(i+"<br>"); //? vscode 에서는 불투명하게 시각화해서 보여준다.
    }
    document.write("최종 i = " + i + "<br>"); //? 루프가 실행되지않아, i = 1로 출력된다.
}

// todo.3 반절피라미드 만들어보기
function halfPyramid(){
    var star = "";
    for(var i = 1; i <= 10; i++){ //? ifor = 1~10까지 수행
        for(var j = 0; j < i; j++){ //? jfor =  j가 i보다 작을때까지 반복 수행 (*,**,***,****,.......)
            star += "*";
        }
        star += "<br>"; //? ifor만큼 <br> 을 변수 star에 넣음
    }
    document.write(star); //? 반절피라미드 출력
}

//todo.4 역반절피라미드 만들어보기
function reverseHalfPyramid(){
    var star = "";
    for(var i = 10; i>=1; i--){ //? ifor = 10~1까지 수행
        for(var j = 0; j < i; j++){ //? jfor = j가 i 보다 작을떄까지 반복수행 (10,9,8,7,6,.....)
            star += "*"; //? 변수 star에 반복생성된 만큼 *을 넣어줌.
        }
        star+="<br>"; //? ifor만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);
}

//todo.5 피라미드 ("&nbsp;") 공백
function pyramid(){
    var star = '';
    for(var i = 1; i<=10; i++){ //? ifor = 1~10 까지 수행
        for(var e = 10; e >= i; e--){ //? efor = 10~1까지 수행
            star += '&nbsp;';
        }
        for(var s = 0; s < 2*i-1; s++){ //? sfor = i가 들어올떄마다 홀수화 됨.(1,3,5,7,9,11,13,15,17,19)
            star += "*"; //? 홀수화 된 s의 수치만큼ㅁ 반복해서 *이 들어감.
        }

        star += '<br>' //? ifor만큼 <br> 을 변수 star에 넣음
    }
    document.write(star);
}


//todo.1 구구단 숫자를 입력받아 출력하는 for문.
function gugudan(){
    var guguNumb = prompt("구구단숫자를 입력하시오.");
    for(var i=1; i<=9; i++){
    document.write(guguNumb + "x" + i + "=" + guguNumb*i + "<br>");}
}


// todo.2 배열의 총 합을 구하기. var data = [10,20,30,40,50];
function arraySum(){
    var data = [10,20,30,40,50];
    var result = 0;
    for(var i=0; i<data.length; i++){
        result += data[i];

    }
    document.write('해당 배열의 총합은 = ' + result);
}