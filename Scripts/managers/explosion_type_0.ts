module managers{
    export class Explosion_type_0{
        public static runExplosion(object:objects.GameObject):void {
          var sound_lasershoot = createjs.Sound.play("sound_player_explosion");
          sound_lasershoot.volume = 0.3;
            object.alpha=1;
            setTimeout(function(){
                object.alpha=0.8;
            },400);
            setTimeout(function(){
                object.alpha=0.6;
            },800);
            setTimeout(function(){
                object.alpha=0.4;     
            },1200);
            setTimeout(function(){
                object.alpha=0.2;
            },1600);
            setTimeout(function(){
                object.alpha=0;
            },2000);

        }

    }
}