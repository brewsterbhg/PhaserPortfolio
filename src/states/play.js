import Player from 'objects/Player';
import NPC from 'objects/NPC';

class Play extends Phaser.State {
    
    create() {
        
        // Some variables
        var groundHeight = 64;
        var signHeight = 128;
        var startingPlayerX = 10;
        var startingCharacterY = 128;
        var startingJustinX = 500;
        var justinScale = 0.8;
        var numOfGroundBlocks = 32;
        
        // Controls
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        // Set game bounds
        this.game.world.setBounds(0, 0, 14000, 1400);
        
        // Set background color
        this.game.stage.backgroundColor = "#000";
        
        // Start physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // The group for the ground objects
        this.platforms = this.game.add.group();

        // Ground physics
        this.platforms.enableBody = true;

        // Create the ground        
        var xPos = 0;
        for (var i = 0; i < numOfGroundBlocks; i++)
        {
            var ground = this.platforms.create(xPos, this.game.world.height - groundHeight, 'ground');
            
            // Make it immovable
            ground.body.immovable = true;
            
            //Update the x position
            xPos += groundHeight;
        }
        
        //Create Player
        this.player = new Player({
            game: this.game,
            x: startingPlayerX,
            y: this.game.height - startingCharacterY,
            cursors: this.cursors,
            spaceKey: this.spaceKey,
            asset: 'main'
        });

        // Create Justin
        this.justin = new NPC({
            game: this.game,
            x: startingJustinX,
            y: this.game.height - startingCharacterY,
            scaleX: justinScale,
            scaleY: justinScale,
            flip: true,
            asset: 'justin'
        });
        
        // Add Justin
        this.game.stage.addChild(this.justin);
        // Add the player
        this.game.stage.addChild(this.player);

        // Animate the mofo
        this.justin.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        this.justin.animations.play('idle');
        
        // The sign
        var sign = this.game.add.sprite((startingJustinX / 2), this.game.world.height - signHeight, 'sign');
        
        // Lock camera
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON);
    }
    
    update() {
        
        // Check player and ground collision
        this.game.physics.arcade.collide(this.player, this.platforms);
        
        // Check Justin and ground collision
        this.game.physics.arcade.collide(this.justin, this.platforms);
    }

}

export default Play;