$(document).ready(function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var shapes = [];
    var seatedShapes = [];
    var rotateClick = 0;
    var hexagon;
    var gameTargetShape;
    var prevSelectedShape = "";
    var shapeRotate = new Konva.Line();
    var checkSelected = false;
    var checkComplete = false;
    var timeIsOver = false;
    var rotateShapes = [];
    var time = 1;
    var doorImagePath = './img/kapi.png';
    var doorRate = 80 / 100;

    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();

    setDoor();
    setShapes(game1);
    snapToWall(gameTargetShape, 15);
    snapToAll(5);
    autoAddShapes(shapes, hexagon);
    loadStyle();
    setSeatedShapes(shapes);
    checkCompleted();
    checkGameTime(500000);

    function setDoor() {
        var madalyon = new Konva.Line({
            x: 344 * doorRate,
            y: 55 * doorRate,
            points: [5 * doorRate, 146 * doorRate, 76 * doorRate, 283 * doorRate, 234 * doorRate, 283 * doorRate, 305 * doorRate, 145 * doorRate, 234 * doorRate, 10 * doorRate, 76 * doorRate, 10 * doorRate],
            name: "poly7",
            fill: '#A2195F',
            closed: true,
            draggable: false
        });

        var imageObj = new Image();
        imageObj.onload = function () {
            var tangramDoor = new Konva.Image({
                x: 0,
                y: 0,
                image: imageObj,
                width: 1000 * doorRate, //200
                height: 400 * doorRate // 100
            });

            layer.add(tangramDoor);
            layer.add(madalyon);
            tangramDoor.moveToBottom();

            stage.add(layer);
            layer.batchDraw();
        };

        imageObj.src = doorImagePath;

        hexagon = madalyon;
    }

    layer.on('dragend', function (e) {
        console.log(e);
    });

    function setShapes(gameName) {
        const game = Object.keys(gameName).map(function (key) {
            return [(key), gameName[key]];
        });

        for (let i = 0; i < game.length; i++) {
            for (let j = 0; j < game[i][1].points.length; j++) {
                game[i][1].points[j] = game[i][1].points[j] * doorRate;

                if (game[i][1].points[j] !== parseInt(game[i][1].points[j], 10)) {
                    game[i][1].points[j] = Math.round(game[i][1].points[j]);
                }

            }

            if (game[i][1].isTarget) {
                var target = new Konva.Line({
                    x: game[i][1].x,
                    y: game[i][1].y,
                    points: game[i][1].points,
                    fill: game[i][1].fill,
                    stroke: game[i][1].stroke,
                    name: game[i][1].name,
                    strokeWidth: game[i][1].strokeWidth,
                    closed: game[i][1].closed,
                    globalCompositeOperation: game[i][1].globalCompositeOperation,
                    isCorrect: game[i][1].isCorrect,
                    visible: game[i][1].visible,
                    isSquare: game[i][1].isSquare,
                    targetCoors: game[i][1].targetCoors,
                    isTarget: game[i][1].isTarget,
                    draggable: game[i][1].draggable,
                    perfectDrawEnabled: false,
                    transformsEnabled: 'position',
                    listening: false,
                    hitStrokeWidth: 0,
                    shadowForStrokeEnabled: false
                });

                gameTargetShape = target;
                shapes.push(gameTargetShape);
            }
            else if (!game[i][1].isTarget && !game[i][1].draggable) {
                var seatedShape = new Konva.Line({
                    x: game[i][1].x,
                    y: game[i][1].y,
                    points: game[i][1].points,
                    fill: game[i][1].fill,
                    stroke: game[i][1].stroke,
                    name: game[i][1].name,
                    strokeWidth: game[i][1].strokeWidth,
                    closed: game[i][1].closed,
                    globalCompositeOperation: game[i][1].globalCompositeOperation,
                    isCorrect: game[i][1].isCorrect,
                    visible: game[i][1].visible,
                    isSquare: game[i][1].isSquare,
                    targetCoors: game[i][1].targetCoors,
                    isTarget: game[i][1].isTarget,
                    draggable: game[i][1].draggable,
                    perfectDrawEnabled: false,
                    transformsEnabled: 'position',
                    hitStrokeWidth: 0,
                    shadowForStrokeEnabled: false
                });

                shapes.push(seatedShape);
            } else if (!game[i][1].isTarget && game[i][1].draggable) {
                var draggableShape = new Konva.Line({
                    x: game[i][1].x + gameTargetShape.x(),
                    y: game[i][1].y + gameTargetShape.y(),
                    points: game[i][1].points,
                    fill: game[i][1].fill,
                    stroke: game[i][1].stroke,
                    name: game[i][1].name,
                    strokeWidth: game[i][1].strokeWidth,
                    closed: game[i][1].closed,
                    globalCompositeOperation: game[i][1].globalCompositeOperation,
                    isCorrect: game[i][1].isCorrect,
                    visible: game[i][1].visible,
                    isSquare: game[i][1].isSquare,
                    targetCoors: game[i][1].targetCoors,
                    isTarget: game[i][1].isTarget,
                    draggable: game[i][1].draggable,
                    perfectDrawEnabled: false,
                    transformsEnabled: 'position',
                    hitStrokeWidth: 0,
                    shadowForStrokeEnabled: false
                });

                shapes.push(draggableShape);
            }
        }
    }

    function setSeatedShapes(shapes) {
        shapes.forEach(function (shape) {
            if (!shape.draggable()) {
                seatedShapes.push(shape);
            }
        });
    }

    function loadStyle() {
        if (!checkIE() && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            stage.container().style = "filter:drop-shadow(2px 30px 6px gray);";
        }
        else {
            stage.container().style = "";
        }

        shapes.forEach(function (shape) {
            if (shape.draggable()) {
                shape.shadowForStrokeEnabled(false);

                shape.on('mouseenter', function () {
                    stage.container().style.cursor = 'url("https://downloads.totallyfreecursors.com/thumbnails/diamondblue.gif"), auto';
                });

                shape.on('mouseleave', function () {
                    stage.container().style.cursor = 'default';
                });
            }
        });
    }

    function autoAddShapes(shapes, hexagon) {
        layer.add(hexagon);
        shapes.forEach(function (element) {
            layer.add(element);
        });

        stage.add(layer);

        Konva.pixelRatio = 1;
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
        debugger;
        var offsetX = snapShape.x();
        var offsetY = snapShape.y();

        var fark = offsetX + x - targetSnapShape.x();

        if (Math.abs(fark) < tolerance) {
            snapShape.x(snapShape.x() - fark);
            layer.batchDraw();
            offsetX = snapShape.x();
        }

        fark = offsetY + y - targetSnapShape.position().y;

        if (Math.abs(fark) < tolerance) {
            snapShape.y(snapShape.y() - fark);
            layer.batchDraw();
            offsetY = snapShape.y();
        }

        fark = offsetX + x - targetSnapShape.x() - targetSnapShape.width();

        if (Math.abs(fark) < tolerance) {
            snapShape.x(snapShape.x() - fark);
            layer.batchDraw();
        }

        fark = offsetY + y - targetSnapShape.position().y - targetSnapShape.height();

        if (Math.abs(fark) < tolerance) {
            snapShape.y(snapShape.y() - fark);
            layer.batchDraw();
        }

        return Math.abs(offsetX + x - targetSnapShape.position().x) < 10 || Math.abs(offsetY + y - targetSnapShape.position().y) < 10;
    }

    //Şekiller kendi arasında snapleniyor.
    function snapToAll(tolerance) {
        shapes.forEach(function (snapShape) {
            snapShape.on('dragend', function () {
                clearPrevSelected(snapShape);
                // shapeRotate = new Konva.Line();
                // prevSelectedShape = new Konva.Line();
                // rotateShapes = [];

                var shapePoints = snapShape.points();

                for (var i = 0; i < shapePoints.length / 2; i++) {
                    checkSnap(shapePoints[2 * i], shapePoints[2 * i + 1], snapShape, shapes, tolerance);
                }
            });
        });
    }

    //Şekiller duvara snapleniyor.
    function snapToWall(targetShape, tolerance) {
        shapes.forEach(function (snapShape) {
            snapShape.on('dragend', function () {
                if (snapShape.attrs.draggable) {
                    clearPrevSelected(snapShape);
                    // shapeRotate = new Konva.Line();
                    // prevSelectedShape = new Konva.Line();
                    // rotateShapes = [];

                    var shapePoints = snapShape.points();
                    for (var i = 0; i < shapePoints.length / 2; i++) {
                        checkSnapTarget(shapePoints[2 * i], shapePoints[2 * i + 1], snapShape, targetShape, tolerance);
                    }
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
        // selected.stroke("#99cc00");
        // selected.strokeWidth(4);
        layer.batchDraw();
    }

    function clearPrevSelected(selected) {
        // selected.stroke("#A2195F");
        // selected.strokeWidth(1);
        layer.batchDraw();
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
                shape.to({
                    duration: 0.5,
                    easing: Konva.Easings.ElasticEaseOut,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5
                });
                shape.stroke("#A2195F");
                shape.strokeWidth(1);
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
                        var finishedTime = $(".time").text();
                        alert("oyun bitti tebrikler");
                    }
                } else {
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

    function checkGameTime(gameTime) {
        $(".time").html(time);
        time = gameTime;
        var circleTime = $(".time").text();
        var greenDestTime = gameTime / 1.5;
        var warningLimit = 1;

        var timer = setInterval(function () {
            gameTime--;
            circleTime++;
            $(".time").html(circleTime);

            if (!checkComplete) {
                if (greenDestTime < circleTime) {
                    warningLimit++;
                    $('.time').fadeIn("slow");

                    $('.time').css({
                        "border-color": "red",
                        "border-width": warningLimit / 2,
                        "border-style": "solid"
                    });

                    $('.time').fadeOut("slow");
                }

                if (gameTime == 0) {
                    clearInterval(timer);
                    timeIsOver = true;
                    $(".time").css({ opacity: 'none' });
                    alert("süre doldu zamanında çözemediniz.");
                    layer.batchDraw();
                    window.location.reload();
                }
            } else {
                clearInterval(timer);
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
            shapes.forEach(function (element, index) {
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

                shapes.forEach(function (element, index) {
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

            if (rotateClick == rotateShapes.length - 1) {
                rotateClick = -1;
            }

            // console.log(shapeRotate._id);
            // console.log(rotateShapes[rotateClick + 1]._id);

            rotateShapes[rotateClick + 1].setAttr('x', currentX);
            rotateShapes[rotateClick + 1].setAttr('y', currentY);
            rotateShapes[rotateClick + 1].show();
            layer.batchDraw();

            rotateClick++;
        }

        return;

        // var rotate = 90;
        // shapeRotate.offsetX(shapeRotate.width() / 2);
        // shapeRotate.offsetY(shapeRotate.height() / 2);

        // shapeRotate.rotate(rotate);
        // layer.draw();
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