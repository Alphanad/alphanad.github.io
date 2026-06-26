const terminal = document.getElementById("terminal");
const viewport = document.getElementById("viewport");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function scrollToBottom() {
    viewport.scrollTop = viewport.scrollHeight;
}

function calculateAge() {
    const birthDate = new Date("1998-06-17");
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

async function typeText(text, className = "") {
    const span = document.createElement("span");

    if (className) span.className = className;

    terminal.appendChild(span);

    for (const char of [...text]) {
        span.textContent += char;
        scrollToBottom();
        await sleep(18);
    }
}

function newLine(count = 1) {
    for (let i = 0; i < count; i++) {
        terminal.appendChild(document.createElement("br"));
    }
    scrollToBottom();
}

async function typePassword(length = 8) {
    const span = document.createElement("span");
    terminal.appendChild(span);

    for (let i = 0; i < length; i++) {
        span.textContent += "*";

        const cursor = document.createElement("span");
        cursor.className = "cursor";
        span.appendChild(cursor);

        scrollToBottom();
        await sleep(180);

        span.removeChild(cursor);
    }
}

async function typeLinks() {
    const links = [
        ["GitHub", "https://github.com/alphanad"],
        ["LinkedIn", "https://linkedin.com/alphanad"],
        ["Instagram", "https://instagram.com/alphanad"],
        ["eMail", "mailto:alphanad.official@gmail.com"]
    ];

    for (let i = 0; i < links.length; i++) {
        const [label, url] = links[i];

        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "link";

        terminal.appendChild(a);

        for (const char of [...label]) {
            a.textContent += char;
            scrollToBottom();
            await sleep(18);
        }

        if (i !== links.length - 1) {
            await typeText(" | ");
        }
    }
}

async function run() {
    await typeText("universe@alphanad:~$ ", "green");
    await typeText("sudo less /alphanad/info", "blue");

    newLine(2);

    await typeText("[sudo] password for alphanad: ", "yellow");
    await typePassword(8);

    await sleep(600);
    newLine(2);

    const logo = [
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⢀⠀⠀⠀",
        "⠀⠀⠀⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⠛⠁⠀⠀⡆⠀⢀⣼⠀⠀⠀",
        "⠀⠀⠀⢾⠀⠀⠀⠀⠀⢀⢠⠂⠀⠀⠀⠀⣿⣇⡄⠀⠀⣰⠇⠀⠘⠀⠀⠀⠀",
        "⠀⠀⠀⢠⠀⠀⠀⠀⠀⢸⣄⠀⠀⢘⡄⢰⣿⣿⣣⣴⠁⢁⢀⢀⠀⠀⠀⢀⠆",
        "⢠⠀⠀⠘⠧⡀⠀⠰⡄⠈⢻⡄⢸⣿⣿⣿⣿⣿⣳⠋⣠⣷⠘⣸⠀⢠⡇⠈⠀",
        "⠰⣇⠀⢧⢠⠘⣦⠀⠀⡘⣾⣞⣿⣿⣿⣿⡿⢟⣿⣿⢿⣟⢀⠟⡄⠈⡇⠀⠀",
        "⠀⠨⡆⠀⠗⠛⠸⡇⢳⣷⣻⡟⠟⡿⣵⣯⣾⢿⣿⣧⣼⣿⢺⢠⣷⠀⠁⠀⠀",
        "⠰⢸⡇⢀⠈⠳⠶⠽⣆⣻⡟⣿⣇⣿⣿⣿⡏⣵⣿⡿⠛⠛⣾⢸⣣⠀⠀⠀⠀",
        "⠀⠀⢉⣾⡄⡁⣲⠫⢡⠘⣷⣿⡿⣧⢇⢿⣷⣿⠟⣡⠀⠀⣷⣟⡇⠀⠀⠀⠀",
        "⠀⠀⢰⣟⠛⠲⢤⣤⡤⠂⢄⢎⣿⣿⣶⣍⢍⡀⠀⠀⣀⣼⣿⡿⠇⠀⠀⠀⠀",
        "⠀⠀⢦⠙⢌⢭⡷⠾⠶⠶⢂⡲⢨⣿⣷⣝⠾⣝⡲⠶⢚⣫⣿⡃⢮⢢⠀⠀⠀",
        "⠀⠀⠈⠳⠀⠀⠀⠀⣤⣼⠷⣗⠘⣿⣿⠛⡳⠉⠻⢿⣿⢵⣮⡛⢤⣃⠇⠀⠀",
        "⠀⠀⠀⠀⠈⠀⠀⢈⣬⡝⣻⣛⠄⢛⣃⣐⡴⣭⣍⠳⡅⠀⠉⠲⠶⠟⠀⠀⠀",
        "⠀⠀⠀⠀⣀⣤⣶⡿⠛⢁⠀⠀⠀⠀⠀⠀⠀⡌⠛⠿⣿⣦⣄⡀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠘⢿⣤⣘⣷⠶⠚⠛⠻⢶⣭⣁⣴⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠞⣼⣿⣾⣿⣞⠖⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    ];

    for (const line of logo) {
        await typeText(line, "red");
        newLine();
        await sleep(50);
    }

    newLine();

    const info = [
        ["Full Name:              ", "Ali Fathi Nasrabad"],
        ["Birthday:               ", `17 June 1998 - ${calculateAge()} years old`],
        ["Alias:                  ", "Alphanad"],
        ["Location:               ", "Tehran, Iran"],
        ["Timezone:               ", "UTC +03:30"]
    ];

    for (const [label, value] of info) {
        await typeText(label, "yellow");
        await typeText(value, "blue");
        newLine();
        await sleep(80);
    }

    newLine();

    await typeText("Experience:", "yellow");
    newLine();

    const experiences = [
        " * a82f91c (HEAD -> ARIO) Mobile Developer @ Ario Soren          (Jun 2025 ~ Nov 2025)",
        " * b19d22f Data Scientist @ Amer Andish Hooshmand                (Jan 2023 ~ May 2025)",
        " * c77ae41 Mobile Developer @ Data Mining Leaders                (Feb 2021 ~ Jun 2022)",
        " * d14fa92 Mobile Developer @ Nikaat                             (Oct 2020 ~ Feb 2021)"
    ];

    for (const exp of experiences) {
        await typeText(exp, "green");
        newLine();
        await sleep(80);
    }

    newLine();

    const skills = [
        ["Languages:              ", "Python, Dart, Java, C"],
        ["Frameworks:             ", "Flutter, FastAPI, PyTorch, TensorFlow"],
        ["AI / LLM:               ", "AI Chatbots, RAG Pipelines, Prompt Engineering, LLM Workflow Design"],
        ["Tools & Technologies:   ", "Pandas, NumPy, Matplotlib, Scikit-Learn, Docker, Linux, Git"]
    ];

    for (const [label, value] of skills) {
        await typeText(label, "yellow");
        await typeText(value, "blue");
        newLine();
        await sleep(80);
    }

    newLine();

    await typeText("Education:", "yellow");
    newLine();

    const education = [
        " * M.Sc. Artificial Intelligence & Robotics @ Islamic Azad University South Tehran Branch (2022 ~ 2025)",
        " * B.Sc. Software Engineering @ Karaj Islamic Azad University                             (2016 ~ 2021)"
    ];

    for (const edu of education) {
        await typeText(edu, "green");
        newLine();
        await sleep(80);
    }

    newLine();

    await typeText("Connections:            ", "yellow");
    await typeLinks();

    newLine(2);

    await typeText("/alphanad/info (END)", "yellow");

    newLine(2);

    await typeText("universe@alphanad:~$ ", "green");

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    terminal.appendChild(cursor);

    scrollToBottom();
}

run();
