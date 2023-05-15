


const addressForm = document.querySelector('#addres')
const cepInput = document.querySelector("#cep")
const addressInput = document.querySelector("#street")
const neighborhoodInput = document.querySelector("#neighborhood")
const cityInput = document.querySelector("#city")
const ufInput = document.querySelector("#uf")
const latInput = document.querySelector("#lat")
const longInput = document.querySelector("#long")
const numberInput = document.querySelector("#Number")





cepInput.addEventListener("blur", async function() {
    const onlyNumbers = /[0-9]/;
    
    cepInput.blur();
    
    const cep = cepInput.value.replace(/\D/g, '');
    
    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      if (data.erro === true) {
        addressForm.reset();
        toggleMessage('CEP INVÁLIDO!!');
      } else {
        addressInput.value = data.logradouro;
        neighborhoodInput.value = data.bairro;
        cityInput.value = data.localidade;
        ufInput.value = data.uf;
      }
    } catch (error) {
      console.error(error);
    }
  })();
const form = document.getElementById("addres");
    form.addEventListener("submit", function(event)
    {
        event.preventDefault();
        latInput.disabled = false;
        longInput.disabled = false;

        
        const api_key = 'AIzaSyCXoIfvEDdZDSGfKCDEfcdxBoaTY1ooX-4';
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressInput.value} ${numberInput.value},${cep}&key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            const location = data.results[0].geometry.location;
            const latitude = location.lat;
            const longitude = location.lng;
           
            if(latitude == null){
              latitude = '-23.61279792090457';
            }
            if(longitude == null){
              longitude = '-46.780145384505474';
            }
            latInput.value = latitude;
            longInput.value = longitude;
            return form.submit();
        })
        .catch(error => console.error(error));

        const toggleMessage =(msg)=>{
            const messageElement = document.querySelector("#message p");
            messageElement.style.backgroundColor = 'red';
            messageElement.innerText = msg;
        }
       

    });
