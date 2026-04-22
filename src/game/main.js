import { Title as Title } from './scenes/Title';
import { Grill as Grill } from './scenes/Grill';
import { Grill_Instructions as GrillInstructions } from './scenes/Grill_Instructions';
import { AUTO, Scale,Game } from 'phaser';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#000000',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        //Title,
        //GrillInstructions,
        Grill
        ]
};

const StartGame = (parent) => {
    return new Game({ ...config, parent });
}

export default StartGame;
