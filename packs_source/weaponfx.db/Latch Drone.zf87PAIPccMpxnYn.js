let target = Array.from(game.user.targets)[0];

let sequence = new Sequence()

  for(let target of Array.from(game.user.targets)){
    sequence.effect()
        .file("modules/lancer-weapon-fx/sprites/LatchDrone.png")
        .rotate(260)
        .atLocation(canvas.tokens.controlled[0])
        .rotateTowards(target)
        .moveTowards(target)
        .moveSpeed(1200)
    sequence.sound()
        .file("modules/lancer-weapon-fx/soundfx/Mortar_Launch.ogg")
        .volume(0.7)
        .waitUntilFinished()
   .sound()
        .file("modules/lancer-weapon-fx/soundfx/Stabilize.ogg")
        .volume(0.9)
        .delay(200)
    .effect()
        .file("jb2a.healing_generic.400px.green")
        .atLocation(target)
        .scale(0.5)
        .delay(200)
}
    sequence.play();