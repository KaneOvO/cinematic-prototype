const game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        // mode: Phaser.Scale.ScaleModes.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    ////scene: [baseBattle],
    //scene: [secondFloorLevel3],
    scene: [
        openning,
        warnning,
        credit,
        title,
        firstFloorLevel0,
        Level1,
    ],
    backgroundColor: 0x000000,
    title: "Game",
});

