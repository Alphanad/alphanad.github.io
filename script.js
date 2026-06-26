const terminal = document.getElementById("terminal");

const lines = [
"alireza@earth:~$ sudo less /bin/ALPHANAD",
"",
"[sudo] password for alireza:",
"",
"      ___    _      ____  _   _    _    ____ ",
"     / _ \\  | |    |  _ \\| | | |  / \\  |  _ \\",
"    | | | | | |    | |_) | |_| | / _ \\ | | | |",
"    | |_| | | |___ |  __/|  _  |/ ___ \\| |_| |",
"     \\___/  |_____||_|   |_| |_/_/   \\_\\____/ ",
"",
"",
"Full Name:              Alireza Fathi",
"Alias:                  AlphaNad",
`Uptime:                 ${Date.now()} [Milliseconds]`,
"Timezone:               Asia/Tehran ~ FA [UTC +03:30]",
"Location:               Tehran, Iran",
"Job History:",
"                        * a82f91c (HEAD -> MCI) AI Engineer @ Tehran, Iran - 2024",
"                        * b19d22f ML Engineer @ Roshan AI - 2021 ~ 2024",
"                        * c77ae41 Backend Developer @ Freelance - 2019 ~ 2021",
"",
"Connections:            LinkedIn, GitHub, Telegram, eMail",
"Languages:              Python, C++, JavaScript",
"Frameworks:             PyTorch, TensorFlow, FastAPI, Django",
"Tools & Technologies:   SQL, NoSQL, Docker, Kubernetes, Git, REST",
"English Level:          C1",
"GPG Fingerprint:        A1B2 C3D4 E5F6 G7H8 I9J0",
"License:                Copyright ©2026 AlphaNad",
"~",
"~",
"~",
"/bin/ALPHANAD (END)",
"",
"alireza@earth:~$"
];

let lineIndex = 0;
let charIndex = 0;

function type() {
    if (lineIndex >= lines.length) {
        terminal.innerHTML += '<span class="cursor"></span>';
        return;
    }

    const line = lines[lineIndex];

    if (charIndex < line.length) {
        terminal.innerHTML += line.charAt(charIndex);
        charIndex++;
        setTimeout(type, 15);
    } else {
        terminal.innerHTML += "\n";
        lineIndex++;
        charIndex = 0;

        let delay = 80;

        if (line.includes("password")) delay = 800;
        if (line.includes("(END)")) delay = 500;

        setTimeout(type, delay);
    }

    window.scrollTo(0, document.body.scrollHeight);
}

type();
