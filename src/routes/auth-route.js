const express = require('express');
const router = express.Router();
//var request = require("request");

router.post('/login', (req, res) => {
    let json = {"response":{"loginResponse":{"status":"NOK","message":"Tu contraseña es incorrecta.  Si no la recuerdas, por favor comunícate con IT Service al 630 3333"}}}

    res.status(200).send(json)

    /*let jsonBody = {
        params:{
            password:'aragon2A@',
            deviceId:'4619de4f81cab795',
            username:'u201510923',
            lang:'es',
            versionId:'2.0.0',
            os_version:'3.10.73-ge0bfb9b',
            model:'Nexus+6P' 
        },
        appId:"2418553555815728",
        methodName:"invoke"
    }
    let jsonHeader = {
        deviceId:'4619de4f81cab795',
        osversion:'3.10.73-ge0bfb9b',
        model:'Nexus 6P',
        clientID:'2',
        clientVersion:'1.0',
        'x-zubron-uniqueid':'DFF94961B75C791D690D36B1B6D9A2F8D4BC78C3DD7A868C4CDD10FBD7F6280F'
    }
    let jsonBodyString = JSON.stringify(jsonBody)
    let jsonHeaderString = JSON.stringify(jsonHeader)
    let body = encodeURIComponent(jsonBodyString)
    request.post({
        headers:jsonHeaderString,
        url: 'https://upc.mooestro.com/moofwd-rt/2418553555815728/login/authLoginClient',
        formData: body
    }, (error, response, body) => {
        if(error) {
            return console.log(error);
        }
        console.log(body);
    })*/
/*
    Request.post({
        "headers": { 
            "deviceId":"4619de4f81cab795",
            "osversion":"3.10.73-ge0bfb9b",
            "model":"Nexus 6P",
            "Content-Type":"text/plain",
            "clientID":"2",
            "clientVersion":"1.0",
            "x-zubron-uniqueid":"DFF94961B75C791D690D36B1B6D9A2F8D4BC78C3DD7A868C4CDD10FBD7F6280F"},
        "url": "https://upc.mooestro.com/moofwd-rt/2418553555815728/login/authLoginClient",
        "body": body
    }, (error, response, body) => {
        if(error) {
            return console.log(error);
        }
        console.log(body);
    });*/
});

router.post('/courses', (req, res) => {
    let json = {
        "response":{
           "courseListResponse":{
              "courseList":[
                 {
                    "itemTypeDescription":"course",
                    "courseCodeDisplay":"IN210",
                    "codModalEst":"AC",
                    "codProducto":"03310160",
                    "codLineaNegocio":"U",
                    "courseGroup":"00",
                    "courseNC":"IN210 IX83 00",
                    "courseName":"Seminario de Investigación Académica II (Ing)",
                    "itemType":0,
                    "coursePeriod":"201702",
                    "courseSection":"IX83",
                    "courseCode":"IN210"
                 },
                 {
                    "itemTypeDescription":"course",
                    "courseCodeDisplay":"SI410",
                    "codModalEst":"AC",
                    "codProducto":"03310160",
                    "codLineaNegocio":"U",
                    "courseGroup":"02",
                    "courseNC":"SI410 WXA1 02",
                    "courseName":"Taller de Proyecto II",
                    "itemType":0,
                    "coursePeriod":"201702",
                    "courseSection":"WXA1",
                    "courseCode":"SI410"
                 }
              ],
              "status":"OK",
              "message":""
           }
        }
     }
    res.status(200).send(json)
});

router.post('/coursesprofessors', (req, res) => {
    let json = {
        "response":{
           "getProfessorListResponse":{
              "status":"OK",
              "professorList":[
                 {
                    "email":"PCIIJALV@UPC.EDU.PE",
                    "codUsuarioDocente":"PCIIJALV",
                    "fullName":"Jose Carlos Alvarez Merino (PR)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/38998120140804105246.png"
                 },
                 {
                    "email":"pcmaecas@upc.edu.pe",
                    "codUsuarioDocente":"PCMAECAS",
                    "fullName":"Elva Luz Castañeda Alvarado (PR)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/31560920150211132307.bmp"
                 },
                 {
                    "email":"PCCICEYZ@upc.edu.pe",
                    "codUsuarioDocente":"PCCICEYZ",
                    "fullName":"Carlos Augusto Eyzaguirre Acosta (PR)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/32931220150725130830.jpg"
                 },
                 {
                    "email":"pcsipcas@upc.edu.pe",
                    "codUsuarioDocente":"PCSIPCAS",
                    "fullName":"Pedro Segundo Castañeda Vargas (PR)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/31242020130219214921.jpg"
                 },
                 {
                    "email":"pcingqui@upc.edu.pe",
                    "codUsuarioDocente":"PCINGQUI",
                    "fullName":"Grimaldo Wilfredo Quispe Santivañez (SU)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/47399520130103172512.jpg"
                 },
                 {
                    "email":"pcsipcas@upc.edu.pe",
                    "codUsuarioDocente":"PCSIPCAS",
                    "fullName":"Pedro Segundo Castañeda Vargas (SU)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/31242020130219214921.jpg"
                 },
                 {
                    "email":"PCCICEYZ@upc.edu.pe",
                    "codUsuarioDocente":"PCCICEYZ",
                    "fullName":"Carlos Augusto Eyzaguirre Acosta (SU)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/32931220150725130830.jpg"
                 },
                 {
                    "email":"PCIIJALV@UPC.EDU.PE",
                    "codUsuarioDocente":"PCIIJALV",
                    "fullName":"Jose Carlos Alvarez Merino (SU)",
                    "imgUrl":"https://archivos.upc.edu.pe/imagenes/docentes/38998120140804105246.png"
                 }
              ],
              "message":""
           }
        }
     }

    res.status(200).send(json)
});

