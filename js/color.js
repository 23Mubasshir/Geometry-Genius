function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  


  document.getElementById('card-body-color').addEventListener("mouseover", function(){
    document.getElementById('card-body-color').style.backgroundColor = randomColor();
  });
  document.getElementById('card-body-color1').addEventListener("mouseover", function(){
    document.getElementById('card-body-color1').style.backgroundColor = randomColor();
  });
  document.getElementById('card-body-color2').addEventListener("mouseover", function(){
    document.getElementById('card-body-color2').style.backgroundColor = randomColor();
  });
  document.getElementById('card-body-color3').addEventListener("mouseover", function(){
    document.getElementById('card-body-color3').style.backgroundColor = randomColor();
  });
  document.getElementById('card-body-color4').addEventListener("mouseover", function(){
    document.getElementById('card-body-color4').style.backgroundColor = randomColor();
  });
  document.getElementById('card-body-color5').addEventListener("mouseover", function(){
    document.getElementById('card-body-color5').style.backgroundColor = randomColor();
  });



