const equiposLocales = document.querySelector("#equipos-locales-nba");
const puntajeLocal = document.querySelector("#puntaje-local");
const puntajeVisita = document.querySelector("#puntaje-visita");
const equiposVisitantes = document.querySelector("#equipos-visitantes-nba");


fetch("https://www.balldontlie.io/api/v1/games")
    .then(response => response.json())
    .then(data => {
        const equipos = data.data;
    

        equipos.forEach(equipo => {
            const li = document.createElement("li")
            li.classList.add("lista");
            li.innerText = equipo.home_team.full_name;
            equiposLocales.append(li)
            
        });

        
    }
    
)

fetch("https://www.balldontlie.io/api/v1/games")
    .then(response => response.json())
    .then(data => {
        const equipos = data.data;

        equipos.forEach(equipo => {
            const li = document.createElement("li")
            li.classList.add("lista");
            li.innerText = equipo.home_team_score;
            puntajeLocal.append(li)
            
        });

        
    }
    )

    fetch("https://www.balldontlie.io/api/v1/games")
    .then(response => response.json())
    .then(data => {
        const equipos = data.data;

        equipos.forEach(equipo => {
            const li = document.createElement("li")
            li.classList.add("lista");
            li.innerText = equipo.visitor_team_score;
            puntajeVisita.append(li)
            
        });

        
    }
    )
    
    fetch("https://www.balldontlie.io/api/v1/games")
    .then(response => response.json())
    .then(data => {
        const equipos = data.data;

        equipos.forEach(equipo => {
            const li = document.createElement("li")
            li.classList.add("lista");
            li.innerText = equipo.visitor_team.full_name;
            equiposVisitantes.append(li)
            
        });

        
    }
    )

    // fetch("https://www.balldontlie.io/api/v1/games?seasons[]=2022&team_ids[3]=1")
    // .then(response => response.json())
    // .then(data = console.log(data)
        

        
    // )