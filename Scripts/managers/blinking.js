var managers;
(function (managers) {
    var Blinking = /** @class */ (function () {
        function Blinking() {
        }
        Blinking.runBlinking = function (object) {
            var sound_blink = createjs.Sound.play("sound_blink");
            sound_blink.volume = 0.3;
            object.invincible_time = true;
            object.alpha = 0.8;
            setTimeout(function () {
                object.alpha = 0.6;
            }, 200);
            setTimeout(function () {
                object.alpha = 0.4;
            }, 400);
            setTimeout(function () {
                object.alpha = 0.2;
            }, 600);
            setTimeout(function () {
                object.alpha = 0;
            }, 800);
            setTimeout(function () {
                object.x = Math.floor(Math.random() * 10 + 1) * 20 + 600;
                object.y = Math.floor(Math.random() * 10 + 1) * 20;
                object.alpha = 1;
            }, 1000);
            /*        let i,ii;
                    for(i=0;i<5;i++){
                    let time=200;
                    setTimeout(function(){
                         object.alpha=0.2;
                    },time);
                    time+=400;
                    }
                    for(ii=0;ii<5;ii++){
                    let time1=400;
                    setTimeout(function(){
                        object.alpha=1;
                    },time1);
                    time1+=400;
                    }
                    */
            setTimeout(function () {
                object.invincible_time = false;
            }, 1100);
        };
        return Blinking;
    }());
    managers.Blinking = Blinking;
})(managers || (managers = {}));
//# sourceMappingURL=blinking.js.map