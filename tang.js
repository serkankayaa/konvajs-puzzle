$(document).ready(function () {

    var width = window.innerWidth;
    var height = window.innerHeight;
    var shapes = [];
    var seatedShapes = [];
    var rotateClick = 0;
    var targetShape;
    var prevSelectedShape = "";
    var shapeRotate = new Konva.Line();
    var checkSelected = false;
    var checkComplete = false;
    var timeIsOver = false;
    var rotateShapes = [];

    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();

    setShapes(game2);
    snapToWall(targetShape, 20);
    snapToAll(5);
    autoAddShapes(shapes, targetShape);
    loadStyle();
    setSeatedShapes(shapes);
    checkCompleted();
    checkGameTime(30);

    function setShapes(gameName) {
        const game = Object.keys(gameName).map(function (key) {
            return [(key), gameName[key]];
        });

        for (let i = 0; i < game.length; i++) {

            if (!game[i][1].isTarget) {
                var shape = new Konva.Line({
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
                    draggable: game[i][1].draggable
                });

                shapes.push(shape);
            }
            else {
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
                    draggable: game[i][1].draggable
                });

                targetShape = target;
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

    Array.prototype.diff = function (a) {
        return this.filter(function (i) { return a.indexOf(i) < 0; });
    };

    function loadStyle() {
        if (!checkIE()) {
            stage.container().style = "filter:drop-shadow(2px 30px 6px gray);";
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
                shapeRotate = new Konva.Line();
                prevSelectedShape = new Konva.Line();
                rotateShapes = [];

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
                clearPrevSelected(snapShape);
                shapeRotate = new Konva.Line();
                prevSelectedShape = new Konva.Line();
                rotateShapes = [];

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
        layer.batchDraw();
    }

    function clearPrevSelected(selected) {
        selected.stroke("black");
        selected.strokeWidth(1);
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
                var currentX = shape.getAbsolutePosition().x;
                var currentY = shape.getAbsolutePosition().y;
                var targetX = shape.attrs.targetCoors.x;
                var targetY = shape.attrs.targetCoors.y;
                var checkDraggable = shape.draggable();
                var checkCorrect = shape.attrs.isCorrect;

                console.log("X--> " + currentX);
                console.log("Y--> " + currentY);

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

    function checkGameTime(gameTime) {
        var timer = setInterval(function () {
            gameTime--;

            if (!checkComplete) {
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

            if (rotateClick == rotateShapes.length - 1) {
                rotateClick = -1;
            }

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