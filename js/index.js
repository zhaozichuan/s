//测试登录
function login() {
    var u_user = document.getElementById("u_name").value;
    var u_password = document.getElementById("u_password").value;
    if((u_user == "admin") && (u_password == "admin888")) {
        alert("登录成功！不作处理！");
    } else {
        alert("用户名或者密码错误，登录失败！");
        location.href = "login.html#pageLogin";
    }
}
//测试注册
function register() {
    var u_user1 = document.getElementById("u_name1").value;
    var u_password1 = document.getElementById("u_password1").value;
    var u_password2 = document.getElementById("u_password2").value;
    if((u_user1 == "root") && (u_password1 == "123456") && (u_password2 == u_password1)) {
        alert("注册成功！返回登录页面！");
        location.href = "index.html#pageLogin";
    } else {
        alert("注册失败，返回登录页面！");
        location.href = "index.html#pageLogin";
    }
}