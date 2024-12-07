import { addData, listenToSensorData } from "./firebase.js";

const brokerUrl = "wss://95abed83e935461683f04e6be8d874e3.s1.eu.hivemq.cloud:8884/mqtt"; // TLS WebSocket URL
const options = {
    clientId: "95abed83e935461683f04e6be8d874e3", // Replace with a unique client ID
    username: "jino", // Replace with your MQTT username    
    password: "1234", // Replace with your MQTT password
    clean: true
};

const client = mqtt.connect(brokerUrl, options);

const topic = 'Sensor_data'

client.on('connect', function () {
    console.log('Connected')
    // Subscribe to a topic
    client.subscribe(topic, function (err) {
        if (!err) {
            // Publish a message to a topic
            console.log('Hello');

        }
    })
})



// Receive messages
client.on('message', async function (topic, message) {
    // message is Buffer
    let data = message.toString();
    let split = data.trim().split("|");
    let time = split[1];
    let temp = split[2];
    let humidity = split[3];
    const date = new Date(parseInt(time, 10) * 1000).toString();

    const today = date.substring(16, date.lastIndexOf("GMT"));
    // console.log(today);

    // add data to firebase
    // await addData(today, temp, humidity);

})

let mixedChart;

document.addEventListener('DOMContentLoaded', () => {
    listenToSensorData(initOrUpdateBar);

})

export function initOrUpdateBar(data) {

    let temperatures = data.map(doc => doc.temp);
    let humidities = data.map(doc => doc.humd);
    let timestamps = data.map(doc =>
        new Date(doc.timestamp.toDate()).toLocaleTimeString()
    );


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



