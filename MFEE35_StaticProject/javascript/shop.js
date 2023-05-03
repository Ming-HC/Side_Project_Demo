// topnav.js

// Get the modal
var modal = document.getElementById('id01');
var loginbtnhid = document.getElementById('callid01btn');
var cartface = document.querySelector(".cartmodal");

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
    if (event.target == cartface) {
        cartface.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.querySelector(".carticonnumview").style.display = "none"
        document.querySelector(".carticon").style.display = "none"
    } else {
        x.className = "topnav";
        document.querySelector(".carticonnumview").style.display = "inline-block"
        document.querySelector(".carticon").style.display = "block"
    }
}

function LogInClick() {
    if (loginbtnhid.innerText == "Login") {
        modal.style.display = 'block';
        if (window.innerWidth > 600) {
            loginbtnhid.style.visibility = "hidden";
        }
        if (window.innerWidth <= 600) {
            document.getElementsByClassName("icon")[0].style.visibility = "hidden";
        }
    } else {
        if (confirm("是否登出?")) {
            loginbtnhid.style.backgroundColor = "#333";
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
function CloseCartClick() {
    cartface.style.display = 'none';
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
    if (event.target.className == "seleS") {
        document.querySelector(".modal-content.animate.login").style.display = "none";
        document.querySelector(".seleL").style.backgroundColor = "#fefefe";
        document.querySelector(".seleL").style.color = "black";
        document.querySelector(".modal-content.animate.signup").style.display = "block";
        document.querySelector(".seleS").style.backgroundColor = "rgb(83, 132, 238)";
        document.querySelector(".seleS").style.color = "white";
    }
    if (event.target.className == "seleL" | resetSL == "seleL") {
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
                    loginStat = "";
                }
            } else {
                document.querySelector(".chkres_l").innerText = "User or Password Wrong.";
                loginStat = "";
            }
        } else {
            document.querySelector(".chkres_l").innerText = "Please enter password!";
        }
    }
}
// https://stackoverflow.com/questions/11946530/creating-an-xml-file-using-javascript
// web cant create xml file



