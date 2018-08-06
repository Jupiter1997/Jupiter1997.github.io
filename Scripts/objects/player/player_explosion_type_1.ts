namespace objects {
    export class Player_explosion_type_1 extends objects.GameObject {
        // member variables
        private _horizontalSpeed: number;

        /**
         * Creates an instance of Plane.
         * @memberof Player_bullet_type_1;
         */
        constructor() {
            super("player_explosion_type_1");

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