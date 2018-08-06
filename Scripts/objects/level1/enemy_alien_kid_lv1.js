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
    var Enemy_alien_kid_lv1 = /** @class */ (function (_super) {
        __extends(Enemy_alien_kid_lv1, _super);
        /**
         * Creates an instance of Cloud.
         * @memberof Enemy_alien_kid_lv1
         */
        function Enemy_alien_kid_lv1() {
            var _this = _super.call(this, "enemy_alien_kid_lv1") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy_alien_kid_lv1.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x <= 600 || this.x >= 800) {
                this.Reset();
            }
        };
        // public methods
        Enemy_alien_kid_lv1.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 1;
            this.x = 700;
            this.y = 425;
            this.Reset();
        };
        Enemy_alien_kid_lv1.prototype.Update = function () {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        };
        Enemy_alien_kid_lv1.prototype.Reset = function () {
            this._horizontalSpeed = -this._horizontalSpeed; // between -2 and 2 ppf     
        };
        return Enemy_alien_kid_lv1;
    }(objects.GameObject));
    objects.Enemy_alien_kid_lv1 = Enemy_alien_kid_lv1;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_alien_kid_lv1.js.map