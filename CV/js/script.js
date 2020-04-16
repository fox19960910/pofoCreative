var cv = {
    init:function(){
        this.stickeyCard();
        this.tabs();
        this.portfolio();
    },
    stickeyCard:function(){
        let card = document.querySelector('.card');
        let navScroll = document.querySelector('.nav-scroll');
        let mainContent = document.querySelector('.main-content');
        let stickey = card.offsetTop;
        console.log(stickey)
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset > stickey){
                card.classList.add('stickey')
                navScroll.classList.add('stickey')
                mainContent.classList.add('stickey')
            }else{
                card.classList.remove('stickey');
                navScroll.classList.remove('stickey')
                mainContent.classList.remove('stickey')
            }
        })
    },

    tabs:function(){
        let tabLinks = document.querySelectorAll('.nav-tab__link')
        let tabContents = document.querySelectorAll('.tab-content')
        console.log(tabLinks)
        tabLinks.forEach((tabLink,index)=>{      
            tabLink.addEventListener('click',(e)=>{
                e.preventDefault();
                tabLinks.forEach((tab)=>{
                    tab.classList.remove('active')
                })
                tabContents.forEach((content)=>{
                    content.classList.remove('active')
                })
                tabLinks[index].classList.add('active')
                tabContents[index].classList.add('active')
            })
           
        })
      
    },
    portfolio:function() {
       
    }
}
cv.init();
