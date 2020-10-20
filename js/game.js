class Game{
constructor(){

}
getState(){
 var gameStateref=database.ref("gameState");
 gameStateref.on("value",function(data){
 gameState=data.val();
 })

}
update(state){
 database.ref('/').update({
 gameState:state  
 })
}
start(){
 if(gameState===0){
  player=new Player();
  player.getCount();
  form= new Form();
  form.display();
 }
}
play(){
 form.hide();
 text("Game Start",120,100);
 Player.getplayerinfo();
 if(allPlayers!==undefined){
  var displayPosition=120;
  for(var plr in allPlayers){
  if(plr==="player"+player.index){
  fill("red");
  }
  diaplayPosition+=20;
  text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,diaplayPosition);

  }
 }
}




}