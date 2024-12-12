const abler = document.querySelector('.alert');
const ablerText = document.querySelector('.alert-text');

const alert = (status, message) => {
    if (status == 'success') {
        abler.style.backgroundColor = "green";
        abler.style.display = "block";
        ablerText.innerHTML = message;
    } else {
        abler.style.display = "block";
        ablerText.innerHTML = message;
    }
}


export const login = async (email, password, apiUrl) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${apiUrl}/api/view/login`,
            data: {
                email,
                password
            },
            withCredentials: true
        });
        if (res.data.status === 'success') {
            alert('success', 'Logged in successfully!');
            console.log(res.data);

            location.assign('/'); // Default to home page            
        }
    } catch (error) {
        console.log(error);

        if (error.response.status == 401) {
            alert('err', "Invalid email or password!");
        } else if (error.response.status == 400) {
            alert('err', 'Please provide email and password');
        } else {
            alert('err', 'An error occurred! Please try again!');
        }

    }
}

export const signup = async (name, email, password, apiUrl) => {

    try {
        const res = await axios({
            method: 'POST',
            url: `${apiUrl}/api/view/signup`,
            data: {
                name,
                email,
                password
            },
            withCredentials: true
        });
        if (res.data.status === 'success') {
            alert('success', 'Sign up successfully!');
            window.setTimeout(() => {
                location.assign('/')
            }, 1500);
        }
    } catch (error) {
        console.log(error);

        alert('err', error.response.data.errorMessage);
    }
}


export const logout = async (apiUrl) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${apiUrl}/api/view/logout`,
            withCredentials: true
        });

        if (res.data.status = 'success') {
            location.reload(true);
        }


    } catch (error) {
        console.log(error, 'Error logging out! Please try again.');
    }
}