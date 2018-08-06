namespace objects {
  export class Enemy_ufo_lv1 extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Cloud.
     * @memberof Enemy_ufo_lv1 
     */
    constructor() {
      super("enemy_ufo_lv1");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x > 900 || this.x < 600) {
        this.ResetX();
      }
      if (this.y < 0 || this.y > config.Screen.HEIGHT) {
        this.ResetY();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this._verticalSpeed = -1;
      this._horizontalSpeed = 1;
      this.x = 800;
      this.y = 150;
    }

    public Update(): void {
      this.x += this._horizontalSpeed;
      this.y += this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {

    }
    public ResetX(): void {
      this._horizontalSpeed = -this._horizontalSpeed;
      
    }
    public ResetY(): void {
    
      this._verticalSpeed = -this._verticalSpeed;
    }
  }
}
