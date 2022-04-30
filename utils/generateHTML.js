const html = []

const generateHTML = teamMembers => {
  teamMembers.forEach(member => {
    if (member.getRole() === 'Manager') {
      html.push(generateManagerSection(member))
    } else if (member.getRole() === 'Engineer') {
      html.push(generateEngineerSection(member))
    } else if (member.getRole() === 'Intern') {
      html.push(generateInternSection(member))
    }
  });
  return html.join("")
}

const generateManagerSection = teamMember => {
  return `
  <section class='my-3 id='about'>
    <h2 class="text-dark bg-primary p-2 display-inline-block">${teamMember.getRole()}</h2>
    <p>${teamMember.getName()}</p>
    <p>${teamMember.getId()}</p>
    <p>${teamMember.getEmail()}</p>
    <p>${teamMember.getOfficeNumber()}</p>
  </section>
  `
}

const generateEngineerSection = teamMember => {
  return `
  <section class='my-3 id='about'>
    <h2 class="text-dark bg-primary p-2 display-inline-block">${teamMember.getRole()}</h2>
    <p>${teamMember.getName()}</p>
    <p>${teamMember.getId()}</p>
    <p>${teamMember.getEmail()}</p>
    <p>${teamMember.getGithub()}</p>
  </section>
  `
}

const generateInternSection = teamMember => {
  return `
  <section class='my-3 id='about'>
    <h2 class="text-dark bg-primary p-2 display-inline-block">${teamMember.getRole()}</h2>
    <p>${teamMember.getName()}</p>
    <p>ID: ${teamMember.getId()}</p>
    <p>${teamMember.getEmail()}</p>
    <p>${teamMember.getSchool()}</p>
  </section>
  `
}


const generatePage = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
    </head>
    <body>
      <main>
        ${generateHTML(team)}
      </main>
    </body>
  </html>
  `
}

module.exports = generatePage;