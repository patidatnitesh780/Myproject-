const body = document.querySelector('body'); 
const colors = document.querySelectorAll('.color'); 

    colors.forEach((color) => {
        color.style.backgroundColor = color.id;
        console.log(color.id);
        
    });

colors.forEach((color)=>{
    color.addEventListener('click',()=>{
        body.style.backgroundColor = color.getAttribute('id')
    })
})
