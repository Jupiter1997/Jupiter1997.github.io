namespace managers {
    export class Collision_2{
      public static check(
        object1: objects.GameObject,
        object2: objects.GameObject
      ): boolean {
 
        let pt = object1.localToLocal(object1.halfWidth,object1.halfHeight,object2);   
        if (object2.hitTest(pt.x,pt.y)) {
            if (!object2.isColliding) {
            object2.isColliding=true;
              return true;
            }
            }        
        
        else {
            object2.isColliding = false;
            return false;
        }
      }
    }
  }
  