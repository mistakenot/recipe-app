import React from 'react';
import { FlatList, View, Modal } from 'react-native';
import { ListItem, Button, Text, ThemeProvider, Input } from 'react-native-elements';
import { ProductOverlay } from './ProductOverlay';
import { SearchBar } from './SearchBar';

import { updateProductAmount } from '../state';

const Product = ({name, index, amount, onPress}) => (
    <ListItem
        key={index}
        title={name}
        onPress={() => onPress(index)}
        subtitle={
            <View>
                <Text>Amount: { amount }</Text>
            </View>
        }>
    </ListItem>)

const productListStyle = {
    flexDirection: 'column',
    padding: 10
}

export class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: props.products,
            activeProductIndex: 0,
            searchTerm: '',
            showModal: false
        }
    }

    onFilter(term) {
        let products = this.props
            .products
            .filter(p => term === "" || p.name.toLowerCase().indexOf(term.toLowerCase()) > -1)

        this.setState({products});
    }

    onClickProduct(index) {
        this.setState({
            activeProductIndex: index,
            showModal: true});
    }

    activeProduct() {
        return this.state.products[this.state.activeProductIndex] || {amount: 0.00};
    }

    onUpdateProduct(key, amount) {
        updateProductAmount(key, amount);
        this.setState({showModal: false});
    }

    render() {
        let ProductListItem = ({item, index}) => 
            (<Product 
                {...item} 
                index={index}
                key={index}
                onPress={(index) => this.onClickProduct(index)} 
            />)
        
        return (
            <View style={productListStyle}> 
                <ProductOverlay 
                    isVisible={this.state.showModal} 
                    product={this.activeProduct()}
                    onCancel={() => this.setState({showModal: false})}
                    onConfirm={(item) => this.onUpdateProduct(item.key, item.amount)}></ProductOverlay>
                <SearchBar searchTerm={this.state.searchTerm} onChangeText={(term) => {this.onFilter(term)}}/>
                <FlatList
                    data={this.state.products}
                    renderItem={ProductListItem}/>
            </View>
        )
    }
}