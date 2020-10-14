import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class ReadStSc extends React.Component{
    render(){
        return(
            <View>
                <Text>Read Community Stories</Text>
            </View>
        );
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ReadStSc;