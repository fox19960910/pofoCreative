var tabs = {
    init:function() {
        this.tabPeriod();

    },
    tabPeriod:function() {
        let tabLinks = document.querySelectorAll('.tab__link');
        let tabContent = document.querySelectorAll('.tab__content');
        console.log(tabLinks,tabContent)
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
    },
}
tabs.init();