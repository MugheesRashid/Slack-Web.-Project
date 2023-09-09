console.log("check 1 2 3")

let stick1 = document.querySelectorAll('ul li a');
let stick2 = document.querySelectorAll('nav .navitems ul li a i');
let stick3 = document.querySelector('.logo p');
let stick4 = document.querySelector('.search-icon i');
let stick5 = document.querySelector('.signin a');
let stick6 = document.querySelector('.btn1');
let stick7 = document.querySelector('.btn2');
let nav = document.querySelector('nav');
console.log(stick1.innerHTML = "lol")

window.addEventListener('scroll', function stickness(){
  let x = scrollY;
  console.log(x)
  if (x > 338) { //338
    nav.classList.add('sticky');

  stick1.forEach(function(s1){
        s1.classList.add('clrdark');
      s1.style.fontWeight = '700;'
  });
    stick2.forEach(function(s2){
        s2.classList.add('clrdark');
  })
    stick3.classList.add('clrdark');
    stick4.classList.add('clrdark');
    stick5.classList.add('clrdark');
    stick6.classList.add('mix-blend1');
    stick7.classList.add('mix-blend2');
}
  else{
        nav.classList.remove('sticky');
  
  stick1.forEach(function(s1){
              s1.classList.remove('clrdark');
            s1.style.fontWeight = '500;'
        });
          stick2.forEach(function(s2){
              s2.classList.remove('clrdark');
        })
          stick3.classList.remove('clrdark');
          stick4.classList.remove('clrdark');
          stick5.classList.remove('clrdark');
          stick6.classList.remove('mix-blend1');
          stick7.classList.remove('mix-blend2');
  
    }
})




