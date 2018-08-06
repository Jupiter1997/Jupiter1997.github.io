module managers {
    export class Tracking_bullets{
        public static runTracking(object1:objects.GameObject,object2:objects.GameObject):void {
            let xx,yy,xxx,yyy,x3,y3;

            x3=-160;
            xx=object2.x-object1.x;
            yy=object2.y-object1.y;
            xxx=object2.x-x3;
            y3=object2.y-yy/xx*xxx;

            createjs.Tween.get(object2).to({x:x3,y:y3}, 1000);
        }
    }
}