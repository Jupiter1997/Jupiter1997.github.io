var managers;
(function (managers) {
    var Collision_2 = /** @class */ (function () {
        function Collision_2() {
        }
        Collision_2.check = function (object1, object2) {
            var pt = object1.localToLocal(object1.halfWidth, object1.halfHeight, object2);
            if (object2.hitTest(pt.x, pt.y)) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
                return false;
            }
        };
        return Collision_2;
    }());
    managers.Collision_2 = Collision_2;
})(managers || (managers = {}));
//# sourceMappingURL=collision_2.js.map