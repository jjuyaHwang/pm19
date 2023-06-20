//todo.1 구구단 숫자를 입력받아 출력하는 while문.
// ? 1. 숫자입력받을 prompt 출력.
// ? 2. 숫자를 입력받으면 해당 구구단을 출력.
// * 9단이내로만 입력받기. ex> 9단이 넘어 갈시 '9단 이하로 입력하세요.'
function gugudan(){
    var guguNumb = window.prompt("구구단숫자를 입력해라(1~9)");
    var i = 1;
    if(guguNumb <= 9){
         while (i <= 9){
            document.write(guguNumb + "x" + i + "=" + guguNumb*i + "<br>");
            i++;
         }
        //  guguNumb + "x" + i + "=" + guguNumb*i + "<br>"

    }else{
        alert("9단 이하로 입력하세요.");
    }
}

//todo.2 end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 