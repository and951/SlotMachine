/*!
 * Use is subject to license terms.
 * Filename: general.constants.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        30/09/2018
 * Description: This configuration file is used to store constants of general use. 
 */

export const SLOT = {
    amountOfReels: 3,
    SLOT_SIZE: 210,
    THEMES: [{
        name: "DiceTheme",
        slots: [
            { name: '3BARS', icon: require('../assets/img/ThreeBars.png'), color: 'yellow' },
            { name: '2BARS', icon: require('../assets/img/TwoBars.png'), color: 'purple' },
            { name: '1BARS', icon: require('../assets/img/OneBar.png'), color: 'blue' },
            { name: 'SEVEN', icon: require('../assets/img/LuckySeven.png'), color: 'green' },
            { name: 'CHERRY', icon: require('../assets/img/Cherry.png'), color: 'red' },
        ],
        payTable: [{
            name: "TOP LINE", rules: {
                "4 4 4": { price: 2000, label: "THREE CHERRY SYMBOLS", color: "red" },
                "3 3 3": { price: 150, label: "THREE SEVEN SYMBOLS", color: "green" },
                "(3|4) (3|4) (3|4)": { price: 150, label: "ANY COMBINATION OF CHERRY AND SEVEN ", color: "green" },
                "2 2 2": { price: 10, label: "THREE 1BAR SYMBOLS", color: "blue" },
                "1 1 1": { price: 20, label: "THREE 2BAR SYMBOLS", color: "purple" },
                "0 0 0": { price: 50, label: "THREE 3BAR SYMBOLS", color: "yellow" },
                "(0|1|2) (0|1|2) (0|1|2)": { price: 50, label: "ANY BAR COMBINATION", color: "yellow" }
            },
            movement: 2
        }, {
            name: "CENTER LINE",
            rules: {
                "4 4 4": { price: 1000, label: "THREE CHERRY SYMBOLS", color: "red" },
                "3 3 3": { price: 150, label: "THREE SEVEN SYMBOLS", color: "green" },
                "(3|4) (3|4) (3|4)": { price: 150, label: "ANY COMBINATION OF CHERRY AND SEVEN ", color: "green" },
                "2 2 2": { price: 10, label: "THREE 1BAR SYMBOLS", color: "blue" },
                "1 1 1": { price: 20, label: "THREE 2BAR SYMBOLS", color: "purple" },
                "0 0 0": { price: 50, label: "THREE 3BAR SYMBOLS", color: "yellow" },
                "(0|1|2) (0|1|2) (0|1|2)": { price: 50, label: "ANY BAR COMBINATION", color: "yellow" }
            },
            movement: 1
        },
        {
            name: "BOTTOM LINE", rules: {
                "4 4 4": { price: 4000, label: "THREE CHERRY SYMBOLS", color: "red" },
                "3 3 3": { price: 150, label: "THREE SEVEN SYMBOLS", color: "green" },
                "(3|4) (3|4) (3|4)": { price: 150, label: "ANY COMBINATION OF CHERRY AND SEVEN ", color: "green" },
                "2 2 2": { price: 10, label: "THREE 1BAR SYMBOLS", color: "blue" },
                "1 1 1": { price: 20, label: "THREE 2BAR SYMBOLS", color: "purple" },
                "0 0 0": { price: 50, label: "THREE 3BAR SYMBOLS", color: "yellow" },
                "(0|1|2) (0|1|2) (0|1|2)": { price: 50, label: "ANY BAR COMBINATION", color: "yellow" }
            },
            movement: 0
        },
        ]
    },
    {
        name: "OriginalTheme",
        slots: [
            { name: '3BARS', icon: require('../assets/img/3xBAR.png'), color: 'yellow' },
            {
                name: '2BARS', icon: require('../assets/img/2xBAR.png'), color: 'purple'
            },
            { name: '1BARS', icon: require('../assets/img/BAR.png'), color: 'blue' },
            { name: 'SEVEN', icon: require('../assets/img/7.png'), color: 'green' },
            { name: 'CHERRY', icon: require('../assets/img/Cherry 2.png'), color: 'red' },
        ],
        payTable: [{
            name: "TOP LINE", rules: {
                "4 4 4": { price: 2000, label: "THREE CHERRY SYMBOLS", color: "red" },
                "3 3 3": { price: 150, label: "THREE SEVEN SYMBOLS", color: "green" },
                "(3|4) (3|4) (3|4)": { price: 150, label: "ANY COMBINATION OF CHERRY AND SEVEN ", color: "green" },
                "2 2 2": { price: 10, label: "THREE 1BAR SYMBOLS", color: "blue" },
                "1 1 1": { price: 20, label: "THREE 2BAR SYMBOLS", color: "purple" },
                "0 0 0": { price: 50, label: "THREE 3BAR SYMBOLS", color: "yellow" },
                "(0|1|2) (0|1|2) (0|1|2)": { price: 50, label: "ANY BAR COMBINATION", color: "yellow" }
            },
            movement: 2
        }, {
            name: "CENTER LINE",
            rules: {
                "4 4 4": { price: 1000, label: "THREE CHERRY SYMBOLS", color: "red" },
                "3 3 3": { price: 150, label: "THREE SEVEN SYMBOLS", color: "green" },
                "(3|4) (3|4) (3|4)": { price: 150, label: "ANY COMBINATION OF CHERRY AND SEVEN ", color: "green" },
                "2 2 2": { price: 10, label: "THREE 1BAR SYMBOLS", color: "blue" },
                "1 1 1": { price: 20, label: "THREE 2BAR SYMBOLS", color: "purple" },
                "0 0 0": { price: 50, label: "THREE 3BAR SYMBOLS", color: "yellow" },
                "(0|1|2) (0|1|2) (0|1|2)": { price: 50, label: "ANY BAR COMBINATION", color: "yellow" }
            },
            movement: 1
        },
        {
            name: "BOTTOM LINE", rules: {
                "4 4 4": { price: 4000, label: "THREE CHERRY SYMBOLS", color: "red" },
                "3 3 3": { price: 150, label: "THREE SEVEN SYMBOLS", color: "green" },
                "(3|4) (3|4) (3|4)": { price: 150, label: "ANY COMBINATION OF CHERRY AND SEVEN ", color: "green" },
                "2 2 2": { price: 10, label: "THREE 1BAR SYMBOLS", color: "blue" },
                "1 1 1": { price: 20, label: "THREE 2BAR SYMBOLS", color: "purple" },
                "0 0 0": { price: 50, label: "THREE 3BAR SYMBOLS", color: "yellow" },
                "(0|1|2) (0|1|2) (0|1|2)": { price: 50, label: "ANY BAR COMBINATION", color: "yellow" }
            },
            movement: 0
        },
        ]
    }
    ]

}

