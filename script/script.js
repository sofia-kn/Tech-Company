const navBtn = document.querySelector('.nav-menu__btn')
const navMenu = document.querySelector('.nav-menu')
const btnLine = document.querySelector('.nav-btn__line')
let navOpen = false;
navBtn.addEventListener('click' , ()=> {
   if(navOpen){
       console.log('close menu');
       navBtn.classList.remove('openBtn')
       navMenu.style.display= 'none'
       
      //  navOpen = false
      navOpen = !navOpen

      }else{
         navBtn.classList.add('openBtn')
         navMenu.style.display= 'block'
         console.log('open menu');
         // navOpen = true
      navOpen = !navOpen
   }
})

// const result = (func , array ) => {
//    return func(array)
//   }
//   const add = (array) => {
//     let final = array.reduce((prev , curr)=>prev + curr)
//     return final
//   }
//   const minus = (array) => {
//     let final = array.reduce((prev , curr)=>prev - curr)
//     return final
//   }
//   const multiply = (array) => {
//     let final = array.reduce((prev , curr)=>prev * curr)
//     return final
//   }
//   const divide = (array) => {
//     let final = array.reduce((prev , curr)=>prev / curr)
//     return final
//   }
  
//   console.log(result(add , [1,2,4,5,6]))
//   console.log(result(minus , [1,2,4,5,6]))
//   console.log(result(multiply , [1,2,4,5,6]))
//   console.log(result(divide , [1,2,4,5,6]))