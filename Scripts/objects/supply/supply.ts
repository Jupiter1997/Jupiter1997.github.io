namespace objects {
    export class Supply extends objects.GameObject {
        // member variables
        private _verticalSpeed: number;
        private _horizontalSpeed: number;

        /**
         * Creates an instance of Plane.
         * @memberof Supply;
         */
        constructor() {
            super("supply");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check bottom boundary
            if (this.y > config.Screen.HEIGHT+100 ) {
              this.Reset();
            }
        
          }
        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._verticalSpeed = 1;
            this._horizontalSpeed=Math.floor(Math.random() * 10)/10+1
            this.x = config.Screen.WIDTH/2;
            this.y = 0-this.height;
           
        }

        public Update(): void {
            this.x -= this._horizontalSpeed;
            this.y += this._verticalSpeed;
            this._checkBounds();
        }

        public Reset(): void {
            this._verticalSpeed = 0;
            this._horizontalSpeed=0;
        }
    }
}