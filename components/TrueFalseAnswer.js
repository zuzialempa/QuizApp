import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
class TrueFalseAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        }
    }
    render() {
        const { value } = this.state;
        const { answer, indexOfAnswer, indexOfQuestion, changeCorrectAnswer, showCorrectAnswers } = this.props;
        return <View style={styles.container} key={indexOfAnswer}>
            <Switch
                value={value}
                onValueChange={(event) => {
                    changeCorrectAnswer(event, indexOfQuestion, indexOfAnswer);
                    this.setState({ value: event })
                }}
            />
            <Text style={(showCorrectAnswers && answer.correct === value && styles.correct)
                || (showCorrectAnswers && answer.correct !== value && styles.incorrect)}>{answer.text}</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        margin: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '85%'
    },
    correct: {
        color: 'green'
    },
    incorrect: {
        color: 'red'
    }
});
export default TrueFalseAnswer;