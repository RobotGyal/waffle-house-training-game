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
        
        this.load.image('background', 'background_grill.jpg');
    }

    create ()
    {
        let background = this.add.image(0, 0, 'background');
        background.setScale(2.2).setOrigin(0, 0);


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
