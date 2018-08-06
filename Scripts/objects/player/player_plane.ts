namespace objects {
    export class Player_plane extends objects.GameObject {
        // member variables
        private _verticalSpeed: number;

        /**
        * 
        * @memberof Plane;
        */
        // constructors
        constructor() {
            super("player_plane");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the right boundary
            if(this.y > (config.Screen.HEIGHT - this.halfHeight)) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }

            // check the left boundary
            if(this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        }

         // public methods
         public Start():void {

            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 100;
            this.y = 225;
            this._verticalSpeed=5;
        }

        public Update():void {
        }
        public MoveUp():void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y -= this._verticalSpeed;
            this._checkBounds();
        }
        public MoveDown():void{
            this.y += this._verticalSpeed;
            this._checkBounds();
        }
        public Reset():void {

        }
    }
}