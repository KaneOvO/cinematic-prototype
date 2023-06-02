class Level1 extends Base {
    constructor(){
        
        super("level1","level1")
    }

    onEnter() {


        this.left_choice_text = `return to main menu`
        this.right_choice_text = `return to main menu`

        this.changeText(this.eventText, `A Level`);

        this.dragrotate(this.card);

        this.scene_turn = 1;


    }

    //递归函数，用于实现while loop
    judgeChoice() {
        if (this.player_choice != "") {
            if (this.scene_turn == 1) {
                this.action1();
            }
        }
    }

    action1() {
        this.rotateOutAndMakeNewCard("elf");
        
        this.openDoor.play();

        this.time.delayedCall(1000, () => {
            this.gotoScene("title");
        })    
    }

}