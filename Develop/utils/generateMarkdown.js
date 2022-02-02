// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";
} else if (license === "GNU GPLv3") {
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
} else if (license === "GNU LGPLv3") {
  return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]";
} else if (license = "Mozilla Public License") {
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
} else if (license === "Apache 2.0") {
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
} else if (license === "MIT") {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
} else {
  return "";
};
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "(https://www.gnu.org/licenses/agpl-3.0)";
} else if (license === "GNU GPLv3") {
  return "(https://www.gnu.org/licenses/gpl-3.0)";
} else if (license === "GNU LGPLv3") {
  return "https://www.gnu.org/licenses/lgpl-3.0)";
} else if (license = "Mozilla Public License") {
  return "(https://opensource.org/licenses/MPL-2.0)";
} else if (license === "Apache 2.0") {
  return "(https://opensource.org/licenses/Apache-2.0)";
} else if (license === "MIT") {
  return "(https://opensource.org/licenses/MIT)";
} else {
  return "";
};
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "GNU AGPLv3") {
    return "(https://www.gnu.org/licenses/agpl-3.0)";
} else if (license === "GNU GPLv3") {
  return "(https://www.gnu.org/licenses/gpl-3.0)";
} else if (license === "GNU LGPLv3") {
  return "https://www.gnu.org/licenses/lgpl-3.0)";
} else if (license = "Mozilla Public License") {
  return "(https://opensource.org/licenses/MPL-2.0)";
} else if (license === "Apache 2.0") {
  return "(https://opensource.org/licenses/Apache-2.0)";
} else if (license === "MIT") {
  return "(https://opensource.org/licenses/MIT)";
} else {
  return "";
};
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}
  
  ## Usage:
  ${data.usage}

  ## Licenses:
  ${data.licenses}
  * ${renderLicenseSection(data.licenses)}
  * ${renderLicenseLink(data.licenses)}
  
  ## Contribution:
  ${data.contribution}
  
  ## Test:
  ${data.test}
 
  ## Questions:
  * Username: ${data.username}
  * Github Account: https://github.com/${data.username}
  * Email: ${data.email}
  `;
};

//export the function
module.exports = generateMarkdown;
