var button = {
    init:function(){
        this.btnCard();
    },
    btnCard:function() {
        let btnCards = document.querySelectorAll('.card-btn')
        let btnX = document.querySelector('.modal__btn-x')
        let modal = document.querySelector('.modal')
        let overlay= document.querySelector('.overlay')
        btnCards.forEach((btn)=>{
            btn.addEventListener('click',(e)=>{
                e.preventDefault();
                modal.classList.add('active')
                overlay.classList.add('active')
                
            })
        })
        btnX.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.classList.remove('active')
            overlay.classList.remove('active')
        })
        overlay.addEventListener('click',()=>{
            modal.classList.remove('active')
            overlay.classList.remove('active')
        })
    }
}
button.init();