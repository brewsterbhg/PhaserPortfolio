class Player extends Phaser.Sprite {
    
    constructor({game, x, y, cursors, spaceKey, asset}) {
        
        super(game, x, y, asset);
        
        this.game = game;
        this.cursors = cursors;
        this.spaceKey = spaceKey;
        
        this.anchor.setTo(0.5);
        this.scale.setTo(0.75, 0.75);

        // Enable physics on player
        this.game.physics.arcade.enable(this);

        // Player physics properties
        this.body.collideWorldBounds = true;
        this.body.gravity.y = 1000;
        
        // Left & right animations
        this.animations.add('left', [8, 9, 10, 11, 12, 13, 14, 15], 12, true);
        this.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        this.frame = 8;
    }
    
    update() {
        if (this.cursors.left.isDown)
        {
            // Move to the left
            this.x -= 3;
            this.animations.play('left');
            
            // Track direction
            this.direction = 0;
        }
        else if (this.cursors.right.isDown)
        {
            // Move to the right
            this.x += 3;
            this.animations.play('right');
            
            // Track direction
            this.direction = 1;
        }
        else
        {
            // Stand still
            this.animations.stop();
            this.body.velocity.x = 0;

            //Frame depending on player's current direction
            this.frame = (this.direction == 0) ? 8 : 4;
        }
        
        //  Allow the player to jump if they are touching the ground
        if ((this.cursors.up.isDown || this.spaceKey.isDown) && this.body.touching.down)
        {
            this.body.velocity.y = -400;
        }
    }
}

export default Player;