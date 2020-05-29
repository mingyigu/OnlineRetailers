function toLogin(){
    location.href="../登入界面/登入界面.html";
}



function register() {
    var input1 = document.getElementById("username");
    var input2 = document.getElementById("password");
    var input3 = document.getElementById("confirmPassword");
    if(input2.value != input3.value) {
        alert("两次密码不一致！");
        input2.value = "";
        input3.value = "";
    }
    else{
        
        var username = input1.value;
        var password = input2.value;
        var massage = {
            type:"register",
            username:username,
            password:password,
        }
        
        //获取用户信息后进行Ajax交互,在服务器端保留用户信息
        var xml = new XMLHttpRequest();
        xml.open("post","url",true);
        xml.setRequestHeader("Content-Type", "application/json");
        xml.send(JSON.stringify(massage));
        xml.onreadyStatechage = function (){
            if(this.readyState == 4) {
                console.log("交互已经完成");
                if(this.status == 200) {
                    var response = this.responseText;
                    if(response == "success") {
                        alert("注册成功");
                        toLogin();
                    }
                    else{
                        alert("该用户已存在");
                    }
                    
                }
            }
        }
    }
}