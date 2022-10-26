
export class View{
    constructor() {
        this.app = this.getElement('#root');
        this.searchPanel = this.createElement('div', 'search');
        this.inputSearch = this.createElement('input','search-input');
        this.filterPanel = this.getElement('.filter-panel');
        this.mobile = 'mobile';
        this.computer = 'computer';
        this.slider = this.createElement('div', 'slider');
        this.slider.id = 'slider';
        this.inputSliderText = this.createElement('input', 'inputSliderText');
        this.inputSliderText.type = 'button';
        this.inputSliderText.id = 'amount';
        this.count = 0;
        this.trigger = true;

        for (let i = 1; i <= 2; i++) {
            this.filterModule2Text = this.createElement('div', `filter-text-${i}`);
            this.filterCheckbox2 = this.createElement('input', `CheckBox-${i}`);
            this.filterCheckbox2.type = 'checkbox';
            this.filterCheckbox2.id = `checkbox-2-${i}`


            this.filterModule1Text = this.createElement('div', `filter-text-${i}`);
            this.filterModule1Text.textContent = 'Mobile';
            this.filterCheckbox = this.createElement('input', `CheckBox-${i}`);
            this.filterCheckbox.type = 'checkbox';
            this.filterCheckbox.id = `checkbox-1-${i}`
            this.filterModule1 = this.createElement('div', `filter-module-${i}`);
            this.filterModule1.append(this.filterCheckbox, this.filterModule1Text);
            this.filterTittle = this.createElement('div', `filter-tittle-${i}`);
            this.filterTittle.textContent = 'Type';
            this.filterModule2 = this.createElement('div', `filter-module-${i}`);
            this.filterModule2.append(this.filterCheckbox2, this.filterModule2Text)
            this.filterModule2Text.textContent = 'Computer';
            this.filterModule2Text.id = `text1-${i}`
            this.filterModule1Text.id = `text2-${i}`
            this.filterTittle.id = `tittle-${i}`
            this.filterPanel.append(this.filterTittle, this.filterModule1, this.filterModule2);
        }
        this.filterPanelEffect = this.createElement('div', 'filter-panel-effect');
        this.filterPanelEffect.id = 'filterModal-1'
        this.filterPanel.append(this.inputSliderText);
        this.filterPanel.append(this.slider);
        this.filterPanel.append(this.filterPanelEffect);
        this.searchPanel.append(this.inputSearch);
        document.body.prepend(this.searchPanel);
        document.getElementById('text2-2').textContent = 'red';
        document.getElementById('text1-2').textContent = 'blue';
        document.getElementById('tittle-2').textContent = 'Color';


    }

    createElement(tag, className){
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }
    getElement(selector){
        const element = document.querySelector(selector);
        return element;

    }

    displayCards(cards){
        while (this.app.firstChild){
            this.app.removeChild(this.app.firstChild)
        }
        if (cards.length === 0){
            const p = this.createElement('p');
            p.textContent = 'Nothing Buy :(';
        this.app.append(p);
        } else {
            cards.forEach(card =>{
                const cardDiv = this.createElement('div', 'card');
                const cardPicture = this.createElement('div', 'card-header-picture');
                const cardFooter = this.createElement('div', 'card-footer');
                const cardFooterTittle = this.createElement('div', 'card-footer-tittle');
                const cardFooterText = this.createElement('div', 'card-footer-text');
                const cardFooterSub = this.createElement('div','card-footer-sub');
                const cardFooterSubPrice = this.createElement('div', 'card-footer-sub-price');
                const cardButton = this.createElement('button', 'card-footer-sub-button');
                const cardFooterSub2 = this.createElement('div', 'card-footer-sub2');

                cardDiv.id = card.id;
                cardPicture.style.backgroundImage = `url("${card.srcImage}")`;
                cardFooterTittle.textContent = card.tittle;
                cardFooterText.textContent = card.mainText;
                cardFooterSubPrice.textContent = card.price;
                cardButton.textContent = 'More...';
                cardButton.id = card.id;

                cardFooterSub2.append(cardFooterTittle, cardFooterText)

                cardFooterSub.append(cardFooterSubPrice, cardButton);
                cardFooter.append(cardFooterSub2, cardFooterSub);
                cardDiv.append(cardPicture, cardFooter);
                this.app.append(cardDiv);

            })
        }

    }



