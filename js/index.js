//Footer

let cad = `
<div>
<img id="img-montana" src="img/img-footer.jpg" alt="Footer">
</div>    

<div class="text-footer">
<p class="nombre">Glam Argentina por Luis Lahitte</p>
<p>Arroyo 831 4° piso (C1007AAA) CABA- Buenos Aires- Argentina</p>
<p>+54911-5525-4953</p>
<p>info@glamargentina.com.ar</p>
<a class="img-footer" href="https://www.facebook.com/luis.lahitte"><i class="fab fa-facebook-square"></i></a><a class="img-footer" href="https://www.instagram.com/luislahitte/"><i class="fab fa-instagram"></i></a>          
</div>
<br>  
<div id="mapa">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4813515402316!2d-58.38114058519556!3d-34.59198776438368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccab6ca4bbf7b%3A0x7a6248db7de2971a!2sArroyo%20831%2C%20C1011%20CABA!5e0!3m2!1ses-419!2sar!4v1630520084271!5m2!1ses-419!2sar" width="200" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
`

document.getElementById("idFooter").innerHTML = cad;

//Responsive nav bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }