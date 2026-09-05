// Copy/paste info from Firebase. Make sure to keep the word "export".
export const firebaseConfig = {
    apiKey: "AIzaSyAs9nhZuvHgGlPORPR3c_LYHenXjfbnamo",
    authDomain: "schoen-poll.firebaseapp.com",
    projectId: "schoen-poll",
    storageBucket: "schoen-poll.firebasestorage.app",
    messagingSenderId: "160493309944",
    appId: "1:160493309944:web:40201dc27a1749c5a4500d"
};

// Specify the URL to the clicker here, for the QR code.
export const clickerUrl = "https://nicolasboumal.github.io/schoen-poll/";


// Custom color palette for displaying the results (bubbles)
export const colors = ["#4C72B0", "#55A868", "#8172B2", "#64B5CD", "#CCB974", "#C44E52"];
// export const colors = ["#02468E", "#007355", "#86228F", "#B88700", "#B63A4A", "#00869A"]; // goodnotes colors
// export const colors = ["#02468E", "#007355", "#86228F", "#D55E00", "#B79F00", "#4E8CFF"]; // goodnotes colors


// Define buttons with preset options
export const presetButtons = [
    ['Yes', 'No'],
    ['True', 'False'],
    ['Yes', 'No', 'Unsure'],
    ['True', 'False', 'Unsure'],
    ['Oui', 'Non'],
    ['Vrai', 'Faux'],
    ['Oui', 'Non', '...?'],
    ['Vrai', 'Faux', '...?'],
    ['A', 'B', 'C', 'D']
];


// Results-page styles.
// Define as many as you like, and give them unique ids of your choice.
// They are selectable under the advanced admin tools (admin remote).
// The first style is the fallback when no valid style is selected.
export const resultStyles = [
    {
        id: "none",
        label: "None",
        backgroundColor: "",            // "empty" may be useful for transparency
        labelColor: "#2c3e50",
        labelSize: "3.5rem",
        labelOutlineColor: "#ffffff",
        labelOutlineWidth: 15
    },
    {
        id: "white-bg",
        label: "White bg",
        backgroundColor: "#ffffff",
        labelColor: "#2c3e50",
        labelSize: "3.5rem",
        labelOutlineColor: "#ffffff",
        labelOutlineWidth: 15
    },
    {
        id: "black-bg",
        label: "Black bg",
        backgroundColor: "#000000",     // "black" is transparent when using a projector
        labelColor: "#ffffff",
        labelSize: "3.5rem",
        labelOutlineColor: "#000000",
        labelOutlineWidth: 15
    }
];
