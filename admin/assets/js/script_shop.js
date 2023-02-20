window.localStorage.setItem('data_all', JSON.stringify(data));


const data_all = JSON.parse(window.localStorage.getItem('data_all'));

id = localStorage.length;
console.log(id)
userForm.id.value = id;

function delete_user(obj){
    row = obj.parentElement.parentElement;
    id = row.firstElementChild.innerHTML;
    localStorage.removeItem(id);
    row.remove();
}

function edit_user(obj) {
    row = obj.parentElement.parentElement.children;
    userForm.id.value = row[0].innerHTML;
    userForm.name_1.value = row[1].innerHTML;
    userForm.name_2.value = row[2].innerHTML;
    userForm.price.value = row[3].innerHTML;
    userForm.user.value = row[4].innerHTML;
}

function update_user() {
    formInput()
    var id = userForm.id.value;
    var username_1 = userForm.name_1.value;
    var username_2 = userForm.name_2.value;
    var price_1 = userForm.price.value;
    var user_1 = userForm.user.value;
    course = {
        id: id,
        name_1: username_1,
        name_2: username_2,
        price: price_1,
        user: user_1
    };
    localStorage.setItem(id, JSON.stringify(course));
    read_data();
}

function delete_all(){
    localStorage.clear();
    tbody.innerHTML = null;
}

function formInput(){
    var form = document.getElementById('form-admin')
    form.style.display = 'block'
    var button = document.getElementById('create')
    button.style.display = 'block'
    var button2 = document.getElementById('createForm')
    button2.style.display = 'none'
}

function create_user() {
    event.preventDefault();
    var username1 = userForm.name_1.value;
    var username2 = userForm.name_2.value;
    var price11 = userForm.price.value;
    var user11 = userForm.user.value;

    user = {
        id: id,
        name_1: username1,
        name_2: username2,
        price: price11,
        user: user11
    };

    tbody = document.getElementById("data");
    row = tbody.insertRow(-1);

    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell5 = row.insertCell(5);
    cell6 = row.insertCell(6);

    cell0.innerHTML = id;
    cell1.innerHTML = username1;
    cell2.innerHTML = username2;
    cell3.innerHTML = price11;
    cell4.innerHTML = user11;
    cell5.innerHTML = '<i class="fas fa-edit"></i>';
    cell6.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    localStorage.setItem(id, JSON.stringify(data_all));
    id++;
    userForm.id.value = id;

    userForm.name_1.value = null;
    userForm.name_2.value = null;
    userForm.price.value = null;
    userForm.user.value = null;
}


function read_data(obj) {
    tbody = document.getElementById("data");
    tbody.innerHTML = null;

    console.log(data_all.courses[0]);
    for (i = 0; i < data_all.courses.length; i++) {
        row = tbody.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);
        cell6 = row.insertCell(6);

        cell0.innerHTML = data_all.courses[i].id;
        cell1.innerHTML = `<img src="${data_all.courses[i].name_1}" alt="">`;
        cell2.innerHTML = data_all.courses[i].name_2;
        cell3.innerHTML = data_all.courses[i].price;
        cell4.innerHTML = data_all.courses[i].user;
        cell5.innerHTML = `<span onclick="edit_user(this)"><i class="fas fa-edit"></i><span>`;
        cell6.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    }

}