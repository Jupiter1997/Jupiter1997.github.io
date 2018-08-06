namespace objects {
    export class Parachute extends objects.GameObject {
        // member variables
        private _verticalSpeed: number;
        private _horizontalSpeed: number;

        /**
         * Creates an instance of Plane.
         * @memberof Parachute;
         */
        constructor() {
            super("parachute");

            this.Start();
        }

        // private methods
        private _checkBounds(): void {
            // check bottom boundary

        
          }
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