router.post('/coursesgrades', (req, res) => {
    let json = {
        "response":{
           "responseGradesList":{
              "percentProgress":"100%",
              "descFormula":"10% (TB1) + 30% (TB2) + 20% (EX1) + 40% (EX2)",
              "message":"",
              "list":[
                 {
                    "descFormula":"10% (TB1) + 30% (TB2) + 20% (EX1) + 40% (EX2)",
                    "average":"15.86",
                    "cellId":"section",
                    "percentProgress":"100%"
                 },
                 {
                    "PesoPonderado":"20%",
                    "color":"#33ab35",
                    "NumPrueba":"1",
                    "CodTipoPrueba":"EX",
                    "Nota":"15,55",
                    "cellId":"empty",
                    "DesTipoPrueba":"EXPOSICIÓN"
                 },
                 {
                    "PesoPonderado":"40%",
                    "color":"#33ab35",
                    "NumPrueba":"2",
                    "CodTipoPrueba":"EX",
                    "Nota":"16,4",
                    "cellId":"empty",
                    "DesTipoPrueba":"EXPOSICIÓN"
                 },
                 {
                    "PesoPonderado":"10%",
                    "color":"#980404",
                    "NumPrueba":"1",
                    "CodTipoPrueba":"TB",
                    "Nota":"12,23",
                    "cellId":"empty",
                    "DesTipoPrueba":"TRABAJO"
                 },
                 {
                    "PesoPonderado":"30%",
                    "color":"#33ab35",
                    "NumPrueba":"2",
                    "CodTipoPrueba":"TB",
                    "Nota":"16,58",
                    "cellId":"empty",
                    "DesTipoPrueba":"TRABAJO"
                 },
                 {
                    "PesoPonderado":"100%",
                    "color":"#33ab35",
                    "NumPrueba":"1",
                    "CodTipoPrueba":"PF",
                    "Nota":"16",
                    "cellId":"empty",
                    "DesTipoPrueba":"PROMEDIO FINAL"
                 }
              ],
              "status":"OK",
              "average":"15.86"
           }
        }
     }

    res.status(200).send(json)
});

router.post('/schedule', (req, res) => {
    let json = {
        "response":{
           "responseGradesList":{
              "percentProgress":"100%",
              "descFormula":"10% (TB1) + 30% (TB2) + 20% (EX1) + 40% (EX2)",
              "message":"",
              "list":[
                 {
                    "descFormula":"10% (TB1) + 30% (TB2) + 20% (EX1) + 40% (EX2)",
                    "average":"15.86",
                    "cellId":"section",
                    "percentProgress":"100%"
                 },
                 {
                    "PesoPonderado":"20%",
                    "color":"#33ab35",
                    "NumPrueba":"1",
                    "CodTipoPrueba":"EX",
                    "Nota":"15,55",
                    "cellId":"empty",
                    "DesTipoPrueba":"EXPOSICIÓN"
                 },
                 {
                    "PesoPonderado":"40%",
                    "color":"#33ab35",
                    "NumPrueba":"2",
                    "CodTipoPrueba":"EX",
                    "Nota":"16,4",
                    "cellId":"empty",
                    "DesTipoPrueba":"EXPOSICIÓN"
                 },
                 {
                    "PesoPonderado":"10%",
                    "color":"#980404",
                    "NumPrueba":"1",
                    "CodTipoPrueba":"TB",
                    "Nota":"12,23",
                    "cellId":"empty",
                    "DesTipoPrueba":"TRABAJO"
                 },
                 {
                    "PesoPonderado":"30%",
                    "color":"#33ab35",
                    "NumPrueba":"2",
                    "CodTipoPrueba":"TB",
                    "Nota":"16,58",
                    "cellId":"empty",
                    "DesTipoPrueba":"TRABAJO"
                 },
                 {
                    "PesoPonderado":"100%",
                    "color":"#33ab35",
                    "NumPrueba":"1",
                    "CodTipoPrueba":"PF",
                    "Nota":"16",
                    "cellId":"empty",
                    "DesTipoPrueba":"PROMEDIO FINAL"
                 }
              ],
              "status":"OK",
              "average":"15.86"
           }
        }
     }

    res.status(200).send(json)
});

