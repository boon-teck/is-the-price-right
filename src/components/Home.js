import React from 'react';
import {Link} from 'react-router-dom'

function Home({setSearchItem, searchItem}) {
    console.log(searchItem)
    return (
        <form>
            <input
                 className=".input-lg col-xs-4"
                 onChange={(e) => setSearchItem(e.target.value)}
                 name="search"
                 placeholder="Search"
             />

            <Link to='/searchresult' className={'btn btn-outline-dark'}>$</Link>
        </form>
    );
}

export default Home;
