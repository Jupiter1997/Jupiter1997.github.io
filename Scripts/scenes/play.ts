namespace scenes {
  export class Play extends objects.Scene {
    // member variables
    private _label_start: objects.Label;
    private _label_finalBattle: objects.Label;
    private _label_gameFinish: objects.Label;

    private _background_sky: objects.Background_sky_lv1;
    private _background_wall: objects.Background_wall_lv1;
    private _background_tree: objects.Background_tree_lv1;
    private _background_slide: objects.Background_slide_lv1;
    private _background_street_lamp: objects.Background_street_lamp_lv1;

    private _player_plane: objects.Player_plane;
    private _player_plane_type_0: objects.Player_plane_type_0;
    private _player_bullet: objects.Player_bullet_type_0;
    private _player_bullets: objects.Player_bullet_type_0[];
    private _player_explosion_type_0: objects.Player_explosion_type_0;
    private _player_explosion_type_1: objects.Player_explosion_type_1;
    private _player_upgrade: boolean;

    private _supply: objects.Supply;
    private _supply_active: boolean;
    private _parachute: objects.Parachute;
    private _supply_explosion: objects.Explosion_type_0;

    private _enemy_bullet_laser: objects.Enemy_bullet_Laser_lv1;
    private _enemy_bullet_stones: objects.Enemy_bullet_stone_Lv1[];
    private _enemy_bullet_stone: objects.Enemy_bullet_stone_Lv1;
    private _enemy_ufo: objects.Enemy_ufo_lv1;
    private _enemy_explosion_type_0: objects.Explosion_type_0;
    private _enemy_ufo_crack: objects.Enemy_ufo_crack_lv1;
    private _enemy_ufo_smoke: objects.Enemy_ufo_smoke_lv1;
    private _enemy_alien: objects.Enemy_alien_kid_lv1;

    private _hits: number;

    private _move: boolean;


    public sound_wind: createjs.AbstractSoundInstance;

    // constructors
    constructor() {
      super();
      this.Start();
    }

    // private methods
    private _keyDown(event: KeyboardEvent): void {
      switch (event.keyCode) {
        case 38:
          this._move = true;
          break;
      }
    }

    private _keyUp(event: KeyboardEvent): void {
      switch (event.keyCode) {
        case 38:
          this._move = false;
          break;

        case 32:
          if (!this._player_upgrade) {
            if (this._player_bullets.length < 3) {
              var sound_bulletshoot = createjs.Sound.play("sound_bulletshoot");
              sound_bulletshoot.volume = 0.3;

              this._player_bullet = new objects.Player_bullet_type_0();
              this._player_bullet.y = this._player_plane.y;
              this._player_bullet.x = this._player_plane.x;
              this.addChild(this._player_bullet);
              this._player_bullets.push(this._player_bullet);

            }
          }
          if (this._player_upgrade) {
            if (this._player_bullets.length < 6) {
              var sound_bulletshoot = createjs.Sound.play("sound_bulletshoot");
              sound_bulletshoot.volume = 0.3; 
              for (let i = 0; i < 2; i++) {
                this._player_bullet = new objects.Player_bullet_type_0();
                this._player_bullet.y = this._player_plane.y + i * 20;
                this._player_bullet.x = this._player_plane.x + i * 5;
                this.addChild(this._player_bullet);
                this._player_bullets.push(this._player_bullet)
              }
            }
          }
          console.log(this.children);
          console.log(this._player_bullets.length);
          break;
      }
    }

    private _alien_action(): void {

      this._enemy_bullet_stones.push(this._enemy_bullet_stone);
      setInterval(() => {
        createjs.Tween.get(this._enemy_alien).to(
          { x: Math.floor(Math.random() * 10) * 20 + 650 },
          1000
        );
        setTimeout(() => {
          this._enemy_bullet_stone.y = 420;
          this._enemy_bullet_stone.x = this._enemy_alien.x - 60;
          createjs.Tween.get(this._enemy_bullet_stone).to({ y: 300 }, 1000);
        }, 1000);
        setTimeout(() => {
          managers.Tracking_bullets.runTracking(
            this._player_plane,
            this._enemy_bullet_stone
          );
          console.log(this._player_plane.y);
        }, 2000);
      }, 3000);
    }

    // public methods
    public Start(): void {
      //background sound
      this.sound_wind = createjs.Sound.play("sound_wind");
      this.sound_wind.loop = -1;
      this.sound_wind.volume = 0.5;

      //hits
      this._hits = 0;

      //background
      this._background_sky = new objects.Background_sky_lv1();
      this._background_wall = new objects.Background_wall_lv1();
      this._background_tree = new objects.Background_tree_lv1();
      this._background_slide = new objects.Background_slide_lv1();
      this._background_street_lamp = new objects.Background_street_lamp_lv1();

      //player
      this._player_plane = new objects.Player_plane();
      this._player_plane_type_0 = new objects.Player_plane_type_0();
      this._player_bullets = new Array<objects.Player_bullet_type_0>();
      this._player_explosion_type_0 = new objects.Player_explosion_type_0();
      this._player_explosion_type_1 = new objects.Player_explosion_type_1();
      this._player_upgrade = false;

      //supply
      this._supply = new objects.Supply();
      this._supply_active = false;
      this._parachute = new objects.Parachute;
      this._supply_explosion = new objects.Explosion_type_0;



      //enemy
      this._enemy_ufo = new objects.Enemy_ufo_lv1();
      this._enemy_bullet_laser = new objects.Enemy_bullet_Laser_lv1();
      this._enemy_bullet_stones = new Array<objects.Enemy_bullet_stone_Lv1>();
      this._enemy_explosion_type_0 = new objects.Explosion_type_0();
      this._enemy_alien = new objects.Enemy_alien_kid_lv1();
      this._enemy_bullet_stone = new objects.Enemy_bullet_stone_Lv1();
      this._enemy_ufo_crack = new objects.Enemy_ufo_crack_lv1;
      this._enemy_ufo_smoke = new objects.Enemy_ufo_smoke_lv1;

      //label
      this._label_finalBattle = new objects.Label(
        "Now! Destroy the UFO! Let the alien kid cry!",
        "20px",
        "Consolas",
        "#000000",
        450,
        150,
        true
      );
      this._label_start = new objects.Label(
        "Attack the ufo until the alien kid show up",
        "20px",
        "Consolas",
        "#000000",
        450,
        150,
        true
      );
      this._label_gameFinish = new objects.Label(
        "Good job! Who is the next unfortunate kid?",
        "20px",
        "Consolas",
        "#000000",
        450,
        150,
        true
      );
      //falling function start
      this._move = false;

      //set up final battle

      //keyboard listener
      window.onkeydown = this._keyDown.bind(this);
      window.onkeyup = this._keyUp.bind(this);

      this.Main();
    }

    public Update(): void {

      // finish the level
      if (this._hits >= 25) {
        this.removeChild(this._enemy_bullet_stone, this._enemy_bullet_laser);
        this._player_bullets.forEach(bullet => {
          this.removeChild(bullet);
        });
        this._enemy_ufo.rotation++;
        this.addChild(this._label_gameFinish);
        createjs.Tween.get(this._enemy_ufo).to({ x: 1000, y: 500 }, 2000);
        createjs.Tween.get(this._enemy_alien).to({ y: 600 }, 2000);
        createjs.Tween.get(this._player_plane).to({ x: 1500 }, 2000);

      }
      this._background_sky.Update();
      this._background_wall.Update();
      this._background_street_lamp.Update();
      this._background_tree.Update();
      this._background_slide.Update();

      // still in the level
      if (this._hits < 25) {

        switch (this._move) {
          case true:
            this._player_plane.MoveUp();
            break;

          case false:
            this._player_plane.MoveDown();
            break;

        }

        if (this._supply_active) {
          this._supply.Update();
        }

        this._enemy_ufo.Update();
        this._enemy_bullet_laser.Update();

        //enemy bullet reset
        if (this._enemy_bullet_laser.x < 0) {
          var sound_lasershoot = createjs.Sound.play("sound_lazershoot");
          sound_lasershoot.volume = 0.3;
          this._enemy_bullet_laser.y = this._enemy_ufo.y;
          this._enemy_bullet_laser.x =
            this._enemy_ufo.x - this._enemy_bullet_laser.halfWidth;
        }

        //player vs background objects
        if (
          managers.Collision.check(this._player_plane, this._background_tree) ||
          managers.Collision.check(this._player_plane, this._background_slide) ||
          managers.Collision.check(this._player_plane, this._background_street_lamp)
        ) {
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_0.runExplosion(this._player_explosion_type_1);
            managers.Game.ScoreBoard.Lives -= 1;
            managers.Twinking.runTwinking(this._player_plane);
          }
        }

        //player vs supply
        if (managers.Collision.check(this._player_plane, this._supply)) {
          this._player_upgrade = true;
          var sound_player_upgrade = createjs.Sound.play("sound_player_upgrade");
          sound_player_upgrade.volume = 1;
          this._supply.y = 0 - this._supply.halfHeight;
          this._supply.x = config.Screen.HALF_WIDTH;
          this._supply.Reset();
        }

        //enemy vs background objects
        if (
          managers.Collision.check(this._enemy_ufo, this._background_tree) ||
          managers.Collision.check(this._enemy_ufo, this._background_slide) ||
          managers.Collision.check(this._enemy_ufo, this._background_street_lamp)
        ) {
          if (!this._enemy_ufo.invincible_time) {
            managers.Blinking.runBlinking(this._enemy_ufo);
            this._enemy_ufo.ResetX();
            this._enemy_ufo.ResetY();
          }
        }

        //enemy bullet vs player
        if (managers.Collision.check(this._player_plane, this._enemy_bullet_laser)) {
          this._enemy_bullet_laser.y = this._enemy_ufo.y;
          this._enemy_bullet_laser.x =
            this._enemy_ufo.x - this._enemy_bullet_laser.halfWidth;
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_0.runExplosion(this._player_explosion_type_0);
            managers.Game.ScoreBoard.Lives -= 1;
            managers.Twinking.runTwinking(this._player_plane);
          }
        }
        if (managers.Collision.check(this._player_plane, this._enemy_bullet_stone)) {
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_0.runExplosion(this._player_explosion_type_0);
            managers.Game.ScoreBoard.Lives -= 1;
            managers.Twinking.runTwinking(this._player_plane);
          }
        }
        //enemy bullet vs supply
        if (managers.Collision.check(this._supply, this._enemy_bullet_laser)) {
          managers.Explosion_type_1.runExplosion(this._supply_explosion);
          this._supply_explosion.x = this._enemy_bullet_laser.x;
          this._supply_explosion.y = this._enemy_bullet_laser.y;
          this._supply.y = 0 - this._supply.halfHeight;
          this._supply.x = config.Screen.HALF_WIDTH;
          this._supply.Reset();
        }
        if (managers.Collision.check(this._supply, this._enemy_bullet_stone)) {
          if (!this._player_plane.invincible_time) {
            managers.Explosion_type_1.runExplosion(this._supply_explosion);
            this._supply_explosion.x = this._enemy_bullet_laser.x;
            this._supply_explosion.y = this._enemy_bullet_laser.y;
            this._supply.y = 0 - this._supply.halfHeight;
            this._supply.x = config.Screen.HALF_WIDTH;
            this._supply.Reset();
          }
        }
        //player bullet vs enemy
        //player bullet vs supply 
        this._player_bullets.forEach(bullet => {
          bullet.Update();
          if (managers.Collision.check(this._enemy_ufo, bullet)) {
            //explosion effect
            managers.Explosion_type_1.runExplosion(this._enemy_explosion_type_0);
            managers.Game.ScoreBoard.Score += 1;
            this._hits += 1;
            this._player_bullets.splice(this._player_bullets.indexOf(bullet), 1);
            this.removeChild(bullet);
          }
          else if (managers.Collision.check(this._supply, bullet)) {
            managers.Explosion_type_1.runExplosion(this._supply_explosion);
            this._supply_explosion.x = bullet.x;
            this._supply_explosion.y = bullet.y;
            this._supply.y = 0 - this._supply.halfHeight;
            this._supply.x = config.Screen.HALF_WIDTH;
            this._supply.Reset();
            this._player_bullets.splice(this._player_bullets.indexOf(bullet), 1);
            this.removeChild(bullet);

          }
          else if (bullet.x > config.Screen.WIDTH) {
            this._player_bullets.splice(this._player_bullets.indexOf(bullet), 1);
            this.removeChild(bullet);
          }


        });

        switch (this._hits) {
          case 5:

            this._enemy_ufo_crack.alpha = 0.5;
            break;

          case 10:
            this._supply_active = true;
            this._enemy_ufo_crack.alpha = 1;

            break;
          case 15:
            this._enemy_ufo_smoke.alpha = 0.4;
            break;
          case 20:
            this._enemy_ufo_smoke.alpha = 0.8;
            break;
        }
      }
      this._enemy_ufo_smoke.x = this._enemy_ufo_crack.x = this._enemy_explosion_type_0.x = this._enemy_ufo.x;
      this._enemy_ufo_smoke.y = this._enemy_ufo_crack.y = this._enemy_explosion_type_0.y = this._enemy_ufo.y;

      if (!this._player_upgrade) {
        this._player_plane_type_0.y = this._player_plane.y;
        this._player_plane_type_0.x = -50;
      }
      if (this._player_upgrade) {
        this._player_plane_type_0.y = this._player_plane.y;
        this._player_plane_type_0.Update();

      }
      this._player_explosion_type_1.y = this._player_explosion_type_0.y = this._player_plane.y;
      this._player_explosion_type_1.x = this._player_explosion_type_0.x = this._player_plane.x;
      this._parachute.x = this._supply.x;
      this._parachute.y = this._supply.y - this._supply.halfHeight - this._parachute.halfHeight;

    }
    public Reset(): void { }

    public Destroy(): void {
      this.sound_wind.stop();
      this.removeAllChildren();
    }

    public Main(): void {
      this.addChild(this._background_sky);

      this.addChild(this._enemy_alien);

      this.addChild(this._background_wall);

      this.addChild(this._background_tree);

      this.addChild(this._background_slide);

      this.addChild(this._background_street_lamp);

      this.addChild(this._player_plane);

      this.addChild(this._player_plane_type_0);

      this.addChild(this._player_explosion_type_0);
      this._player_explosion_type_0.alpha = 0;

      this.addChild(this._player_explosion_type_1);
      this._player_explosion_type_1.alpha = 0;

      this.addChild(this._enemy_ufo);

      this.addChild(this._enemy_bullet_laser);

      this.addChild(this._enemy_bullet_stone);

      this.addChild(this._enemy_ufo_crack);
      this._enemy_ufo_crack.alpha = 0;

      this.addChild(this._enemy_ufo_smoke);
      this._enemy_ufo_smoke.alpha = 0;

      this.addChild(this._enemy_explosion_type_0);
      this._enemy_explosion_type_0.alpha = 0;

      this.addChild(this._supply);

      this.addChild(this._parachute);

      this.addChild(this._supply_explosion);
      this._supply_explosion.alpha = 0;
      //mouse fire
      /*
            this.on("click",function(){
                 var bulletSound = createjs.Sound.play("bulletshoot");
                 bulletSound.volume = 0.5;
                 this._player_bullet= new objects.Player_bullet_type_0();
                 this._player_bullet.y=this._player_plane.y;
                 this.addChild(this._player_bullet);
                 this._player_bullets.push(this._player_bullet);
                 console.log(this.children)
 
             },this);
             */

      this.addChild(managers.Game.ScoreBoard.LivesLabel);
      this.addChild(managers.Game.ScoreBoard.ScoreLabel);



      this.addChild(this._label_start);

      setTimeout(() => {
        this.removeChild(this._label_start);
      }, 3000);

      setTimeout(() => {
        this.addChild(this._label_finalBattle);
        createjs.Tween.get(this._enemy_alien).to({ y: 350 }, 1000);
      }, 14000);

      setTimeout(this._alien_action.bind(this), 15000);

      setTimeout(() => {
        this.removeChild(this._label_finalBattle);
      }, 17000);
    }
  }
}
