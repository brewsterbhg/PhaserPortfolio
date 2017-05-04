class Boot extends Phaser.State {
    
    preload() {
        this.game.load.image('preloader', 'assets/preloader.gif');
    }
    
    create() {
        
        this.game.input.maxPointers = 1;
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.state.start('Preload');
    }
    
}

export default Boot;