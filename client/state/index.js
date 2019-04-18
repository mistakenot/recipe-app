import { observable, action, autorun } from 'mobx';
import { testProductData } from "./data.js";

let defaultState = {
    products: testProductData,
    value: 1
}

export const store = observable(defaultState);

export const productStore = store.products;

export const updateProductAmount = action(function(key, amount) {
    let product = store.products[0].amount = 1231;
    
    if (product) {
        console.warn({key, amount});
        // store.products[0].amount = amount;
        store.value = 3;
    }
})

export const addNewProduct = action(function(name, iban) {
    productStore.push({
        name, iban, amount: 0, key: name 
    })
})

export const recipeStore = observable([])

autorun(() => {
    console.log("UPDATE");
})