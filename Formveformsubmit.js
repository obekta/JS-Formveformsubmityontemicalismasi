function handleSubmit(event) {
    event.preventDefault();
    let isimDOM = document.querySelector("#inputIsim").value
    let soyisimDOM = document.querySelector("#inputSoyisim").value
    alert(`Teşekkürler ${isimDOM} ${soyisimDOM}`)
 }