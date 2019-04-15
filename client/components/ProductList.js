import React from 'react';
import { FlatList, View, Modal } from 'react-native';
import { Button, Text, ThemeProvider, Input } from 'react-native-elements';

const productStyle = {
    flex: 1,
    flexDirection: 'column',
    padding: 5
}

const Product = (product) => (
    <View style={productStyle}>
        <Text>{product.name}</Text>
        <View style={{flexDirection: 'row'}}>
            <Text>Amount: {product.amount}</Text>
            {/* <Button value="Update" onPress={() => {}}></Button>
            <Button value="Remove" onPress={() => {}}></Button> */}
            <ThemeProvider>
                <Button title="Hey" />
            </ThemeProvider>
        </View>
    </View>);

const productModalStyle = {
    width: 10,
    height: 10,
    marginTop: 22,
    alignItems: 'center',
    padding: 100
}

const ProductModal = ({visible, amount}) => (
    <View style={productModalStyle}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {}}>
            <Text>Testing</Text>
        </Modal>
    </View>
)

const productListStyle = {
    flexDirection: 'column',
    padding: 10
}

const SearchBar = (props) =>(
    <View>
        <Input
            placeholder="Search..."
            style={{height: 30, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => props.onChangeText(text)}
            value={props.searchText}
        />
    </View>
)
export class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: props.products,
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

    render() {
        return (
            <View style={productListStyle}> 
                <SearchBar searchTerm={this.state.searchTerm} onChangeText={(term) => {this.onFilter(term)}}/>
                <FlatList
                    data={this.state.products}
                    renderItem={({item}) => (<Product key={item.name} {...item} />)}/>
                <ProductModal visible={this.state.showModal}/>
            </View>
        )
    }
}