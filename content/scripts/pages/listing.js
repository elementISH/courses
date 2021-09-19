let listingJson = [];

async function listingCards (){
    let listingContainer = document.querySelector(".listing-container");
    listingJson = await fetch('content/scripts/json/listing.json')
    .then(jsonResponse => jsonResponse.json())
    .then(listingData => {return listingData});

    listingJson.forEach(element => {
        listingContainer.insertAdjacentHTML('afterbegin', `
        <div class="listing-card">
        <div class="card">
          <img class="card-img" src="${element.img}" alt="courses">
          <div class="card-body">
            <h3 class="card-body__header card__header">${element.header}</h3>
            <p class="card-body__description">${element.content}</p>
          </div>
        </div>
      </div>
        `)
    });
}
 
listingCards();