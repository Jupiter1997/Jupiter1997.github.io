module managers{
    export class Explosion_type_1{
        public static runExplosion(object:objects.GameObject):void {
            object.alpha=1;
            var sound_explosion_type_0 = createjs.Sound.play("sound_explosion_type_0");
            sound_explosion_type_0.volume = 0.3;
            setTimeout(function(){
                object.alpha=0.8;
            },50);
            setTimeout(function(){
                object.alpha=0.6;
            },100);
            setTimeout(function(){
                object.alpha=0.4;
            },150);
            setTimeout(function(){
                object.alpha=0.2;
            },200);
            setTimeout(function(){
                object.alpha=0;
            },250);

        }

    }
}