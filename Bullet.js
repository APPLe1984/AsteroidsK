Bullet.all = {};

Bullet.count = 0;

Bullet.activeCount = 0;

Bullet.max = 5;

Bullet.speed = 0.022;

Bullet.life = 35;

function Bullet(){
		if(Bullet.activeCount<Bullet.max){
			
			Bullet.activeCount++;
			Bullet.count++;
			this.id = Bullet.count.toString();
			Bullet.all[this.id] = this;
			
			this.life = 0;
			this.a = Game.ship.a;
			
			this.x = Game.ship.points[0].x;
			this.y = Game.ship.points[0].y;
			
			//this.modX = Math.sin(Math.PI/180*this.a)*Bullet.speed*VAR.d;
			//this.modY = -Math.cos(Math.PI/180*this.a)*Bullet.speed*VAR.d;
		}
	
}

Bullet.draw = function (){
	
	for (var b in Bullet.all){
		
		if(Bullet.all[b].life>Bullet.life){
			
			Bullet.activeCount--;
			
			delete Bullet.all[b];
		}else{
			Bullet.all[b].life++;
			
		Bullet.all[b].x += Math.sin(Math.PI/180*Bullet.all[b].a)*Bullet.speed*VAR.d;//Bullet.all[b].modX;
		Bullet.all[b].y -= Math.cos(Math.PI/180*Bullet.all[b].a)*Bullet.speed*VAR.d;//Bullet.all[b].modY;
		if(Bullet.all[b].x<0){
			Bullet.all[b].x+=VAR.W;
		}else if(Bullet.all[b].x>VAR.W){
			Bullet.all[b].x-=VAR.W;
		}
		if(Bullet.all[b].y<0){
			Bullet.all[b].y+=VAR.H;
		}else if(Bullet.all[b].y>VAR.H){
			Bullet.all[b].y-=VAR.H;
		}
			
		Game.ctx.beginPath();
		Game.ctx.arc(Bullet.all[b].x, Bullet.all[b].y, 3, 0, Math.PI/180*360);
		Game.ctx.closePath();
		Game.ctx.fill();
		}

	}
};