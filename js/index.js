import { getDataForHomePage } from "./handlleAPI.js";
import { initOrUpdateBar, initPredicting7daysBar } from "./webSocket.js";

// Assuming this code is running in a browser environment
const currentUrl = window.location.href;
// Extract the origin (protocol + hostname) from the current URL
const currentOrigin = new URL(currentUrl).origin;
// Combine the origin and API path to get the full API URL
// const apiUrl = `${currentOrigin}`;
const apiUrl = 'http://localhost:3000';

async function getDataWhenLoadingHomePage() {
    const data = await getDataForHomePage(apiUrl);
    return data;
}

const btn = document.querySelector('.btn');
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
