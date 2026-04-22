import { Scene } from 'phaser';

export class Grill extends Scene
{
    constructor ()
    {
        super('Grill');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        this.load.image('background_grill', 'Grill Main Background.jpg');
    }

    create ()
    {
        this.add.image(0, 0, 'background_grill').setOrigin(0, 0);

        

        //Make objects draggable
        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
    }







    /*

        let serverSelection = this.add.image(this.scale.width /2 - 150, 650, 'server-selection').setDepth(100);
        serverSelection
            .setScale((0.5))
            .setInteractive(
                {draggable:true,
                cursor: 'pointer'
                 }
            );

*/


}
