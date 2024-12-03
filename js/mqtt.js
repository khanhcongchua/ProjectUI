import { addData } from "./firebase.js";

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
    console.log(today);

    // add data to firebase
    // await addData(today, temp, humidity);

})


