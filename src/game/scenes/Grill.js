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

        //load markers
        this.load.svg('applebutter', 'icons/Apple butter.svg');
        this.load.svg('butter', 'icons/Butter.svg');
        this.load.svg('cheese', 'icons/Cheese.svg');
        this.load.svg('grape', 'icons/Grape jelly.svg');
        this.load.svg('ham', 'icons/Ham.svg');
        this.load.svg('hash', 'icons/Hashbrown.svg');
        this.load.svg('jalapeno', 'icons/Jalapeno.svg');
        this.load.svg('ketchup', 'icons/Ketchup.svg');
        this.load.svg('lettuce', 'icons/Lettuce.svg');
        this.load.svg('mayo', 'icons/Mayo.svg');
        this.load.svg('mustard', 'icons/Mustard.svg');
        this.load.svg('onion', 'icons/Onion.svg');
        this.load.svg('pickle', 'icons/Pickle.svg');
        this.load.svg('strawberry', 'icons/Strawberry jelly.svg');
        this.load.svg('tabasco', 'icons/Tabasco.svg');
        this.load.svg('tomato', 'icons/Tomato.svg');
        this.load.svg('WHsauce', 'icons/WH Sauce.svg');
    }

    create ()
    {
        this.add.image(0, 0, 'background_grill').setOrigin(0, 0);
        this.add.image(175, 650, 'applebutter').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(125, 650, 'butter').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(100, 275, 'cheese').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(65, 650, 'grape').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(60, 250, 'ham').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(150, 250, 'hash').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(100, 220, 'jalapeno').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(100, 550, 'ketchup').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(150, 380, 'lettuce').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(60, 525, 'mayo').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(175, 525, 'mustard').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(60, 390, 'onion').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(100, 420, 'pickle').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(100, 700, 'strawberry').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(133, 525, 'tabasco').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(100, 350, 'tomato').setInteractive({draggable:true, cursor: 'pointer'});
        this.add.image(100, 500, 'WHsauce').setInteractive({draggable:true, cursor: 'pointer'});

        

        //Make objects draggable
        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })


       
    }


    /*  update() {
            let pointerX = this.input.x;
            let pointerY = this.input.y;
            // Display, log, or use these values
            console.log(`Pointer X: ${pointerX}, Pointer Y: ${pointerY}`);
        }
 */






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