var cartnum = 0;
var cartcontent = [[], []];
var targetnum;
function cartplus() {
    targetnum = event.target.parentNode.querySelector(".amount span").innerText;
    targetnum++;
    event.target.parentNode.querySelector(".amount span").innerText = targetnum;
    cartnum++;
    document.querySelector(".carticonnumview span").innerText = cartnum;
    cartcontent[[0]].push(event.target.parentNode.parentNode.parentNode.querySelector(".content div").className);
    cartcontent[[1]].push(cartcontent[[0]].length - 1);
    if (document.querySelector(".carticonnumview span").innerText >= 0) {
        document.querySelector(".carticonnumview").style.visibility = "visible";
    }
}
var target;
var targetindex;
function cartminus() {
    targetnum = event.target.parentNode.querySelector(".amount span").innerText;
    if (targetnum > 0) {
        targetnum--;
        event.target.parentNode.querySelector(".amount span").innerText = targetnum;
    }
    if (cartcontent[[0]].indexOf(event.target.parentNode.parentNode.parentNode.querySelector(".content div").className) > -1) {
        if (document.querySelector(".carticonnumview span").innerText > 1) {
            cartnum--; // ← ↓ shopping cart view
            document.querySelector(".carticonnumview span").innerText = cartnum;
            target = (event.target.parentNode.parentNode.parentNode.querySelector(".content div").className);
            targetindex = cartcontent[[0]].indexOf(target);
            cartcontent[[0]].splice(targetindex, 1);
            cartcontent[[1]].splice(targetindex, 1);
        } else {
            cartnum--;
            document.querySelector(".carticonnumview span").innerText = cartnum;
            document.querySelector(".carticonnumview").style.visibility = "hidden";
            target = (event.target.parentNode.parentNode.parentNode.querySelector(".content div").className);
            targetindex = cartcontent[[0]].indexOf(target);
            cartcontent[[0]].splice(targetindex, 1);
            cartcontent[[1]].splice(targetindex, 1);
        }
    }
}
function cartview() {
    var creatviewcommdityall = "";
    var imgsrc = "";
    var commditycontent, commdityprice = "";
    var tclass = "";
    var cartviewgroup = document.querySelector(".cartviewface");
    if (cartcontent[[0]].length > 3) {
    }
    for (let n = 0; n < cartcontent[[0]].length; n++) {
        imgsrc = document.querySelector(`.${cartcontent[[0]][n]} img`).getAttribute("src");
        commditycontent = document.querySelector(`.${cartcontent[[0]][n]} span`).innerText;
        commdityprice = document.querySelector(`.${cartcontent[0][n]}`).parentNode.parentNode.querySelector(".cardfooter .price span").innerText;
        tclass = document.querySelector(`.${cartcontent[[0]][n]}`);
        var creatviewcommdity = `<div class="cartviewcommdity ${tclass}">
                                        <img src="${imgsrc}">
                                        <span class="commditycontent">${commditycontent}</span>
                                        <span class="commdityprice">${commdityprice}</span>
                                        <div class="cardfooterright">
                                            <div class="fa fa-plus" onclick="cartplus()"></div>
                                            <div class="amount"><span>1</span></div>
                                            <div class="fa fa-minus" onclick="chkminus()"></div>
                                        </div>
                                </div>`
        creatviewcommdityall += creatviewcommdity;
    }
    cartviewgroup.innerHTML = creatviewcommdityall;
    document.querySelector(".cartmodal").style.display = "block";
}
var targetindex;
function chkminus() { /* 刪除後有bug 外面的商品數量要改 停用 */
    var eclass = "";
    if (confirm("確認移除此商品?")) {
        eclass = event.target.parentNode.parentNode.className;
        const eclassArray = eclass.split(" ");
        // eclassArray[1]
        if (document.querySelector(".carticonnumview span").innerText > 1) {
            cartnum--; // ← ↓ shopping cart view
            document.querySelector(".carticonnumview span").innerText = cartnum;
            targetindex = cartcontent[[0]].indexOf(eclassArray[1]);

            cartcontent[[0]].splice(targetindex, 1);
            cartcontent[[1]].splice(targetindex, 1);
            cartview();
        } else {
            cartnum--;
            document.querySelector(".carticonnumview span").innerText = cartnum;
            document.querySelector(".carticonnumview").style.visibility = "hidden";
            targetindex = cartcontent[[0]].indexOf(eclassArray[1]);
            cartcontent[[0]].splice(targetindex, 1);
            cartcontent[[1]].splice(targetindex, 1);
            cartview();
            document.querySelector(".cartviewface").style.display = "none";
            cartface.style.display = "none";
        }
    }
}




