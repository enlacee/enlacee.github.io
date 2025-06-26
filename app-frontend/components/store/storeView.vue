<template>
    <section id="store">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>{{ title }}</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row">

                <div class="product-grid">
                    <!-- Producto 3 -->

                    
<!--                    <div class="product-card">
                        <div class="badges">
                            <span class="badge" data-type="gratis">Gratis</span>
                            <span class="badge" data-type="">Sass</span>
                            <span class="badge">Web App</span>
                            <span class="badge">Android App</span>
                            <span class="badge">Pago Online</span>
                            
                            <span class="badge">🇵🇪</span>
                        </div>
                        <img src="~/assets/img/code-design.png" alt="Producto 3">
                        <h2>ReservaTotal</h2>
                        <p>Reserva y paga con Yape</p>
                        <div class="payment-buttons">
                            <button class="btn" data-url="https://reservatotal.anibalcopitan.com/"
                            @click="handleClick">Usar Ahora</button>
                        </div>
                    </div>-->

                        <div class="product-card">
                            <div class="badges">
                                <span class="badge">Android App</span>
                                <span class="badge" data-type="">Sass</span>
                                <span class="badge">🇵🇪</span>
                            </div>
                            <img src="~/assets/img/code-design-okey-pay.png" alt="Producto 3">
                            <h2>App OkeyPay</h2>
                            <p>Agrega funcionalidades Yape</p>
                            <div class="payment-buttons">
                                <button class="btn" data-url="https://okeypay.anibalcopitan.com/"
                                @click="handleClick">Usar Ahora</button>
                            </div>
                        </div>
                    
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge">Android App</span>
                                <span class="badge" data-type="">Sass</span>
                                <span class="badge">🇵🇪</span>
                            </div>
                            <img src="~/assets/img/code-design.png" alt="Producto 3">
                            <h2>App ReservaTotal</h2>
                            <p>Reserva y paga con Yape</p>
                            <div class="payment-buttons">
                                <button class="btn" data-url="https://okeypay.anibalcopitan.com/"
                                @click="handleClick">Usar Ahora</button>
                            </div>
                        </div>


                        <!-- Producto 1 -->
                        <div class="product-card">
                            <div class="badges">
                                <!-- <span class="badge" data-type="de-pago">De Pago</span> -->
                                <span class="badge">Web App</span>
                            </div>
                            <img src="~/assets/img/code-design.png" alt="Producto 2">
                            <h2>Simple youtube</h2>
                            <p>PHP - JS</p>
                            <div class="payment-buttons">
                                <a href="http://local.anibalcopitan.com/projects/simple-youtube/index.php?q=maria" target="_blank" class="btn" rel="noopener noreferrer">Ver Demo</a>
                                <button class="btn yape"
                                @click="handleClick"
                                data-url="https://wa.me/51970142637?text=Hola,%20quiero%20comprar%20el%20producto%20SIMPLE%20YOUTUBE.%20Voy%20a%20realizar%20el%20pago%20de%20$2%20USD%20o%20S/7.50%20(equivalente%20en%20soles).%20Por%20favor,%20confirma%20una%20vez%20que%20hayas%20recibido%20el%20pago.%20¡Gracias!"
                                >Comprar con Yape</button>
                                <button class="btn paypal"
                                @click="handleClick"
                                data-url="https://wa.me/51970142637?text=Para%20comprar%20SIMPLE%20YOUTUBE,%20transfiere%20$2%20USD%20o%20S/7.50%20a%20nuestro%20PayPal:%20acopitan@gmail.com.%20Luego,%20confirma%20aquí%20para%20procesar%20tu%20pedido.%20¡Gracias!"
                                >Comprar con PayPal</button>
                                <!-- <a href="#" target="_blank" class="btn" rel="noopener noreferrer">Más Información</a> -->
                            </div>
                        </div>


                        <div class="product-card">
                            <div class="badges">
                                <!-- <span class="badge" data-type="gratis">Gratis</span> -->
                            </div>
                            <img src="~/assets/img/costoscosteles.png" alt="Costos de Cocteles">
                            <h2>Calculadora de Costos de Cocteles</h2>
                            <p>Herramienta web</p>
                            <div class="payment-buttons">
                                <button class="btn" data-url="https://costoscocteles.anibalcopitan.com/"
                                @click="handleClick">Usar Ahora</button>
                            </div>
                        </div>

                        <!-- Producto 2 
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge" data-type="gratis">Gratis</span>
                                <span class="badge">Web App</span>
                            </div>
                            <img src="~/assets/img/code-design.png" alt="Producto 1">
                            <h2>Tareas aleatoreas</h2>
                            <p>JS</p>
                            <div class="payment-buttons">
                                <a href="http://enlacee.github.io/tareas-random" target="_blank" class="btn" rel="noopener noreferrer">Ver Demo</a>
                                <button class="btn free" data-url="https://github.com/enlacee/tareas-random/archive/refs/heads/master.zip"
                                @click="handleClick"
                                >Descargar Gratis</button>
                                <a href="#" target="_blank" class="btn" rel="noopener noreferrer">Más Información</a>
                            </div>
                        </div>-->

                    <!-- <a href="#">
                        <div class="product-card">
                            <div class="badges">
                                <span class="badge" data-type="sass">Sass</span>
                                <span class="badge">🇵🇪</span>
                            </div>
                            <img src="https://via.placeholder.com/300x150" alt="Producto 3">
                            <h2>ReservaTotal</h2>
                            <p>Reserva y paga con Yape</p>
                        </div>
                    </a> -->
                </div>
            </div>

            <!-- <div class="row">
                <a href="/store" class="cta-button">Ir a la tienda</a>
            </div> -->
        </div>
    </section>
</template>
<script>
export default {
    props: {
        isExpanded: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            title: "Apps",
            linkTienda: this.isExpanded === true ? '#' : '/tienda',
            linkTiendaOnclick: this.isExpanded === true ? 'return false;' : '' 
        };
    },
    methods: {
        handleClick(event) {
            const url = event.target.getAttribute('data-url');
            if (url) {
                // window.location.href = url; // Redirige a la URL
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        }
  }
}
</script>
<style scoped>
#store{
    background-color: gray;
}

a:hover, a:focus{
text-decoration: none;
}

.btn {
    margin-bottom: 2px;
    background-color: black;
    color: white;
}



.product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
.product-card {
    position: relative;
    background: #fff;

    /* border-radius: 8px; */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;

    /* min-width: 300px; */

    /* max-width: 300px; */
    text-align: center;
    padding: 20px;
    transition: transform 0.3s ease;
}
.product-card:hover {
    transform: scale(1.05);
}
.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
}
.product-card h2 {
    font-size: 20px;
    margin: 10px 0;
}
.product-card p {
    color: #888;
}
.product-card .badges {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 2px;
    flex-wrap: wrap;
}
.product-card .badge {
    /* background: #007bff; */

    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap; /* Evita que el texto se rompa en varias líneas */
}
.product-card .badge[data-type="gratis"] {
    background: #28a745; /* Verde para gratis */
}
.product-card .badge[data-type="de-pago"] {
    background: #dc3545; /* Rojo para de pago */
}
.product-card .badge[data-type="sass"] {
    background: #17a2b8; /* Cyan para Sass */
}
.cta-button {
    display: block;
    width: 200px;
    margin: 40px auto;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    transition: background-color 0.3s ease;
}
.cta-button:hover {
    background-color: #0056b3;
}

</style>
