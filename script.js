// const AUTH_ENDPOINT = "https://mcngbdhb7xy---qf--74j71213j1.auth.marketingcloudapis.com/v2/discovery";   // idk what this is
const getAccessTokenEndpoint = "https://mcngbdhb7xy---qf--74j71213j1.auth.marketingcloudapis.com/v2/token";
const DATA_ENDPOINT = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const LAMBDA_ENDPOINT = "https://zg72s39v3b.execute-api.us-east-2.amazonaws.com/demo-stage/";
const SUNOSI_ENDPOINT = "https://wsq7vdb9sf.execute-api.us-east-2.amazonaws.com/test-stage/requestRep";

let q3_result = "";
let q4_result = "";

function compileData() {

  console.log("collect data from fields and forms");

  let postData = {
    "FirstName": document.getElementById("text-field-FirstName").value,
    "LastName": document.getElementById("text-field-LastName").value,
    "EmailAddress": document.getElementById("text-field-EmailAddress").value,
    "PhoneNumber": document.getElementById("text-field-PhoneNumber").value,
    "Zipcode": document.getElementById("text-field-ZipCode").value,
    "Npi": document.getElementById("text-field-Npi").value,
    "q3": q3_result,
    "q4": q4_result,
    "opt-in": document.getElementById('checkbox1').checked,
    "hcp-confirmation": document.getElementById('hcp-checkbox').checked,
    "Product": "sunosi"
  }

  console.log(postData);
  return postData;
}

function submitClicked() {
  console.log("submit clicked");

  // console.log("Calling demo lambda");
  callLambdaEndpoint();
}

async function callLambdaEndpoint() {
  console.log("Calling lambda with API gateway");

  const repsonse = await fetch(SUNOSI_ENDPOINT, {
    method: 'POST',
    headers: {
      "Origin": "https://sunosi-requestarep-sample.netlify.app", // Required for CORS support to work
      "Content-Type": "application/json" // Required for POST requests to succeed
    },
    body: JSON.stringify(compileData())
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => {
    console.error(error);
  })
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showSpecialtyDropdown() {
  document.getElementById("specialtyDropdown").classList.toggle("show");
}

function showQuestionDropdown() {
  document.getElementById("questionDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// dropdown button helpers
function setq3_8() { q3_result = "a8"; }
function setq3_9() { q3_result = "a9"; }
function setq3_10() { q3_result = "a10"; }
function setq3_11() { q3_result = "a11"; }
function setq3_12() { q3_result = "a12"; }
function setq3_13() { q3_result = "a13"; }

function setq4_13() { q4_result = "a14"; }
function setq4_13() { q4_result = "a15"; }
function setq4_13() { q4_result = "a16"; }
function setq4_13() { q4_result = "a17"; }
function setq4_13() { q4_result = "a18"; }