
export class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.onCardsChanged(this.model.cards)
        this.OnFilterCard();
        this.onFilterPanel();
        this.onFilterItems();
        this.onAddFilterModal();
        this.onSliderRange();

    }

    onCardsChanged = cards =>{
        this.view.displayCards(cards);
    }
    OnFilterCard = () => {
        this.view.searchCards();
    }
    onFilterPanel = () =>{
        this.view.hoverFilterEffect();
    }
    onFilterItems = () => {
        this.view.filterItems();
    }
    onAddFilterModal = () =>{
        this.view.addFilterModal();
    }
    onSliderRange = () =>{
        this.view.sliderRange();
    }



}

