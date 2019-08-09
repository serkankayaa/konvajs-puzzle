const game1Medium = {
    rect: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 300, 300, 300, 300, 0],
        name: "rect",
        fill: '',
        stroke: 'green',
        strokeWidth: 2,
        closed: true,
        globalCompositeOperation: '',
        isTarget: true,
    }),

    poly: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 180, 150, 180, 150, 90],
        fill: '#416f95',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 350, y: 100 }
    }),

    poly2: ({
        x: 500,
        y: 100,
        points: [0, 0, 150, 90, 150, 90, 150, 0],
        fill: '#416f95',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 500, y: 100 }
    }),

    poly3: ({
        x: 760,
        y: 100,
        points: [0, 0, 0, 120, 180, 120, 90, 0],
        fill: '#73b6ae',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 470, y: 280 }
    }),

    poly3R1: ({
        x: 760,
        y: 100,
        points: [0, 0, 0, 180, 120, 90, 120, 0],
        fill: '#73b6ae',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 470, y: 280 }
    }),

    poly3R2: ({
        x: 760,
        y: 100,
        points: [0, 0, 90, 120, 180, 120, 180, 0],
        fill: '#73b6ae',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 470, y: 280 }
    }),

    poly3R3: ({
        x: 760,
        y: 100,
        points: [0, 90, 0, 180, 120, 180, 120, 0],
        fill: '#73b6ae',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 470, y: 280 }
    }),

    poly4: ({
        x: 560,
        y: 280,
        points: [0, 0, 90, 120, 90, 90, 90, 0],
        fill: '#6f9a71',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 560, y: 280 }
    }),

    poly5: ({
        x: 700,
        y: 210,
        points: [0, 0, 300, 180, 300, 90, 150, 0],
        fill: '#bfbb61',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: false,
        targetCoors: { x: 350, y: 100 }
    }),

    poly5R1: ({
        x: 900,
        y: 210,
        points: [0, 300, 90, 300, 180, 150, 180, 0],
        fill: '#bfbb61',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 350, y: 100 }
    }),

    poly5R2: ({
        x: 900,
        y: 210,
        points: [0, 0, 0, 90, 150, 180, 300, 180],
        fill: '#bfbb61',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 350, y: 100 }
    }),

    poly5R3: ({
        x: 900,
        y: 210,
        points: [0, 150, 0, 300, 180, 0, 90, 0],
        fill: '#bfbb61',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        targetCoors: { x: 350, y: 100 }
    }),

    poly6: ({
        x: 850,
        y: 250,
        points: [0, 90, 150, 90, 150, 90, 0, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: '#e28b40',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: false,
        targetCoors: { x: 500, y: 190 }
    }),

    poly6R1: ({
        x: 750,
        y: 250,
        points: [0, 0, 0, 150, 0, 150, 90, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: '#e28b40',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 500, y: 190 }
    }),

    poly6R2: ({
        x: 750,
        y: 250,
        points: [0, 0, 150, 90, 150, 90, 150, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: '#e28b40',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 500, y: 190 }
    }),

    poly6R3: ({
        x: 750,
        y: 250,
        points: [0, 0, 150, 90, 150, 90, 150, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: '#e28b40',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        targetCoors: { x: 500, y: 190 }
    }),

    poly7: ({
        x: 950,
        y: 70,
        points: [0, 0, 0, 120, 120, 120, 120, 0],
        name: "poly7",
        stroke: 'black',
        strokeWidth: 1,
        fill: '#b53d5a',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isSquare: true,
        isCorrect: true,
        targetCoors: { x: 350, y: 280 }
    }),
}

const game2Medium = {
    rect: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 350, 350, 350, 350, 0],
        name: "rect",
        fill: '',
        stroke: 'green',
        strokeWidth: 2,
        closed: true,
        globalCompositeOperation: '',
        isTarget: true,
    }),

    poly: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 100, 175, 100, 175, 100],
        fill: '#c4647e',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 350, y: 100 }
    }),

    poly2: ({
        x: 525,
        y: 100,
        points: [0, 100, 0, 100, 175, 100, 175, 0],
        fill: '#6b4f7c',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 525, y: 100 },
    }),

    poly3: ({
        x: 350,
        y: 200,
        points: [0, 150, 175, 150, 175, 150, 0, 0],
        fill: '#6d91b2',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly4: ({
        x: 825,
        y: 350,
        points: [0, 0, 0, 100, 0, 100, 175, 0],
        fill: '#537968',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 350 }
    }),

    poly5: ({
        x: 520,
        y: 350,
        points: [0, 100, 180, 100, 180, 0, 180, 0],
        fill: '#96ce9d',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 520, y: 350 },
    }),

    poly6: ({
        x: 350,
        y: 100,
        points: [0, 0, 175, 100, 175, 100, 175, 0],
        fill: '#fab660',
        stroke: 'black',
        name: "poly6",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 100 },
    }),

    poly7: ({
        x: 525,
        y: 100,
        points: [0, 0, 0, 100, 0, 100, 175, 0],
        fill: '#dd6455',
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 525, y: 100 },
    }),

    poly8: ({
        x: 900,
        y: 240,
        points: [0, 0, 175, 150, 175, 150, 175, 0],
        fill: '#dd6455',
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: false,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8R1: ({
        x: 900,
        y: 240,
        points: [0, 150, 150, 150, 150, 0, 150, 0],
        fill: '#dd6455',
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly9: ({
        x: 525,
        y: 200,
        points: [0, 0, 0, 75, 175, 75, 175, 0],
        fill: '#e36b80',
        stroke: 'black',
        name: "poly9",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 525, y: 200 }
    }),

    poly10: ({
        x: 750,
        y: 150,
        points: [0, 0, 0, 75, 175, 75, 175, 0],
        fill: '#fab660',
        stroke: 'black',
        name: "poly10",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 525, y: 275 }
    }),

    poly10R1: ({
        x: 750,
        y: 150,
        points: [0, 0, 0, 150, 75, 150, 75, 0],
        fill: '#fab660',
        stroke: 'black',
        name: "poly10",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
        targetCoors: { x: 525, y: 275 }
    }),

    poly11: ({
        x: 800,
        y: 400,
        points: [0, 100, 175, 100, 350, 0, 175, 0],
        fill: '#96396f',
        stroke: 'black',
        name: "poly11",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 350 }
    }),
}

