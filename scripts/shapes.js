const game1Easy = {
    gameTarget: ({
        x: 351,
        y: 139,
        points: [0, 0, 0, 54, 62, 54, 115, 26, 62, 0],
        name: 'target',
        fill: 'blue',
        closed: true,
        draggable: false,
        isTarget: true
    }),
    leftSide:({
        x: 275,
        y: 44,
        points: [5, 146, 76, 283, 155, 283, 155, 173, 95, 173, 95, 119, 155, 119, 155, 10, 76, 10],
        name: 'leftSide',
        fill: '#A2195F',
        closed: true,
        draggable: false
    }),
    rightSide:({
        x: 275,
        y: 44,
        points: [155, 10, 155, 119, 205, 145, 155, 173, 155, 283, 234, 283, 305, 145, 234, 10],
        name: 'rightSide',
        fill: '#A2195F',
        closed: true,
        draggable: false
    }),
    poly: ({
        x: 100,
        y: 300,
        points: [0, 0, 0, 54, 62, 54, 62, 0],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isSquare: true,
        isCorrect: true,
        targetCoors: {x: 488, y: 223}
    }),
    poly2: ({
        x: -80,
        y: 300,
        points: [0, 0, 0, 54, 53, 26, 0, 0],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: true,
        targetCoors: {x: 550, y: 223},
        visible: false
    }),
    poly2R1: ({
        x: -80,
        y: 300,
        points: [0, 0, 26, 53, 54, 0, 0, 0],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 550, y: 223},
        visible: true
    }),
    poly2R2: ({
        x: -80,
        y: 300,
        points: [0, 26, 53, 54, 53, 0, 0, 26],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 550, y: 223},
        visible: false
    }),
    poly2R3: ({
        x: -80,
        y: 400,
        points: [0, 53, 54, 53, 26, 0, 0, 53],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 550, y: 223},
        visible: false
    })
}
const game2Easy = {
    gameTarget: ({
        x: 488,
        y: 223,
        points: [0, 54, 60, 54, 110, 26, 60, 0],
        name: 'target',
        fill: 'white',
        closed: true,
        draggable: false,
        isTarget: true
    }),
    leftSide:({
        x: 393,
        y: 104,
        points: [5, 146, 76, 283, 155, 283, 155, 173, 95, 173, 155, 119, 155, 10, 76, 10],
        name: 'leftSide',
        fill: '#A2195F',
        closed: true,
        draggable: false
    }),
    rightSide:({
        x: 393,
        y: 104,
        points: [155, 10, 155, 119, 205, 145, 155, 173, 155, 283, 234, 283, 305, 145, 234, 10],
        name: 'rightSide',
        fill: '#A2195F',
        closed: true,
        draggable: false
    }),
    poly: ({
        x: 40,
        y: 300,
        points: [60, 0, 60, 54, 110, 26, 60, 0],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: true,
        targetCoors: {x: 488, y: 223},
        visible: false
    }),
    polyR1: ({
        x: 40,
        y: 300,
        points: [60, 0, 85, 50, 110, 0, 60, 0],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 488, y: 223},
        visible: true
    }),
    polyR2: ({
        x: 40,
        y: 300,
        points: [60, 26, 110, 54, 110, 0, 60, 26],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 488, y: 223},
        visible: false
    }),
    polyR3: ({
        x: 40,
        y: 300,
        points: [60, 54, 110, 54, 85, 0, 60, 54],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 488, y: 223},
        visible: false
    }),
    poly2: ({
        x: 100,
        y: 300,
        points: [95, 173, 155, 173, 155, 119, 95, 173],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: true,
        targetCoors: {x: 393, y: 104},
        visible: false
    }),
    poly2R1: ({
        x: -80,
        y: 175,
        points: [95, 119, 95, 173, 155, 173, 95, 119],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 393, y: 104},
        visible: true
    }),
    poly2R2: ({
        x: 100,
        y: 300,
        points: [95, 119, 95, 173, 155, 119, 95, 119],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 393, y: 104},
        visible: false
    }),
    poly2R3: ({
        x: 100,
        y: 300,
        points: [95, 119, 155, 173, 155, 119, 95, 119],
        fill: '#A2195F',
        name: 'poly2',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 393, y: 104},
        visible: false
    }),
}

