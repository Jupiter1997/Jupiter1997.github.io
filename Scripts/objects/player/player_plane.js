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
    var Player_plane = /** @class */ (function (_super) {
        __extends(Player_plane, _super);
        /**
        *
        * @memberof Plane;
        */
        // constructors
        function Player_plane() {
            var _this = _super.call(this, "player_plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Player_plane.prototype._checkBounds = function () {
            // check the right boundary
            if (this.y > (config.Screen.HEIGHT - this.halfHeight)) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            // check the left boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        Player_plane.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 100;
            this.y = 225;
            this._verticalSpeed = 5;
        };
        Player_plane.prototype.Update = function () {
        };
        Player_plane.prototype.MoveUp = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y -= this._verticalSpeed;
            this._checkBounds();
        };
        Player_plane.prototype.MoveDown = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Player_plane.prototype.Reset = function () {
        };
        return Player_plane;
    }(objects.GameObject));
    objects.Player_plane = Player_plane;
})(objects || (objects = {}));
//# sourceMappingURL=player_plane.js.map