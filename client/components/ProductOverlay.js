import React from 'react';
import { View } from 'react-native';
import { Overlay, Text, Slider, Button } from 'react-native-elements';

export class ProductOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newAmount: props.product.amount
        }
    }

    onConfirm() {
        this.props.onConfirm({
            amount: this.state.newAmount
        });
    }
 
    render() {
        return (
            <Overlay 
                isVisible={this.props.isVisible}
                width="auto"
                height="auto"
            >
                <View
                    style={{
                        flexDirection: 'column',
                        height: 200
                    }}
                >
                    <Text>{ this.props.product.name }</Text>
                    <View style={{ flex: 1, alignItems: 'stretch' }}>
                        <Slider
                            value={this.state.newAmount}
                            onValueChange={newAmount => this.setState({ newAmount })}
                        />
                        <Text>New amount: { this.state.newAmount }</Text>
                    </View>
                    <View>
                        <Button style={{marginBottom: 10}}title="Ok" onPress={() => this.onConfirm()}/>
                        <Button type="outline" onPress={() => this.props.onCancel()} title="Cancel"/>
                    </View>
                </View>
            </Overlay>);
    }
}
