// const decidersForm = document.getElementById('deciders-form');
// const decidersInput = document.getElementById('deciders-input');
// const decidersList = document.getElementById('decidersList');
// const deciderSubmit = document.getElementById('decider-submit');

const valuesForm = document.getElementById('values-form');
const valuesInput = document.getElementById('values-input');
const valuesList = document.getElementById('valuesList');
const valueSubmit = document.getElementById('value-submit');

const optionsForm = document.getElementById('options-add');
const optionsInput = document.getElementById('options-input');
const optionsList = document.getElementById('optionsList');
const optionSubmit = document.getElementById('option-submit');

let decidersCounter = 1;
let valuesCounter = 1;
let optionsCounter = 1

// decidersInput.addEventListener('keydown', function(e){
//     if (e.key === 13) {
//         e.preventDefault();
//         decidersForm.submit();
//     }
// });

valuesInput.addEventListener('keyup', function(e){
    if (e.key === 13) {
        e.preventDefault();
        valuesForm.submit();
    }
});

optionsInput.addEventListener('keyup', function(e){
    if (e.key === 13) {
        e.preventDefault();
        optionsForm.submit();
    }
});

// decidersForm.addEventListener('submit', function(e) {
//     if (decidersInput.value != '') {
//         let newD = document.createElement('li');
//         console.log(newD);
//         newD.setAttribute('class', 'decider');
//         newD.setAttribute('data-option-count', decidersCounter++);
//         newD.innerText = decidersInput.value;
//         decidersList.appendChild(newD);
//         decidersInput.value = '';
//     }
// })

valuesForm.addEventListener('submit', function(e) {
    if (valuesInput.value != '') {
        let newV = document.createElement('li');
        newV.setAttribute('class', 'value');
        newV.setAttribute('data-option-count', valuesCounter++);
        newV.innerText = valuesInput.value;
        valuesList.appendChild(newV);
        valuesInput.value = '';
    }
})

optionsForm.addEventListener('submit', function(e) {
    if (optionsInput.value != '') {
        // Add value to list of values
        let newO = document.createElement('li');
        newO.setAttribute('class', 'option');
        newO.setAttribute('data-option-count', optionsCounter++);
        newO.innerText = optionsInput.value;
        options.appendChild(newO);
        optionsInput.value = '';
    }
})

// Page 2
const pageOne = document.getElementById('pageOne');
const pageTwo = document.getElementById('pageTwo');;
const affect = document.getElementById('affect');
const pageOneNextButton = document.getElementById('pageOneNext');

pageOneNextButton.addEventListener('click', function(e){
    // Get all options and print them to the page as H3's in their own div
    let allOptions = document.querySelectorAll('li.option');
    // console.log(allOptions);
    [].forEach.call(allOptions, function(opt) {
        // console.log(opt.innerText);
        let newOptionDiv = document.createElement('div');
        newOptionDiv.classList.add('option' + opt.getAttribute('data-option-count'), 'boogie');
        newOptionH3 = document.createElement('h3');
        newOptionH3.setAttribute('class', 'option-header');
        newOptionH3.innerText = opt.innerText;

        pageOne.style.display = 'none';
        pageTwo.style.display = 'flex';
        
        // Print Values under each option
        affect.appendChild(newOptionDiv);
        newOptionDiv.appendChild(newOptionH3);
        newOptionDiv.appendChild(valuesList.cloneNode(true));        
        
    }); // end loop
    
    quantity(-101);
    function quantity(amount){
        // Get all the value li so I can add the select to them
        let evalValues = document.querySelectorAll('.value');

        // Add the select to each value li
        [].forEach.call(evalValues, function(eval){
            let numbers = document.createElement('select');
            numbers.setAttribute('class', 'quant');  
            eval.appendChild(numbers);
        })
        var vaals = document.querySelectorAll('.quant');
        // add options to each select
        [].forEach.call(vaals, function(el) {
            for (var i = 100; i > amount; i--){
                el.options[el.options.length] = new Option(i, i);
              }
        })
        let zero = document.querySelectorAll('option[value="0"]');
        [].forEach.call(zero, function(z){
            z.setAttribute('selected', 'selected');
        })
    }
})

// Page 3
const pageThree = document.getElementById('pageThree')
const pageTwoNext = document.getElementById('pageTwoNext');
pageTwoNext.addEventListener('click', function(e) {
    pageTwo.style.display = 'none';
    pageThree.style.display = 'flex';
    let evalOptions = document.querySelectorAll('.boogie');
    let results = [];
    [].forEach.call(evalOptions, function(eOpt) {

        // Get text from option name h3
        let optName = eOpt.firstChild;
        let ray = []
        let selectDropdown = eOpt.querySelectorAll('.quant');
        [].forEach.call(selectDropdown, function(sel){
            // console.log(sel.options[sel.selectedIndex].text);
            let nums = sel.options[sel.selectedIndex].text;
            ray.push(nums);
        })
        
        // Get the H3 option text to populate the results page

        // Add up the results
        bob = ray.map(Number);
        // console.log(bob);
        const total = bob.reduce((acc, num) => (acc + num), 0);
        // console.log(total);

        // Place top results on the page
        const compareOption = document.createElement('div');
        compareOption.classList.add('compare-option');
        const score = document.createElement('p');
        score.innerText = total;
        compareOption.setAttribute('data-order', total);
        compareOption.appendChild(optName);
        compareOption.appendChild(score);
        // pageThree.appendChild(compareOption);
        results.push(compareOption);
    })
    sortOptions(results);
})

function sortOptions(results) {
    const topThree = document.getElementById('topThree');
    results
        .sort((a, b) => b.getAttribute('data-order') - a.getAttribute('data-order'));
    if (results.length > 3) {
        topThree.style.display = 'block';
    }
    for (let i = 0; i < 3; i++) {
        pageThree.appendChild(results[i]);
    }
    // results.forEach(function(res) {
    //     pageThree.appendChild(res);
    // });    
}
// Actually, only show top 3 options


    // Compare the combined results for each option to all the other options
    // Print the options in an ordered list in ascending order based on score with each option total score displayed next to the option

// Notes
    // Page 1
        // Add deciders
            // Add a decider 
                // Create an array of unique id and decider name
                // Add the decider array to an object 
        
        // Add values
            // Add a value (this is the collected list of values for all deciders) 
                // Create an array of unique id and value text
                // Add the value array to an object
        
        // Add options
            // Add an option
                // Create an array of unique id and option text
                // Add the option array to options object

        // When finished user clicks "next" button
        // Listen for any object to change
    
    // Page 2
        // Build the entire affect UI every time any object changes
            // Add a section for each user
            // Add each option under each user
            // Add each value under each option (App will take average of each decider's value modification)
            // Add value select chooser for each option (how does this decision affect this value)
        // When finished user clicks "next" button
        // Back button is available to change deciders, values, or options
        // Listen for any changes 
    // Page 3
        // Build the entire results section for
            // Top 3 choices compared to doing nothing based on value scores provided
            // Back button is available to change value scores

// Notes for future
    // In future I need to be able to add weights to the values. They're not all equally important

    // I should have instructions on the welcome screen that indicates the users should have all of their values established before beginning the process, that they should write out their values and have them ready before beginning the decision matrix process.

    // Look into saving in local storage so they don't lose all their work easily





