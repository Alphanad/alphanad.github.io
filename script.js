const terminal = document.getElementById("terminal");

const lines = [
{ text: "alireza@earth:~$ ", color: "green" },
{ text: "sudo less /bin/ALPHANAD", color: "blue" },
{ text: "", color: "" },

{ text: "[sudo] password for alireza:", color: "yellow" },
{ text: "", color: "" },

{ text: "      ___    _      ____  _   _    _    ____ ", color: "blue" },
{ text: "     / _ \\  | |    |  _ \\| | | |  / \\  |  _ \\", color: "blue" },
{ text: "    | | | | | |    | |_) | |_| | / _ \\ | | | |", color: "blue" },
{ text: "    | |_| | | |___ |  __/|  _  |/ ___ \\| |_| |", color: "blue" },
{ text: "     \\___/  |_____||_|   |_| |_/_/   \\_\\____/ ", color: "blue" },
{ text: "", color: "" },

{ text: "Full Name:              ", color: "yellow", value: "Alireza Fathi" },
{ text: "Alias:                  ", color: "yellow", value: "AlphaNad" },
{ text: "Uptime:                 ", color: "yellow", value: `${Date.now()} [Milliseconds]` },
{ text: "Timezone:               ", color: "yellow", value: "Asia/Tehran ~ FA [UTC +03:30]" },
{ text: "Location:               ", color: "yellow", value: "Tehran, Iran" },

{ text: "Job History:", color: "yellow" },

{ text: " * a82f91c (HEAD -> MCI) AI Engineer @ Tehran, Iran - 2024", color: "green" },
{ text: " * b19d22f ML Engineer @ Roshan AI - 2021 ~ 2024", color: "green" },
{ text: " * c77ae41 Backend Developer @ Freelance - 2019 ~ 2021", color: "green" },

{ text: "", color: "" },

{ text: "Connections:            ", color: "yellow", value: "LinkedIn, GitHub, Telegram, eMail" },
{ text: "Languages:              ", color: "yellow", value: "Python, C++, JavaScript" },
{ text: "Frameworks:             ", color: "yellow", value: "PyTorch, TensorFlow, FastAPI, Django" },
{ text: "Tools & Technologies:   ", color: "yellow", value: "SQL, NoSQL, Docker, Kubernetes, Git, REST" },
{ text: "English Level:          ", color: "yellow", value: "C1" },
{ text: "GPG Fingerprint:        ", color: "yellow", value: "A1B2 C3D4 E5F6 G7H8 I9J0" },
{ text: "License:                ", color: "yellow", value: "Copyright ©2026 AlphaNad" },

{ text: "~", color: "blue" },
{ text: "~", color: "blue" },
{ text: "~", color: "blue" },

{ text: "/bin/ALPHANAD (END)", color: "yellow" },
{ text: "", color: "" },

{ text: "alireza@earth:~$ ", color: "green" }
];

let lineIndex = 0;

function printLine() {
    if (lineIndex >= lines.length) {
        terminal.innerHTML += '<span class="cursor"></span>';
        return;
    }

    const line = lines[lineIndex];

    if (line.value) {
        terminal.innerHTML += `<span class="${line.color}">${line.text}</span><span class="blue">${line.value}</span>\n`;
    } else {
        terminal.innerHTML += `<span class="${line.color}">${line.text}</span>\n`;
    }

    lineIndex++;

    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(printLine, 120);
}

printLine();
