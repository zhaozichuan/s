//���Ե�¼
function login() {
    var u_user = document.getElementById("u_name").value;
    var u_password = document.getElementById("u_password").value;
    if((u_user == "admin") && (u_password == "admin888")) {
        alert("��¼�ɹ�����������");
    } else {
        alert("�û�������������󣬵�¼ʧ�ܣ�");
        location.href = "login.html#pageLogin";
    }
}
//����ע��
function register() {
    var u_user1 = document.getElementById("u_name1").value;
    var u_password1 = document.getElementById("u_password1").value;
    var u_password2 = document.getElementById("u_password2").value;
    if((u_user1 == "root") && (u_password1 == "123456") && (u_password2 == u_password1)) {
        alert("ע��ɹ������ص�¼ҳ�棡");
        location.href = "index.html#pageLogin";
    } else {
        alert("ע��ʧ�ܣ����ص�¼ҳ�棡");
        location.href = "index.html#pageLogin";
    }
}