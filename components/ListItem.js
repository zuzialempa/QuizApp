import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const ListItem = ({ index, item, navigation }) =>
    <View style={styles.container}>
        <Text
            key={index}
            style={styles.text}
        >
            {item}
        </Text>
        <Button
            title="Solve"
            onPress={() => { navigation.navigate('TrueFalse', { name: item }) }}
        />
    </View>
const styles = StyleSheet.create({
    container: {
        margin: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginRight: '5%'
    }
});
export default ListItem;