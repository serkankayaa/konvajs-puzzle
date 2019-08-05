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
        globalCompositeOperation: 'xor',
        isCorrect: true,
        visible: true,
        targetCoors: { x: 350, y: 100 }
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
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 350, y: 100 }
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
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 350, y: 100 }
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
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 350, y: 100 }
    });

    var poly2 = new Konva.Line({
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
    });

    var poly2R1 = new Konva.Line({
        x: 500,
        y: 100,
        points: [90, 0, 0, 150, 0, 150, 90, 150],
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 500, y: 100 }
    });

    var poly2R2 = new Konva.Line({
        x: 500,
        y: 100,
        points: [0, 90, 150, 90, 150, 90, 0, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 500, y: 100 }
    });

    var poly2R3 = new Konva.Line({
        x: 500,
        y: 100,
        points: [0, 0, 0, 150, 0, 150, 90, 0],
        fill: 'orange',
        stroke: 'black',
        name: "poly2",
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 500, y: 100 }
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
        isCorrect: true,
        targetCoors: { x: 470, y: 280 }
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
        visible: false,
        isCorrect: false,
        targetCoors: { x: 470, y: 280 }
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
        visible: false,
        isCorrect: false,
        targetCoors: { x: 470, y: 280 }
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
        visible: false,
        isCorrect: false,
        targetCoors: { x: 470, y: 280 }
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
        globalCompositeOperation: 'xor',
        isCorrect: true,
        targetCoors: { x: 560, y: 280 }
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
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 560, y: 280 }
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
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 560, y: 280 }
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
        globalCompositeOperation: 'xor',
        visible: false,
        isCorrect: false,
        targetCoors: { x: 560, y: 280 }
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
        isCorrect: true,
        visible: false,
        targetCoors: { x: 350, y: 100 }
    });

    var poly5R1 = new Konva.Line({
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
    });

    var poly5R2 = new Konva.Line({
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
    });

    var poly5R3 = new Konva.Line({
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
    });

    var poly6 = new Konva.Line({
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
    });

    var poly6R1 = new Konva.Line({
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
    });

    var poly6R2 = new Konva.Line({
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
    });

    var poly6R3 = new Konva.Line({
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
    });

    var poly7 = new Konva.Line({
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
    });

    shapes.push(poly, polyR1, polyR2,
        polyR3, poly2, poly2R1,
        poly2R2, poly2R3, poly3, poly3R1, poly3R2, poly3R3,
        poly4, poly4R1, poly4R2, poly4R3,
        poly5, poly5R1, poly5R2, poly5R3, poly6, poly6R1, poly6R2, poly6R3, poly7);

    var prevSelectedShape = "";
    var shapeRotate = new Konva.Line();
    var checkSelected = false;
    var checkComplete = false;
    var timeIsOver = false;
    var rotateShapes = [];

    snapToWall(rect, 20);
    snapToAll(5);
    autoAddShapes(shapes, rect);
    loadStyle();
    setSeatedShapes(shapes);
    checkCompleted();
    checkGameTime(20, rect);

    function setSeatedShapes(shapes) {
        shapes.forEach(function (shape) {
            if (!shape.draggable()) {
                seatedShapes.push(shape);
            }
        });
    }

    function loadStyle() {
        if (!checkIE()) {
            stage.container().style = "filter:drop-shadow(2px 30px 6px gray);";
        }

        shapes.forEach(function (shape) {
            shape.on('mouseenter', function () {
                stage.container().style.cursor = 'pointer';
            });

            shape.on('mouseleave', function () {
                stage.container().style.cursor = 'default';
            });
        });
    }

    function autoAddShapes(shapes, rect) {
        layer.add(rect);
        shapes.forEach(function (element) {
            layer.add(element);
        });

        stage.add(layer);
    }

    //Snap Shapes Method
    function checkSnap(x, y, snapShape, targetSnapShape, tolerance) {
        targetSnapShape.forEach(function (element) {
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

    function prepareRotate(selectedShape) {
        if (checkSelected) {
            return selectedShape;
        }
    }

    function checkSelectedShape(selected) {
        selected.stroke("#99cc00");
        selected.strokeWidth(4);
        layer.draw();
    }

    function clearPrevSelected(selected) {
        selected.stroke("black");
        selected.strokeWidth(1);
        layer.draw();
    }

    function availableShapeCount() {
        var allShapeCount = 0;
        var seatedShapeCount = 0;

        shapes.forEach(function (shape) {
            if (shape.attrs.isCorrect) {
                allShapeCount++;
            }
        });

        seatedShapes.forEach(function (seatedShape) {
            if (seatedShape.attrs.isCorrect) {
                seatedShapeCount++;
            }
        });

        var availableShapeCount = allShapeCount - seatedShapeCount;

        return availableShapeCount;
    }

    function checkCompleted() {
        var shapeCount = availableShapeCount();
        var seatedCount = 0;
        var seatedCorrectShapes = [];

        shapes.forEach(function (shape) {
            shape.on('dragend', function () {
                var currentX = shape.getAbsolutePosition().x;
                var currentY = shape.getAbsolutePosition().y;
                var targetX = shape.attrs.targetCoors.x;
                var targetY = shape.attrs.targetCoors.y;
                var checkDraggable = shape.draggable();
                var checkCorrect = shape.attrs.isCorrect;

                if (targetX == currentX && targetY == currentY && checkCorrect && checkDraggable) {
                    for (var i = 0; i < seatedCorrectShapes.length; i++) {
                        if (seatedCorrectShapes[i] == shape) {
                            return;
                        }
                    }

                    seatedCount++;
                    seatedCorrectShapes.push(shape);

                    if (shapeCount == seatedCount) {
                        checkComplete = true;
                        alert("oyun bitti tebrikler");
                        window.location.reload();
                    }
                }
                else {
                    for (var i = 0; i < seatedCorrectShapes.length; i++) {
                        if (seatedCorrectShapes[i] == shape) {
                            seatedCount--;
                            var index = seatedCorrectShapes.indexOf(shape);

                            if (index !== -1) {
                                seatedCorrectShapes.splice(index, 1);
                            }

                            return;
                        }
                    }
                }
            });
        });
    }

    function checkGameTime(gameTime, targetShape) {
        var timeLimit = gameTime / 4;
        var warningLimit = 1;

        var timer = setInterval(function () {
            gameTime--;

            if (gameTime <= timeLimit && !checkComplete) {
                targetShape.stroke("red");
                targetShape.strokeWidth(warningLimit);
                layer.draw();
                warningLimit++;

                if (gameTime == 0) {
                    clearInterval(timer);
                    timeIsOver = true;
                    alert("süre doldu zamanında çözemediniz.");
                    layer.draw();
                    window.location.reload();
                    return;
                }
            }

        }, 1000);
    }

    layer.on('click dragmove', function (e) {
        var selectedShape = e.target;

        if (!selectedShape.draggable()) {
            return;
        }

        if (selectedShape.attrs.isTarget) {
            return;
        }

        if (prevSelectedShape == selectedShape) {
            return;
        }

        if (prevSelectedShape != "") {
            clearPrevSelected(prevSelectedShape);
        }

        prevSelectedShape = selectedShape;

        checkSelected = true;

        shapeRotate = prepareRotate(selectedShape);

        //ilk defa şekil seçilip rotate edilecekse çalışır.
        if (rotateShapes.length <= 0) {
            shapes.forEach(function (element) {
                if (shapeRotate.attrs.name == element.attrs.name) {
                    rotateShapes.push(element);
                    checkSelectedShape(element);
                }

                rotateShapes.sort();
            });
        } else {
            rotateShapes.forEach(function (element) {
                if (shapeRotate.attrs.name != element.attrs.name) {
                    //başka bir şekil seçildiğinde önceki seçilen şekilleri sil.
                    rotateShapes = [];
                    rotateClick = 0;
                    clearPrevSelected(element);
                }

                shapes.forEach(function (element) {
                    if (shapeRotate.attrs.name == element.attrs.name) {
                        rotateShapes.push(element);
                        checkSelectedShape(element);
                    }

                    rotateShapes.sort();
                });

                rotateShapes.sort();
            });
        }
    });

    $('#btnRotate').click(function () {
        if (shapeRotate.attrs.isSquare) {
            return;
        }

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
    });

    //çalıştırılan tarayıcının explorer olup olmaması kontrol edilir.
    function checkIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        return false;
    }
});