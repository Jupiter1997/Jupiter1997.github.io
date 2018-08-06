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
    var Player_bullet_type_0 = /** @class */ (function (_super) {
        __extends(Player_bullet_type_0, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Player_bullet_type_0;
         */
        function Player_bullet_type_0() {
            var _this = _super.call(this, "player_bullet_type_0") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Player_bullet_type_0.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 10;
        };
        Player_bullet_type_0.prototype.Update = function () {
            this.x += this._horizontalSpeed;
        };
        Player_bullet_type_0.prototype.Reset = function () {
        };
        return Player_bullet_type_0;
    }(objects.GameObject));
    objects.Player_bullet_type_0 = Player_bullet_type_0;
})(objects || (objects = {}));
//# sourceMappingURL=player_bullet_type_0.js.map