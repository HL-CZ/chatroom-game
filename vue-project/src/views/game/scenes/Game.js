import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene
{
    
    
    constructor ()
    {
        super('Game');
        this.isChat = false;
        this.keyW;
        this.keyA;
        this.keyS;
        this.keyD;
        this.keyToggle;
        this.player;
        
    }
    create ()
    {
        // const keys = this.input.keyboard.addKey("W");
        this.keyW = this.input.keyboard.addKey("W");
        this.keyA = this.input.keyboard.addKey("A");
        this.keyS = this.input.keyboard.addKey("S");
        this.keyD = this.input.keyboard.addKey("D");
        this.keyToggle = this.input.keyboard.addKey("FORWARD_SLASH");
        

        this.cameras.main.setBackgroundColor(0x00ff00);

        this.add.image(512, 384, 'green');
        
        this.add.text(512, 200, 'Green Map', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(100).setOrigin(0.5);
        //player = this.physics.add.sprite(200, 350, 'catbeni');
        this.player = this.add.image(200, 350, 'catbeni');
        //player.setCollideWorldBounds(true);
        var cursors;
        
        cursors = this.input.keyboard.createCursorKeys();
        
        

        EventBus.emit('current-scene-ready', this);
    }
    update ()
    {
        if (this.keyToggle.isDown) {
            this.isChat = !this.isChat;
            console.log("buh")
           
        }
        if (this.isChat) {
            return;
        }
        if (this.keyW.isDown) {
            // W key
            this.player.y -=5;
        }
        if (this.keyD.isDown) {
            // D key 
            this.player.x += 5;
        }
        if (this.keyS.isDown) {
            // S key
            this.player.y +=5;
        }
        if (this.keyA.isDown) {
            // A key
            this.player.x -=5;
        } 
        
    }
   
    
    

}
