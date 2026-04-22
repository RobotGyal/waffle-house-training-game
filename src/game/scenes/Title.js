import { Scene } from 'phaser';

export class Title extends Scene
{
    constructor ()
    {
        super('Title');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png');

        this.load.image('server-selection', 'server-selection.png');
        this.load.image('grill-selection', 'grill-selection.png');}

    create ()
    {
        this.add.image(512, 200, 'background');
        this.add.image(512, 300, 'logo').setDepth(100);

        let serverSelection = this.add.image(this.scale.width /2 - 150, 650, 'server-selection').setDepth(100);
        serverSelection
            .setScale((0.5))
            .setInteractive(
                {cursor: 'pointer'
                 }
            );


        let grillSelection = this.add.image(this.scale.width /2 + 150, 650, 'grill-selection').setDepth(100);
        grillSelection
            .setScale((0.5))
            .setInteractive(
                {cursor: 'pointer'
                 }
            );
        grillSelection.on('pointerdown', () => {
            // Change to the scene with the key 'GameScene'
            this.scene.start('GrillInstructions'); 
            });
    }


}
