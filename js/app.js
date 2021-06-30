const mainImage =document.querySelectorAll('.main-image');
const hideImage=document.querySelector('.hide-image');
const closeImage=document.querySelector('.close');

mainImage.forEach((singleImage,index)=>{
    singleImage.addEventListener('click', function(){
        document.querySelector('.hidebackground').style.display = 'block';
        hideImage.src=mainImage[index].src;
    })
})
closeImage.addEventListener('click', function(){
    
    document.querySelector('.hidebackground').style.display = 'none';
})