var fixedRect,movingRect;

function Setup(){
	createCanvas(600,600);
	 fixedRect = createSprite(200,50,30,10);
	 fixedRect.shapeColor = "red"
	 fixedRect.scale = 4;
	 fixedRect.debug = true;

	 movingRect = createSprite(300,60,40,20);
	 movingRect.shapeColor = "blue";
	 movingRect.shapeColor = 4;
movingRect.debug = true;

}
function draw(){
background("black");
movingRect.x = world.mouseX;
movingRect.y = world.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
	&&fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
	&&movingRect.x - fixedRect.y < fixedRect.height/2 + movingRect.height/2
	&&fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.shapeColor = "yellow";
fixedRect.shapeColor = "yellow";


}
else {

	movingRect.shapeColor = "orange";
	fixedRect.shapeColor = "orange";
}
drawSprites();
}
