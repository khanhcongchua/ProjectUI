
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

export const callApi = async (apiUrl, nameGarden) => {
    console.log(nameGarden);

    if (nameGarden) {
        await axios({
            method: "POST",
            url: `${apiUrl}/api/view/callApiWeather`,
            data: nameGarden,
            withCredentials: true
        });

    } else {
        await axios({
            method: "POST",
            url: `${apiUrl}/api/view/callApiWeather`,
            withCredentials: true
        });
    }
}

export const getWeatherToday = async (apiUrl) => {
    const data = await axios.get(`${apiUrl}/api/view/weatherToday`);
    return data.data.data;
}

export const getWeather7days = async (apiUrl) => {
    const data = await axios.get(`${apiUrl}/api/view/weather7days`);
    return data.data.data;
}

export const getGardenInfo = async (apiUrl) => {
    const data = await axios.get(`${apiUrl}/api/view/gardens`, {
        withCredentials: true
    });

    return data.data.data;
}

export const getGardenByName = async (apiUrl, name) => {
    const data = await axios({
        method: 'GET',
        url: `${apiUrl}/api/view/garden/${name}`,
        withCredentials: true
    });

    return data.data.data[0]
}

export const addGarden = async (apiUrl, newGarden) => {
    const data = await axios({
        method: 'POST',
        url: `${apiUrl}/api/view/garden`,
        data: {
            "nameGarden": newGarden.areaName,
            "typeGarden": newGarden.type,
            "method": newGarden.method,
            "area": newGarden.areaSize,
            "note": newGarden.notes,
            "latitude": newGarden.latitude,
            "longitude": newGarden.longitude,
            "topic": newGarden.topic
        },
        withCredentials: true
    });
    return data;
}


export const updateGarden = async (apiUrl, name, newGarden) => {
    const data = await axios({
        method: 'PATCH',
        url: `${apiUrl}/api/view/garden/${name}`,
        data: {
            "nameGarden": newGarden.areaName,
            "typeGarden": newGarden.type,
            "method": newGarden.method,
            "area": newGarden.areaSize,
            "note": newGarden.notes,
            "latitude": newGarden.latitude,
            "longitude": newGarden.longitude,
            "topic": newGarden.topic
        },
        withCredentials: true
    });
    return data;
}

export const deleteGarden = async (apiUrl, nameGarden) => {
    const data = await axios({
        method: "DELETE",
        url: `${apiUrl}/api/view/garden/`,
        data: {
            "nameGarden": nameGarden
        },
        withCredentials: true
    });
    return data;
}