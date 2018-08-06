var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Parachute = /** @class */ (function (_super) {
        __extends(Parachute, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Parachute;
         */
        function Parachute() {
            var _this = _super.call(this, "parachute") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Parachute.prototype._checkBounds = function () {
            // check bottom boundary
        };
        // public methods
        Parachute.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        Parachute.prototype.Update = function () {
        };
        Parachute.prototype.Reset = function () {
        };
        return Parachute;
    }(objects.GameObject));
    objects.Parachute = Parachute;
})(objects || (objects = {}));
//# sourceMappingURL=parachute.js.map