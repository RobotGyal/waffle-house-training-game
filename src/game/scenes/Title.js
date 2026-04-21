//import { makeDraggable } from '../draggable.js';
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
        //this.createDragEvents()
        this.add.image(512, 200, 'background');
        this.add.image(512, 300, 'logo').setDepth(100);

        let serverSelection = this.add.image(this.scale.width /2 - 150, 650, 'server-selection').setDepth(100);
        serverSelection
            .setScale((0.5))
            .setInteractive(
                {draggable:true,
                cursor: 'pointer'
                 }
            );
        let grillSelection = this.add.image(this.scale.width /2 + 150, 650, 'grill-selection').setDepth(100);
        grillSelection
            .setScale((0.5))
            .setInteractive(
                {draggable:true,
                cursor: 'pointer'
                 }
            );

        //Make objects draggable
        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
    }







    /*

    createDragEvents(){
        //this.dragStartEventListener();
        //this.dragEventListener();
        //this.dragStopEventListener();
    }

    dragStartEventListener(){
        console.log('Drag started at:', gameObject.x, gameObject.y);
        this.input.on('dragstart', (pointer, gameObject)=> {
            gameObject.setAlpha(0.5); // Optional: Make the object semi-transparent while dragging
        });
    };

    dragEventListener(){
        //
        console.log('drag event listener');
    }

    dragStopEventListener(){
        //
        console.log('drag stop event listener');
    }

*/


}
