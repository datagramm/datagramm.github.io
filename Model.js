export class Model{
    constructor() {
        this.cards = [
            {id:'1mobileRed', tittle: 'iPhone14Red', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computerRed', tittle: 'macBookRed', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$250'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'2mobileRed', tittle: 'iPhone14Red', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'3computerBlue', tittle: 'macBookBlue', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$250'},
            {id:'4egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'2mobileBlue', tittle: 'iPhone14Blue', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'4computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$250'},
            {id:'5egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'1mobile', tittle: 'iPhone14', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$500'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'1mobile', tittle: 'iPhone14', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$250'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'1mobile', tittle: 'iPhone14', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$700'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'1mobile', tittle: 'iPhone14', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$800'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'1mobile', tittle: 'iPhone14', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$250'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},
            {id:'1mobile', tittle: 'iPhone14', mainText: 'SomeText1', srcImage: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907-geo_inline.jpg.large.jpg', price: '$40'},
            {id:'2computer', tittle: 'macBook', mainText: 'someText2', srcImage: 'https://media.c-nw.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_macbook_pro_14_silber_1.jpg', price: '$1000'},
            {id:'3egg', tittle: 'Яйця першої категорії', mainText: 'свіжі домашні яйця ', srcImage: 'https://img2.zakaz.ua/mega.1618594934.ad72436478c_2021-04-17_Julia/mega.1618594934.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', price: '$0.5'},

        ]
    }
      bindCardsChanged(callback){
        this.onCardsChanged = callback;
      }
     commit(){
        this.onCardsChanged(this.cards);
     }


}