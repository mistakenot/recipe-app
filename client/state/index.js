import { observable, action } from 'mobx';
import { testProductData } from "./data.js";

export const productStore = observable(testProductData);

export const updateProductAmount = action((key, amount) => {
    let product = productStore.filter(p => p.key === key)[0]

    if (product) {
        product.amount = amount;
    }
})

export const addNewProduct = action((name, iban) => {
    productStore.push({
        name, iban, amount: 0, key: name 
    })
})

export const recipeStore = observable([])
