class Menu extends Phaser.State {
    
    create() {
        this.game.stage.backgroundColor = "#333";
        var headerStyle = { font: '30px Press Start 2P', fill: '#FFFFFF', align: 'center' };
        var bodyStyle = { font: '14px Press Start 2P', fill: '#FFFFFF', align: 'center' };
        
        // Title
        this.titleText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 80, 'BrewCodes', headerStyle);
        this.titleText.anchor.setTo(0.5, 0.5);
        this.titleText.x = Math.floor(this.titleText.x);
        this.titleText.setShadow(0,3,'black',2);
        
        // Sub Title
        this.bodyText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 50, 'An Interactive Portfolio', bodyStyle);
        this.bodyText.anchor.setTo(0.5, 0.5);
        this.bodyText.x = Math.floor(this.bodyText.x);
        this.bodyText.setShadow(0,3,'black',2);
        
        // Press Any Key
        this.pressKey = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '[click anywhere to start]', bodyStyle);
        this.pressKey.anchor.setTo(0.5, 0.5);
        this.pressKey.x = Math.floor(this.pressKey.x);
        this.pressKey.setShadow(0,3,'black',2);
    }
    
    update() {
        // Called on mouse click
        if(this.game.input.activePointer.justPressed()) {
            this.game.state.start('Play');
        }
    }
}

export default Menu;