const thumbsUp = document.querySelector('.container-icon .icon.one'); 
const like = document.querySelector('.container-icon .icon.two'); 


thumbsUp.addEventListener('click', function(){
    thumbsUp.innerHTML= '<img src="src/icon/thumbsup_2.png" alt="">'; 
    thumbsUp.classList.toggle("thumbsUp"); 
})

like.addEventListener('click', function(){
    like.innerHTML= '<img src="src/icon/heart_2.png" alt="">'; 
    like.classList.toggle("like"); 
})