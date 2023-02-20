function checkEmail() {
    let txtEmail = document.getElementById('email')
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2})+$/
    if (emailRegex.test(txtEmail.value)) {
        return true
    }
    return false
}

function checkUserID() {
    let userID = document.getElementById('username')
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/
    if (userIDRegex.test(userID.value)) {
        return true
    }
    return false
}

function checkPassword() {
    let txtPassword = document.getElementById('pass')
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/
    if (passwordRegex.test(txtPassword.value)) {
        return true
    }
    return false
}

function checkFirstname() {
    let txtName = document.getElementById('first-name')
    let nameRegex = /^[a-zA-Z]+$/
    if (nameRegex.test(txtName.value)) {
        return true
    }
    return false
}

function checkLastname() {
    let txtName = document.getElementById('last-name')
    let nameRegex = /^[a-zA-Z]+$/
    if (nameRegex.test(txtName.value)) {
        return true
    }
    return false
}

function checkComfirmPass() {
    let txtPassword = document.getElementById('pass')
    let comPass = document.getElementById('pass1')
    if (comPass.value == txtPassword.value){
        return true
    }
    return false
}

let register = document.getElementById('btnRegister')
register.addEventListener('click', function (e) {
    e.preventDefault()

    let statusOfUserID = document.getElementById('statusOfUserID')
    if (checkUserID() == true) {
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    } else {
        statusOfUserID.textContent = 'UserID không hợp hợp lệ. Độ dài từ 5-12'
        statusOfUserID.style.color = 'red'
    }

    let statusOfComfirmPass = document.getElementById('statusOfComfirmPass')
    if (checkComfirmPass() == true) {
        statusOfComfirmPass.textContent = 'Password trùng khớp'
        statusOfComfirmPass.style.color = 'blue'
    } else {
        statusOfComfirmPass.textContent = 'Password không trùng khớp'
        statusOfComfirmPass.style.color = 'red'
    }

    let statusOfName = document.getElementById('statusOfFirstname')
    if (checkFirstname() == true) {
        statusOfName.textContent = 'Firstname hợp lệ'
        statusOfName.style.color = 'blue'
    } else {
        statusOfName.textContent = 'Fisrtname không hợp hợp lệ.'
        statusOfName.style.color = 'red'
    }

    let statusOfName1 = document.getElementById('statusOfLastname')
    if (checkLastname() == true) {
        statusOfName1.textContent = 'Lastname hợp lệ'
        statusOfName1.style.color = 'blue'
    } else {
        statusOfName1.textContent = 'Lastname không hợp hợp lệ.'
        statusOfName1.style.color = 'red'
    }

    // Password
    let statusOfPassword = document.getElementById('statusOfPassword')
    if (checkPassword() == true) {
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    } else {
        statusOfPassword.textContent = 'Password không hợp hợp lệ. Độ dài từ 7-12'
        statusOfPassword.style.color = 'red'
    }

    // Email
    let statusOfEmail = document.getElementById('statusOfEmail')
    if (checkEmail() == true) {
        statusOfEmail.textContent = 'Email hợp lệ'
        statusOfEmail.style.color = 'blue'
    } else {
        statusOfEmail.textContent = 'Email không hợp hợp lệ.'
        statusOfEmail.style.color = 'red'
    }


})