const game3Medium = {
    rect: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 300, 300, 300, 300, 0],
        name: "rect",
        fill: '',
        stroke: 'green',
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: '',
        isTarget: true,
    }),

    poly: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 100, 100, 100, 100, 0],
        fill: '#73b6ae',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        isSquare: true,
        targetCoors: { x: 350, y: 100 }
    }),

    poly2: ({
        x: 450,
        y: 100,
        points: [0, 0, 0, 100, 0, 100, 100, 0],
        fill: '#bfbb61',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 450, y: 100 },
    }),

    poly3: ({
        x: 550,
        y: 100,
        points: [0, 0, 0, 100, 100, 100, 100, 0],
        fill: '#b53d5a',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        isSquare: true,
        targetCoors: { x: 550, y: 100 }
    }),

    poly4: ({
        x: 550,
        y: 200,
        points: [0, 0, 0, 200, 100, 200, 100, 0],
        fill: '#6b4f7c',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 550, y: 200 }
    }),

    poly5: ({
        x: 750,
        y: 200,
        points: [0, 100, 0, 100, 100, 200, 100, 0],
        fill: '#6d91b2',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: false,
        targetCoors: { x: 450, y: 100 },
    }),

    poly5R1: ({
        x: 750,
        y: 200,
        points: [0, 100, 200, 100, 100, 0, 100, 0],
        fill: '#6d91b2',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: true,
        targetCoors: { x: 450, y: 100 },
    }),

    poly5R2: ({
        x: 750,
        y: 200,
        points: [0, 0, 0, 200, 100, 100, 100, 100],
        fill: '#6d91b2',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 450, y: 100 },
    }),

    poly5R3: ({
        x: 750,
        y: 200,
        points: [0, 0, 100, 100, 100, 100, 200, 0],
        fill: '#6d91b2',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 450, y: 100 },
    }),

    poly6: ({
        x: 750,
        y: 100,
        points: [0, 0, 0, 100, 100, 100, 100, 0],
        fill: '#96ce9d',
        stroke: 'black',
        name: "poly6",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        draggable: true,
        isCorrect: true,
        visible: true,
        isSquare: true,
        targetCoors: { x: 450, y: 300 }
    }),

    poly7: ({
        x: 830,
        y: 350,
        points: [0, 0, 100, 100, 200, 100, 100, 0],
        fill: '#fab660',
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: false,
        targetCoors: { x: 350, y: 200 }
    }),

    poly7R1: ({
        x: 830,
        y: 350,
        points: [0, 100, 0, 200, 100, 100, 100, 0],
        fill: '#fab660',
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8: ({
        x: 850,
        y: 150,
        points: [0, 0, 0, 200, 100, 200, 100, 100],
        fill: '#8e719c',
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: false,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8R1: ({
        x: 850,
        y: 150,
        points: [0, 0, 0, 100, 100, 100, 200, 0],
        fill: '#8e719c',
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8R2: ({
        x: 850,
        y: 150,
        points: [0, 0, 0, 100, 100, 200, 100, 0],
        fill: '#8e719c',
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8R3: ({
        x: 850,
        y: 150,
        points: [0, 100, 200, 100, 200, 0, 100, 0],
        fill: '#8e719c',
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 350, y: 200 }
    }),
}

const game1Easy = {
    rect: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 250, 250, 250, 250, 0],
        name: "rect",
        fill: '',
        stroke: 'green',
        strokeWidth: 2,
        closed: true,
        globalCompositeOperation: '',
        isTarget: true,
    }),

    poly: ({
        x: 350,
        y: 225,
        points: [0, 0, 0, 125, 125, 125, 125, 0],
        fill: 'green',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        isSquare: true,
        targetCoors: { x: 350, y: 225 }
    }),

    poly2: ({
        x: 475,
        y: 100,
        points: [0, 125, 0, 250, 125, 250, 125, 0],
        fill: '#2ECC71',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,  
        targetCoors: { x: 475, y: 100 }
    }),

    poly3: ({
        x: 700,
        y: 200,
        points: [0, 0, 0, 125, 125, 125, 125, 125],
        fill: 'orange',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        draggable: true,
        visible: false,  
        targetCoors: { x: 350, y: 100 }
    }),

    poly3R1: ({
        x: 700,
        y: 200,
        points: [0, 0, 0, 125, 0, 125, 125, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        draggable: true,
        visible: false,  
        targetCoors: { x: 350, y: 100 }
    }),

    poly3R2: ({
        x: 700,
        y: 200,
        points: [0, 0, 125, 125, 125, 125, 125, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        draggable: true,
        visible: false,  
        targetCoors: { x: 350, y: 100 }
    }),

    poly3R3: ({
        x: 700,
        y: 200,
        points: [0, 125, 125, 125, 125, 0, 125, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        draggable: true,
        visible: true,  
        targetCoors: { x: 350, y: 100 }
    }),

    poly4: ({
        x: 700,
        y: 100,
        points: [0, 0, 125, 125, 125, 125, 250, 0],
        fill: 'red',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        draggable: true,
        visible: false,  
        targetCoors: { x: 350, y: 100 }
    }),

    poly4R1: ({
        x: 700,
        y: 100,
        points: [0, 125, 0, 125, 125, 250, 125, 0],
        fill: 'red',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        draggable: true,
        visible: false,  
        targetCoors: { x: 350, y: 100 }
    }),

    poly4R2: ({
        x: 700,
        y: 100,
        points: [0, 125, 250, 125, 125, 0, 125, 0],
        fill: 'red',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        draggable: true,
        visible: true,  
        targetCoors: { x: 350, y: 100 }
    }),

    poly4R3: ({
        x: 700,
        y: 100,
        points: [0, 0, 0, 250, 125, 125, 125, 125],
        fill: 'red',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        draggable: true,
        visible: false,  
        targetCoors: { x: 350, y: 100 }
    }),
}

var game1 = game1Medium;
var game2 = game2Medium;
var game3 = game3Medium;
var game4 = game1Easy;