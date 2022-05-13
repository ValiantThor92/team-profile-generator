// function to generate Manager/Engineer/Intern cards to place in HTML page
const generatePage = officeTeam => {
  console.log(officeTeam);
  // Manager card element
  const ManagerCardEl = manager => {
    return `
    <div class="card">
      <div class="card-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-subtitle"><i class="bi bi-stack" style="font-size: 1rem;"></i>  ${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getPhone()}</li>
        </ul>
      </div>
    </div>
    `;
  };
  const EngineerCardEl = engineer => {
    return `
    <div class="card">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-subtitle"><i class="bi bi-tools" style="font-size: 1rem;"></i>  ${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `;
  };
  const InternCardEl = intern => {
    return `
    <div class="card">
    <div class="card-header text-center">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-subtitle"><i class="bi bi-book-half" style="font-size: 1rem;"></i>  ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;
  };
  // empty html page array for employee cards
  const html = [];

  html.push(officeTeam
    .filter(Employee => Employee.getRole() === "Manager")
    .map((manager) => ManagerCardEl(manager)));
  html.push(officeTeam
    .filter(Employee => Employee.getRole() === "Engineer")
    .map((engineer) => EngineerCardEl(engineer))
    .join(""));
  html.push(officeTeam
    .filter(Employee => Employee.getRole() === "Intern")
    .map((intern) => InternCardEl(intern))
    .join(""));
  // joins html as string and returns
  return html.join("");
};

module.exports = (officeTeam) => {
  return `    
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Generated Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 id="title">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-wrap justify-content-center">
          ${generatePage(officeTeam)}
        </div>
      </div>
    </div>
  </body>
</html>`;
};
