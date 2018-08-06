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
    var Supply = /** @class */ (function (_super) {
        __extends(Supply, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Supply;
         */
        function Supply() {
            var _this = _super.call(this, "supply") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Supply.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT + 100) {
                this.Reset();
            }
        };
        // public methods
        Supply.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 1;
            this._horizontalSpeed = Math.floor(Math.random() * 10) / 10 + 1;
            this.x = config.Screen.WIDTH / 2;
            this.y = 0 - this.height;
        };
        Supply.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Supply.prototype.Reset = function () {
            this._verticalSpeed = 0;
            this._horizontalSpeed = 0;
        };
        return Supply;
    }(objects.GameObject));
    objects.Supply = Supply;
})(objects || (objects = {}));
//# sourceMappingURL=supply.js.map