var  image;



function changefile()
{
  var a = document.getElementById("canvas");
  var b = document.getElementById("file");
  image = new SimpleImage(b);
  image.drawTo(a);
}




