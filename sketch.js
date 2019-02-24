var raio = 145;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  textAlign(CENTER, CENTER);
  
 // 
  cx = width / 2;
  cy = height / 2;
  
  x1=400
  
  x=200
  y=200
  
  w=390
  h=390
}

function draw() {
  background(255);
	
  //elipse externa
  strokeWeight(2)
  stroke(0)
  fill(229,228,228)
  ellipse(x,y,w,h)
  fill(0)
  
  //elipse interna  
  strokeWeight(1)
  stroke(0)
  fill(255)
  ellipse(x,y,w-60,h-60)
  
  //centro
  fill(60,60,60)
  ellipse(x,y,30)
  
  //Ponteiro minuto
  strokeWeight(5)
  line(x,y-15,x,y-120)
  triangle(x-3,y-120,x,y-130,x+3,y-120)
  
  //Ponteiro hora
  stroke(228,37,29)
  strokeWeight(5)
  line(x-15,y,x-110,y)
  triangle(x-110,y+3,x-117,y,x-110,y-3)
  
  //Insere numeros *Utilizando angulo em graus
  hora=1
  for (var angulo = -60; angulo <= 299; angulo += 30) {
  	var a = cos(angulo) * raio;
  	var b = sin(angulo) * raio;
 
  	//line(a + cx, b + cy,a + cx, b + cy);
  	textSize(35);
  	fill(0);
  	noStroke()
  	text(hora, a + cx, b + cy);
  	hora=hora+1
	}
  

	
}