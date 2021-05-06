document.getElementById('btnOne').addEventListener("click",changeBtnOne);
function changeBtnOne(){
    document.getElementById('btnOne').style.color = "red";
}

document.querySelector('#btnTwo').addEventListener("click",changeBtnTwo);
function changeBtnTwo(){
    document.getElementById('btnTwo').textContent = 'new text';
}

document.querySelector('#btnThree').addEventListener("click",changeBtnThree);
function changeBtnThree(){
    document.getElementById('btnThree').style.backgroundColor = '#555';
}