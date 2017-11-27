// Q. 모든 타이틀 들을 내가 원하는 이름으로 바꾸기
// (버튼을 눌렀을 때)
// 1. 버튼이 눌린다.
    // 1.1 버튼의 내용을 가져온다.
    // 1-2 버튼에 onclickListener를 달아준다.
    // 1-3 버튼을 눌렀을 때 메소드를 실행시킨다.
// 2. 타이틀에 해당하는 html element들을 가져온다.(변수에 담기)
// 3. 각각을 순환하며 내용을 바꾼다.

// 자바스크립트로 HTML내용문 가지고 오기
// document.getElementById(ID명);
// document.getElementsByClassName(클래스명);
// document.getelementByTagName(Tag명);
// document.querySelectorAll(css Selector)



function 함수이름 (파라미터) {
        
}
// 선언되지않은 경우에도 이름을 미리 알 수 있다. 
// 선언되지않은 상태에서는 오류가 난다.
var 함수이름 = function(파라미터){
    
}

function setTitle(){
    var titles = document.getElementsByClassName("title")
    for(var i=0; i<titles.length; i++){
        titles[i].innerHTML = "배가 아프다....."
    }
}

var btn = document.getElementById("setTitle")
console.log(btn)
btn.onclick = function(){
    alert("Done");
    setTitle();
}
