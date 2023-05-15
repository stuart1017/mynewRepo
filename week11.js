let width = 900;
let height = 820;
svg = document.getElementById('basesvg');
console.log(svg);
svg.setAttribute('width', width);
svg.setAttribute('height', height);




console.log(svg);

function makeRGB(redInputValue, greenInputValue, blueInputValue) {
let redOutputValue = redInputValue ?? Math.round(Math.random() * 255);
let greenOutputValue = greenInputValue ?? Math.round(Math.random() * 255);
let blueOutputValue = blueInputValue ?? Math.round(Math.random() * 255);


return `rgb(${redOutputValue},${greenOutputValue},${blueOutputValue})`}

function drawEllipse(cx,cy,rx,r,g,b,){
 
   let X= cx??Math.round(Math.random()*(width-250)+100);
   let Y= cy??Math.round(Math.random()*height/4+150);
   let Rx= rx??Math.round(Math.random()*15+15);
   
   let C= makeRGB(r,g,b);  
   let newEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

   newEllipse.setAttribute("cx", X);
   newEllipse.setAttribute("cy", Y);
   newEllipse.setAttribute("rx", Rx);
   newEllipse.setAttribute("ry", Rx-1);
   newEllipse.setAttribute('fill', C);

   svg.appendChild(newEllipse);
}



    function drawLine(x1,y1,x2,y2,r,g,b,s){
     
       let X= x1??Math.round(Math.random()*width);
       let Y= y1??Math.round(Math.random()*height);
       let X2= x2??Math.round(Math.random()*(width-250)+100);
       let Y2= y2??Math.round(Math.random()*height/3+140);
       let SW= s??Math.round(Math.random()*10);
       let S = makeRGB(r,g,b);  
       
       let newline = document.createElementNS("http://www.w3.org/2000/svg", "line");
    
       newline.setAttribute("x1", X);
       newline.setAttribute("y1", Y);
       newline.setAttribute("x2", X2);
       newline.setAttribute("y2", Y2);
       newline.setAttribute('stroke-width', SW);
       newline.setAttribute('stroke', S);
    
       svg.appendChild(newline);
    }


    function drawTriangle(px1,py1,px2,py2,px3,py3,r,g,b,){
     
        let PX1= px1??Math.round(Math.random()*150+160);
        let PY1= py1??Math.round(Math.random()*height/5+650);
        let PX2= px2??Math.round(Math.random()*PX1);
        let PY2= py2??Math.round(Math.random()*height/5+650);
        let PX3= px3??Math.round(Math.random()*PX1);
        let PY3= py3??Math.round(Math.random()*height/5+650);
        let C2= makeRGB(r,g,b);  
        let newtriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
     
        newtriangle.setAttribute("points", `${PX1},${PY1} ${PX2},${PY2} ${PX3},${PY3}`);
        
        newtriangle.setAttribute("fill",C2)
        svg.appendChild(newtriangle);
     }
 







//flower branch
drawLine(395,540);
drawLine(395,540);
drawLine(395,540);
drawLine(398,540);
drawLine(398,540);
drawLine(398,540);
drawLine(398,540);
drawLine(398,540);
drawLine(398,540);
drawLine(398,540);
drawLine(398,540);
drawLine(398,540);
drawLine(395,540);
drawLine(395,540);
drawLine(395,540);
drawLine(395,540);
drawLine(402,540);
drawLine(402,540);
drawLine(402,540);
drawLine(402,540);
drawLine(402,540);
drawLine(402,540);
drawLine(406,540);
drawLine(406,540);
drawLine(406,540);
drawLine(402,540);
drawLine(402,540);
drawLine(406,540);
drawLine(406,540);
drawLine(406,540);
drawLine(406,540);
drawLine(406,540);
//Vase
drawEllipse(392,555,Math.round(Math.random()*7)+20);
drawEllipse(422,555,Math.round(Math.random()*7)+20);
drawEllipse(428,595,Math.round(Math.random()*13)+25);
drawEllipse(375,595,Math.round(Math.random()*13)+25);
drawEllipse(370,650,Math.round(Math.random()*16)+35)
drawEllipse(445,650,Math.round(Math.random()*16)+35);
drawEllipse(458,710,Math.round(Math.random()*21)+45);
drawEllipse(368,710,Math.round(Math.random()*21)+45);


//flower
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();
drawEllipse();

//window
drawLine(50,0,790,0,0,0,0,10);
drawLine(50,0,30,40,0,0,0,10);
drawLine(790,0,810,40,0,0,0,10);
drawLine(30,40,810,40,0,0,0,10);
drawLine(30,120,810,120,0,0,0,10);
drawLine(30,40,30,120,0,0,0,10);
drawLine(810,40,810,120,0,0,0,10);
drawLine(60,120,60,762,0,0,0,10);
drawLine(80,120,80,762,0,0,0,10);
drawLine(760,120,760,762,0,0,0,10);
drawLine(780,120,780,762,0,0,0,10);

let newline = document.createElementNS("http://www.w3.org/2000/svg","line");
newline.setAttribute("x1","0");
newline.setAttribute("y1","766");
newline.setAttribute("x2","840");
newline.setAttribute("y2","766");
newline.setAttribute("stroke-width","10");
newline.setAttribute("stroke","black");
svg.appendChild(newline);

//fallen leaves
drawTriangle();
drawTriangle();
drawTriangle();
drawTriangle();
drawTriangle(600,null,700,null,800);
drawTriangle(550,null,650,null,800);
drawTriangle(520,null,620,null,800);
drawTriangle(580,null,700,null,800);



