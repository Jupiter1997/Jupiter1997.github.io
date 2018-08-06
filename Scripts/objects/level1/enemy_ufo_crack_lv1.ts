namespace objects {
    export class Enemy_ufo_crack_lv1 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Plane.
       * @memberof Enemy_ufo_crack_lv1;
       */
      constructor() {
        super("enemy_ufo_crack_lv1");
  
        this.Start();
      }
  
      // private methods
   
      // public methods
      public Start(): void { 
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
      }
  
      public Update(): void {    
      }
  
      public Reset(): void {           
      }
    }
  }