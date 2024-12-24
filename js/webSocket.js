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

export function initOrUpdateBar(data, kc) {

    let waterVolumeData = data.map(doc => doc.waterVolume);
    let waterVolume = [];

    kc = parseFloat(kc);

    switch (kc) {
        case 0:
            waterVolume = waterVolumeData.map(doc => doc.kc_085);
            break;
        case 0.5:
            waterVolume = waterVolumeData.map(doc => doc.kc_05);
            break;
        case 0.85:
            waterVolume = waterVolumeData.map(doc => doc.kc_085);
            break;
        case 0.6:
            waterVolume = waterVolumeData.map(doc => doc.kc_06);
            break;
        default:
            waterVolume = waterVolumeData.map(doc => doc.kc_085);
            break;
    }

    let humidities = data.map(doc => doc.humd);
    // let timestamps = data.map(doc => new Date(doc.timestamp.toDate()).toLocaleTimeString());
    let timestamps = data.map(doc => new Date(doc.millisecond).toLocaleTimeString());

    if (!mixedChart) {
        const ctx = document.getElementById('worldwide-sales').getContext('2d');
        mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timestamps,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Lượng nước',
                        data: waterVolume,
                        backgroundColor: "rgba(255,99,132,0.6)",
                        yAxisID: 'y1'
                    },
                    {
                        type: 'line',
                        label: 'Độ ẩm đất',
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
                            text: 'Lượng nước (lít)'
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
        mixedChart.data.datasets[0].data = waterVolume;
        mixedChart.data.datasets[1].data = humidities;
        mixedChart.update();
    }
}


let myChart2 = null;

export function initPredicting7daysBar(data, date) {

    // Salse & Revenue Chart
    const ctx2 = document.getElementById('salse-revenue').getContext('2d');

    if (myChart2) {
        myChart2.destroy();
    }

    myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: date,
            datasets: [{
                label: "Lượng nước (lít)",
                data: data,
                backgroundColor: "rgba(0, 156, 255, .5)",
                fill: true
            }]
        },
        options: {
            responsive: true
        }
    });

}



