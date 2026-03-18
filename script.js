function mostra(tipo) {

    if (tipo === "ambiente") {
        document.getElementById("titolo").innerText = "Ambiente";
        document.getElementById("testo").innerText =
            "Riduzione emissioni, energia fotovoltaica e bottiglie leggere.";
    }

    if (tipo === "territorio") {
        document.getElementById("titolo").innerText = "Territorio";
        document.getElementById("testo").innerText =
            "Tutela biodiversità con boschi, laghi e aree naturali.";
    }

    if (tipo === "filiera") {
        document.getElementById("titolo").innerText = "Filiera";
        document.getElementById("testo").innerText =
            "Valorizzazione del territorio siciliano e produzione locale.";
    }
}
