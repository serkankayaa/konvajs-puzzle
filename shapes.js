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
        fill: 'purple',
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
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 500, y: 100 }
    }),

    poly3: ({
        x: 800,
        y: 100,
        points: [0, 0, 0, 120, 180, 120, 90, 0],
        fill: 'green',
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
        x: 800,
        y: 100,
        points: [0, 0, 0, 180, 120, 90, 120, 0],
        fill: 'green',
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
        x: 800,
        y: 100,
        points: [0, 0, 90, 120, 180, 120, 180, 0],
        fill: 'green',
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
        x: 800,
        y: 100,
        points: [0, 90, 0, 180, 120, 180, 120, 0],
        fill: 'green',
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
        fill: 'blue',
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
        fill: 'yellow',
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
        fill: 'yellow',
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
        fill: 'yellow',
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
        fill: 'yellow',
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
        fill: '#34495E',
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
        fill: '#34495E',
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
        fill: '#34495E',
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
        fill: '#34495E',
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
        fill: '#663300',
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
        points: [0, 0, 0, 350, 300, 350, 300, 0],
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
        points: [0, 100, 150, 100, 150, 100, 0, 0],
        fill: 'green',
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
        points: [0, 100, 0, 100, 150, 100, 150, 0],
        fill: 'maroon',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 500, y: 100 },
    }),

    poly3: ({
        x: 350,
        y: 200,
        points: [0, 150, 150, 150, 150, 150, 0, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly3",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly4: ({
        x: 350,
        y: 350,
        points: [0, 0, 0, 100, 0, 100, 150, 0],
        fill: 'blue',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 350 }
    }),

    poly5: ({
        x: 500,
        y: 350,
        points: [0, 100, 0, 100, 150, 100, 150, 0],
        fill: 'yellow',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 500, y: 350 },
    }),

    poly6: ({
        x: 700,
        y: 200,
        points: [0, 0, 150, 100, 150, 100, 300, 0],
        fill: '#28A0D5', //açık mavi üçgen
        stroke: 'black',
        name: "poly6",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 100 },
    }),

    poly6R1: ({
        x: 700,
        y: 200,
        points: [0, 150, 0, 150, 100, 300, 100, 0],
        fill: '#28A0D5', //açık mavi üçgen
        stroke: 'black',
        name: "poly6",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 350, y: 100 },
    }),

    poly6R2: ({
        x: 700,
        y: 200,
        points: [0, 100, 300, 100, 150, 0, 150, 0],
        fill: '#28A0D5', //açık mavi üçgen
        stroke: 'black',
        name: "poly6",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 350, y: 100 },
    }),

    poly6R3: ({
        x: 700,
        y: 200,
        points: [0, 0, 0, 300, 100, 150, 100, 150],
        fill: '#28A0D5', //açık mavi üçgen
        stroke: 'black',
        name: "poly6",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 350, y: 100 },
    }),

    poly7: ({
        x: 800,
        y: 300,
        points: [0, 0, 150, 150, 150, 150, 150, 0],
        fill: '#DAF7A6', //ten rengi üçgen
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 500, y: 200 }
    }),

    poly7R1: ({
        x: 800,
        y: 300,
        points: [0, 150, 0, 150, 150, 150, 150, 0],
        fill: '#DAF7A6', //ten rengi üçgen
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 500, y: 200 }
    }),

    poly7R2: ({
        x: 800,
        y: 300,
        points: [0, 150, 150, 150, 150, 150, 0, 0],
        fill: '#DAF7A6', //ten rengi üçgen
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 500, y: 200 }
    }),

    poly7R3: ({
        x: 800,
        y: 300,
        points: [0, 0, 0, 150, 0, 150, 150, 0],
        fill: '#DAF7A6', //ten rengi üçgen
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 500, y: 200 }
    }),

    poly8: ({
        x: 700,
        y: 50,
        points: [0, 0, 150, 150, 300, 150, 150, 0],
        fill: '#5D6D7E', //gri yamuk
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8R1: ({
        x: 700,
        y: 300,
        points: [0, 150, 0, 300, 150, 150, 150, 0],
        fill: '#5D6D7E', //gri yamuk rotate 90
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

    poly9: ({
        x: 800,
        y: 400,
        points: [0, 100, 150, 100, 300, 0, 150, 0],
        fill: '#8E44AD', // mor yamuk
        stroke: 'black',
        name: "poly9",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 350, y: 350 }
    }),

    poly9R1: ({
        x: 800,
        y: 400,
        points: [0, 0, 0, 150, 100, 300, 100, 150],
        fill: '#8E44AD', // mor yamuk rotate 90
        stroke: 'black',
        name: "poly9",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
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
        strokeWidth: 2,
        closed: true,
        globalCompositeOperation: '',
        isTarget: true,
    }),

    poly: ({
        x: 350,
        y: 100,
        points: [0, 0, 0, 100, 100, 100, 100, 0],
        fill: 'green',
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
        fill: 'maroon',
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
        fill: '#5D6D7E',
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
        fill: '#008080',
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
        fill: '#800080', // mor üçgen
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 450, y: 100 },
    }),

    poly5R1: ({
        x: 750,
        y: 200,
        points: [0, 100, 200, 100, 100, 0, 100, 0],
        fill: '#800080', // mor üçgen rotate 90
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

    poly5R2: ({
        x: 750,
        y: 200,
        points: [0, 0, 0, 200, 100, 100, 100, 100],
        fill: '#800080', // mor üçgen rotate 180
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
        fill: '#800080', // mor üçgen rotate 270
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
        fill: 'green', // yeşil kare
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
        fill: '#000080', // lacivert yamuk
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly7R1: ({
        x: 830,
        y: 350,
        points: [0, 100, 0, 200, 100, 100, 100, 0],
        fill: '#000080', // lacivert yamuk rotate 90
        stroke: 'black',
        name: "poly7",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: false,
        visible: false,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8: ({
        x: 850,
        y: 150,
        points: [0, 0, 0, 200, 100, 200, 100, 100],
        fill: '#5299E5', // açık mavi yamuk
        stroke: 'black',
        name: "poly8",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 350, y: 200 }
    }),

    poly8R1: ({
        x: 850,
        y: 150,
        points: [0, 0, 0, 100, 100, 100, 200, 0],
        fill: '#5299E5', // açık mavi yamuk rotate 90
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

    poly8R2: ({
        x: 850,
        y: 150,
        points: [0, 0, 0, 100, 100, 200, 100, 0],
        fill: '#5299E5', // açık mavi yamuk rotate 180
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
        fill: '#5299E5', // açık mavi yamuk rotate 270
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


var game1 = game1Medium;
var game2 = game2Medium;
var game3 = game3Medium;