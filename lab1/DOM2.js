//Dom document object model
import { EventEmitter } from "events";
const button = new EventEmitter();
button.on("click", () => {
    console.log("Task 1");
});
button.on("Click", () => {
    console.log("Task 2")
});
button.emit("Click");