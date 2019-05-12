import React from 'react';
import { Text, View } from 'react-native';
import TrueFalseAnswer from './TrueFalseAnswer';
const TrueFalseQuestion = ({ question, changeCorrectAnswer, index, showCorrectAnswers }) => {
    return <View>
        <Text>{question.question}</Text>
        {question.answer.map((answer, indexOfAnswer) => <TrueFalseAnswer
            answer={answer}
            indexOfAnswer={indexOfAnswer}
            indexOfQuestion={index}
            changeCorrectAnswer={changeCorrectAnswer}
            showCorrectAnswers={showCorrectAnswers}
        />)}
    </View>
}
export default TrueFalseQuestion;