    searchCards(){

    }
      filterEffect = () => {

          this.count = 0;
          let cardNodeList = document.querySelectorAll(".card");


          cardNodeList.forEach((card)=>{
              if (card.style.display === 'flex') {
                  this.count++;
              }

          })
          const smallDevice = window.matchMedia("(max-width:480px)");

          const  handleDeviceChange = (e) =>{
              if (!(e.matches)){
                  if (this.count > 0){
                      this.trigger = false;
                  }
                  if (this.trigger){
                      this.filterPanel.style.right = '-18%';
                      this.app.style.width = '90%';
                  } else {
                      if (this.count === 4) {
                          this.filterPanel.style.right = '-18%';
                          this.app.style.width = '90%';
                          this.app.style.gridTemplateColumns = 'repeat( auto-fit, minmax(250px, 1fr))';

                      } else if (this.count < 4){
                          this.filterPanel.style.right = '-18%';
                          this.app.style.width = '70%';
                          this.app.style.gridTemplateColumns = 'repeat( auto-fill, minmax(250px, 1fr))';
                      }
                      else {
                          this.filterPanel.style.right = '-18%';
                          this.app.style.width = '90%';
                          this.app.style.gridTemplateColumns = 'repeat( auto-fill, minmax(250px, 1fr))';

                      }
                  }
              }
              else {
                  this.filterPanel.style.right = '-45%';
                  this.app.style.width = '90%';
              }
          }
          smallDevice.addListener(handleDeviceChange);
          handleDeviceChange(smallDevice);


          console.log(this.count)


      }


    hoverFilterEffect(){

        this.filterPanel.addEventListener('mouseover', () =>{
            this.count = 0;
            let cardNodeList = document.querySelectorAll(".card");
            cardNodeList.forEach((card)=>{
                if (card.style.display === "flex") {
                    this.count++;
                }
            })
            const smallDevice = window.matchMedia("(max-width:480px)");

            const  handleDeviceChange = (e) =>{
                if (!(e.matches)){

                    this.filterPanel.style.right = '0';
                    this.app.style.width = '70%';
                }
                else {
                    this.filterPanel.style.right = '0';
                    this.app.style.width = '90%';
                }
            }
            smallDevice.addListener(handleDeviceChange);
            handleDeviceChange(smallDevice);



        })
        this.filterPanel.addEventListener('mouseout', () =>{
            this.filterEffect();

        })
    }
     filterMobile = () =>{
        let i = 1;
        const cardsNodeList = document.querySelectorAll(".card");
        if (document.getElementById('checkbox-1-1').checked){

            cardsNodeList.forEach( (card) =>{
                if (card.id.includes(this.mobile) && !card.id.includes('checked')){
                    card.style.display = 'flex';
                    card.id = `${card.id}checked`;
                    i++;
                }
                else {
                    if (!card.id.includes('checked')) {
                        card.style.display = 'none';
                    }
                }

            })
        } else {

            cardsNodeList.forEach( (card) => {
                if (card.id.includes('checked') && card.id.includes('mobile')){
                    card.id = `${card.id.replace('checked', '')}`;
                    card.style.display = 'none';
                    i++;
                }
                if (card.id.includes('checked') && card.id.includes(this.mobile)){
                    card.id = `${card.id.replace('checked', '')}`;
                    card.style.display = 'none';
                    i++;
                }
                if (!document.getElementById('checkbox-1-1').checked && !document.getElementById('checkbox-2-1').checked
                    && !document.getElementById('checkbox-1-2').checked
                    && !document.getElementById('checkbox-2-2').checked){
                    card.style.display = 'flex'
                }
            })

        }

         if (document.getElementById('checkbox-1-2').checked){
             this.filterRed();
         }

    }

