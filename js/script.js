let search_inp = document.getElementById('search-input');
let search_btn = document.getElementById('search-btn');
let weather_area = document.getElementById('weather-area');
let main_area = document.getElementById('main');
let history_section = document.getElementById('history-section');
let history_cards = document.getElementById('history-cards');

// Configuração da API Key
const API_KEY = 'SUA_CHAVE_API';

// Inicialização do histórico
let search_history = JSON.parse(localStorage.getItem('weather_search_history')) || [];

if (search_history.length > 0) {
    history_section.style.display = 'block';
    renderHistory();
}

search_inp.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        search_btn.click();
    }
});

search_btn.addEventListener('click', () => {
    let city = search_inp.value.trim();
    
    if(!city) {
        showError('Por favor, digite o nome de uma cidade.');
        return;
    }

    if(city.length < 2) {
        showError('O nome da cidade deve ter pelo menos 2 caracteres.');
        return;
    }

    main_area.style.display = 'block';
    main_area.classList.add('animate__animated', 'animate__fadeInUp');
    weather_area.innerHTML = `
        <div class="loading-container">
            <div class="spinner"></div>
            <p class="loading">Buscando informações do clima...</p>
        </div>
    `;

    check_weather(city).then(result => {
        if(typeof result === 'string' && result.startsWith("Erro")) {
            weather_area.innerHTML = `
                <div class="error-container">
                    <i class="bi bi-exclamation-triangle-fill error-icon"></i>
                    <p class="error-message">${result}</p>
                </div>
            `;
        }
        else {
            addToHistory(city);
            show_weather_info(result);
            search_inp.value = "";
        }

        setTimeout(() => {
            main_area.classList.remove('animate__animated', 'animate__fadeInUp');
        }, 1000);
    });
});

