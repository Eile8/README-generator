//layout for the new readme file
function markdown(answer) {
    return `

# ${answer.Title}
# Badge: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Description
${answer.Description}
# Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributor](#contributor)
* [Tests](#tests)
* [Contacts](#contacts)
# Installation
These are the required dependencies to install in order to run the APP properly: 
${answer.Installation}
# Usage 
${answer.Usage}
# License 
${answer.License} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Contributors
${answer.Contributors}
# Tests 
${answer.Tests}
# Contacts
Profile: https://github.com/${answer.Username}
Email: ${answer.Email}
`
}

module.exports=markdown;