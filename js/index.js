var app = new Vue({
    el: "#app",
    data: {
        conexiones: [
            {success: true, conexion: "nameSuc1", message: "Conexion exitosa"},
            {success: true, conexion: "nameSuc2", message: "Conexion exitosa"},
            {success: false, conexion: "nameSuc3", message: "Conexion fallida"},
            {success: true, conexion: "nameSuc4", message: "Conexion exitosa"},
            {success: false, conexion: "nameSuc5", message: "Conexion fallida"}
        ],
        namesSucursales: {nameSuc1: "ZARAGOZA", nameSuc2: "VICTORIA", nameSuc3: "OLUTA", nameSuc4: "BODEGA", nameSuc5: "JALTIPAN"}
    },
    methods: {
        loadImage: function (success) {
            const ruta = success ? "./src/success.png" : "./src/warning.jpg";
            return ruta;
        }
    }
});