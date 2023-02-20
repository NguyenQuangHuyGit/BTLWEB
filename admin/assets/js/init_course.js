const data = {
    courses : [
        {
            id:1,
            name_1:"Become a Nodejs Master and Make Money Fast",
            name_2:"Web Development",
            price: "$50.00",
            user:"100"
        },
        {
            id:2,
            name_1:"Become a Ruby Master and Make Money Fast",
            name_2:"Web Development",
            price: "$50.00",
            user:"150"
        }
    ]
}

window.localStorage.setItem('data_all', JSON.stringify(data));