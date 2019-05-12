import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import all from '../quizresources/quizList.js';
import TrueFalseQuestion from '../components/TrueFalseQuestion.js';
import { Button } from 'react-native-elements';
class TrueFalse extends Component {
    constructor(props) {
        super(props);
        const name = props.navigation.getParam('name', '');
        const correctArray = all[name].list.map(q => q.answer.map(a => false));
        const maxNum = correctArray.map(item => item.filter((v) => (v === false)).length).reduce((prev, curr) => { return prev + curr });
        this.data = all[name];
        this.maxAnswers = maxNum;
        this.state = {
            answers: correctArray, //which answers are correct
            correctNumber: 0,
            showScore: false,
            showCorrectAnswers: false,
        };
        this.changeCorrectAnswer = this.changeCorrectAnswer.bind(this);
    }
    changeCorrectAnswer(value, indexOfQuestion, indexOfAnswer) {
        const { answers } = this.state;
        answers[indexOfQuestion][indexOfAnswer] = value;
        this.setState({ answers });
    }
    render() {
        const { showScore, answers, correctNumber, showCorrectAnswers } = this.state;
        const { data, maxAnswers } = this;
        return <View style={styles.container}>
            {data.list.map((question, index) => <TrueFalseQuestion
                question={question}
                index={index}
                changeCorrectAnswer={this.changeCorrectAnswer}
                showCorrectAnswers={showCorrectAnswers}
            />)}
            {showScore && <Text>Correct: {correctNumber}/{maxAnswers}</Text>}
            <Button
                title='Check'
                onPress={() => {
                    const correctNumber = answers.map((question, indexQ) =>
                        question.filter((answer, indexA) => answer === data.list[indexQ]['answer'][indexA].correct).length
                    ).reduce((prev, curr) => prev + curr);
                    this.setState({ showScore: true, correctNumber, showCorrectAnswers: true })
                }}
            />
        </View>
    }
}
export default TrueFalse;

const styles = StyleSheet.create({
    container: {
        margin: '2%'
    },
});