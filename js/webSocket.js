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


let waterVolumeChart;
let humidityChart;
let waterVolumeChartYesterday;

export function initOrUpdateBar(data, kc) {

    // let waterVolumeData = data.map(doc => doc.waterVolume);
    let waterVolumeData = data.waterVolume;

    let humidities = data.humd;

    // let timestamps = data.map(doc => new Date(doc.millisecond).toLocaleTimeString());
    let millisecond = data.millisecond;


    let timestamps = [];
    millisecond.forEach(element => {
        timestamps.push(new Date(element).toLocaleTimeString());
    });


    if (!waterVolumeChart) {
        const ctx = document.getElementById('worldwide-sales').getContext('2d');
        waterVolumeChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timestamps,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Lượng nước',
                        data: waterVolumeData,
                        backgroundColor: "rgba(255,99,132,0.6)",
                    },

                ]
            },
            options: {
                responsive: true,
            }
        });
    } else {
        // Nếu biểu đồ đã tồn tại, cập nhật dữ liệu

        waterVolumeChart.data.labels = timestamps;
        waterVolumeChart.data.datasets[0].data = waterVolumeData;
        waterVolumeChart.update();
    }

    if (!humidityChart) {
        const ctx2 = document.getElementById('actual_humidity_chart').getContext('2d');
        humidityChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: timestamps,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Lượng nước',
                        data: [400, 0, 400, 0, 400, 800, 800, 400, 400, 400],
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

        humidityChart.data.labels = timestamps;
        humidityChart.data.datasets[1].data = humidities;
        humidityChart.update();
    }

    //chart for data yesterday
    let waterVolumeDataYesterday = data.waterVolumeYesterday;
    console.log(data.waterVolumeYesterday);


    let millisecondYesterday = data.millisecondYesterday;


    let timestampsForYesterday = [];
    millisecondYesterday.forEach(element => {
        timestampsForYesterday.push(new Date(element).toLocaleTimeString());
    });

    if (!waterVolumeChartYesterday) {
        const ctx = document.getElementById('amountOfWater_yesterday').getContext('2d');
        waterVolumeChartYesterday = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: timestampsForYesterday,
                datasets: [
                    {
                        type: 'bar',
                        label: 'Lượng nước',
                        data: waterVolumeDataYesterday,
                        backgroundColor: "rgba(255,99,132,0.6)",
                    },

                ]
            },
            options: {
                responsive: true,
            }
        });
    } else {
        // Nếu biểu đồ đã tồn tại, cập nhật dữ liệu
        waterVolumeChartYesterday.data.labels = timestampsForYesterday;
        waterVolumeChartYesterday.data.datasets[0].data = waterVolumeDataYesterday;
        waterVolumeChartYesterday.update();
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



