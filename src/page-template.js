// function to generate Manager/Engineer/Intern cards to place in HTML page
const htmlPageElements = (officeTeam) => {
  console.log(officeTeam);
  // Manager card element
  const ManagerCardEl = (Manager) => {
    return `
    <div class="card">
    <div class="card-header text-center">
        <h5 class="card-title">${Manager.getName()}</h2>
        <h6 class="card-subtitle"><i class="bi bi-stack" style="font-size: 1rem;"></i>  ${Manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
`;
  };
  const EngineerCardEl = (Engineer) => {
    return `
    <div class="card">
    <div class="card-header text-center">
        <h5 class="card-title">${Engineer.getName()}</h2>
        <h6 class="card-subtitle"><i class="bi bi-tools" style="font-size: 1rem;"></i>  ${Engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${Engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${Engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
`;
  };
  const InternCardEl = (Intern) => {
    return `
    <div class="card">
    <div class="card-header text-center">
        <h5 class="card-title">${Intern.getName()}</h2>
        <h6 class="card-subtitle"><i class="bi bi-book-half" style="font-size: 1rem;"></i>  ${Intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${Intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${Intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;
  };
  // html page
  const html = [];

  html.push(
    officeTeam
      .filter((Employee) => Employee.getRole() === "Manager")
      .map((Manager) => ManagerCardEl(Manager))
  );
  html.push(
    officeTeam
      .filter((Employee) => Employee.getRole() === "Engineer")
      .map((Engineer) => EngineerCardEl(Engineer))
      .join("")
  );
  html.push(
    officeTeam
      .filter((Employee) => Employee.getRole() === "Intern")
      .map((Intern) => InternCardEl(Intern))
      .join("")
  );

  return html.join("");
};
module.exports = (officeTeam) => {
  return `    <!DOCTYPE html>
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
            <div class="col-12 jumbotron mb-3 bg-dark">
                <h1 class="text-center text-light">My Generated Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-center">
                ${htmlPageElements(officeTeam)}
            </div>
        </div>
    </div>
</body>
</html>`;
};