     filterComputer  = () =>{
        let i = 1;
        const cardsNodeList = document.querySelectorAll(".card");
        if (document.getElementById('checkbox-2-1').checked){

            cardsNodeList.forEach( (card) => {
                if (card.id.includes(this.computer) && !card.id.includes('checked')){
                    card.style.display = 'flex';
                    card.id = `${card.id}checked`;
                    i++;
                }
                else {
                    if (!card.id.includes('checked')) {
                        card.style.display = 'none';
                    }
                }

            })
        } else {

            cardsNodeList.forEach( (card) => {
                if (card.id.includes('checked') && card.id.includes('computer')){
                    card.id = `${card.id.replace('checked', '')}`;
                    card.style.display = 'none';
                    i++;
                }
                if (card.id.includes('checked') && card.id.includes(this.computer)){
                    card.id = `${card.id.replace('checked', '')}`;
                    card.style.display = 'none';
                    i++;
                }
                if (!document.getElementById('checkbox-1-1').checked && !document.getElementById('checkbox-2-1').checked
                    && !document.getElementById('checkbox-1-2').checked
                    && !document.getElementById('checkbox-2-2').checked){
                    card.style.display = 'flex'
                }


            })

        }
         if (document.getElementById('checkbox-1-2').checked){
             this.filterRed();
         }



     }
     filterRed = () =>{


        let i = 1;
        const cardsNodeList = document.querySelectorAll(".card");
        if ( document.getElementById('checkbox-1-2').checked){

            this.mobile = 'mobileRed';
            this.computer = 'computerRed';
            cardsNodeList.forEach( (card) => {

                if (card.id.includes('Red') && card.id.includes('checked')){
                    card.style.display = 'flex';
                    card.id = `${card.id}`;
                    i++;
                }
                else {
                    card.style.display = 'none';
                }
                if (!document.getElementById('checkbox-1-1').checked &&
                    !document.getElementById('checkbox-2-1').checked){
                    if (card.id.includes('Red')) {
                        card.style.display = 'flex'
                    }
                }



            })
        } else {

            this.mobile = 'mobile';
            this.computer = 'computer';

            cardsNodeList.forEach( (card) => {
                if (card.id.includes(`${card.id}Red`)){
                    card.id = `${card.id}`;
                    card.style.display = 'none';
                    i++;
                }
                else if (card.id.includes('checked')){
                    card.style.display = 'flex'
                }
                if (!document.getElementById('checkbox-1-1').checked && !document.getElementById('checkbox-2-1').checked
                    && !document.getElementById('checkbox-1-2').checked
                    && !document.getElementById('checkbox-2-2').checked){
                    card.style.display = 'flex'
                }


            })


        }
        if (document.getElementById('checkbox-1-1').checked){
            this.filterComputer();
        }
        if (document.getElementById('checkbox-2-1').checked){
            this.filterMobile();
        }




    }
     filterBlue = () => {

        let i = 1;
        const cardsNodeList = document.querySelectorAll(".card");
        if (document.getElementById('checkbox-2-2').checked){

            this.mobile = 'mobileBlue';
            this.computer = 'computerBlue';
            cardsNodeList.forEach((card) => {

                if (card.id.includes('Blue') && card.id.includes('checked')){
                    card.style.display = 'flex';
                    card.id = `${card.id}`;
                    i++;
                }
                else {
                    card.style.display = 'none';
                }
                if (!document.getElementById('checkbox-1-1').checked &&
                    !document.getElementById('checkbox-2-1').checked){
                    if (card.id.includes('Blue') ) {
                        card.style.display = 'flex'
                    }
                }



            })
        } else {

            this.mobile = 'mobile';
            this.computer = 'computer';

            cardsNodeList.forEach( (card) => {
                if (card.id.includes(`${card.id}Blue`)){
                    card.id = `${card.id}`;
                    card.style.display = 'none';
                    i++;
                }
                else if (card.id.includes('checked')){
                    card.style.display = 'flex'
                }
                if (!document.getElementById('checkbox-1-1').checked && !document.getElementById('checkbox-2-1').checked
                    && !document.getElementById('checkbox-1-2').checked
                    && !document.getElementById('checkbox-2-2').checked
                ){
                    card.style.display = 'flex'
                }


            })

        }
         if (document.getElementById('checkbox-1-1').checked){
             this.filterComputer();
         }
         if (document.getElementById('checkbox-2-1').checked){
             this.filterMobile();
         }



     }
    filterItems(){

        this.inputSearch.addEventListener('input', event => {



                const cardsNodeList = document.querySelectorAll(".card");
                if (event.target.value === '') {

                    cardsNodeList.forEach( (card) =>{

                        if (card.id.includes('checked') && card.id.includes(this.mobile)) {
                            if (card.id.includes('checked') && card.id.includes(this.mobile)) {
                                card.style.display = 'flex';
                            } else {

                                card.style.display = 'none'
                            }

                        }

                    })
                }

                if (event.target.event !== '') {
                    cardsNodeList.forEach( (card) =>{
                        if (card.id.includes('checked') && card.id.includes(this.mobile)) {
                            if (card.lastChild.firstChild.firstChild.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
                                if (card.id.includes('checked') && card.id.includes(this.mobile)) {
                                    card.style.display = 'flex';
                                }
                            } else card.style.display = 'none';
                        }

                    })
                }


            // if (document.getElementById('checkbox-2-1').checked){
            //     const cardsNodeList = document.querySelectorAll(".card");
                if (event.target.value === '') {
                    cardsNodeList.forEach( (card) => {

                        if (card.id.includes('checked') && card.id.includes(this.computer)) {
                            if (card.id.includes('checked') && card.id.includes(this.computer)) {
                                card.style.display = 'flex';
                            } else {
                                card.style.display = 'none'
                            }

                        }

                    })
                }

                if (event.target.event !== '') {
                    cardsNodeList.forEach( (card) => {
                        if (card.id.includes('checked') && card.id.includes(this.computer)) {
                            if (card.lastChild.firstChild.firstChild.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
                                if (card.id.includes('checked') && card.id.includes(this.computer)) {
                                    card.style.display = 'flex';
                                }
                            } else card.style.display = 'none';
                        }

                    })
                }

         //   }

            if (!document.getElementById('checkbox-1-1').checked && !document.getElementById('checkbox-2-1').checked
              && !document.getElementById('checkbox-1-2').checked
            ) {
                const cardsNodeList2 = document.querySelectorAll(".card");
                if (event.target.value === '') {
                    cardsNodeList2.forEach( (card) =>{
                        card.style.display = 'flex';
                    })
                }
                if (event.target.event !== '') {
                    cardsNodeList2.forEach( (card) => {

                        if (card.lastChild.firstChild.firstChild.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
                            card.style.display = 'flex';
                        } else card.style.display = 'none';


                    })
                }


            }
            this.count = 0;


            let cardNodeList = document.querySelectorAll(".card");
            cardNodeList.forEach((card)=>{
                if (card.style.display === 'flex') {
                    this.count++;
                }

            })
             const smallDevice = window.matchMedia("(max-width:480px");

               

            const handleDeviceChange = (e) => {
                if (!(e.matches)){
                         if (this.count >= 4){
                        this.app.style.transition = '1s'
                        this.app.style.width = '90%';
                        this.app.style.gridTemplateColumns = 'repeat( auto-fill, minmax(250px, 1fr))';
                    }
                    else {
                        this.app.style.transition = '0s'
                        this.app.style.width = '70%';
                        this.app.style.gridTemplateColumns = 'repeat( auto-fill, minmax(250px, 1fr))';
                    }
                }
                else {
                    this.app.style.transition = '1s'
                    this.app.style.width = '90%';
                    
                }
            }

            smallDevice.addListener(handleDeviceChange);
                    handleDeviceChange(smallDevice)



        })

        document.getElementById('checkbox-1-1').addEventListener('change', this.filterMobile )
        document.getElementById('checkbox-2-1').addEventListener('change', this.filterComputer )
        document.getElementById('checkbox-1-2').addEventListener('change', this.filterRed )
        document.getElementById('checkbox-2-2').addEventListener('change', this.filterBlue)

    }

