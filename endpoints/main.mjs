import { collectionArcano } from "./json/Arcano Escenario Real.postman_collection.mjs";
import { ccaArcano } from "./json/CCA Arcano.postman_collection.mjs";
import { SMSArcanoCCA } from "./json/SMS API.postman_collection.mjs";

const { items } = SMSArcanoCCA;
// const { items } = ccaArcano;

const downloadButton = document.getElementById("download-csv");
downloadButton.addEventListener("click", () => {
  downloadFile(arrayToCsv);
  console.log("BOTON");
});

const arrayToCsv = [];

items.map((item, i) => {
  getEndpointList(item);
});

function getEndpointList(items) {
  if (items.item) {
    items.item.forEach((element) => {
      getEndpointList(element);
    });
  }

  const { name, request } = items;

  // console.log(
  //   "Endpoint: " + request?.url?.raw + "\nRequest body: " + request?.body?.raw
  // );

  console.log(request);

  console.log(arrayToCsv);

  if (request !== undefined) {
    const { method, url, body } = request;
    const { raw } = url;
    let STATUS, RESPONSE
    const URL = getQueryParams(request?.url?.raw)
    if (request?.method === "GET") {
      fetch(URL)
        .then((response) => {
          STATUS = response.status
          return response.json()
        })
        .then(data => RESPONSE = data)
        .catch(console.error);
    } else {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request?.body?.raw),
      })
        .then((response) => {
          STATUS = response.status
          return response.json()
        })
        .then(data => RESPONSE = data)
        .catch(console.error);
    }

    arrayToCsv?.push({
      METHOD: request?.method,
      URL: request?.url?.raw,
      REQUEST: request?.body?.raw?.trim().replace(/(\r\n|\n|\r)/gm, ""),
      STATUS, 
      RESPONSE
    });

    // console.log(method, raw);
  }

  return { name, request };
}

function getQueryParams(url, params) {
  let URL = url;
  if (params) {
    URL += "?" + URLSearchParams(params);
  }
  return URL;
}

function arrayObjToCsv(ar) {
  //comprobamos compatibilidad
  if (window.Blob && (window.URL || window.webkitURL)) {
    var contenido = "",
      d = new Date(),
      blob,
      reader,
      save,
      clicEvent;
    //creamos contenido del archivo
    for (var i = 0; i < ar.length; i++) {
      //construimos cabecera del csv
      if (i == 0) contenido += Object.keys(ar[i]).join(";") + "\n";
      //resto del contenido
      contenido +=
        Object.keys(ar[i])
          .map(function (key) {
            return ar[i][key];
          })
          .join(";") + "\n";
    }
    //creamos el blob
    blob = new Blob(["\ufeff", contenido], { type: "text/csv" });
    //creamos el reader
    var reader = new FileReader();
    reader.onload = function (event) {
      //escuchamos su evento load y creamos un enlace en dom
      save = document.createElement("a");
      save.href = event.target.result;
      save.target = "_blank";
      //aqu?? le damos nombre al archivo
      save.download =
        "log_" +
        d.getDate() +
        "_" +
        (d.getMonth() + 1) +
        "_" +
        d.getFullYear() +
        ".csv";
      try {
        //creamos un evento click
        clicEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
      } catch (e) {
        //si llega aqu?? es que probablemente implemente la forma antigua de crear un enlace
        clicEvent = document.createEvent("MouseEvent");
        clicEvent.initEvent("click", true, true);
      }
      //disparamos el evento
      save.dispatchEvent(clicEvent);
      //liberamos el objeto window.URL
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    //leemos como url
    reader.readAsDataURL(blob);
  } else {
    //el navegador no admite esta opci??n
    alert("Su navegador no permite esta acci??n");
  }
}

function downloadFile(arrayToCsv) {
  arrayObjToCsv(arrayToCsv);
}
