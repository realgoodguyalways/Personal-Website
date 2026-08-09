import { countUpTime } from "./hackatime.js";
import { countUpPercent } from "./hackatime.js";

const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            if (element.id === "timeJava") {
                countUpTime("Java");
            } else if (element.id === "timeC") {
                countUpTime("C");
            } else if (element.id === "timeHtml") {
                countUpTime("Html");
            } else if (element.id === "timeCss") {
                countUpTime("Css");
            } else if (element.id === "timeOther") {
                countUpTime("Other");
            } else if (element.id === "percentJava") {
                countUpPercent("Java");
            } else if (element.id === "percentC") {
                countUpPercent("C");
            } else if (element.id === "percentHtml") {
                countUpPercent("Html");
            } else if (element.id === "percentCss") {
                countUpPercent("Css");
            } else if (element.id === "percentOther") {
                countUpPercent("Other");
            }

            countObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll("#timeJava, #timeC, #timeHtml, #timeCss, #timeOther, #percentJava, #percentC, #percentHtml, #percentCss, #percentOther").forEach(el => countObserver.observe(el));