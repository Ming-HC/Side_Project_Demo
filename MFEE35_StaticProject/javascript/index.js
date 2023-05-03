// topnav.js

// Get the modal
var modal = document.getElementById('id01');
var loginbtnhid = document.getElementById('callid01btn');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        loginbtnhid.style.visibility = "visible";
        document.getElementById("userName").value = "";
        document.getElementById("psw").value = "";
        document.getElementById("userName_s").value = "";
        document.getElementById("psw_s").value = "";
        document.querySelector(".chkres_l").innerText = "";
        document.querySelector(".userchkres_s").innerText = "";
        document.querySelector(".chkres_s").innerText = "";
        SelectSL("seleL");
        if (window.innerWidth <= 600) {
            document.getElementsByClassName("icon")[0].style.visibility = "visible";
        }
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function LogInClick() {
    if (loginbtnhid.innerText == "Login") {
        modal.style.display = 'block';
        if (window.innerWidth > 600) {
            loginbtnhid.style.visibility = "hidden";
        }
        // if (window.innerWidth <= 600) {
        //     document.getElementsByClassName("icon")[0].style.visibility = "hidden";
        // }
        // 設個登出紐?
    } else {
        if (confirm("是否登出?")) {
            loginbtnhid.style.backgroundColor = "rgb(255, 73, 73)";
            loginbtnhid.style.color = "white";
            loginbtnhid.innerText = "Login";
        }
    }
}
function CloseModalClick() {
    modal.style.display = 'none';
    loginbtnhid.style.visibility = 'visible';
    document.getElementById("userName").value = "";
    document.getElementById("psw").value = "";
    document.getElementById("userName_s").value = "";
    document.getElementById("psw_s").value = "";
    document.querySelector(".chkres_l").innerText = "";
    document.querySelector(".userchkres_s").innerText = "";
    document.querySelector(".chkres_s").innerText = "";
    SelectSL("seleL");
    if (window.innerWidth <= 600) {
        document.getElementsByClassName("icon")[0].style.visibility = "visible";
    }
}
function CancelClick() {
    modal.style.display = 'none';
    loginbtnhid.style.visibility = 'visible';
    document.getElementById("userName").value = "";
    document.getElementById("psw").value = "";
    document.getElementById("userName_s").value = "";
    document.getElementById("psw_s").value = "";
    document.querySelector(".chkres_l").innerText = "";
    document.querySelector(".userchkres_s").innerText = "";
    document.querySelector(".chkres_s").innerText = "";
    SelectSL("seleL");
    if (window.innerWidth <= 600) {
        document.getElementsByClassName("icon")[0].style.visibility = "visible";
    }
}
function SelectSL(resetSL) {
    if (event.target.tagName == "LABEL") {
        targetclass = event.target.parentNode.className;
    } else {
        targetclass = event.target.className;
    }
    if (targetclass == "seleS") {
        document.querySelector(".modal-content.animate.login").style.display = "none";
        document.querySelector(".seleL").style.backgroundColor = "#fefefe";
        document.querySelector(".seleL").style.color = "black";
        document.querySelector(".modal-content.animate.signup").style.display = "block";
        document.querySelector(".seleS").style.backgroundColor = "rgb(83, 132, 238)";
        document.querySelector(".seleS").style.color = "white";
    }
    if (targetclass == "seleL" | resetSL == "seleL") {
        document.querySelector(".modal-content.animate.signup").style.display = "none";
        document.querySelector(".seleS").style.backgroundColor = "#fefefe";
        document.querySelector(".seleS").style.color = "black";
        document.querySelector(".modal-content.animate.login").style.display = "block";
        document.querySelector(".seleL").style.backgroundColor = "rgb(83, 132, 238)";
        document.querySelector(".seleL").style.color = "white";
    }
}

function chkuser() {
    var contentU = document.querySelector("#userName_s").value;
    var user = [contentU];
    var userchkStat = "y";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            userchkres(this, user, userchkStat);
        }
    };
    xhttp.open("GET", "../db/user.xml", true);
    xhttp.send();
}

function SignupChk() {
    var contentU = document.querySelector("#userName_s").value;
    var contentP = document.querySelector("#psw_s").value;
    var user = [contentU, contentP];
    var signupStat = "y";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            userchkres(this, user, "", signupStat);
        }
    };
    xhttp.open("GET", "../db/user.xml", true);
    xhttp.send();
}

