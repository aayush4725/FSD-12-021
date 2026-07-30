import { EventEmitter } from "events";

const button = new EventEmitter();
button.on("click", (uname) => {

    console.log('button clicked by ${uname}');
});

button.emit("Click", "Raju");
button.emit("Click", "Kaju");
button.emit("Click", "Rani");
