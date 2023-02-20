var contentFour = document.getElementById('question-1-h2')
var contentFourH3 = document.getElementById('question-1-h3')

var contentFour_2 = document.getElementById('question-2-h2')
var contentFourH3_2 = document.getElementById('question-2-h3')

var contentFour_3 = document.getElementById('question-3-h2')
var contentFourH3_3 = document.getElementById('question-3-h3')

var contentFour_4 = document.getElementById('question-4-h2')
var contentFourH3_4 = document.getElementById('question-4-h3')

contentFour.addEventListener('click', function(){
    contentFourH3.style.display='block'
    contentFour.style.backgroundColor = '#ff5421'
    contentFour.style.color='#fff'
    contentFour.addEventListener('click',function(){
        contentFourH3.style.display='none'
        contentFour.style.backgroundColor = '#fff'
        contentFour.style.color='#000'
        contentFour.addEventListener('click',function(){
            contentFourH3.style.display='block'
            contentFour.style.backgroundColor = '#ff5421'
            contentFour.style.color='#fff'
            contentFour.addEventListener('click',function(){
                contentFourH3.style.display='none'
                contentFour.style.backgroundColor = '#fff'
                contentFour.style.color='#000'
            })
        })
    })
})

contentFour_2.addEventListener('click', function(){
    contentFourH3_2.style.display='block'
    contentFour_2.style.backgroundColor = '#ff5421'
    contentFour_2.style.color='#fff'
    contentFour_2.addEventListener('click',function(){
        contentFourH3_2.style.display='none'
        contentFour_2.style.backgroundColor = '#fff'
        contentFour_2.style.color='#000'
        contentFour_2.addEventListener('click',function(){
            contentFourH3_2.style.display='block'
            contentFour_2.style.backgroundColor = '#ff5421'
            contentFour_2.style.color='#fff'
            contentFour_2.addEventListener('click',function(){
                contentFourH3_2.style.display='none'
                contentFour_2.style.backgroundColor = '#fff'
                contentFour_2.style.color='#000'
            })
        })
    })
})

contentFour_3.addEventListener('click', function(){
    contentFourH3_3.style.display='block'
    contentFour_3.style.backgroundColor = '#ff5421'
    contentFour_3.style.color='#fff'
    contentFour_3.addEventListener('click',function(){
        contentFourH3_3.style.display='none'
        contentFour_3.style.backgroundColor = '#fff'
        contentFour_3.style.color='#000'
        contentFour_3.addEventListener('click',function(){
            contentFourH3_3.style.display='block'
            contentFour_3.style.backgroundColor = '#ff5421'
            contentFour_3.style.color='#fff'
            contentFour_3.addEventListener('click',function(){
                contentFourH3_3.style.display='none'
                contentFour_3.style.backgroundColor = '#fff'
                contentFour_3.style.color='#000'
            })
        })
    })
})

contentFour_4.addEventListener('click', function(){
    contentFourH3_4.style.display='block'
    contentFour_4.style.backgroundColor = '#ff5421'
    contentFour_4.style.color='#fff'
    contentFour_4.addEventListener('click',function(){
        contentFourH3_4.style.display='none'
        contentFour_4.style.backgroundColor = '#fff'
        contentFour_4.style.color='#000'
        contentFour_4.addEventListener('click',function(){
            contentFourH3_4.style.display='block'
            contentFour_4.style.backgroundColor = '#ff5421'
            contentFour_4.style.color='#fff'
            contentFour_4.addEventListener('click',function(){
                contentFourH3_4.style.display='none'
                contentFour_4.style.backgroundColor = '#fff'
                contentFour_4.style.color='#000'
            })
        })
    })
})



