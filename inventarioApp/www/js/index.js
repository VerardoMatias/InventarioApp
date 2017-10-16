$(document).ready(function() {
    $('#tablaResultados').DataTable();
}); 
var lecturaCodigo = {
    resultado: "",
    formato:"", 
    cancelado:"",
    disparar: "false"
};
function imprimir(lecturaCodigo){
    // $("#mostrarResultados").html( "<span>Resultado: " + lecturaCodigo.resultado + "\n" +
    // "Formato: " + lecturaCodigo.formato +"</span>" );  
     $("#mostrarResultados").append("<tr> <td>" + lecturaCodigo.resultado + "</td> <td>" + lecturaCodigo.formato + "</td> <td>" + lecturaCodigo.cancelado + "</td> </tr>");
}

function scan(){
    
    cordova.plugins.barcodeScanner.scan(
        function (result) {

            lecturaCodigo.resultado = result.text;
            lecturaCodigo.formato = result.format;
            lecturaCodigo.cancelado = result.cancelled;
            lecturaCodigo.disparar = true;
            imprimir(lecturaCodigo);
        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt : "PUTO EL QUE LEE", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "default", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
        }
    )
};



