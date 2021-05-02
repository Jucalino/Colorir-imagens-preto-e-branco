
deepai.setApiKey('8ab9b273-674e-45db-b498-9cd141594ab0');

async function colorirImg() {
    const divResult = document.querySelector('.result');
    var resp = await deepai.callStandardApi("colorizer", {
            image: document.getElementById('formFile'),
    });
    
    const image = await fetch(resp.output_url)
    const imageBlob = await image.blob()
    const imageURL = URL.createObjectURL(imageBlob)

    divResult.innerHTML = `
        <div class="d-flex flex-column">
            <img src="${resp.output_url}" class="img-thumbnail">
            <a class="btn btn-primary btn-lg" href="${imageURL}" download>Download</a>
        </div>
    `
} 