function showError(message) {
    const errorToast = document.createElement('div');
    errorToast.className = 'error-toast';
    errorToast.innerHTML = `
        <i class="bi bi-exclamation-circle-fill me-2"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(errorToast);
    
    setTimeout(() => errorToast.classList.add('show'), 10);
    
    setTimeout(() => {
        errorToast.classList.remove('show');
        setTimeout(() => errorToast.remove(), 300);
    }, 4000);
}

function addToHistory(city) {
    search_history = search_history.filter(item => item.toLowerCase() !== city.toLowerCase());
    
    search_history.unshift(city);
    
    if (search_history.length > 8) {
        search_history = search_history.slice(0, 8);
    }
    
    localStorage.setItem('weather_search_history', JSON.stringify(search_history));
    
    history_section.style.display = 'block';
    renderHistory();
}

function renderHistory() {
    history_cards.innerHTML = '';
    
    search_history.forEach((city, index) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
        
        col.innerHTML = `
            <div class="history-card card h-100 animate__animated animate__fadeIn" style="animation-delay: ${index * 0.1}s" data-city="${city}">
                <div class="card-body d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-geo-alt me-2"></i>
                        <span class="city-name">${city}</span>
                    </div>
                    <button class="btn-delete" data-city="${city}" title="Remover">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>
        `;
        
        history_cards.appendChild(col);
    });
    
    document.querySelectorAll('.history-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if(!e.target.closest('.btn-delete')) {
                const city = this.getAttribute('data-city');
                search_inp.value = city;
                search_btn.click();
            }
        });
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const city = this.getAttribute('data-city');
            deleteFromHistory(city);
        });
    });
}

function deleteFromHistory(city) {
    search_history = search_history.filter(item => item.toLowerCase() !== city.toLowerCase());
    localStorage.setItem('weather_search_history', JSON.stringify(search_history));
    
    if(search_history.length === 0) {
        history_section.style.display = 'none';
    }
    
    renderHistory();
}

function check_weather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br`;

    return fetch(url) 
        .then(response => {
            if (!response.ok) {
                if(response.status === 404) {
                    throw new Error('Cidade não encontrada. Verifique o nome e tente novamente.');
                } else if(response.status === 401) {
                    throw new Error('API Key inválida. Verifique sua configuração.');
                } else if(response.status === 429) {
                    throw new Error('Limite de requisições excedido. Tente novamente mais tarde.');
                } else {
                    throw new Error(`Erro ao buscar dados: ${response.status}`);
                }
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(erro => {
            return 'Erro: ' + erro.message;
        });
}

function show_weather_info(result) {
    const today = new Date();
    const days_of_week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let temp = kelvin_to_celsius(result.main.temp);
    let max_temp = kelvin_to_celsius(result.main.temp_max);
    let min_temp = kelvin_to_celsius(result.main.temp_min);
    let feels_like = kelvin_to_celsius(result.main.feels_like);

    const wind_speed = (result.wind.speed * 3.6).toFixed(1);

    let sunrise = convert_timestamp(result.sys.sunrise);
    let sunset = convert_timestamp(result.sys.sunset);

    weather_area.innerHTML = `
        <div>
            <div class="weather-info">
                <div class="left-content">
                    <div class="date-info">
                        <span class="bi bi-geo-alt-fill local-icon"></span>
                        <span class="day-info">${days_of_week[today.getDay()]}, ${today.getDate()} de ${months[today.getMonth()]} de ${today.getFullYear()}</span>
                    </div>
                    <h1 class="title">${result.name}, ${result.sys.country}</h1>
                    <h1 class="weather-temp">${temp}°C</h1>
                    <p class="weather-min-max">
                        <span><i class="bi bi-thermometer-high"></i> Máx: ${max_temp}°C</span>
                        <span><i class="bi bi-thermometer-low"></i> Mín: ${min_temp}°C</span>
                    </p>
                    <p class="feels-like">Sensação térmica: ${feels_like}°C</p>
                </div>
                <div class="right-content">
                    <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png" width="160" height="160" class="weather-icon" alt="${result.weather[0].description}">
                    <p class="weather-description">${result.weather[0].description.charAt(0).toUpperCase() + result.weather[0].description.slice(1)}</p>
                </div>
            </div>

            <article class="add-info">
                <div class="info-card">
                    <i class="bi bi-moisture icons"></i>
                    <p class="info-label">Umidade</p>
                    <p class="info-value">${result.main.humidity}%</p>
                </div>

                <div class="info-card">
                    <i class="bi bi-wind icons"></i>
                    <p class="info-label">Vento</p>
                    <p class="info-value">${wind_speed} km/h</p> 
                </div>

                <div class="info-card">
                    <i class="bi bi-sunrise-fill icons"></i>
                    <p class="info-label">Nascer do Sol</p>
                    <p class="info-value">${sunrise}</p>
                </div>

                <div class="info-card">
                    <i class="bi bi-sunset-fill icons"></i>
                    <p class="info-label">Pôr do Sol</p>
                    <p class="info-value">${sunset}</p>
                </div>

                <div class="info-card">
                    <i class="bi bi-speedometer2 icons"></i>
                    <p class="info-label">Pressão</p>
                    <p class="info-value">${result.main.pressure} hPa</p>
                </div>

                <div class="info-card">
                    <i class="bi bi-eye-fill icons"></i>
                    <p class="info-label">Visibilidade</p>
                    <p class="info-value">${(result.visibility / 1000).toFixed(1)} km</p>
                </div>
            </article>
        </div>
    `;
}

function convert_timestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function kelvin_to_celsius(kelvin) {
    let temp = (kelvin - 273.15).toFixed(1);
    const body = document.getElementById('body');

    if (temp <= 15) {
        body.style.background = "linear-gradient(135deg, #6fb1fc, #4364f7, #0b3d91)";
    } else if (temp >= 26) {
        body.style.background = "linear-gradient(135deg, #ff9a44, #fc6767, #e53935)";
    } else {
        body.style.background = "linear-gradient(135deg, #87ceeb, #4682b4, #1e3a8a)";
    }
    
    return temp;
}