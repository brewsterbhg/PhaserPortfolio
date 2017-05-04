import Preload from 'states/preload';
import Boot from 'states/boot';
import Menu from 'states/menu';
import GameOver from 'states/gameover';
import Play from 'states/play';

class Game extends Phaser.Game {

	constructor() {
        var hi;
		super(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'canvas');
        
		this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('Menu', Menu, false);
        this.state.add('GameOver', GameOver, false);
        this.state.add('Play', Play, false);

		this.state.start('Boot');
	}

}

new Game();