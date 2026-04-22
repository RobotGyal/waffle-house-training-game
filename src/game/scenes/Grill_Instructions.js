import { Scene } from 'phaser';

export class Grill_Instructions extends Scene
{
    constructor ()
    {
        super('GrillInstructions');
    }

    preload ()
    {
        this.load.setPath('assets');
            
    }

    create ()
    {
        let instructions1 = this.add.video(0,0).loadURL('assets/videos/Instructions 1.mp4').setOrigin(0,0);
        let instructions2 = this.add.video(0,0).loadURL('assets/videos/Instructions 2.mp4').setOrigin(0,0);
        let instructions3 = this.add.video(0,0).loadURL('assets/videos/Instructions 3.mp4').setOrigin(0,0);
        let instructions4 = this.add.video(0,0).loadURL('assets/videos/Instructions 4.mp4').setOrigin(0,0);
        let gamestartscreen = this.add.video(0,0).loadURL('assets/videos/game start screen.mp4').setOrigin(0,0);


        const videos = [instructions1, instructions2, instructions3, instructions4, gamestartscreen ];
        videos[0].play(false);

        //loop through the videos and play the next one when the current one finishes.
        //When the last video finishes, call handleEndOfInstructions
        for (let i = 0; i < videos.length; i++) 
        {
            videos[i].once('complete', () => {
            videos[i + 1].play(false);
            });
            if (i === videos.length - 1) {
                break;
            }
            videos[videos.length - 1].once('complete', () => {
                this.handleEndOfInstructions();
            });
        }

    }

    //When the last video finishes, start the Grill scene.
    handleEndOfInstructions() {
        this.scene.start('Grill');
    }


}
