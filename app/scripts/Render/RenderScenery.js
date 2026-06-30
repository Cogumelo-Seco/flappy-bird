export default async(Render, event) => {
    let worldScale = 1.9

    let sceneryAnimationFrame = Render.gameState.animations['scenery'].frame

    Render.canvas.style.background = `-${Render.gameState.animations['background'].frame}px 0 url(/imgs/scenery/${Render.gameState.gameStyle}/background.png)`

    let sceneryImageData = Render.gameState.images[`imgs/scenery/${Render.gameState.gameStyle}/scenery.png`]
    let sceneryWidth = sceneryImageData.image.width*worldScale
    let sceneryHeight = sceneryImageData.image.height*worldScale


    let groundImageData = Render.gameState.images[`imgs/scenery/${Render.gameState.gameStyle}/ground.png`]
    let groundWidth = groundImageData.image.width*worldScale
    let groundHeight = groundImageData.image.height*worldScale
    Render.groundY = Render.canvas.height-(groundHeight*0.7)
    

    for (let x = 0;x <= Render.canvas.width/(sceneryWidth*0.5);x++) {
        Render.ctx.drawImage(
            sceneryImageData.image, 
            sceneryWidth*x-(sceneryWidth*(sceneryAnimationFrame/100)),
            Render.groundY-(sceneryWidth*0.4),
            sceneryWidth+2,
            sceneryHeight
        )
    }


    for (let x = 0;x <= Render.canvas.width/(groundWidth*0.5);x++) {
        Render.ctx.drawImage(
            groundImageData.image, 
            groundWidth*x-(3*groundWidth*(sceneryAnimationFrame/100)),
            Render.groundY,
            groundWidth+2, 
            groundHeight
        )
    }

    
}