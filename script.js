const terminal = document.getElementById("terminal");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function typeText(text, className = "") {
    const span = document.createElement("span");
    if (className) span.className = className;
    terminal.appendChild(span);

    for (let char of text) {
        span.innerHTML += char;
        scrollBottom();
        await sleep(20);
    }
}

function newLine() {
    terminal.appendChild(document.createElement("br"));
}

function scrollBottom() {
    const viewport = document.getElementById("viewport");
    viewport.scrollTop = viewport.scrollHeight;
}

async function typePassword(password) {
    const span = document.createElement("span");
    terminal.appendChild(span);

    for (let i = 0; i < password.length; i++) {
        span.innerHTML += "*";
        span.innerHTML += `<span class="cursor"></span>`;
        scrollBottom();
        await sleep(180);

        span.innerHTML = "*".repeat(i + 1);
    }
}

function addLink(label, url) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.className = "link";
    a.innerText = label;
    terminal.appendChild(a);
}

async function run() {
    await typeText("universe@alphanad:~$ ", "green");
    await typeText("sudo less /alphanad/info", "blue");

    newLine();
    newLine();

    await typeText("[sudo] password for alphanad: ", "yellow");
    await typePassword("********");

    await sleep(600);
    newLine();
    newLine();

    const logo = [
"       _    _     ____  _   _    _    _   _    _    ____ ",
"      / \\  | |   |  _ \\| | | |  / \\  | \\ | |  / \\  |  _ \\",
"     / _ \\ | |   | |_) | |_| | / _ \\ |  \\| | / _ \\ | | | |",
"    / ___ \\| |___|  __/|  _  |/ ___ \\| |\\  |/ ___ \\| |_| |",
"   /_/   \\_\\_____|_|   |_| |_/_/   \\_\\_| \\_/_/   \\_\\____/"
    ];

    for (const line of logo) {
        await typeText(line, "blue");
        newLine();
        await sleep(60);
    }

    newLine();

    const info = [
        ["Full Name:              ", "Ali Fathi Nasrabad"],
        ["Alias:                  ", "Alphanad"],
        ["Location:               ", "Tehran, Iran"],
        ["Timezone:               ", "UTC +03:30"]
    ];

    for (const [label, value] of info) {
        await typeText(label, "yellow");
        await typeText(value, "blue");
        newLine();
        await sleep(100);
    }

    newLine();

    await typeText("Experience:", "yellow");
    newLine();

    const exp = [
        " * a82f91c (HEAD -> ARIO) Mobile Developer @ Ario Soren           (Jun 2025 ~ Nov 2025)",
        " * b19d22f Data Scientist @ Amer Andish Hooshmand                (Jan 2023 ~ May 2025)",
        " * c77ae41 Mobile Developer @ Data Mining Leaders                (Feb 2021 ~ Jun 2022)",
        " * d14fa92 Mobile Developer @ Nikaat                             (Oct 2020 ~ Feb 2021)"
    ];

    for (const e of exp) {
        await typeText(e, "green");
        newLine();
        await sleep(100);
    }

    newLine();

    const skills = [
        ["Languages:              ", "Python, Dart, Java, C++"],
        ["Frameworks:             ", "Flutter, FastAPI, Django"],
        ["Tools & Technologies:   ", "Pandas, NumPy, Matplotlib, Scikit-Learn,"],
        ["                        ", "PyTorch, TensorFlow, Docker, Linux, Git"]
    ];

    for (const [label, value] of skills) {
        await typeText(label, "yellow");
        await typeText(value, "blue");
        newLine();
        await sleep(100);
    }

    newLine();

    await typeText("Connections:            ", "yellow");

    addLink("LinkedIn", "https://linkedin.com/alphanad");
    await typeText(" | ");

    addLink("GitHub", "https://github.com/alphanad");
    await typeText(" | ");

    addLink("Instagram", "https://instagram.com/alphanad");
    await typeText(" | ");

    addLink("eMail", "mailto:alphanad.official@gmail.com");

    newLine();
    newLine();

    for (let i = 0; i < 3; i++) {
        await typeText("~", "blue");
        newLine();
        await sleep(70);
    }

    newLine();

    await typeText("/alphanad/info (END)", "yellow");

    newLine();
    newLine();

    await typeText("universe@alphanad:~$ ", "green");

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    terminal.appendChild(cursor);
}

run();
