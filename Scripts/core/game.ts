//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    let canvas: HTMLCanvasElement;
    let stage: createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;
    let ScoreBoard: managers.ScoreBoard;

    let Manifest = [
        { id: "start", src: "/Assets/images/Start.png" },
        { id: "exittomenu", src: "/Assets/images/ExitToMenu.png" },
        { id: "playagain", src: "/Assets/images/PlayAgain.png" },
        { id: "instruction", src: "/Assets/images/Instruction.png" },

        //player images and sounds

        { id: "player_plane", src: "/Assets/images/Plane.png" },
        { id: "player_explosion_type_0", src: "/Assets/images/player/Explosion_2.png" },
        { id: "player_explosion_type_1", src: "/Assets/images/player/Explosion_3.png" },
        { id: "player_bullet_type_0", src: "/Assets/images/player/Bullet.png" },
        { id: "player_plane_type_0", src: "/Assets/images/player/Plane_type_0.png" },
        { id: "sound_player_explosion", src: "Assets/Audio/player/PlayerExplosion.mp3" },
        { id: "sound_player_upgrade", src: "Assets/Audio/player/PlayerUpgrade.mp3" },
        { id: "sound_bulletshoot", src: "Assets/Audio/player/BulletShoot.mp3" },


        //supply images and sound
        { id: "supply", src: "/Assets/images/player/Supply.png" },
        { id: "parachute", src: "/Assets/images/player/Parachute.png" },
     
        //explosion images and sound
        { id: "explosion_type_0", src: "/Assets/images/explosion/Explosion_1.png" },
        { id: "sound_explosion_type_0", src: "/Assets/Audio/explosion/explosion_type_0.mp3" },

        //level 1 images and sound

        { id: "enemy_ufo_lv1", src: "/Assets/images/level1/UFO.png" },
        { id: "enemy_bullet_laser_lv1", src: "/Assets/images/level1/Laser.png" },
        { id: "enemy_explosion_type_0", src: "/Assets/images/level1/Explosion_1.png" },
        { id: "enemy_bullet_stone_lv1", src: "/Assets/images/level1/Stone.png" },
        { id: "enemy_ufo_crack_lv1", src: "/Assets/images/level1/UFO_Crack.png" },
        { id: "enemy_ufo_smoke_lv1", src: "/Assets/images/level1/UFO_Smoke.png" }, 
        { id: "enemy_alien_kid_lv1", src: "/Assets/images/level1/Alien_kid.png" },

        { id: "background_sky_lv1", src: "/Assets/images/level1/Sky.png" },
        { id: "background_slide_lv1", src: "/Assets/images/level1/Slide.png" },
        { id: "background_street_lamp_lv1", src: "/Assets/images/level1/Street_Lamp.png" },
        { id: "background_tree_lv1", src: "/Assets/images/level1/Tree.png" },
        { id: "background_wall_lv1", src: "/Assets/images/level1/Wall.png" },


        { id: "sound_wind", src: "/Assets/Audio/level1/Wind.mp3" },
        { id: "sound_lazershoot", src: "/Assets/Audio/level1/LazerShoot.mp3" },
        {id: "sound_blink", src: "/Assets/Audio/level1/Blink.mp3"}
     
    ]


    function Init(): void {
        console.log(`%c Assets Loading...`, "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start(): void {
        console.log(`%c Game Initializing...`, "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);

        managers.Game.Stage = stage;

        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;

        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;
        Main();
    }

    function Update(): void {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update();

        stage.update();
    }

    function Main(): void {
        console.log(`%c Main Game Started...`, "font-style:italic; font-size:16px; color:blue;");

        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }

        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;

            case config.Scene.INS:
                CurrentScene = new scenes.Instruction();
                break;

            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;

            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }

        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }

    window.addEventListener("load", Init);

})();