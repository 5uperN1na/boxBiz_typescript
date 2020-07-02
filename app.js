var boxArray = [];
var Box = /** @class */ (function () {
    function Box() {
        this.value = Box.counter;
        this.div = $("<div class= \"box shadow\"> " + this.value + "</div>");
        this.render();
        this.addEvents();
        Box.collection.push(this);
    }
    Box.changeItUp = function () {
        Box.collection.forEach(function (pizza) {
            pizza.changeBGColor();
        });
    };
    Box.prototype.render = function () {
        $('#box-container').append(this.div);
        Box.counter++;
    };
    Box.prototype.addEvents = function () {
        var _this = this;
        this.div.click(function () { return _this.changeBGColor(); });
    };
    Box.prototype.changeBGColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        this.div.css({
            backgroundColor: "rgb(" + r + ", " + g + ", " + b + ")"
        });
    };
    Box.counter = 1;
    Box.collection = [];
    return Box;
}());
$('#make-box').click(function () { return new Box(); });
$('#change-color').click(function () { return Box.changeItUp(); });
$('#add').click(function () {
    var sum = 0;
    Box.collection.forEach(function (pasta) {
        sum += pasta.value;
    });
    console.log(sum);
});
