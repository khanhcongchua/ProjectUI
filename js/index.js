import { getDataForHomePage } from "./handlleAPI.js";
import { login, logout, signup } from "./login.js";
import { initOrUpdateBar, initPredicting7daysBar } from "./webSocket.js";

// Assuming this code is running in a browser environment
const currentUrl = window.location.href;
// Extract the origin (protocol + hostname) from the current URL
const currentOrigin = new URL(currentUrl).origin;
// Combine the origin and API path to get the full API URL
// const apiUrl = `${currentOrigin}`;
const apiUrl = 'http://localhost:3000';

const loginLink = document.getElementById('loginLink');
const userDropdown = document.getElementById('userDropdown');

async function getDataWhenLoadingHomePage() {
    const data = await getDataForHomePage(apiUrl);
    return data;
}

const btn = document.querySelector('.btn');
const kc_selector = document.getElementById('kc-selector');
if (kc_selector) {
    document.getElementById('kc-selector').addEventListener('change', function () {
        const selectedValue = this.value; // Lấy giá trị được chọn
        const kcValueElement = document.getElementById('kc-value'); // Lấy phần tử hiển thị KC

        // Cập nhật giá trị hiển thị
        kcValueElement.textContent = selectedValue === '0' ? 'auto' : selectedValue;

        // Thêm thông báo (tuỳ chọn)
    });

    if (btn) {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();

            let selectedValue = document.getElementById('kc-selector').value;
            const area = document.getElementById('dientichInput').value;

            const data = await getDataForHomePage(apiUrl, selectedValue, area);

            let weather7Days = data.data.dataWeather7days;

            await initPredicting7daysBar(data.data.predictWaterVolume, weather7Days.date)
            await initOrUpdateBar(data.data.dataFromWaterVolume, selectedValue)

        })
    }
}


if (loginLink || userDropdown) {
    const data = await getDataWhenLoadingHomePage(apiUrl);

    if (data.user) {
        loginLink.style.display = 'none';
        userDropdown.style.display = 'block';
        const userName = document.getElementById('user-name');
        userName.innerHTML = data.user.name;
    } else {
        userDropdown.style.display = 'none';
        loginLink.style.display = 'block';
    }
}

const logOutBtn = document.getElementById('logOut-btn');

if (logOutBtn) {
    logOutBtn.addEventListener('click', () => {
        logout(apiUrl);
    });
}

const form_login = document.querySelector('.login_form');

if (form_login) {
    form_login.addEventListener('submit', (e) => {
        const email = document.getElementById('email').value;
        const pwd = document.getElementById('password').value;
        e.preventDefault();
        login(email, pwd, apiUrl);
    })
}

const form_signup = document.querySelector('.signup_form');

if (form_signup) {
    form_signup.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const pwd = document.getElementById('password').value;
        e.preventDefault();

        signup(name, email, pwd, apiUrl);
    })
}