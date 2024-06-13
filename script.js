const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('loginMessage');
let uuid = document.getElementById("uid");
var idi;

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  
    fetch("https://script.google.com/macros/s/AKfycbwVFt0KydBb06eWdHXkyKV7fXX1Wnjo2BDtnh-5knaFC9cYWLwqXBf52vuC3p-wUu9T/exec").then(function(response){
        return response.json();
    }).then(function(data){//取得資料,把資料呈現到前端
        let result=document.querySelector("#result");
        //result.innerHTML"";
        for (let i=0;i<data.length;i++){
            let product=data[i].id;
            if(username==data[i].帳號 && password==data[i].密碼){
                loginMessage.textContent = '登入成功!';
                uuid.textContent='id:'+data[i].id.toString();
                idi = i;
                console.log(idi)
                break;}
            else{loginMessage.textContent = '登入失敗';uuid.textContent='error';}
            //console.log(data[i].帳號,password==data[i].密碼)
        }
    });   
    

});




