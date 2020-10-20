class Form{
constructor(){
    this.title=createElement("h1");
    this.input=createInput("Enter your name");
    this.button=createButton("Start");
    this.greeting=createElement("h3");
}
hide(){
 this.greeting.hide();
 this.button.hide();
 this.input.hide();
}
display(){
 
 this.title.html("Car Racing Game");
 
 this.title.position(130,50);
 this.input.position(130,150);
 this.button.position(150,180);
 this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playerCount++;
    player.update(name);
    player.updateCount(playerCount);
    this.greeting.html("Hello "+player.name);
    this.greeting.position(130,160);
 });
}




}