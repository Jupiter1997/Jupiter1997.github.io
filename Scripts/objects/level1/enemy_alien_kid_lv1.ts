namespace objects {
    export class Enemy_alien_kid_lv1 extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Cloud.
       * @memberof Enemy_alien_kid_lv1
       */
      constructor() {
        super("enemy_alien_kid_lv1");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.x<=600 || this.x>=800) {
          this.Reset();
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 1;
        this.x=700;
        this.y=425;
        this.Reset();
      }
  
      public Update(): void {
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this._horizontalSpeed = -this._horizontalSpeed // between -2 and 2 ppf     
      }
    }
  }
  