Webcam.set({
    width:350,
    height:300,
    image_format:'.png',
    png_quality:140
});
camara = document.getElementById("camara");
Webcam.attach('#camara');
function capturar_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="selfie" src="'+data_uri+'"/>';
    });
}
console.log("ml5version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q18TI91bM/model.json",modeloaded);
function modeloaded(){
    console.log("Modelo cargado")
}
function verificar(){
    img = document.getElementById("selfie");
    classifier.classify(img, got_result);
}
function got_result(error, results){
    if (error){
        console.log(error);
        
    }else{
        console.log(results)
        document.getElementById("resuelto").innerHTML = results[0].label;
        document.getElementById("precision").innerHTML = results[0].confidence.toFixed(3)
    }
}