    addFilterModal(){

            document.getElementById(`checkbox-1-1`).addEventListener('change',  () =>{
                if (document.getElementById(`checkbox-1-1`).checked){
                  const modal =   document.createElement('div');
                    modal.classList.add('modal-filter');
                    modal.id = `1`;
                   const text = document.createElement('div')
                    text.classList.add('filter-modal-text');
                   text.textContent = 'Mobile'
                   const button = document.createElement('button');
                    button.classList.add('filter-modal-button');

                    modal.append(text, button);
                    document.getElementById('filterModal-1').append(modal);

                    document.getElementById('1').addEventListener('click',() =>{
                        document.getElementById('1').remove();
                        document.getElementById(`checkbox-1-1`).checked = false;
                        this.filterMobile();

                    })


                }
                else {
                    document.getElementById('1').remove();

                }
            })
        document.getElementById(`checkbox-2-1`).addEventListener('change',  () =>{
            if (document.getElementById(`checkbox-2-1`).checked){
                const modal =   document.createElement('div');
                modal.classList.add('modal-filter');
                modal.id = `3`;
                const text = document.createElement('div')
                text.classList.add('filter-modal-text');
                text.textContent = 'Computer'
                const button = document.createElement('button');
                button.classList.add('filter-modal-button');

                modal.append(text, button);
                document.getElementById('filterModal-1').append(modal);

                document.getElementById('3').addEventListener('click',() =>{
                    document.getElementById('3').remove();
                    document.getElementById(`checkbox-2-1`).checked = false;
                    this.filterComputer();

                })


            }
            else {
                document.getElementById('3').remove();

            }
        })
        document.getElementById(`checkbox-1-2`).addEventListener('change', () =>{
            if (document.getElementById(`checkbox-1-2`).checked){
                const modal =   document.createElement('div');
                modal.classList.add('modal-filter');
                modal.id = `2`;
                const text = document.createElement('div')
                text.classList.add('filter-modal-text');
                text.textContent = 'Red'
                const button = document.createElement('button');
                button.classList.add('filter-modal-button');

                modal.append(text, button);
                document.getElementById('filterModal-1').append(modal);

                document.getElementById('2').addEventListener('click', ()=>{
                    document.getElementById('2').remove();
                    document.getElementById(`checkbox-1-2`).checked = false;
                    this.filterRed()
                    this.filterComputer();
                    this.filterMobile();

                })


            }
            else {
                document.getElementById('2').remove();

            }
        })
        document.getElementById(`checkbox-2-2`).addEventListener('change', () =>{
            if (document.getElementById(`checkbox-2-2`).checked){
                const modal =   document.createElement('div');
                modal.classList.add('modal-filter');
                modal.id = `4`;
                const text = document.createElement('div')
                text.classList.add('filter-modal-text');
                text.textContent = 'Blue'
                const button = document.createElement('button');
                button.classList.add('filter-modal-button');

                modal.append(text, button);
                document.getElementById('filterModal-1').append(modal);

                document.getElementById('4').addEventListener('click', ()=>{
                    document.getElementById('4').remove();
                    document.getElementById(`checkbox-2-2`).checked = false;
                    this.filterRed()
                    this.filterComputer();
                    this.filterMobile();
                    this.filterBlue();
                })


            }
            else {
                document.getElementById('4').remove();

            }
        })

    }
    sliderFilter = () => {


        const cardNodeList = document.querySelectorAll(".card");
        cardNodeList.forEach((card) => {
            if (card.lastChild.lastChild.firstChild.textContent.slice(1) >= $("#slider").slider("values", 0)
                && card.lastChild.lastChild.firstChild.textContent.slice(1) <= $("#slider").slider("values", 1)
                ) {
                if (!document.getElementById('checkbox-1-1').checked && !document.getElementById('checkbox-2-1').checked
                    && !document.getElementById('checkbox-1-2').checked
                ) {
                    card.style.display = 'flex';
                }
                if (card.id.includes('checked') && document.getElementById('checkbox-1-1').checked){
                    card.style.display = 'flex';
                }
                if (card.id.includes('checked') && document.getElementById('checkbox-2-1').checked &&
                    !(document.getElementById('checkbox-1-2').checked)
                ){
                    card.style.display = 'flex';
                }
                if (card.id.includes('checked') && document.getElementById('checkbox-1-2').checked){
                    card.style.display = 'flex';
                }

            } else {

                card.style.display = 'none';
            }


        })
    }
    sliderRange(){
            $("#slider").slider({
                range: true,
                min: 0,
                max: 1000,
                values: [0, 1000],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#amount").val("$" + $("#slider").slider("values", 0) +
                " - $" + $("#slider").slider("values", 1));

        $('#slider').on( "slidestop", ( event, ui ) => {
           this.sliderFilter();
        })

    }



}
