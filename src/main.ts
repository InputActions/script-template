import { config, Script } from "inputactions/core";

config.activated.connect(() => {
    console.log("Hello world!");
});

// Can be removed if not required
export default function(script: Script) {

}