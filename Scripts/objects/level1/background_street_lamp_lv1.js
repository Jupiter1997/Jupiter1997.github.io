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
    var Background_street_lamp_lv1 = /** @class */ (function (_super) {
        __extends(Background_street_lamp_lv1, _super);
        /**
         *
         * @memberof Background_street_lamp_lv1;
         */
        function Background_street_lamp_lv1() {
            var _this = _super.call(this, "background_street_lamp_lv1") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background_street_lamp_lv1.prototype._checkBounds = function () {
            // check the top boundary
            if (this.x <= -100) {
                this.Reset();
            }
        };
        // public methods
        Background_street_lamp_lv1.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Background_street_lamp_lv1.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Background_street_lamp_lv1.prototype.Reset = function () {
            this.x = 1000;
            this.y = 350;
        };
        return Background_street_lamp_lv1;
    }(objects.GameObject));
    objects.Background_street_lamp_lv1 = Background_street_lamp_lv1;
})(objects || (objects = {}));
//# sourceMappingURL=background_street_lamp_lv1.js.map