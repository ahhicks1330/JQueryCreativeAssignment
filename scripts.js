const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    
    var data = JSON.parse(this.response);
    var txt1;
    
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            
            const h3 = document.createElement('h3');
            h3.textContent = movie.title;
            
            const p = document.createElement('p');
            txt1 = "Click for more information on " + movie.title;
            p.textContent = `${txt1}...`;
            
            const p1 = document.createElement('p');
            p1.textContent = movie.description;
            
            const p2 = document.createElement('p');
            p2.textContent = "Release Date: " + movie.release_date;
            
            const p3 = document.createElement('p');
            p3.textContent = "Director: " + movie.director;
            
            const p4 = document.createElement('p');
            p4.textContent = "Producer: " + movie.producer;
            
            const p5 = document.createElement('p');
            p5.textContent = "Rating: " + movie.rt_score;
            
            card.onmouseover = expand;
            card.onmouseout = close;
            
            function expand() {
                card.removeChild(p);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(p5);
            }
            
            function close() {
                card.appendChild(p);
                card.removeChild(p1);
                card.removeChild(p2);
                card.removeChild(p3);
                card.removeChild(p4);
                card.removeChild(p5);
            }
            
            container.appendChild(card);
            card.appendChild(h3);
            card.appendChild(p);
        });
    }
    else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = 'ERROR';
        app.appendChild(errorMessage);
    }
}

request.send();
