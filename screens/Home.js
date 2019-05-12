import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import quizList from '../quizresources/quizList.js';
import ListItem from '../components/ListItem.js';
const Home = ({ navigation }) => {
    const data = Object.keys(quizList.quizList);
    return <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={({ item, index }) => <ListItem item={item} index={index} navigation={navigation} />}
        />
    </View>
}
export default Home;
const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        height: 800,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});