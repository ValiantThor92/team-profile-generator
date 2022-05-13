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
  <div class="card">
    <section class='card-header text-center my-3 id='about'>
      <h2 class="text-dark bg-success p-2 display-inline-block">${teamMember.getRole()}</h2>
      <p>${teamMember.getName()}</p>
      <p>${teamMember.getId()}</p>
      <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a>
      <p>${teamMember.getPhone()}</p>
    </section>
  </div>
  `
}

const generateEngineerSection = teamMember => {
  return `
  <div class="card">
    <section class='card-header text-center my-3 id='about'>
      <h2 class="text-dark bg-success p-2 display-inline-block">${teamMember.getRole()}</h2>
      <p>${teamMember.getName()}</p>
      <p>${teamMember.getId()}</p>
      <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a>
      <a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a>
    </section>
  </div>
  `
}

const generateInternSection = teamMember => {
  return `
  <div class="card">
    <section class='card-header text-center my-3 id='about'>
      <h2 class="text-dark bg-success p-2 display-inline-block">${teamMember.getRole()}</h2>
      <p>${teamMember.getName()}</p>
      <p>ID: ${teamMember.getId()}</p>
      <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a>
      <p>${teamMember.getSchool()}</p>
    </section>
  </div>
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
      <link rel="stylesheet" href="style.css">
      <title>My Team Profile Generator</title>
    </head>
    <body class="container-fluid">
      <main class="col-12 jumbotron mb-3 bg-danger">
        ${generateHTML(team)}
      </main>
    </body>
  </html>
  `
}

module.exports = generatePage;