const menuBtn = document.querySelector('.menuBtn');
const menuContent = document.querySelector('.menuContent');
const menus = document.querySelector('.menus');
menuBtn.onclick = () =>{
    menuBtn.classList.toggle("active-menu");
    menuContent.classList.toggle('active-menu');
    menus.classList.toggle('active-menu')
}

// about container start 


const itemsContainer = document.querySelector(".aboutFilterContainer");

itemsContainer.onclick = (e) =>{
    const attributes = e.target.getAttribute('data-filter');
    
    if(attributes == "experience"){
         document.querySelector('.experience').classList.add('activeItemEx');
        document.querySelector('.education').classList.remove('activeEdu');
        document.querySelector('.skills').classList.add('hide');
    }
    if(attributes == 'education'){
        document.querySelector('.experience').classList.remove('activeItemEx');
         document.querySelector('.education').classList.add('activeEdu');
        document.querySelector('.skills').classList.add('hide');
    }
    if(attributes == 'skills'){
        document.querySelector('.experience').classList.remove('activeItemEx');
         document.querySelector('.education').classList.remove('activeEdu');
        document.querySelector('.skills').classList.remove('hide');
    }
}

// about container end

// preloader section 

for(let i =0; i < 3; i++){
    const div = document.createElement('div');
    const append = document.querySelector('.preloader');
    append.appendChild(div);
    div.setAttribute('class', 'load')
}

let preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.style.display= "none"
})