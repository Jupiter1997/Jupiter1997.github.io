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
    var Enemy_ufo_lv1 = /** @class */ (function (_super) {
        __extends(Enemy_ufo_lv1, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Enemy_ufo_lv1
         */
        function Enemy_ufo_lv1() {
            var _this = _super.call(this, "enemy_ufo_lv1") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy_ufo_lv1.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x > 900 || this.x < 600) {
                this.ResetX();
            }
            if (this.y < 0 || this.y > config.Screen.HEIGHT) {
                this.ResetY();
            }
        };
        // public methods
        Enemy_ufo_lv1.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = -1;
            this._horizontalSpeed = 1;
            this.x = 800;
            this.y = 150;
        };
        Enemy_ufo_lv1.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Enemy_ufo_lv1.prototype.Reset = function () {
        };
        Enemy_ufo_lv1.prototype.ResetX = function () {
            this._horizontalSpeed = -this._horizontalSpeed;
        };
        Enemy_ufo_lv1.prototype.ResetY = function () {
            this._verticalSpeed = -this._verticalSpeed;
        };
        return Enemy_ufo_lv1;
    }(objects.GameObject));
    objects.Enemy_ufo_lv1 = Enemy_ufo_lv1;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_ufo_lv1.js.map