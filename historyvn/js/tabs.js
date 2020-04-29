var tabs = {
    init:function() {
        this.tabPeriod();

    },
    tabPeriod:function() {
        let tabLinks = document.querySelectorAll('.tab__link');
        let tabContent = document.querySelectorAll('.tab__content');

        
        // click show tab.
        tabLinks.forEach((link,index)=>{
            link.addEventListener('click',(e)=>{
                e.preventDefault();

                //add active for links 
                tabLinks.forEach((link)=>{
                    link.classList.remove('active')
                })
                tabLinks[index].classList.add('active')

                //add active for tab content
                tabContent.forEach((content)=>{
                    content.classList.remove('active')
                })
                tabContent[index].classList.add('active')
            })
        })


        //load tab
        let dataStore = JSON.parse(localStorage.getItem('id-period'))
        tabLinks.forEach((link)=>{
            link.classList.remove('active')
            dataStore.forEach((period=>{
                if(period == link.id){
                    link.classList.add('active')
                }
            }))
        })
        tabContent.forEach((content)=>{
            content.classList.remove('active')
            dataStore.forEach((period=>{
                if(period == content.id){
                    content.classList.add('active')
                }
            }))
        })
    },
}
tabs.init();