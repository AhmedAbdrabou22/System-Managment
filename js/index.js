$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:false,
            loop:false
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:10,
            nav:false,
            loop:false
        }
    }
})

// console.log('hello');


let inputs = document.querySelectorAll('.s')
let card_product = document.querySelector('.card_product')
let check = document.querySelectorAll('.check')
let selected = document.getElementById('selected')

check.forEach((checkEle)=>{
    checkEle.addEventListener('click',()=>{
        checkEle.parentElement.classList.toggle('a')
        let checkedElm = document.querySelectorAll('.a')
        if(checkedElm.length >=1){
            selected.style.display = 'block'
        }else{
            selected.style.display = 'none'
        }
        selected.addEventListener('click',()=>{
            checkedElm.forEach((ele)=>{
                if(ele.classList.contains('a')){
                    ele.remove();
                }
                selected.style.display='none';
            })
        })
        if(checkedElm.length===0){
            selected.style.display = 'none'
        }
    })
})








// check.addEventListener('click',()=>{
//     selected.style.display = 'block'
//     check.parentElement.classList.add('checked')
//     console.log(check.parentElement);
// })
// selected.addEventListener('click',()=>{
//     let checked = document.querySelectorAll('.checked')
//     checked.forEach((checkedElement)=>{
//         if(checkedElement.classList.contains('checked')){
//             checkedElement.remove()
//         }
//     })
// })
