// Write code here to communicate with Github
function displayBrewerysInfo(searchedID) {
  fetch("https://api.openbrewerydb.org/breweries")
    .then(response => {
      return response.json();
    })
    .then(apiResult => {
      for (var i = 0; i < apiResult.length; i++) {
        if (apiResult[i].id.toString() === searchedID) {
          // insert it into the pagge
          var result = apiResult[i];
          var keys = Object.keys(apiResult[i]);
          keys.forEach(key => {
            var value = result[key];
            document.getElementById("api-result").innerText +=
              key + ": " + value + "\n";
          });
        }
      }
    });
}

//creating new div for search bar and placing before the listing
var searchDivEl = document.createElement("div");
searchDivEl.id = "search";
var parentEl = document.querySelector(".my-auto");
var refEl = document.querySelectorAll(".mb-5");
parentEl.insertBefore(searchDivEl, refEl[1].nextSibling);

//creating search input field
searchDivEl.innerHTML = `
<label>Search for a brewery by id : </label>
<input type = "search" id = "searchField" placeholder = "Enter id... "></input>
<button id = "searchButton">Search</button>`;

document
  .getElementById("searchButton")
  .addEventListener("click", onclickSearchBtn);

function onclickSearchBtn() {
  document.getElementById("api-result").innerHTML = "";
  displayBrewerysInfo(searchField.value);
}
//document.getElementById("api-result").innerText += result;
// for (let index = 0; index < result.length; index++) {
//     document.getElementById("api-result").innerText += result[index];
// }S
// console.log(result[0])
//document.getElementById("api-result").innerHTML = JSON.stringify(result[0]);
// document.getElementById("api-result").innerHTML =
//   "<img src= 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg'/>";

// });

//   var x =0;
//   var keys = Object.keys(result[x]);
//   var value = Object.values(result[x]);
//   var newArray = [];
//   for (var i = 0; i < keys.length; i++) {
//     newArray += keys[i] + ":" + value[i];
//   }
//   console.log(newArray);
//   document.getElementById("api-result").innerText = newArray;
// });
