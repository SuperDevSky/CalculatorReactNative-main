import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

const nums = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '.', '=']
]

const operations = [
    "+", "-", "*", "/", "C"
]

export class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: '',
            calculation: '',
        }
    }

    handleClick = (e) => {
        if (e !== '=' && e !== "C") {
            this.setState({
                result : this.state.result + e
            })
        }
        else if (e === "="){
            this.setState ({
                calculation: eval(this.state.result)
            })
        }
        else if (e === "C") {
            this.setState({
                result: '',
                calculation: '',
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>
                        {this.state.result}
                    </Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>
                        {this.state.calculation}
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {nums.map((row, index) => {
                            return (
                                <View style={styles.row} key={index}>
                                    {row.map((num, i) => {
                                        return (
                                            <TouchableOpacity style={styles.btn} onPress={() => this.handleClick(num)} key={i} >
                                                <Text style={styles.btnText}>{num}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.operations}>
                        {operations.map((operation, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.btn} onPress={() => this.handleClick(operation)}>
                                    <Text style={styles.btnText}>{operation}</Text>
                                </TouchableOpacity>
                            )
                        })}
                        
                    </View>
                </View>
            </View>
        )
    }
}

export default index

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    result: {
        flex: 2,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    calculation : {
        flex: 1,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    buttons : {
        flexDirection: 'row',   
        flex: 7,
    },
    numbers : {
        backgroundColor: '#5e5e5e',
        flex: 3
    },
    operations : {
        backgroundColor : '#5e5e5e',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    row : {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    calculationText: {
        fontSize: 30,
        color: '#3e3e3e',
    },
    resultText: {
        fontSize: 40,
        color: 'black',
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#3e3e3e',
        borderColor: '#5e5e5e',
        borderWidth: 0.5,
    },
    btnText: {
        fontSize: 25,
        color: 'white'
    },
})