const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42a7f2cdf2mshe77bf61e5c35402p147908jsnb2c76471b4b8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));