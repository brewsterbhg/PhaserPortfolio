class NPC extends Phaser.Sprite {
    
    constructor({game, x, y, scaleX, scaleY, flip, asset}) {
        
        super(game, x, y, asset);
        
        this.game = game;
        
        // Anchor and scale
        this.anchor.setTo(0.5);
        this.scale.setTo(scaleX, scaleY);

        // Enable physics on the NPC
        this.game.physics.arcade.enable(this);

        // NPC physics properties
        this.body.collideWorldBounds = true;
        this.body.gravity.y = 1000;
        
        if(flip)
            this.scale.x = -scaleX;
    }
}

export default NPC;