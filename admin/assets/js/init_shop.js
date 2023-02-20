const data = {
    courses : [
        {
            id:1,
            name_1:"./assets/img/shop-1.jpg",
            name_2:"Digital Hand Watch",
            price: "$50.00",
            user:"001"
        },
        {
            id:2,
            name_1:"./assets/img/shop-2.jpg",
            name_2:"Digital Sound Mk",
            price: "$50.00",
            user:"002"
        }
    ]
}

window.localStorage.setItem('data_all', JSON.stringify(data));