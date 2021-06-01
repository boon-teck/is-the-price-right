{/*
//Shopee API wrapper listof50 objects

const Shopee = require("shopee");

const shopee = new Shopee(Shopee.BASE_URL.SINGAPORE);
let searchItem = 'face mask'
async function shopeeRun() {
    const product = await shopee.search({
        query: `${searchItem}`,
        orderBy: Shopee.SEARCH.ORDER_BY.PRICE,
        orderType: Shopee.SEARCH.ORDER_TYPE.ASC,
        shippings: [1],
        locations: ["Singapore"],
        priceMax: 30000000
    });
    console.log(product);

    console.log(product[0].name);
    console.log(product[0].images);
    console.log(product[0].price);
}
shopeeRun();

// //axios will get the content (FairPrice)
//   axios.get("https://www.fairprice.com.sg/search?query=bananas")
//       .then(resp => {
//         // get
//         let $ = cheerio.load(resp.data)
//         $("div[data-testid=product]").children().each((i,el) => {
//           // console.log($(this).find("span[weight=normal]").html());
//           // console.log($("div", el).children().html())
//           //find name because name is in <span weight="normal">...</span>
//           let ns = $('span[weight=normal]',el).text()
//               <span weight="black">...</span>
//         let ps = $('span[weight=black]',el).text()//.eq(0).children().eq(0).children().text())
//         if(ns){
//             console.log("---ebere--")
//             console.log("price", ps)
//             console.log("name", ns)
//           }
//         })
//       })


// Lazada
axios
    .get('https://www.lazada.sg/catalog/?q=phone')
    .then((response) => {
        console.log(response.data)
        let $ = cheerio.load(response.data)
        console.log($)
        let y = $(".c2prKC")//.children()
        console.log(y)

    })
    .catch((error) => {
        console.error(error)
    });
*/}
