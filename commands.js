talkCommand = function(info){
	dialoger.startDialog(info);
}

changeRoomCommand = function(info){
	var params = info.split(",");
	changeRoom(rooms[params[0]],parseInt(params[1]),parseInt(params[2]));
}

changeCharCommand = function(info){
	char.becomeNPC();
	char.walk();
	focus = char = sprites[info];
	char.becomePlayer();
	setCurRoomOf(char);
}

changeSongCommand = function(info){
	changeBGM(assets[info]);
}

cancelCommand = function(){
	//do nothing
}