var targetid, deltargetid, targetclassindex;
var deltargetid;
var commdityclass = [["aboutpc", "thirdC", "abouthome", "other", "defaule"], [["ssd", "wireless", "tablet", "HDD", "pc", "pc1", "printer", "power", "screen"], ["watch", "phone", "camera", "watch2"], ["thirdC", "dyson"], []]];
var allcardclass = document.querySelectorAll("div.card div.content div");
function selectclass_radio() {
    if (event.target.tagName == "DIV") {
        if (document.getElementsByClassName('selectclass')[0] == undefined) {
            event.target.classList.add('selectclass');
            event.target.querySelectorAll("input")[0].checked = true;
            targetid = document.querySelectorAll(".selectclass input")[0].id;
            seleclass = commdityclass[0].indexOf(targetid);
            if (targetid == "default") {
                for (let i = 0; i < allcardclass.length; i++) {
                    allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                }
            } else {
                i = 0;
                while (i < allcardclass.length) {
                    if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                        allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                    } else {
                        allcardclass[i].parentNode.parentNode.style.display = "none";
                    }
                    i++;
                }
            }
        } else {
            deltargetid = event.target.querySelector("input").id;
            if (deltargetid != targetid) {
                document.querySelectorAll(".selectclass input")[0].checked = false;
                document.getElementsByClassName('selectclass')[0].classList = '';
                event.target.classList.add('selectclass');
                document.querySelectorAll(".selectclass input")[0].checked = true;
                targetid = document.querySelectorAll(".selectclass input")[0].id;
                seleclass = commdityclass[0].indexOf(targetid);
                if (targetid == "default") {
                    for (let i = 0; i < allcardclass.length; i++) {
                        allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                    }
                } else {
                    i = 0;
                    while (i < allcardclass.length) {
                        if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                            allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                        } else {
                            allcardclass[i].parentNode.parentNode.style.display = "none";
                        }
                        i++;
                    }
                }
            } else {
                document.querySelectorAll(".selectclass input")[0].checked = false;
                document.getElementsByClassName('selectclass')[0].classList = '';
                for (let i = 0; i < allcardclass.length; i++) {
                    allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                }
            }
        }
    }
    if (event.target.tagName == "INPUT") {
        if (document.getElementsByClassName('selectclass')[0] == undefined) {
            targetid = event.target.id;
            seleclass = commdityclass[0].indexOf(targetid);
            if (seleclass > -1) {
                if (targetid == "default") {
                    for (let i = 0; i < allcardclass.length; i++) {
                        allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                    }
                } else {
                    i = 0;
                    while (i < allcardclass.length) {
                        if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                            allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                        } else {
                            allcardclass[i].parentNode.parentNode.style.display = "none";
                        }
                        i++;
                    }
                }
                event.target.parentNode.classList.add('selectclass');
            }
        } else {
            deltargetid = event.target.id;
            if (deltargetid != targetid) {
                document.querySelector(".selectclass").className = "";
                event.target.parentNode.classList.add('selectclass');
                targetid = deltargetid;
                if (seleclass > -1) {
                    seleclass = commdityclass[0].indexOf(targetid);
                    if (targetid == "default") {
                        for (let i = 0; i < allcardclass.length; i++) {
                            allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                        }
                    } else {
                        i = 0;
                        while (i < allcardclass.length) {
                            if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                                allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                            } else {
                                allcardclass[i].parentNode.parentNode.style.display = "none";
                            }
                            i++;
                        }
                    }
                }
            } else {
                document.querySelector(".selectclass input").checked = false;
                document.querySelector(".selectclass").className = "";
                for (let i = 0; i < allcardclass.length; i++) {
                    allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                }
            }
        }
    }
    if (event.target.tagName == "LABEL") {
        if (document.getElementsByClassName('selectclass')[0] == undefined) {
            targetid = event.target.parentNode.querySelector("input").id;
            seleclass = commdityclass[0].indexOf(targetid);
            if (seleclass > -1) {
                if (targetid == "default") {
                    for (let i = 0; i < allcardclass.length; i++) {
                        allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                    }
                } else {
                    i = 0;
                    while (i < allcardclass.length) {
                        if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                            allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                        } else {
                            allcardclass[i].parentNode.parentNode.style.display = "none";
                        }
                        i++;
                    }
                }
                event.target.parentNode.querySelector("input").checked = true;
                event.target.parentNode.classList.add('selectclass');
            }
        } else {
            deltargetid = event.target.parentNode.querySelector("input").id;
            if (deltargetid != targetid) {
                document.querySelectorAll(".selectclass input")[0].checked = false;
                document.getElementsByClassName('selectclass')[0].classList = '';
                event.target.parentNode.classList.add('selectclass');
                document.querySelectorAll(".selectclass input")[0].checked = true;
                targetid = document.querySelectorAll(".selectclass input")[0].id;
                seleclass = commdityclass[0].indexOf(targetid);
                if (seleclass > -1) {
                    if (targetid == "default") {
                        for (let i = 0; i < allcardclass.length; i++) {
                            allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                        }
                    } else {
                        i = 0;
                        while (i < allcardclass.length) {
                            if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                                allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                            } else {
                                allcardclass[i].parentNode.parentNode.style.display = "none";
                            }
                            i++;
                        }
                    }
                }
            } else {
                document.querySelectorAll(".selectclass input")[0].checked = false;
                document.getElementsByClassName('selectclass')[0].classList = '';
                for (let i = 0; i < allcardclass.length; i++) {
                    allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                }
            }
        }
    }
}

