import React from 'react';
import { useState } from 'react';
import './Shop.css';
import ShopItem from './ShopItem';
import { shopListdata } from './shopListdata';
import Buttons from './Buttons';


function Shop() {
    
    const [item, setItem] = useState(shopListdata);

    const chosenItem = (searchTerm) => {
        const newItem= shopListdata.filter(element => element.searchTerm === searchTerm);
        setItem(newItem);
    }
    return(
        <div>
            <Buttons filteredItem={chosenItem} /> 
            <ShopItem anyItem={item} />
    
        </div>
    )
}

export default Shop;