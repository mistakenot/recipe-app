import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

export const SearchBar = (props) => (
    <View>
        <Input
            placeholder="Search..."
            style={{height: 30, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => props.onChangeText(text)}
            value={props.searchText}
        />
    </View>
) 