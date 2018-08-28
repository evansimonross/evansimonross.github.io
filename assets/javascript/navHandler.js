var path = window.location.pathname;
var basePath = "";
var projectsPath = "projects/"
if (path.indexOf("projects") != -1) {
    basePath = "../";
    projectsPath = "";
}
while (path.indexOf("/") != -1) {
    path = path.substring(path.indexOf("/") + 1);
}

if (path === "") { path = "index.html"; }
var html =
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="${basePath + 'index.html'}">Evan Simon Ross</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item${path === 'index.html' ? ' active' : ''}">
                    <a class="nav-link" href="${path === 'index.html' ? '#' : basePath + 'index.html'}">About${path === 'index.html' ? '<span class="sr-only">(current)</span>' : ''}</a>
                </li>
                <li class="nav-item dropdown${path === 'esl_materials.html' || path === 'games.html' || path === 'web_apps.html' ? ' active' : ''}">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Web Development
                        ${path === 'esl_materials.html' || path === 'games.html' || path === 'web_apps.html' ? '<span class="sr-only">(current)</span>' : ''}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="${path === 'esl_materials.html' ? '#' : projectsPath + 'esl_materials.html'}">ESL Materials</a>
                        <a class="dropdown-item" href="${path === 'games.html' ? '#' : projectsPath + 'games.html'}">Games</a>
                        <a class="dropdown-item" href="${path === 'web_apps.html' ? '#' : projectsPath + 'web_apps.html'}">Web Apps</a>
                    </div>
                </li>
                <li class="nav-item dropdown${path === 'node_modules.html' ? ' active' : ''}">
                    <a class="nav-link dropdown-toggle" href="node_modules.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Offline Utilities
                        ${path === 'index.html' ? '<span class="sr-only">(current)</span>' : ''}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="${path === 'node_modules.html' ? '#' : projectsPath + 'node_modules.html'}">Node Modules</a>
                    </div>
                </li>
                <li class="nav-item${path === 'contact.html' ? ' active' : ''}">
                    <a class="nav-link" href="${path === 'contact.html' ? '#' : basePath + 'contact.html'}">Contact${path === 'contact.html' ? '<span class="sr-only">(current)</span>' : ''}</a>
                </li>
            </ul>
            <ul class="nav navbar-nav ml-auto">
                <li><a href="https://github.com/evansimonross" class="nav-link"><i class="fab fa-github fa-lg"></i></a></li>
                <li><a href="https://linkedin.com/in/evan-ross-686099164/" class="nav-link"><i class="fab fa-linkedin fa-lg"></i></a></li>
                <li><a href="${basePath + 'contact.html'}" class="nav-link"><i class="far fa-envelope fa-lg"></i></a></li>

            </ul>
        </div>
    </nav>`

$('body').prepend(html);