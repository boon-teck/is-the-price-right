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
                // get
                let $ = cheerio.load(resp.data)
                console.log(resp.data)
                console.log($)
                $("div[data-testid=product]").children().each((i,el) => {
                    // console.log($(this).find("span[weight=normal]").html());
                    // console.log($("div", el).children().html())
                    //find name because name is in <span weight="normal">...</span>
                    let ns = $('span[weight=normal]',el).text()
                        // <span weight="black">...</span>
                let ps = $('span[weight=black]',el).text()//.eq(0).children().eq(0).children().text())
                if(ns){
                        console.log("---ebere--")
                        console.log("price", ps)
                        console.log("name", ns)
                    }
                })
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
                  <Route path="/about"></Route>
                  <Route path="/comparison"><Comparison /></Route>
              </Switch>
          </Container>
      </Router>
      </>
  );
}

export default App;
