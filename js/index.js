var app = new Vue({
    el: "#app",
    data: {
        conexiones: [],
        loading: false,
        /**Datos no publicos */
        namesSucursales: {nameSuc1: "ZARAGOZA", nameSuc2: "VICTORIA", nameSuc3: "OLUTA", nameSuc4: "BODEGA", nameSuc5: "JALTIPAN"},
        urlConexion: "uri"
    },
    mounted: function() {
        this.verifyConections();
    },
    methods: {
        verifyConections: function() {
            this.startLoading();
            const instancia = this;
            axios.get(instancia.urlConexion)
            .then(function (response) {
                instancia.conexiones = response.data.data;
                instancia.stopLoading();
            })
            .catch(function (error) {
                instancia.stopLoading();
                console.log('Error: ' + error);
            })
        },
        loadImage: function (success) {
            const ruta = success ? "./src/success.png" : "./src/warning.jpg";
            return ruta;
        },
        startLoading: function() {
            this.loading = true;
        },
        stopLoading: function() {
            this.loading = false;
        }
    }
});