const game1Medium = {
    gameTarget: ({
        x: 488,
        y: 223,
        points: [0, 0, 0, 54, 60, 54, 135, 0],
        name: 'target',
        fill: 'white',
        closed: true,
        draggable: false,
        isTarget: true
    }),
    leftSide:({
        x: 393,
        y: 104,
        points: [5, 146, 76, 283, 155, 283, 155, 173, 95, 173, 95, 119, 155, 119, 155, 10, 76, 10],
        name: 'leftSide',
        fill: '#A2195F',
        closed: true,
        draggable: false
    }),
    rightSide:({
        x: 393,
        y: 104,
        points: [155, 10, 155, 119, 230, 119, 155, 173, 155, 283, 234, 283, 305, 145, 234, 10],
        name: 'rightSide',
        fill: '#A2195F',
        closed: true,
        draggable: false
    }),
    poly: ({
        x: 40,
        y: 300,
        points: [0, 0, 0, 54, 60, 54, 60, 0],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: true,
        targetCoors: {x: 488, y: 223},
        visible: true,
        isSquare: true
    }),
    poly2: ({
        x: 40,
        y: 300,
        points: [60, 0, 60, 54, 85, 36, 60, 0],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: true,
        targetCoors: {x: 488, y: 223},
        visible: true,
        isSquare: true
    }),
    poly2R1: ({
        x: 400,
        y: 300,
        points: [60, 0, 85, 25, 120, 0, 60, 0],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: false,
        targetCoors: {x: 488, y: 223},
        visible: true,
        isSquare: true
    }),
    poly3: ({
        x: 300,
        y: 300,
        points: [60, 0, 85, 36, 135, 0, 60, 0],
        fill: '#A2195F',
        name: 'poly',
        closed: true,
        draggable: true,
        isCorrect: true,
        targetCoors: {x: 488, y: 223},
        visible: true,
        isSquare: true
    }),
}

// const game1Easy = {
//     rect: ({
//         x: 350,
//         y: 100,
//         points: [0, 0, 0, 250, 250, 250, 250, 0],
//         name: "rect",
//         fill: '',
//         stroke: 'green',
//         strokeWidth: 2,
//         closed: true,
//         globalCompositeOperation: '',
//         isTarget: true,
//     }),

//     poly: ({
//         x: 350,
//         y: 225,
//         points: [0, 0, 0, 125, 125, 125, 125, 0],
//         fill: 'green',
//         stroke: 'black',
//         name: "poly",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: true,
//         visible: true,
//         isSquare: true,
//         targetCoors: { x: 350, y: 225 }
//     }),

//     poly2: ({
//         x: 475,
//         y: 100,
//         points: [0, 125, 0, 250, 125, 250, 125, 0],
//         fill: '#2ECC71',
//         stroke: 'black',
//         name: "poly2",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: true,
//         visible: true,  
//         targetCoors: { x: 475, y: 100 }
//     }),

//     poly3: ({
//         x: 700,
//         y: 200,
//         points: [0, 0, 0, 125, 125, 125, 125, 125],
//         fill: 'orange',
//         stroke: 'black',
//         name: "poly3",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: true,
//         draggable: true,
//         visible: false,  
//         targetCoors: { x: 350, y: 100 }
//     }),

//     poly3R1: ({
//         x: 700,
//         y: 200,
//         points: [0, 0, 0, 125, 0, 125, 125, 0],
//         fill: 'orange',
//         stroke: 'black',
//         name: "poly3",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: false,
//         draggable: true,
//         visible: false,  
//         targetCoors: { x: 350, y: 100 }
//     }),

//     poly3R2: ({
//         x: 700,
//         y: 200,
//         points: [0, 0, 125, 125, 125, 125, 125, 0],
//         fill: 'orange',
//         stroke: 'black',
//         name: "poly3",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: false,
//         draggable: true,
//         visible: false,  
//         targetCoors: { x: 350, y: 100 }
//     }),

//     poly3R3: ({
//         x: 700,
//         y: 200,
//         points: [0, 125, 125, 125, 125, 0, 125, 0],
//         fill: 'orange',
//         stroke: 'black',
//         name: "poly3",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: false,
//         draggable: true,
//         visible: true,  
//         targetCoors: { x: 350, y: 100 }
//     }),

//     poly4: ({
//         x: 700,
//         y: 100,
//         points: [0, 0, 125, 125, 125, 125, 250, 0],
//         fill: 'red',
//         stroke: 'black',
//         name: "poly4",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: true,
//         draggable: true,
//         visible: false,  
//         targetCoors: { x: 350, y: 100 }
//     }),

//     poly4R1: ({
//         x: 700,
//         y: 100,
//         points: [0, 125, 0, 125, 125, 250, 125, 0],
//         fill: 'red',
//         stroke: 'black',
//         name: "poly4",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: false,
//         draggable: true,
//         visible: false,  
//         targetCoors: { x: 350, y: 100 }
//     }),

//     poly4R2: ({
//         x: 700,
//         y: 100,
//         points: [0, 125, 250, 125, 125, 0, 125, 0],
//         fill: 'red',
//         stroke: 'black',
//         name: "poly4",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: false,
//         draggable: true,
//         visible: true,  
//         targetCoors: { x: 350, y: 100 }
//     }),

//     poly4R3: ({
//         x: 700,
//         y: 100,
//         points: [0, 0, 0, 250, 125, 125, 125, 125],
//         fill: 'red',
//         stroke: 'black',
//         name: "poly4",
//         strokeWidth: 1,
//         closed: true,
//         globalCompositeOperation: 'xor',
//         isCorrect: false,
//         draggable: true,
//         visible: false,  
//         targetCoors: { x: 350, y: 100 }
//     }),
// }

var game1 = game1Easy;
// var game2 = game2Medium;
// var game3 = game3Medium;
// var game4 = game1Easy;
var games = [];

games.push(game1);
