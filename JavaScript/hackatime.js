console.log("idk")
    fetch('https://hackatime.hackclub.com/api/summary?user_id=kai').then(response => functionName(response));

    var Java = 0;
    var C = 0;
    var Html = 0;
    var Css = 0;
    var Other = 0;

    var timeJava = 0;
    var timeC = 0;
    var timeHtml = 0;
    var timeCss = 0;
    var timeOther = 0;

    // vars to display %
    var javaDiv = document.getElementById("percentJava");
    var htmlDiv = document.getElementById("percentHtml");
    var cssDiv = document.getElementById("percentCss");
    var cDiv = document.getElementById("percentC");
    var otherDiv = document.getElementById("percentOther");

    // vars to display hours
    var javaTime = document.getElementById("timeJava");
    var htmlTime = document.getElementById("timeHtml");
    var cssTime = document.getElementById("timeCss");
    var cTime = document.getElementById("timeC");
    var otherTime = document.getElementById("timeOther");


    // vars to change width
    var javaWidth = document.getElementById("barForegroundJava");
    var htmlWidth = document.getElementById("barForegroundHtml");
    var cssWidth = document.getElementById("barForegroundCss");
    var cWidth = document.getElementById("barForegroundC");
    var otherWidth = document.getElementById("barForegroundOther");

    const timeMap0 = new Map ([
        ["Java", javaTime ],
        ["C", cTime ],
        ["Html", htmlTime ],
        ["Css", cssTime ],
        ["Other", otherTime ],
    ]);

    const perMap0 = new Map ([
        ["Java", javaDiv ],
        ["C", cDiv ],
        ["Html", htmlDiv ],
        ["Css", cssDiv ],
        ["Other", otherDiv ],
    ]);


async function functionName(response) {

    if (response.ok) {
        var result = await response.json();

        result.languages.forEach (Language => {
            if (Language.key == "Java") {
                Java = Language.total;
            } else if (Language.key == "Arduino" || Language.key == "C++") {
                C = C + Language.total;
            } else if (Language.key == "HTML") {
                Html = Language.total;
            } else if (Language.key == "CSS") {
                Css = Language.total;
            } else {
                Other = Other + Language.total;
            }
        });
    } else {
        console.error("Not Ok");
    }

    var total = Java + C + Html + Css + Other;

    // finding hours
    timeJava = Java/3600;
    timeC = C/3600;
    timeHtml = Html/3600;
    timeCss = Css/3600;
    timeOther = Other/3600;

    // finding percentages
    Java = Java/total * 100;
    C = C/total * 100;
    Html = Html/total * 100;
    Css = Css/total * 100;
    Other = Other/total * 100; 

    // changing bar width
    javaWidth.style.width = Java.toFixed(2) + "%";
    cWidth.style.width = C.toFixed(2) + "%";
    htmlWidth.style.width = Html.toFixed(2) + "%";
    cssWidth.style.width = Css.toFixed(2) + "%";
    otherWidth.style.width = Other.toFixed(2) + "%";
}

    // changing hours text
    export function countUpTime(element) {
        if (timeC != 0) {
            const timeMap1 = new Map ([
                ["Java", timeJava ],
                ["C", timeC ],
                ["Html", timeHtml ],
                ["Css", timeCss ],
                ["Other", timeOther ],
            ]);


            for(let i = 30; i > 0; i--) {
                setTimeout(() => {
                    timeMap0.get(element).innerHTML = (timeMap1.get(element) * i/30).toFixed(2) + "hrs";
                }, i * 50);
            }
        } else {
            setTimeout(() => countUpTime(element), 500);
        }
    }

    // changing % text
    export function countUpPercent(element) { 
        if (timeC != 0) {
            const perMap1 = new Map ([
                ["Java", Java ],
                ["C", C ],
                ["Html", Html ],
                ["Css", Css ],
                ["Other", Other ],
            ]);

            for(let i = 30; i > 1; i--) {
                setTimeout(() => {
                    perMap0.get(element).innerHTML = (perMap1.get(element)* i/30).toFixed(2) + "%";
                }, i * 50);
            }
        } else {
            setTimeout(() => countUpPercent(element), 500);
        }
    }