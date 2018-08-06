namespace objects {
    export class Enemy_bullet_stone_Lv1 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Plane.
       * @memberof Enemy_bullet_stone;
       */
      constructor() {
        super("enemy_bullet_stone_lv1");
  
        this.Start();
      }
  
      // private methods
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 10;
        this.x=-20;
        this.y=-20;
      }
  
      public Update(): void {
        //this.x += this._horizontalSpeed;
      }
  
      public Reset(): void {
  
      }
    }
  }