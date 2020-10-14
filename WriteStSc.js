import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

class WriteStSc extends React.Component{
    render(){
        return(
            <View>
                <Header
                backgroundColor={"black"}
                centerComponent={{
                    text: "Write Your Own Story",
                    style: {
                        color:'red',
                        fontSize:10
                    }
                }}
                />

                <TextInput
                    style={styling.textInput}
                    placeholder={'Title'} 
                />

                <TextInput
                    style={styling.textInput}
                    placeholder={'Your Name'} 
                />

                <TextInput
                    style={styling.textInput}
                    placeholder={'The Story'} 
                    multiline = "true"
                    
                />

            </View>
        );
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput:{
        borderWidth:2,
        marginTop:10
    }
})

export default WriteStSc;