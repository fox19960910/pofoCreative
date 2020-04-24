var action = {
    init:function() {
        this.preload();
        this.btnBar();
        this.signForm();
        this.fixedMenu();
        this.language();
        this.galleryShow();
    },
    preload:function() {
        let preload = document.querySelector('.preload');
        function load(){
            preload.classList.add('preload__finished');
        }
        setTimeout(load,2000);
    },
    language:function() {
        let flag = document.querySelector('.top-menu__item--language ul')
        let languageBtn = document.querySelector('.top-menu__link');
        languageBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            flag.classList.toggle('active')
        })
    },
    fixedMenu:function() {
        let headMenu = document.querySelector('.header__menu');
        let sticky = headMenu.offsetTop;
        console.log(window.pageYOffset, sticky)
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset > sticky){
           
                headMenu.classList.add('active')
            }
            else{
                headMenu.classList.remove('active')
            }
        })
    },
    btnBar:function() {
        let bar = document.querySelector('.nav-bar')
        let close = document.querySelector('.nav-close')
        let navResponsive = document.querySelector('.nav-responsive')
        bar.addEventListener('click',function(){
            navResponsive.classList.add('active')
        })
        close.addEventListener('click',function(){
            navResponsive.classList.remove('active')
        })

    },
    signForm:function() {
        let overlay = document.querySelector('.overlay')
        let signForm = document.querySelector('.sign-in')
        let topSignIn = document.querySelector('.top-sign-in')
        let close = document.querySelector('.sign-in__close')
        console.log(overlay)
        topSignIn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log(signForm)
            signForm.classList.add('active');
            overlay.classList.add('active');
        })
        overlay.addEventListener('click',()=>{
            signForm.classList.remove('active');
            overlay.classList.remove('active');
        })
        close.addEventListener('click',()=>{
            signForm.classList.remove('active');
            overlay.classList.remove('active');
        })
    },
    sectionGallery:function() {
        let gallery = document.querySelector('.section-gallery');
        let srcImg = document.querySelector('.gallery-img').src;
        console.log(srcImg)
        gallery.style.transition = 'all 0.3s';
        gallery.style.backgroundImage = 'url("'+srcImg+'")';
    },
    galleryShow:function(){
        let gallery = document.querySelector('.section-gallery');
        let bgGallery= document.querySelector('.background-gallery');
        let galleries = document.querySelectorAll('.gallery-img');
        let btnPrev = document.querySelector('.btn-gallery__left');
        let btnNext = document.querySelector('.btn-gallery__right');
        let index = 0;
        console.log(bgGallery)
        // btn slide
        btnNext.addEventListener('click', function() {
            galleryshowNext();
            console.log('next ', index)
        })
        btnPrev.addEventListener('click', function() {
            galleryshowPrev()
            console.log('prev ', index)
        })
        // auto slide
        function galleryshowNext() {
            if(index == galleries.length){
                index = 0;
            }
            galleryshow();
            index++;
            // setTimeout(galleryshow,5000);       
        }
        function galleryshowPrev() {
            if(index < 0){
                index = galleries.length -1;
            }
            galleryshow()
            index--;  
        }
        function galleryshow(){
            for(let i = 0; i < galleries.length; i++) {
                galleries[i].classList.remove('active');
            }
            let srcImg = galleries[index].src
            galleries[index].classList.add('active')
           setTimeout(function(){
            bgGallery.src = srcImg;
           }, 500)
        }
        galleryshowNext();
    }
}
action.init();