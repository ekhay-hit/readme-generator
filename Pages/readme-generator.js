// function that will generate README
function generateReadMe(data) {
  // returning result
  return ` # ${data.projectName}

${`[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})`}
     
## Description
    ${data.description}

## Tabel of Contents

* Description
* Installation
* Usage
* License
* contribution
* Test
* Questions
    
## Installation
    ${data.installation}

 ## Usage
    ${data.usage}

## License
    ${data.license}

## Contributions
${data.contribution}

## Testing
${data.test}


### Questions:

* For any question please use the following email address ${data.email}
* Githab repository: ${data.userName}

    `;
}

// exporting the function that generate README to be use in other files in this project
module.exports = generateReadMe;
