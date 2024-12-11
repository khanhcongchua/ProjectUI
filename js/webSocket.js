const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = (event) => {
    try {

        const realTimeData = JSON.parse(event.data);
        console.log("Realtime Data:", realTimeData);
        initOrUpdateBar(realTimeData);
    } catch (error) {
        console.log('Error from socket: ', error);

    }
};

socket.onopen = () => {
    console.log("WebSocket connection established.");
};

socket.onclose = () => {
    console.log("WebSocket connection closed.");
};

socket.onerror = (error) => {
    console.error("WebSocket error:", error);
};


let mixedChart;

export function initOrUpdateBar(data) {

    let temperatures = data.map(doc => doc.temp);
    let humidities = data.map(doc => doc.humd);
    // let timestamps = data.map(doc => new Date(doc.timestamp.toDate()).toLocaleTimeString());
    let timestamps = data.map(doc => new Date(doc.currentTime).toLocaleTimeString());

    if (!mixedChart) {
        const ctx = document.getElementById('worldwide-sales').getContext('2d');
        mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timestamps,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Nhiệt độ',
                        data: temperatures,
                        backgroundColor: "rgba(255,99,132,0.6)",
                        yAxisID: 'y1'
                    },
                    {
                        type: 'line',
                        label: 'Độ ẩm',
                        data: humidities,
                        borderColor: "blue",
                        yAxisID: 'y2'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y1: {
                        type: 'linear',
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Nhiệt độ (°C)'
                        }
                    },
                    y2: {
                        type: 'linear',
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Độ ẩm (%)'
                        }
                    }
                }
            }
        });
    } else {
        // Nếu biểu đồ đã tồn tại, cập nhật dữ liệu
        mixedChart.data.labels = timestamps;
        mixedChart.data.datasets[0].data = temperatures;
        mixedChart.data.datasets[1].data = humidities;
        mixedChart.update();
    }
}



