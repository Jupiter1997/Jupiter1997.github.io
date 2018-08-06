namespace objects {
    export class Background_street_lamp_lv1 extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * 
       * @memberof Background_street_lamp_lv1;
       */
      constructor() {
        super("background_street_lamp_lv1");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds():void {
        // check the top boundary
        if(this.x <= -100) {
            this.Reset();
        }
    }

      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 5; 
        this.Reset();
      }
  
      public Update(): void {    
        this.x -= this._horizontalSpeed;           
        this._checkBounds();
      }
      
  
      public Reset(): void {       
        this.x=1000;
        this.y=350;   
      }
    }
  }