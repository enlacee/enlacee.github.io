<template>
  <div class="main-layout">
    <div class="profile-card">

        <img src="~/assets/img/profile-tiktok.jpg" alt="Anibal tiktok" class="profile-pic"/>

        <h1>Anibal Copitan</h1>
        <p>Te ayudo a alcanzar tus metas con software</p>
        <p>🐧 Linux - Dev - Side-Projects</p>

        <div class="social-icons">
            <span>
              <a href="https://www.youtube.com/@anibal-linux">
                <i class="fab fa-youtube"></i>
              </a>
            </span>
            <span>
              <a href="https://www.tiktok.com/@anibal.linux">
                <i class="fab fa-tiktok"></i>
              </a>
            </span>
            <span>
              <a href="https://anibalcopitan.com/">
                <i class="fas fa-globe"></i>
              </a>
            </span>
        </div>

        <a class="button" href="https://wa.me/51970142637?text=Hola%2C%20Anibal%20tengo%20una%20consulta">
          <i class="fab fa-whatsapp"></i> ¿Tienes una consulta?
        </a>
  <!--         <button>Podcast</button> -->
        <a class="button" href="https://blog.anibalcopitan.com">Blog</a>

<!--         <a class="button" href="https://blog.anibalcopitan.com">Reserva una asesoría conmigo</a> -->
<!--         <a class="button" href="https://blog.anibalcopitan.com">Si te gusto el contenido, considera una donación YAPE/PAYPAL</a> -->





        <div class="products">
          <button class="button"><p>PRODUCTOS DIGITALES</p></button>

          <div class="product">
            <a href="https://okeypay.anibalcopitan.com/" target="_blank" rel="noopener" title="okeypay">
              <img width="150" src="~/assets/img/product-okeypay-150x150.png" alt="okeypay" class="img-thumbnail"/>
              <p>Verifica pagos yape (S/20.00)</p>
            </a>
            <br/>
            <a href="https://a.co/d/2wmoHbw" target="_blank" rel="noopener" title="okeypay">
              <img width="150" src="~/assets/img/product-book-150x150.png" alt="okeypay" class="img-thumbnail"/>
              <p>📚 Ebook: Migrando a Lubuntu - Una Guía Linux</p>
            </a>
            <!-- <br/><br/> -->
<!--
            <a href="#" target="_blank" rel="noopener" title="okeypay">
              <img width="150" src="~/assets/img/code-design-okey-pay.png" alt="okeypay" class="img-thumbnail"/>
              <p>OkeyPay: verificas pagos yape</p>
            </a>
            -->
            <br/>
          </div>
        </div>
        <footer>Inspired By Buffer</footer>
        <hr/> <!-- add for load font fontawesome -->
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'linktree', // Asignar el layout exclusivo
    data() {
      return {
        title: "LinkTree | " + process.env.appName
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'LinkTree Anibal Copitan'
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: 'LinkTree Anibal Copitan'
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.title
          },

        ]
      }
    },
    mounted() {

      this.$utils.redirectToHttps();

    },
    methods: {

    },
  }
</script>
<style scoped>

/**
 * Bug: using simple flexbox
**/

/*
.main-layout {
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  border: 2px solid blue;
  box-sizing: border-box;
  overflow: hidden;
}
*/

/**
 * Using vh and vw with Margins (margin: 0;)
 **/

.main-layout {
  background-color: #eaeaea;
  width: 300px;
  height: auto;
  margin: auto;

/*
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
*/
  box-sizing: border-box;
  overflow: hidden;

  /* border: 2px solid blue; */
}

.profile-card {
  text-align: center;
  width: 300px;
  padding: 20px;
}

.profile-pic {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}

h1 {
  text-transform: none;
  font-size: 1.4em;
  margin: 15px 0 5px 0;
}

p {
font-size: 13px;
}

a.button, button {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

.products{
  display: block;
  width: 100%;
  background-color: #000;
  border-radius: 5px;
}
.products p, .product p{
  color:white;
  margin:0;
  padding:0;
}

.social-icons {
    display: flex;
    justify-content: center;
    margin: 15px 0;
    font-size: 1.5em;
    column-gap: 0.5em;
}

footer {
    font-size: 12px;
    color: inherit;
    background-color: transparent;
    padding: inherit;
}


</style>


