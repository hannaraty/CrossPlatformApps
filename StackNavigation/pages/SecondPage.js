import * as React from 'react';
import {Button,View,Text,SafeAreaView } from'react-native';

const SecondPage = ({ navigation }) => {
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
                        THIS IS THE SECOND PAGE OF THE APP
                        </Text>
                        <Button 
                        title="Go back"
                        onPress={() => navigation.goBack()}
                        />
                        <Button
                        title="Go to SecondPage... again"
                        onPress={() => navigation.push('SecondPage')}
                        />
                        <Button
                        title="Replace this screen with Third Page"
                        onPress={() => 
                            navigation.replace('ThirdPage', {
                                someParam: 'Param',
                            })
                        }
                        />
                        <Button
                        title="Reset navigator state to Third Page"
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [
                                    {
                                        name: 'ThirdPage',
                                        params: {someParam: 'reset'},
                                    },
                                ],
                            })
                        }
                        />
                        <Button
                        title="Go to First Page"
                        onPress={() =>
                        navigation.navigate('Firstpage')}
                        />
                        <Button
                        title="Go to Third Page"
                        onPress={() =>
                        navigation.navigate(
                            'Thirdpage', { someParam: 'Param1' }
                        )
                        }
                    />
            </View>
            <Text style ={{
                fontSize: 18,
                textAlign: 'center',
                color: 'grey'
            }}>
            
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

export default SecondPage;