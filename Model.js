export class Model{
    constructor() {
        this.cards = [
            {id:'1mobileRed', tittle: 'iPhone14Red', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computerRed', tittle: 'macBookRed', mainText: 'someText2', srcImage: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/f/e/fe0679abf8e710031f8ff76734ccafe5_3.jpg', price: '$250'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'2mobileRed', tittle: 'iPhone14Red', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'3computerBlue', tittle: 'macBookBlue', mainText: 'someText2', srcImage: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/f/e/fe0679abf8e710031f8ff76734ccafe5_3.jpg', price: '$250'},
            {id:'4egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'2mobileBlue', tittle: 'iPhone14Blue', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'4computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/f/e/fe0679abf8e710031f8ff76734ccafe5_3.jpg', price: '$250'},
           

        ]
    }
      bindCardsChanged(callback){
        this.onCardsChanged = callback;
      }
     commit(){
        this.onCardsChanged(this.cards);
     }


}
