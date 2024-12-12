
export const getDataForHomePage = async () => {

    const data = await axios.get('http://localhost:3000/api/view/home', {
        withCredentials: true
    });

    return data.data;
}

export const callApi = async () => {
    await axios.post('http://localhost:3000/api/view/callApiWeather');
}

export const getWeatherToday = async () => {
    const data = await axios.get('http://localhost:3000/api/view/weatherToday');
    return data.data.data;
}

export const getWeather7days = async () => {
    const data = await axios.get('http://localhost:3000/api/view/weather7days');
    return data.data.data;
}
