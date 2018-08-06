namespace objects {
    export class Player_plane_type_0 extends objects.GameObject {
        // member variables
        private _horizontalSpeed: number;

        /**
         * Creates an instance of Plane.
         * @memberof Player_plane_type_0;
         */
        constructor() {
            super("player_plane_type_0");

            this.Start();
        }

        // private methods
        // private methods
        private _checkBounds(): void {
            // check bottom boundary
            if (this.x >=100) {
                this.Reset();
            }

        }
        // public methods
        public Start(): void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 2;
        }

        public Update(): void {
            this.x += this._horizontalSpeed;
            this._checkBounds();
        }

        public Reset(): void {
            this._horizontalSpeed =0;
        }
    }
}