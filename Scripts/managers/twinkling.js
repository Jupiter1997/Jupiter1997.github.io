var managers;
(function (managers) {
    var Twinking = /** @class */ (function () {
        function Twinking() {
        }
        Twinking.runTwinking = function (object) {
            object.invincible_time = true;
            setTimeout(function () {
                object.alpha = 0.2;
            }, 200);
            setTimeout(function () {
                object.alpha = 1;
            }, 400);
            setTimeout(function () {
                object.alpha = 0.2;
            }, 600);
            setTimeout(function () {
                object.alpha = 1;
            }, 800);
            setTimeout(function () {
                object.alpha = 0.2;
            }, 1000);
            setTimeout(function () {
                object.alpha = 1;
            }, 1200);
            setTimeout(function () {
                object.alpha = 0.2;
            }, 1400);
            setTimeout(function () {
                object.alpha = 1;
            }, 1600);
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
            }, 2000);
        };
        return Twinking;
    }());
    managers.Twinking = Twinking;
})(managers || (managers = {}));
//# sourceMappingURL=twinkling.js.map