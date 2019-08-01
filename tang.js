$(document).ready(function () {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var shapes = [];
    var seatedShapes = [];
    var rotateClick = 0;

    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();
    var rectX = stage.width() / 2 - 50;
    var rectY = stage.height() / 2 - 25;

    var rect = new Konva.Line({
        x: 350,
        y: 100,
        points: [0, 0, 0, 300, 300, 300, 300, 0],
        name: "rect",
        stroke: 'green',
        strokeWidth: 2,
        closed: true,
        isTarget: true,
    });

    var poly = new Konva.Line({
        x: 350,
        y: 100,
        points: [0, 0, 0, 180, 150, 180, 150, 90],
        fill: 'purple',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true
    });

    var polyR1 = new Konva.Line({
        x: 350,
        y: 100,
        points: [0, 0, 0, 150, 90, 150, 180, 0],
        fill: 'purple',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
    });

    var polyR2 = new Konva.Line({
        x: 350,
        y: 100,
        points: [0, 0, 0, 90, 150, 180, 150, 0],
        fill: 'purple',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var polyR3 = new Konva.Line({
        x: 350,
        y: 100,
        points: [90, 0, 0, 150, 180, 150, 180, 0],
        fill: 'purple',
        stroke: 'black',
        name: "poly",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly2 = new Konva.Line({
        x: 500,
        y: 200,
        points: [0, 0, 150, 90, 150, 90, 150, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true
    });

    var poly2R1 = new Konva.Line({
        x: 500,
        y: 200,
        points: [90, 0, 0, 150, 0, 150, 90, 150],
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly2R2 = new Konva.Line({
        x: 500,
        y: 200,
        points: [0, 90, 150, 90, 150, 90, 0, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly2R3 = new Konva.Line({
        x: 500,
        y: 200,
        points: [0, 0, 0, 150, 0, 150, 90, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        visible: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly3 = new Konva.Line({
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
        isCorrect: true
    });

    var poly3R1 = new Konva.Line({
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
        visible: false
    });

    var poly3R2 = new Konva.Line({
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
        visible: false
    });

    var poly3R3 = new Konva.Line({
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
        visible: false
    });

    var poly4 = new Konva.Line({
        x: 560,
        y: 280,
        points: [0, 0, 90, 120, 90, 90, 90, 0],
        fill: 'blue',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true
    });

    var poly4R1 = new Konva.Line({
        x: 560,
        y: 280,
        points: [0, 90, 0, 90, 120, 90, 120, 0],
        fill: 'blue',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly4R2 = new Konva.Line({
        x: 560,
        y: 280,
        points: [0, 120, 90, 120, 90, 120, 0, 0],
        fill: 'blue',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly4R3 = new Konva.Line({
        x: 560,
        y: 280,
        points: [0, 0, 0, 90, 0, 90, 120, 0],
        fill: 'blue',
        stroke: 'black',
        name: "poly4",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly5 = new Konva.Line({
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
        isCorrect: true
    });

    var poly5R1 = new Konva.Line({
        x: 700,
        y: 210,
        points: [0, 300, 90, 300, 180, 150, 180, 0],
        fill: 'yellow',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly5R2 = new Konva.Line({
        x: 700,
        y: 210,
        points: [0, 0, 0, 90, 150, 180, 300, 180],
        fill: 'yellow',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly5R3 = new Konva.Line({
        x: 700,
        y: 210,
        points: [0, 150, 0, 300, 180, 0, 90, 0],
        fill: 'yellow',
        stroke: 'black',
        name: "poly5",
        strokeWidth: 1,
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly6 = new Konva.Line({
        x: 850,
        y: 250,
        points: [0, 90, 150, 90, 150, 90, 0, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: 'gray',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isCorrect: true
    });

    var poly6R1 = new Konva.Line({
        x: 850,
        y: 250,
        points: [0, 0, 0, 150, 0, 150, 90, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: 'gray',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly6R2 = new Konva.Line({
        x: 850,
        y: 250,
        points: [0, 0, 150, 90, 150, 90, 150, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: 'gray',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false
    });

    var poly6R3 = new Konva.Line({
        x: 850,
        y: 250,
        points: [0, 0, 150, 90, 150, 90, 150, 0],
        name: "poly6",
        stroke: 'black',
        strokeWidth: 1,
        fill: 'gray',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        visible: false,
    });

    var poly7 = new Konva.Line({
        x: 900,
        y: 150,
        points: [0, 0, 0, 120, 120, 120, 120, 0],
        name: "poly7",
        stroke: 'black',
        strokeWidth: 1,
        fill: '#663300',
        closed: true,
        draggable: true,
        globalCompositeOperation: 'xor',
        isSquare: true
    });

    shapes.push(poly, polyR1, polyR2,
        polyR3, poly2, poly2R1,
        poly2R2, poly2R3, poly3, poly3R1, poly3R2, poly3R3,
        poly4, poly4R1, poly4R2, poly4R3,
        poly5, poly5R1, poly5R2, poly5R3, poly6, poly6R1, poly6R2, poly6R3, poly7);

    seatedShapes.push(poly, poly2, poly4);

    snapToWall(rect, 20);
    snapToAll(5);
    autoAddShapes(shapes, rect);

    function autoAddShapes(shapes, rect) {
        layer.add(rect);
        shapes.forEach(element => {
            layer.add(element);
        });

        stage.add(layer);
    }

    //Snap Shapes Method
    function checkSnap(x, y, snapShape, targetSnapShape, tolerance) {
        targetSnapShape.forEach(element => {
            var offsetX = snapShape.x();
            var offsetY = snapShape.y();

            var fark = offsetX + x - element.x();

            if (Math.abs(fark) < tolerance) {
                snapShape.x(snapShape.x() - fark);
                layer.batchDraw();
                offsetX = snapShape.x();
            }

            fark = offsetY + y - element.position().y;

            if (Math.abs(fark) < tolerance) {
                snapShape.y(snapShape.y() - fark);
                layer.batchDraw();
                offsetY = snapShape.y();
            }

            fark = offsetX + x - element.x() - element.width();

            if (Math.abs(fark) < tolerance) {
                snapShape.x(snapShape.x() - fark);
                layer.batchDraw();
            }

            fark = offsetY + y - element.position().y - element.height();

            if (Math.abs(fark) < tolerance) {
                snapShape.y(snapShape.y() - fark);
                layer.batchDraw();
            }
        });
    }

    //Şekillerin sadece duvara snaplenmesi için.
    function checkSnapTarget(x, y, snapShape, targetSnapShape, tolerance) {
        var offsetX = snapShape.x();
        var offsetY = snapShape.y();

        var fark = offsetX + x - targetSnapShape.x();

        if (Math.abs(fark) < tolerance) {
            snapShape.x(snapShape.x() - fark);
            layer.draw();
            offsetX = snapShape.x();
        }

        fark = offsetY + y - targetSnapShape.position().y;

        if (Math.abs(fark) < tolerance) {
            snapShape.y(snapShape.y() - fark);
            layer.draw();
            offsetY = snapShape.y();
        }

        fark = offsetX + x - targetSnapShape.x() - targetSnapShape.width();

        if (Math.abs(fark) < tolerance) {
            snapShape.x(snapShape.x() - fark);
            layer.draw();
        }

        fark = offsetY + y - targetSnapShape.position().y - targetSnapShape.height();

        if (Math.abs(fark) < tolerance) {
            snapShape.y(snapShape.y() - fark);
            layer.draw();
        }

        return Math.abs(offsetX + x - targetSnapShape.position().x) < 10 || Math.abs(offsetY + y - targetSnapShape.position().y) < 10;
    }

    //Şekiller kendi arasında snapleniyor.
    function snapToAll(tolerance) {
        shapes.forEach(function (snapShape) {
            snapShape.on('dragend', function () {
                var shapePoints = snapShape.points();

                for (var i = 0; i < shapePoints.length / 2; i++) {
                    checkSnap(shapePoints[2 * i], shapePoints[2 * i + 1], snapShape, shapes, tolerance);
                }
            });
        });
    }

    //Şekiller duvara snapleniyor.
    function snapToWall(targetSnapShape, tolerance) {
        shapes.forEach(function (snapShape) {
            snapShape.on('dragend', function () {
                var shapePoints = snapShape.points();

                for (var i = 0; i < shapePoints.length / 2; i++) {
                    checkSnapTarget(shapePoints[2 * i], shapePoints[2 * i + 1], snapShape, targetSnapShape, tolerance);
                }
            });
        });
    }

    var prevSelectedShape = "";
    var shapeRotate = new Konva.Line();
    var checkSelected = false;
    var rotateShapes = [];

    layer.on('click', function (e) {
        var selectedShape = e.target;

        if (selectedShape.attrs.isTarget) {
            return;
        }

        if (prevSelectedShape == selectedShape) {
            return;
        }

        if (prevSelectedShape != "") {
            prevSelectedShape.stroke("black");
            prevSelectedShape.strokeWidth(1);
        }

        prevSelectedShape = selectedShape;

        checkSelected = true;

        if (checkSelected) {
            selectedShape.stroke("#99cc00");
            selectedShape.strokeWidth(2);
            layer.draw();
        }

        shapeRotate = prepareRotate(selectedShape);

        if (shapeRotate.attrs.isSquare) {
            return;
        }

        if (rotateShapes.length <= 0) {
            shapes.forEach(element => {
                if (shapeRotate.attrs.name == element.attrs.name) {
                    rotateShapes.push(element);
                }

                rotateShapes.sort();
            });
        } else if (rotateShapes.length > 0) {
            rotateShapes.forEach(element => {
                if (shapeRotate.attrs.name != element.attrs.name) {
                    rotateShapes = [];
                    rotateClick = 0;
                }

                shapes.forEach(element => {
                    if (shapeRotate.attrs.name == element.attrs.name) {
                        rotateShapes.push(element);
                    }

                    rotateShapes.sort();
                });

                rotateShapes.sort();
            });
        }
    });

    function prepareRotate(selectedShape) {
        if (checkSelected) {
            return selectedShape;
        }
    }

    $('#btnRotate').click(function () {
        var currentX = shapeRotate.getAbsolutePosition().x;
        var currentY = shapeRotate.getAbsolutePosition().y;

        if (rotateShapes.length > 0) {
            for (var i = 0; i < rotateShapes.length; i++) {
                rotateShapes[i].hide();
            }

            if (rotateClick == 3) {
                rotateClick = -1;
            }

            rotateShapes[rotateClick + 1].setAttr('x', currentX);
            rotateShapes[rotateClick + 1].setAttr('y', currentY);
            rotateShapes[rotateClick + 1].show();
            layer.draw();
            rotateClick++;
        }

        return;

        // var rotate = 90;
        // shapeRotate.offsetX(shapeRotate.width() / 2);
        // shapeRotate.offsetY(shapeRotate.height() / 2);

        // shapeRotate.rotate(rotate);
        // layer.draw();

    });
});