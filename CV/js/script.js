var cv = {
    init:function(){
        this.stickeyCard();
    },
    stickeyCard:function(){
        let card = document.querySelector('.card');
        let navScroll = document.querySelector('.nav-scroll');
        let stickey = card.offsetTop;
        let widthOfcard = (card.offsetWidth)/10;
        let widthOfNavScroll = (navScroll.offsetWidth)/10;
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset > stickey){
                card.classList.add('stickey')
                navScroll.classList.add('stickey')
                card.style.width = `${widthOfcard}rem`;
                navScroll.style.width = `${widthOfNavScroll}rem`;
            }else{
                card.classList.remove('stickey');
                navScroll.classList.remove('stickey')
            }
        })
    }
}
cv.init();
