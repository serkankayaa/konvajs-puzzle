var width = window.innerWidth;
var height = window.innerHeight;
var shapes = [];

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();
var rectX = stage.width() / 2 - 50;
var rectY = stage.height() / 2 - 25;

var rect = new Konva.Rect({
    x: 350,
    y: 100,
    width: 300,
    height: 300,
    name: "rect",
    stroke: 'green',
    strokeWidth: 2,
    isTarget: true
});

var poly = new Konva.Line({
    x: 400,
    y: 400,
    points: [0, 0, 0, 160, 150, 160, 150, 90],
    fill: 'purple',
    stroke: 'black',
    name: "poly",
    strokeWidth: 1,
    closed: true,
    draggable: true,
});

var poly2 = new Konva.Line({
    x: 700,
    y: 250,
    points: [0, 0, 150, 90, 150, 90, 150, 0],
    fill: 'orange',
    stroke: 'black',
    name: "poly2",
    strokeWidth: 1,
    closed: true,
    draggable: true,
});

var poly3 = new Konva.Line({
    x: 800,
    y: 100,
    points: [0, 0, 90, 90, 90, 90, 90, 0],
    fill: 'green',
    stroke: 'black',
    name: "poly3",
    strokeWidth: 1,
    closed: true,
    draggable: true,
});

shapes.push(poly, poly2, rect, poly3);

startShapes();
snapToAll(15);

layer.add(rect);
layer.add(poly);
layer.add(poly2);
layer.add(poly3);
stage.add(layer);

function startShapes() {
    poly.x(rect.x());
    poly.y(rect.y());

    layer.draw();
}

//Snap Shapes Method
function checkSnap(x, y, snapShape, targetSnapShape, tolerance) {
    targetSnapShape.forEach(element => {
        var offsetX = snapShape.x();
        var offsetY = snapShape.y();

        var fark = offsetX + x - element.x();

        if (Math.abs(fark) < tolerance) {
            snapShape.x(snapShape.x() - fark);
            layer.draw();
            offsetX = snapShape.x();
        }

        fark = offsetY + y - element.position().y;

        if (Math.abs(fark) < tolerance) {
            snapShape.y(snapShape.y() - fark);
            layer.draw();
            offsetY = snapShape.y();
        }

        fark = offsetX + x - element.x() - element.width();

        if (Math.abs(fark) < tolerance) {
            snapShape.x(snapShape.x() - fark);
            layer.draw();
        }

        fark = offsetY + y - element.position().y - element.height();

        if (Math.abs(fark) < tolerance) {
            snapShape.y(snapShape.y() - fark);
            layer.draw();
        }
    });
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

var prevSelectedShape = "";
var shapeRotate = new Konva.Line();
var checkSelected = false;

layer.on('click', function(e) {
    var selectedShape = e.target;

    if(selectedShape.attrs.isTarget) {
        return;
    }

    if(prevSelectedShape == selectedShape) {
        return;
    }
    
    if(prevSelectedShape != "") {
        prevSelectedShape.stroke("black");
        prevSelectedShape.strokeWidth(1);
    }

    prevSelectedShape = selectedShape;
    selectedShape.stroke("#99cc00");
    selectedShape.strokeWidth(1);
    layer.draw();
    checkSelected = true;
    shapeRotate = prepareRotate(selectedShape);
});

function prepareRotate(selectedShape) {
    if(checkSelected) {
        return selectedShape;
    }
}

window.onload = function() {
    document.getElementById('right').addEventListener('click', function() {
        var rotate = 90;
        shapeRotate.offsetX(shapeRotate.width() / 2);
        shapeRotate.offsetY(shapeRotate.height() / 2);

        shapeRotate.rotate(rotate);
        layer.draw();
        console.log(shapeRotate.position());
    });
};