allcard = document.querySelectorAll(".card");
allcheckbox = document.querySelectorAll("input[type='checkbox']");
function selectclass_checkbox() {
    if (event.target.tagName == "DIV") {
        if (document.getElementsByClassName('multiplechecked')[0] == undefined) {
            event.target.classList.add("multiplechecked");
            event.target.querySelector("input").checked = true;
            targetid = event.target.querySelector("input").id;
            seleclass = commdityclass[0].indexOf(targetid);
            if (targetid == "default") {
                for (let i = 0; i < allcardclass.length; i++) {
                    if (getComputedStyle(allcard[i]).display == "inline-block") {
                        allcard[i].style.display = "inline-block";
                    }
                }
                for (let o = 0; o < allcheckbox.length; o++) {
                    allcheckbox[o].checked = true;
                }
            } else {
                i = 0;
                while (i < allcardclass.length) {
                    if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                        allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                    } else {
                        allcardclass[i].parentNode.parentNode.style.display = "none";
                    }
                    i++;
                }
            }
        } else {
            deltargetid = event.target.querySelector("input").id;
            if (deltargetid != targetid) {
            } else {
                document.querySelector(".mult input").checked = false;
                document.getElementsByClassName('selectclass')[0].classList = '';
                for (let i = 0; i < allcardclass.length; i++) {
                    allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                }
            }
        }
        if (event.target.tagName == "INPUT") {
            if (document.getElementsByClassName('multiplechecked')[0] == undefined) {




                if (getComputedStyle(document.querySelector(".card")).display == "inline-block") {

                }
            }
        }
        if (event.target.tagName == "LABEL") {
            if (document.getElementsByClassName('multiplechecked')[0] == undefined) {




                if (getComputedStyle(document.querySelector(".card")).display == "inline-block") {

                }
            }
        }
    }
}

    var t;
    function searchcontent() {
        if (event.target.value != "") {
            for (let i = 0; i < allcardclass.length; i++) {
                if (getComputedStyle(allcardclass[i].parentNode.parentNode).display == "inline-block") {
                    if (allcardclass[i].querySelector("span").innerText.indexOf(event.target.value) == -1) {
                        allcardclass[i].parentNode.parentNode.style.display = "none";
                    } else {
                        t = 1;
                    }
                }
                if (t == undefined) {
                    document.querySelector(".searchdivdiv span").innerText = `找不到符合搜尋字詞「${event.target.value}」的商品`;
                }
            }
        } else {
            document.querySelector(".searchdivdiv span").innerText = "";
            if (document.getElementsByClassName('selectclass')[0] == undefined) {
                for (let i = 0; i < allcardclass.length; i++) {
                    allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                }
            } else {
                targetid = document.querySelector(".selectclass input").id;
                seleclass = commdityclass[0].indexOf(targetid);
                if (seleclass > -1) {
                    if (targetid == "default") {
                        for (let i = 0; i < allcardclass.length; i++) {
                            allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                        }
                    } else {
                        i = 0;
                        while (i < allcardclass.length) {
                            if (commdityclass[1][seleclass].indexOf(allcardclass[i].className) > -1) {
                                allcardclass[i].parentNode.parentNode.style.display = "inline-block";
                            } else {
                                allcardclass[i].parentNode.parentNode.style.display = "none";
                            }
                            i++;
                        }
                    }
                }
            }
        }
    }