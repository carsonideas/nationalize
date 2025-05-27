// const myNameInput = document.getElementById("form_search");
const  myNameInput = document.querySelector ('input');
const submitBtn = document.querySelector ('button');
const result = document.querySelector (".result");
const myBackResponse = document.querySelector (".result");
const getCountryNames = new Intl.DisplayNames(['en'], {type: 'region'});



submitBtn.addEventListener ("click", async (e) =>
{
    e. preventDefault()
    const myQuery = myNameInput.value;
    result.innerHTML = `Please wait, Houston will get back to you.....`
    submitBtn.setAttribute ("disabled", true)
try {

const response = await fetch(`https://api.nationalize.io/?name=${myQuery}`)
const result = await response.json();

const {name, country_id, probability} = result;

result.classList.add("result");

    myBackResponse.innerHTML = `${result.name} is from ${result.country_id} with ${result.probability*100} certainty`
    submitBtn.removeAttribute ("disabled")

} 
catch (e) 
{
    
    myBackResponse.innerHTML = "Houston, we have a problem!!! Something went wrong please try again!!!"
    
    submitBtn.removeAttribute("disabled")
    submitBtn. innerHTML =`<i class="fa-solid fa-magnifying-glass"></i>`
} finally {}

});







// e. preventDefault()
// const myQuery = myNameInput.value;
// if (myQuery === "")
// {
//     myBackResponse.innerHTML = "Please enter a name!"
//     return
// }


