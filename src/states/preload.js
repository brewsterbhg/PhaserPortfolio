class Preload extends Phaser.State {
    
    preload() {
        
        this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.fileComplete, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);
        
        //Add the preloader bar
        this.preloadBar = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
        this.load.setPreloadSprite(this.preloadBar);
        
        // Load Characters
        this.game.load.spritesheet('main', 'assets/characters/main.png', 128, 128);
        this.game.load.spritesheet('justin', 'assets/characters/justin.png', 128, 128);
        
        // Load Objects
        this.game.load.image('ground', 'assets/objects/ground.png', 128, 128);
        this.game.load.image('sign', 'assets/objects/sign.png', 64, 64);
        
        this.game.load.start();
    }
    
    loadStart() {
        //this.loadingText.setText('Loading...');
    }

    fileComplete(progress) {
        //this.loadingText.setText('Loading: ' + progress + '%');
    }

    loadComplete() {
        //this.loadingText.setText('Load Complete');
        this.game.state.start('Menu');
    }

}

export default Preload;