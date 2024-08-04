import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    myQuestion = [
        {
            id:"Question 1",
            question : "Is it good to use for loop over iterator",
            answers : {
                a:"Yes",
                b:"No"
            },
            correctAnswer:"b"

        },
        {
            id:"Question 2",
            question : "Static variable is there or not",
            answers : {
                a:"Yes",
                b:"No"
            },
            correctAnswer:"b"

        },
        {
            id:"Question 3",
            question : "Sales cloud and service cloud are different",
            answers : {
                a:"Yes",
                b:"No"
            },
            correctAnswer:"a"

        }
    ]
}