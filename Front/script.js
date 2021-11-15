
    let button = document.querySelector('[data-button]');
        button.addEventListener('click',selectComp);

        async function selectComp(){
            try {
                let select = document.querySelector("[data-select]").value;
                const response = await fetch(`http://192.168.0.113:3000/api/:${select}`);
                const data = await response.json(); 
                show(data);
            } catch (error) {
                console.error(error);
            }
        }

    function show(matches){
        const tr = document.createElement('tr');
        tr.innerHTML = " ";
        const table = document.querySelector('[data-table]')
        table.innerHTML="";
        tr.innerHTML = 
        `<tr>
            <th>Data</th>
            <th>Horario</th>
            <th>Casa</th>
            <th>x</th>
            <th>Visitante</th>
            <th>Resultado</th>
        </tr> `;
        table.appendChild(tr);
            for(let match of matches){
                const tr = document.createElement('tr');
                tr.innerHTML = 
                `
                <tr>
                    <td>${dateWrong(match.utcDate)}</td>
                    <td>${match.utcDate.slice(-9,-4)}</td>
                    <td>${match.homeTeam.name}</td>
                    <td></td>
                    <td> ${match.awayTeam.name}</td>
                    <td>${resultGame(match.score.fullTime.homeTeam,match.score.fullTime.awayTeam)}</td>
                </tr>`;

               table.appendChild(tr);
            }
            
        
        }
        function dateWrong(date_){
            const date =date_.slice(0,-10);
            dateFixed = date.split("-");
            return `${dateFixed[2]}/${dateFixed[1]}/${dateFixed[0]}`;
        }
        function resultGame(resultHome, resultAway){
         return resultHome == null ?   '-:-' :  `${resultHome} : ${resultAway}`;
            
        }

        
        
        
