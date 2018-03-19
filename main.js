var app = new Vue ({
    el: '#app',
    data: {
        product: 'Fresh cassette',
        desc: 'This sounds mostly good',
        image: 'cassette-image.jp2',
        link: 'http://bandcamp.com/hekscd',
        inventory: 75,
        onSale: true,
        details: ["Recorded in 2017", "Ferro-tape", "35min"],
        variants: [
            {
            variantId: 234,
            variantColor: "white"
        },
        
            {
            variantId: 235,
            variantColor: "black"
        }]
    }
})