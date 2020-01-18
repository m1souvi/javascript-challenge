// Get references: tbody, dateinput, search button, reset button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $filterBtn = document.querySelector("#search");

// Listen for event at srchButton and call handleSearrchButtonClick when activated
$filterBtn = addEventListener("click", handleSearchButtonClick);

// Copy the data
var tableData = data;

// Build table 
function renderTable() {
    $tbody.innerHTML = "";
    for (var i=0; i<tableData.length; i=i+1)

    // Identify address and fields 
    {
        var address = tableData[i];
        console.log(address)
        var fields = Object.keys(address);

        // Add row to tbody, set index
        var $row = $tbody.insertRow(i);
        for (var j=0; j<fields.length; j=j+1)
        
        // Add cell to each field and set text to current value at current field
        {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        } 
    }
}

// Build new table for filtered data
function handleSearchButtonClick() {
    var filterDate = $dateInput.value;
    if (filterDate !="") {
        tableData = data.filter(function (address) {
            var addressDate = address.datetime;
            return addressDate === filterDate;
        });
    }
    else { tableData };
    renderTable();
}

// Clear data in fields on reset
function handleSearchButtonClick(){
    renderTable();
}

// Show table when page loads initially
renderTable();

