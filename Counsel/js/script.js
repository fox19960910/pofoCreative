var action = {
    init:function() {
        this.btnBar();
    },
    btnBar:function() {
        let bar = document.querySelector('.nav-bar__btn')
        let navResponsive = document.querySelector('.nav-responsive')
        let exitBtn = document.querySelector('.nav-responsive__exit')
        let overlay = document.querySelector('.overlay--bar')
        bar.addEventListener('click',function(){
            navResponsive.classList.add('active')
            overlay.classList.add('active')
        })
        exitBtn.addEventListener('click',()=>{
            navResponsive.classList.remove('active')
            overlay.classList.remove('active')
        })
        overlay.addEventListener('click',()=>{
            navResponsive.classList.remove('active')
            overlay.classList.remove('active')
        })
    }
}
action.init();