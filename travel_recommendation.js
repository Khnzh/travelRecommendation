function searchTour() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    fetch('./travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const condition = data;
        if (input === 'city') {
          // Create a new div element
        const cardDiv1 = document.createElement("div");
        const cardDiv2 = document.createElement("div");

        // Add the class "card" to the div
        cardDiv1.classList.add("card");
        cardDiv2.classList.add("card");

        // Append the div to the element with id "resultDiv"
        resultDiv.appendChild(cardDiv1);
        resultDiv.appendChild(cardDiv2);

          cardDiv1.innerHTML += `<img src="${condition.countries[0].cities[0].imageUrl}" alt="Image">
          <div class="card-content">
              <h2>${condition.countries[0].cities[0].name}</h2>
              <p>${condition.countries[0].cities[0].description}</p>
              <a href="#" class="button">Visit</a>
          </div>`;
          cardDiv2.innerHTML += `<img src="${condition.countries[1].cities[0].imageUrl}" alt="Image">
          <div class="card-content">
              <h2>${condition.countries[1].cities[0].name}</h2>
              <p>${condition.countries[1].cities[0].description}</p>
              <a href="#" class="button">Visit</a>
          </div>`;
        } else if(input === 'beach')
        {
          // Create a new div element
          const cardDiv1 = document.createElement("div");
          const cardDiv2 = document.createElement("div");
  
          // Add the class "card" to the div
          cardDiv1.classList.add("card");
          cardDiv2.classList.add("card");
  
          // Append the div to the element with id "resultDiv"
          resultDiv.appendChild(cardDiv1);
          resultDiv.appendChild(cardDiv2);
  
            cardDiv1.innerHTML += `<img src="${condition.beaches[0].imageUrl}" alt="Image">
            <div class="card-content">
                <h2>${condition.beaches[0].name}</h2>
                <p>${condition.beaches[0].description}</p>
                <a href="#" class="button">Visit</a>
            </div>`;
            cardDiv2.innerHTML += `<img src="${condition.beaches[1].imageUrl}" alt="Image">
            <div class="card-content">
                <h2>${condition.beaches[1].name}</h2>
                <p>${condition.beaches[1].description}</p>
                <a href="#" class="button">Visit</a>
            </div>`;
        }
        else if(input === 'temple')
        {
          // Create a new div element
          const cardDiv1 = document.createElement("div");
          const cardDiv2 = document.createElement("div");
  
          // Add the class "card" to the div
          cardDiv1.classList.add("card");
          cardDiv2.classList.add("card");
  
          // Append the div to the element with id "resultDiv"
          resultDiv.appendChild(cardDiv1);
          resultDiv.appendChild(cardDiv2);
  
            cardDiv1.innerHTML += `<img src="${condition.temples[0].imageUrl}" alt="Image">
            <div class="card-content">
                <h2>${condition.temples[0].name}</h2>
                <p>${condition.temples[0].description}</p>
                <a href="#" class="button">Visit</a>
            </div>`;
            cardDiv2.innerHTML += `<img src="${condition.temples[1].imageUrl}" alt="Image">
            <div class="card-content">
                <h2>${condition.temples[1].name}</h2>
                <p>${condition.temples[1].description}</p>
                <a href="#" class="button">Visit</a>
            </div>`;
        }
        else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    
  
  
  function clearAll(){
    const input = document.getElementById('search');
    const resultDiv = document.getElementById('result');
    input.value='';
    resultDiv.innerHTML=''

  }
  const btnSearch = document.getElementById("clear")   
    btnSearch.addEventListener('click', clearAll);   