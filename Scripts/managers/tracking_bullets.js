var managers;
(function (managers) {
    var Tracking_bullets = /** @class */ (function () {
        function Tracking_bullets() {
        }
        Tracking_bullets.runTracking = function (object1, object2) {
            var xx, yy, xxx, yyy, x3, y3;
            x3 = -160;
            xx = object2.x - object1.x;
            yy = object2.y - object1.y;
            xxx = object2.x - x3;
            y3 = object2.y - yy / xx * xxx;
            createjs.Tween.get(object2).to({ x: x3, y: y3 }, 1000);
        };
        return Tracking_bullets;
    }());
    managers.Tracking_bullets = Tracking_bullets;
})(managers || (managers = {}));
//# sourceMappingURL=tracking_bullets.js.map