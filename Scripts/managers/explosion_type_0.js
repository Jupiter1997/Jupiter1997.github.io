var managers;
(function (managers) {
    var Explosion_type_0 = /** @class */ (function () {
        function Explosion_type_0() {
        }
        Explosion_type_0.runExplosion = function (object) {
            var sound_lasershoot = createjs.Sound.play("sound_player_explosion");
            sound_lasershoot.volume = 0.3;
            object.alpha = 1;
            setTimeout(function () {
                object.alpha = 0.8;
            }, 400);
            setTimeout(function () {
                object.alpha = 0.6;
            }, 800);
            setTimeout(function () {
                object.alpha = 0.4;
            }, 1200);
            setTimeout(function () {
                object.alpha = 0.2;
            }, 1600);
            setTimeout(function () {
                object.alpha = 0;
            }, 2000);
        };
        return Explosion_type_0;
    }());
    managers.Explosion_type_0 = Explosion_type_0;
})(managers || (managers = {}));
//# sourceMappingURL=explosion_type_0.js.map