function LoginChk() {
    var contentU = document.querySelector("#userName").value;
    var contentP = document.querySelector("#psw").value;
    var user = [contentU, contentP];
    var loginchkStat = "y";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            userchkres(this, user, "", "", loginchkStat);
        }
    };
    xhttp.open("GET", "../db/user.xml", true);
    xhttp.send();
}
// userchkres 分為註冊頁和登入頁 註冊頁的會提示能否用 登入頁不顯示
function userchkres(xml, user, userchkStat, signupStat, loginStat) {
    var xmlDoc = xml.responseXML;
    var userNode = xmlDoc.getElementsByTagName('userName');
    var pswNode = xmlDoc.getElementsByTagName('password');
    var contentU = user[0];
    var contentP = user[1];
    var target = [];
    var targetpsw = [];
    // Usercheck
    if (userchkStat == "y") {
        for (let o = 0; o < userNode.length; o++) {
            target[o] = userNode[o].childNodes[0].nodeValue;
        }
        if (contentU) {
            if (target.indexOf(contentU) == -1) {
                document.querySelector(".userchkres_s").innerText = "user can use.";
                userchkStat = "";
            } else {
                document.querySelector(".userchkres_s").innerText = "user can't use.";
                userchkStat = "";
            }
        } else {
            document.querySelector(".userchkres_s").innerText = "Please enter Userame.";
        }
    }
    //Signup Check
    if (signupStat == "y") {
        if (contentU && contentP) {
            for (let o = 0; o < userNode.length; o++) {
                target[o] = userNode[o].childNodes[0].nodeValue;

            }
            if (target.indexOf(contentU) > -1) {
                document.querySelector(".chkres_s").innerText = "Username is already registered";
            } else {
                document.getElementById("userName_s").vlaue = "";
                document.getElementById("psw_s").vlaue = "";
                document.querySelector(".chkres_s").innerText = "註冊功能暫未開放";
            }
        } else {
            document.querySelector(".chkres_s").innerText = "Please enter Username and Password!";
        }
    }
    //Login Check
    if (loginStat == "y") {
        if (contentP) {
            for (let o = 0; o < userNode.length; o++) {
                target[o] = userNode[o].childNodes[0].nodeValue;
            }
            for (let o = 0; o < pswNode.length; o++) {
                targetpsw[o] = pswNode[o].childNodes[0].nodeValue;
            }
            if (target.indexOf(contentU) > -1) {
                if (target[target.indexOf(contentU)] == contentU && targetpsw[target.indexOf(contentU)] == contentP) {
                    // document.getElementById("userName").style.backgroundColor = "red";
                    // document.getElementById("userName").style.backgroundColor = "";
                    document.getElementById("userName").value = "";
                    document.getElementById("psw").value = "";
                    document.querySelector(".chkres_l").innerText = "";
                    modal.style.display = "none";
                    loginbtnhid.style.visibility = "visible";
                    loginbtnhid.style.backgroundColor = "green";
                    loginbtnhid.innerText = contentU;
                    loginStat = "";
                } else {
                    document.querySelector(".chkres_l").innerText = "User or Password Wrong.";
                    // alert("User or Password Wrong");
                    loginStat = "";
                }
            } else {
                // alert("User or Password Wrong");
                document.querySelector(".chkres_l").innerText = "User or Password Wrong.";
                loginStat = "";
            }
        } else {
            document.querySelector(".chkres_l").innerText = "Please enter password!";
            // alert("Please enter password!");
        }
    }
}
// https://stackoverflow.com/questions/11946530/creating-an-xml-file-using-javascript
// web cant create xml file

var targetscroll, prevtargetscroll;
document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-next")
var nextnum = getComputedStyle(document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-next")).right;
var prevnum = getComputedStyle(document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-prev")).left;
function limitIscroll() {
    if (event.target.className.indexOf("next") > -1) {
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-next").style.right = nextnum;
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-prev").style.left = prevnum;
        if (window.innerWidth > 560) {
            document.querySelector(".contentdivcontent").scrollBy({ behavior: 'smooth', left: 300 });
        } else {
            console.log("here");
            document.querySelector(".contentdivcontent").scrollBy({ behavior: 'smooth', left: 100 });
        }
        targetscroll = document.querySelector(".contentdivcontent").scrollLeft;
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-next").style.right = (Number(nextnum.split("px")[0]) - targetscroll) + "px";
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-prev").style.left = (Number(prevnum.split("px")[0]) + targetscroll) + "px";
    }
    if (event.target.className.indexOf("prev") > -1) {
        if (screen.width > 560) {
            document.querySelector(".contentdivcontent").scrollBy({ behavior: 'smooth', left: -300 });
        } else {
            document.querySelector(".contentdivcontent").scrollBy({ behavior: 'smooth', left: -100 });
        }
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-next").style.right = nextnum;
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-prev").style.left = prevnum;
        targetscroll = document.querySelector(".contentdivcontent").scrollLeft;
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-next").style.right = (Number(nextnum.split("px")[0]) - targetscroll) + "px";
        document.querySelector(".contentdivlimitTime .contentdivcontent .carousel-control-prev").style.left = (Number(prevnum.split("px")[0]) + targetscroll) + "px";
    }
}

var d = new Date();
var limitd = new Date(2023, d.getMonth(), d.getDate() + 1);
var limitT;

var limitInterval = setInterval("limitTime()", 1000);
function limitTime() {
    d = new Date();
    limitd = new Date(2023, d.getMonth(), d.getDate() + 1);
    var limitT = limitd - d;
    var limitH = limitT / 60 / 60 / 1000;
    var limitM = (limitH - Math.trunc(limitH)) * 60;
    var limitS = (limitM - Math.trunc(limitM)) * 60;
    document.querySelector(".limitH").innerText = Math.floor(limitH).toString().padStart(2, "0");
    document.querySelector(".limitM").innerText = Math.floor(limitM).toString().padStart(2, "0");
    document.querySelector(".limitS").innerText = Math.floor(limitS).toString().padStart(2, "0");
}