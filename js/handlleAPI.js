
export const getDataForHomePage = async (apiUrl, kc, area) => {

    if (kc) {

        const data = await axios.get(`${apiUrl}/api/view/home?kc=${kc}&area=${area}`, {
            withCredentials: true
        });

        return data.data;
    }

    const data = await axios.get(`${apiUrl}/api/view/home`, {
        withCredentials: true
    });

    return data.data;
}

export const callApi = async (apiUrl) => {
    await axios.post(`${apiUrl}/api/view/callApiWeather`);
}

export const getWeatherToday = async (apiUrl) => {
    const data = await axios.get(`${apiUrl}/api/view/weatherToday`);
    return data.data.data;
}

export const getWeather7days = async (apiUrl) => {
    const data = await axios.get(`${apiUrl}/api/view/weather7days`);
    return data.data.data;
}
