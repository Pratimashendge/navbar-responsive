let cl=console.log;

const toggleBtn=document.getElementById('toggleBtn');
const navbar=document.getElementById('navbar');
const onClick= ()=>{
    let navbarclass=navbar.className;
    cl(navbarclass);
    if(navbarclass.includes('active')){
        navbar.classList.remove('active')
    }else{
        navbar.classList.add('active')
    }
}

toggleBtn.addEventListener('click',onClick)