router.post('/courseclassmates', (req, res) => {
    let json = {
        "response":{
           "participantListResponse":{
              "status":"OK",
              "message":"",
              "participantList":[
                 {
                    "imageURLSmall":"http://intranet.upc.edu.pe/programas/Imagen/Fotos/Upc/0540201210295.jpg",
                    "matchKeyLMS":"U201210295",
                    "userId":"201210295",
                    "email":"U201210295@upc.edu.pe",
                    "name":"Javier David Alvarez Tarazona",
                    "role":"Estudiante"
                 },
                 {
                    "imageURLSmall":"http://intranet.upc.edu.pe/programas/Imagen/Fotos/Upc/0540201315525.jpg",
                    "matchKeyLMS":"U201315525",
                    "userId":"201315525",
                    "email":"U201315525@upc.edu.pe",
                    "name":"Luis Felipe Sandoval Nuñovero",
                    "role":"Estudiante"
                 },
                 {
                    "imageURLSmall":"http://intranet.upc.edu.pe/programas/Imagen/Fotos/Upc/0540201111321.jpg",
                    "matchKeyLMS":"U201111321",
                    "userId":"201111321",
                    "email":"u201111321@upc.edu.pe",
                    "name":"Rolando Sebastián Salas Villacorta",
                    "role":"Estudiante"
                 },
                 {
                    "imageURLSmall":"http://intranet.upc.edu.pe/programas/Imagen/Fotos/Upc/0540201313295.jpg",
                    "matchKeyLMS":"U201313295",
                    "userId":"201313295",
                    "email":"U201313295@upc.edu.pe",
                    "name":"Miguel Bruno Aybar Guerrero",
                    "role":"Estudiante"
                 },
                 {
                    "imageURLSmall":"http://intranet.upc.edu.pe/programas/Imagen/Fotos/Upc/0540201214147.jpg",
                    "matchKeyLMS":"U201214147",
                    "userId":"201214147",
                    "email":"U201214147@upc.edu.pe",
                    "name":"Brenda Ximena Haro Bernal",
                    "role":"Estudiante"
                 }
              ]
           }
        }
     }

    res.status(200).send(json)
});

router.post('/courseattendance', (req, res) => {
    let json = {
        "response":{
           "getAttendanceListByCourseResponse":{
              "status":"OK",
              "detail":{
                 "header_absence":"3",
                 "attendanceList":[
                    {
                       "fechaSesion":"06/09/2017"
                    },
                    {
                       "fechaSesion":"28/08/2017"
                    },
                    {
                       "fechaSesion":"21/08/2017"
                    }
                 ]
              },
              "message":""
           }
        }
     }

    res.status(200).send(json)
});

router.post('/userprofile', (req, res) => {
    let json = {
        "response":{
           "profileResponse":{
              "status":"OK",
              "detail":{
                 "imageURL":"https://intranet.upc.edu.pe/programas/Imagen/Fotos/Upc/0540201313295.jpg",
                 "userFullname":"Miguel Bruno Aybar Guerrero",
                 "codAlumno":"201313295",
                 "barCodeURL":"http://genimages.mooestro.com/barCode2/html/image.php?filetype=PNG&dpi=72&scale=2&rotation=0&font_family=0&font_size=8&thickness=60&checksum=&code=BCGcode128&text=00226044",
                 "barCodeLandscape":"http://genimages.mooestro.com/barCode2/html/image.php?filetype=PNG&dpi=72&scale=2&rotation=0&font_family=0&font_size=8&thickness=60&checksum=&code=BCGcode128&text=00226044&rotation=270",
                 "desModalidad":"PREGRADO"
              }
           }
        }
     }

    res.status(200).send(json)
});

router.post('/profile', (req, res) => {
    let json = {
        "response":{
           "profileResponse":{
              "status":"OK",
              "detail":{
                 "imageURL":"https://intranet.upc.edu.pe/programas/Imagen/Fotos/Upc/0540201313295.jpg",
                 "userFullname":"Miguel Bruno Aybar Guerrero",
                 "codAlumno":"201313295",
                 "barCodeURL":"http://genimages.mooestro.com/barCode2/html/image.php?filetype=PNG&dpi=72&scale=2&rotation=0&font_family=0&font_size=8&thickness=60&checksum=&code=BCGcode128&text=00226044",
                 "barCodeLandscape":"http://genimages.mooestro.com/barCode2/html/image.php?filetype=PNG&dpi=72&scale=2&rotation=0&font_family=0&font_size=8&thickness=60&checksum=&code=BCGcode128&text=00226044&rotation=270",
                 "desModalidad":"PREGRADO"
              }
           }
        }
     }

    res.status(200).send(json)
});

router.post('/attendencepercourse', (req, res) => {
    let json = {
        "response":{
           "getAttendanceListByCourseResponse":{
              "status":"OK",
              "detail":{
                 "header_absence":"3",
                 "attendanceList":[
                    {
                       "fechaSesion":"06/09/2017"
                    },
                    {
                       "fechaSesion":"28/08/2017"
                    },
                    {
                       "fechaSesion":"21/08/2017"
                    }
                 ]
              },
              "message":""
           }
        }
     }

    res.status(200).send(json)
});

module.exports = router;