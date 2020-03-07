var manager = {
    init: function() {
        this.managerStock();

    },
    managerStock:function() {

        let btnAdd = document.getElementById('add__btn')
        let yesBtn = document.getElementById('btn__yes')
        let noBtn = document.getElementById('btn__no')


        let overlay = document.querySelector('.overlay')
        let formInputwrap = document.querySelector('.formInput')

        let nameProperty = document.getElementById('property__name')
        let quanityProperty = document.getElementById('property__quantity')
        let priceProperty = document.getElementById('property__price')

        let errorMessage = document.getElementById('errormessage')
        var conditionBtn;
        console.log(errorMessage);
        pullData();
        
       

        //click on overlay to remove pop-up
        overlay.addEventListener('click', ()=>{
            overlay.classList.remove('active')
            formInputwrap.classList.remove('active')
        });

        //click on No btn to remove pop-up
        noBtn.addEventListener('click', ()=>{
            overlay.classList.remove('active')
            formInputwrap.classList.remove('active')
        });

        //------------------------Action width data -----------------------
         // Click addbtn show pop-up add form
         btnAdd.addEventListener('click', (e)=>{
            e.preventDefault();
            conditionBtn = 'add'
            overlay.classList.add('active')
            formInputwrap.classList.add('active')
            console.log(conditionBtn)
        });

        // Click Yes when add item
        yesBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            if (validateName() && validateQuantity() && validatePrice()) {
                if(conditionBtn == 'add') {
                    pullData();
                    pushData();
                    location.reload();
                }

            }
        });
        // Click Edit to show pop-up add form
        let editBtns = document.querySelectorAll('.editBtn')
        editBtns.forEach((edit,index)=>{
            edit.addEventListener('click',()=>{
                conditionBtn = 'edit'
                overlay.classList.add('active')
                formInputwrap.classList.add('active')
                //input data to form
                dataStorage = JSON.parse(localStorage.getItem('data'))
                dataStorage.forEach((item,index)=>{
                    nameProperty.value = item.StoreName;
                    quanityProperty.value= item.StoreQuantity;
                    priceProperty.value = item.StorePrice;
                })
                 // Click Yes when edit item
                yesBtn.addEventListener('click', (e)=>{
                    e.preventDefault();
                    if (validateName() && validateQuantity() && validatePrice()) {
                        if(conditionBtn == 'edit') {
                            editData(index);
                            location.reload();
                        }
        
                    }
                });
            })
        })
        // Click Remove Item 
        let removeBtns = document.querySelectorAll('.removeBtn')
        removeBtns.forEach((remove,index)=>{
           remove.addEventListener('click',()=>{
                deleteData(index);
           })
        });

        // Search proprerty
        let inputSearch = document.getElementById('search')
        inputSearch.addEventListener('input', ()=>{
            searchData(inputSearch.value)
        })
        //------------------------FUNCTION---------------------------------
        // CREATE OBJECT STRUCTOR 
        function dataObj(id, name, quantity, price, totalPrice) {
            this.StoreId = id;
            this.StoreName = name;
            this.StoreQuantity = quantity;
            this.StorePrice = price;
            this.StoreTotalPrice = totalPrice;
        }
        //PUSH DATA
        function pushData() {
            var dataStorage = JSON.parse(localStorage.getItem('data')) 
            if(dataStorage == null) dataStorage = [];

            let propertys = new dataObj(
                dataStorage.length + 1, nameProperty.value, quanityProperty.value, priceProperty.value, quanityProperty.value*priceProperty.value
                )
            dataStorage.push(propertys)
            localStorage.setItem('data', JSON.stringify(dataStorage))
        }
        // PULL DATA
        function pullData() {
            dataStorage = JSON.parse(localStorage.getItem('data'))
            if (dataStorage == null) return;

            let tbody = document.getElementById('tbody');
            dataStorage.forEach(element => {
                let tr = document.createElement('tr')
                tr.classList.add('row-item')
                tr.innerHTML= ` <th>${element.StoreId}</th>
                <th class="title__property">${element.StoreName}</th>
                <th>${element.StoreQuantity}</th>
                <th>${element.StorePrice}</th>
                <th>${element.StoreTotalPrice}</th>
                <th>
                <i id="editBtn" class="fa fa-pencil-square editBtn" aria-hidden="true"></i>
                <i id="removeBtn" class="fa fa-trash removeBtn" aria-hidden="true"></i>
                </th>`
                tbody.appendChild(tr)
            });
        }
        // DELETE DATA
        function deleteData(Deleteindex){
            dataStorage = JSON.parse(localStorage.getItem('data'))
            dataStorage.splice(Deleteindex, 1)
            dataStorage.forEach((item, index)=>{
                item.StoreId = index + 1;
            })
            localStorage.setItem('data', JSON.stringify(dataStorage))
            location.reload();
        }

        // EDIT DATA
        function editData(editIndex) {
            dataStorage = JSON.parse(localStorage.getItem('data'))
                dataStorage[editIndex].StoreName = nameProperty.value;
                dataStorage[editIndex].StoreQuantity = quanityProperty.value;
                dataStorage[editIndex].StorePrice = priceProperty.value;
                dataStorage[editIndex].StoreTotalPrice = quanityProperty.value*priceProperty.value;
            localStorage.setItem('data', JSON.stringify(dataStorage))
        }

        // SEARCH DATA  
        function searchData(serchValue) {
            let items = document.querySelectorAll('tbody tr')
            
            items.forEach((item, index)=>{
                let title = item.querySelector('.title__property')
                let valueTitle = title.textContent
                if (valueTitle.toUpperCase().includes(serchValue.toUpperCase())){
                    item.style.cssText = 'display: table-row;'
                    
                }else{
                    item.style.cssText = 'display: none;'
                }

            })
        }
        // PAGINATION 
        var currentPage = 1; //number of page
        var row = 3; // number of row per page
        dataStorage = JSON.parse(localStorage.getItem('data')) // array have data to push out interface
        var table = document.querySelector('tbody')
        let rowOutput = document.querySelectorAll('tbody tr')

        // DISPLAY ROW 
        function displayRow(array, wrapper, row_per_page, page){
            wrapper.innerHTML =''
            page--;
            
            let start = row_per_page * page  //0
            let end = start + row_per_page //0 + 3 = 3
            // display number row
            let pagination = array.splice(start,end) // cut "end" elements of array and push into new array "pagination"
            for( let i = 0; i < pagination.length; i++){
                wrapper.appendChild(rowOutput[i + start])
            }
        }
        displayRow(dataStorage, table, row, currentPage)

        // DISPLAY BUTTON FOR PAGINATION
        function createBtnPagination() {
            dataStorage = JSON.parse(localStorage.getItem('data')) //6
            let pageCount = Math.ceil(dataStorage.length / row) //2
            let paginationList = document.createElement('ul')
            paginationList. classList.add('pagination__list')
            let table = document.querySelector('.pagination')
            table.appendChild(paginationList)
            for (let i = 1; i < pageCount + 1; i++){ // 3
                let btnPaginationList =  document.createElement('li');

                if(i == currentPage)  btnPaginationList.classList.add('active');
                btnPaginationList.innerHTML = i;
                paginationList.appendChild(btnPaginationList)
                
                
            }

        }
        createBtnPagination();


        // EVENT CLICK ON PAGINATION BUTTON

        function clickPaginationBtn(){
            let btnPaginationLists = document.querySelectorAll('.pagination__list li')
            if (btnPaginationLists == null) return;
            btnPaginationLists.forEach((btn,index)=>{
                btn.addEventListener('click',()=>{
                    btnPaginationLists.forEach((i)=>{
                        i.classList.remove('active')
                    })
                    btn.classList.add('active')
                    currentPage = index + 1
                    console.log(row);
                    
                    displayRow(dataStorage, table, row, currentPage)
                })
            })
            
        }
        clickPaginationBtn();
    //------------------------VALIDATE FORM -----------------------
        function validateName(){
            if(nameProperty.value.length ==' '|| nameProperty.value == null ){
                errorMessage.innerHTML = 'Vui long nhap ten mat hang'
                return false;
            }else{
                return true
            }
        }
        function validateQuantity(){
            if(quanityProperty.value.length ==' '|| quanityProperty.value == null ){
                errorMessage.innerHTML = 'Vui long nhap so luong mat hang'
                return false;
            }else{
                return true
            }
        }
        function validatePrice(){
            if(priceProperty.value.length ==' '|| priceProperty.value == null ){
                errorMessage.innerHTML = 'Vui long nhap don gia mat hang'
                return false;
            }else{
                return true
            }
        }

    },

}
manager.init();