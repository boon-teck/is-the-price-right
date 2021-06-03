import React, {useEffect, useState} from 'react';
import "./App.css";
import axios from "axios";
import cheerio from 'cheerio';
import {
    BrowserRouter as Router,
        Switch,
        Route
} from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import {Container, Row} from "react-bootstrap";
import logo from './images/logo200x200.png'
import Searchresult from "./components/Searchresult";
import Comparison from "./components/Comparison";
import About from "./components/About"


function App() {
    //state
    let [searchItem, setSearchItem] = useState('mask')
    let [shopeeSearchList, setShopeeSearchList] = useState([])
    let [comparisonList, setComparisonList] = useState([]) //how do i pass it into this?


    //Shopee API wrapper listof50 objects
    const Shopee = require("shopee");
    const shopee = new Shopee(Shopee.BASE_URL.SINGAPORE);
    async function shopeeRun() {
        const product = await shopee.search({
            query: `${searchItem}`,
            orderBy: Shopee.SEARCH.ORDER_BY.PRICE,
            orderType: Shopee.SEARCH.ORDER_TYPE.ASC,
            shippings: [1],
            locations: ["Singapore"],
            priceMax: 30000000
        });
        setShopeeSearchList(product)
        // console.log(product)
        // console.log(product[0].name);
        // console.log(product[0].image);
        // console.log(product[0].price);
        //need to map for each //what to do to store data? store in state? have to useEffect?
    }

    //FAIRPRICE
    function fairprice() {
        axios.get("https://www.fairprice.com.sg/search?query=bananas")
            .then(resp => {
                let $ = cheerio.load(resp.data)
                console.log(resp.data)
                $('div[data-testid=product]').children().each((i,el) => {
                    // console.log($(this).find("span[weight=normal]").html());
                    // console.log($("div", el).children().html())
                    //find name because name is in <span weight="normal">...</span>
                    let imageLink = $('img[objectfit=true]','div[data-testid=recommended-product-image]').attr('src')
                    let ima = $('div.jcRVFF div.esytwL div[data-testid=recommended-product-image] div',el).attr('src')
                    let nameItem = $('span[weight=normal]',el).text()
                        // <span weight="black">...</span>
                    let priceItem = $('span[weight=black]',el).text()//.eq(0).children().eq(0).children().text())
                if(nameItem){
                        console.log("---product--")
                        console.log("price", priceItem)
                        console.log("name", nameItem)
                        console.log("image link", imageLink)
                    console.log("imaaaaaaaa", ima)
                    console.log('node', el)
                    }
                })
                $('div[data-testid=recommended-product-image]').children().each((i,ele) => {
                    let imageLinks = $('img[objectfit=true]',ele).attr('src')
                    if(imageLinks){
                        console.log("image linksssss", imageLinks)
                    }
                })
                // $('div[data-testid=product]').each((i,element) => {
                //     let images = $('div div.jcRVFF',element).attr('src')
                //     if(images){
                //         console.log("imagesssssssss", images)
                //     }
                // })
            })
    }

    useEffect(shopeeRun, [searchItem]);
    useEffect(fairprice, []);

    console.log(shopeeSearchList)

  return (
      <>
      <Router>
          <Navigation />
          <Container className="mt-4">
              <Switch>
                  <Route path="/" exact>
                      <Row className="justify-content-md-center">
                          <img src={logo} />
                      </Row>
                      <Row className="justify-content-md-center">
                          <Home searchItem={searchItem} setSearchItem={setSearchItem}/>
                      </Row>
                  </Route>
                  <Route path="/searchresult">
                      <Searchresult shopeeSearchList={shopeeSearchList}/>
                  </Route>
                  <Route path="/about"><About /></Route>
                  <Route path="/comparison"><Comparison /></Route>
              </Switch>
          </Container>
      </Router>
      </>
  );
}

export default App;
