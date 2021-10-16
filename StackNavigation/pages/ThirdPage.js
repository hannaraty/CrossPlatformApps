import * as React from 'react';
import {Button,View,Text,SafeAreaView } from 'react-native';

const ThirdPage = ({ route, navigation }) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ flex: 1, padding: 16}}>
                <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text
                    style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginBottom: 16

                    }}>
                        THIS IS THIRD PAGE OF THE APP
                        {'\n'} 
                        {route.params.someParam} 
                        </Text>
                        {route.params.someParam != 'reset' ?
                        <Button 
                        title="Go back"
                        onPress={() => navigation.goBack()}
                        />
                        :null
                        }

                        <Button
                        title="Go to SecondPage"
                        onPress={() => navigation.navigate('SecondPage')}
                        />
                        <Button
                        title="Reset navigator state to First Page"
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [
                                    {
                                        name: 'FirstPage',
                                        params: { someParam: 'reset'},
                                    },
                                ],
                            })
                        }
                        />
            </View>
            <Text style ={{
                fontSize: 18,
                textAlign: 'center',
                color: 'grey'
            }}>
            Navigate Between Screens using
            {'\n'} 
            React Navigation
            </Text>
            <Text style={{
                fontSize: 16,
                textAlign: 'center',
                color: 'grey'
            }}>

            </Text>
            </View>
        </SafeAreaView>
    )
}

export default ThirdPage;