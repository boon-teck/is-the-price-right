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
    let [searchItem, setSearchItem] = useState('')
    let [shopeeSearchList, setShopeeSearchList] = useState([])
    let [fairpriceList, setFairpriceList] = useState([])
    //let [comparisonList, setComparisonList] = useState([]) //ran out of time

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
    }

    //Lazada web scraping does not work

    //FAIRPRICE
    function fairprice() {
        axios.get(`https://www.fairprice.com.sg/search?query=${searchItem}`)
            .then(resp => {
                let $ = cheerio.load(resp.data)
                $('div[data-testid=product]').children().each((i,el) => {
                    // console.log($(this).find("span[weight=normal]").html());
                    // console.log($("div", el).children().html())
                    //find name because name is in <span weight="normal">...</span>
                    // let imageLink = $('img[objectfit=true]','div[data-testid=recommended-product-image]').attr('src')
                    let imageLink = $('img[objectfit=true]').eq(0).attr('src')
                    // let ima = $('div.jcRVFF div.esytwL div[data-testid=recommended-product-image] div',el).attr('src')
                    let nameItem = $('span[weight=normal]',el).text()
                        // <span weight="black">...</span>
                    let priceItem = $('span[weight=black]',el).text()//.eq(0).children().eq(0).children().text())
                if(nameItem){
                        // console.log("---product--")
                        // console.log("price", priceItem)
                        // console.log("name", nameItem)
                        // console.log("image link", imageLink)
                    let obj = {
                        "name": nameItem,
                        "price": priceItem,
                        "imageLink": imageLink
                    }
                    setFairpriceList(prevState => [...prevState, obj])
                    }
                })
                // //This works partially
                // $('div[data-testid=recommended-product-image]').children().each((i,ele) => {
                //     let imageLinks = $('img[objectfit=true]',ele).attr('src')
                //     if(imageLinks){
                //         console.log("image linksssss", imageLinks)
                //     }
                // })
                // $('img[objectfit=true]').each((i,el) => {
                //     console.log($(el).attr('src'))
                // })
            })
    }



    useEffect(shopeeRun, [searchItem]);
    useEffect(fairprice, [searchItem]);

    // console.log(shopeeSearchList)
    console.log(fairpriceList)


    return (
      <>
      <Router>
          <Navigation reset={setFairpriceList}/>
          <Container className="mt-4">
              <Switch>
                  <Route path="/" exact>
                      <Row className="justify-content-md-center">
                          <img src={logo} alt='logo'/>
                      </Row>
                      <Row className="justify-content-md-center">
                          <Home searchItem={searchItem} setSearchItem={setSearchItem}/>
                      </Row>
                  </Route>
                  <Route path="/searchresult">
                      <Searchresult shopeeSearchList={shopeeSearchList} fairpriceList={fairpriceList}/>
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
