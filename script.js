// Data from Waffles Hub Menu Image
const waffles = [
    { name: "Dark & White Delight", price: "₹59 / ₹99", desc: "A heavenly mix of dark and white chocolate on a crispy base.", image: "dark and white.jpg" },
    { name: "Double Chocolate", price: "₹59 / ₹99", desc: "Rich and gooey double chocolate goodness.", image: "double chocolate.jpg" },
    { name: "Dark Fantasy", price: "₹59 / ₹99", desc: "Indulge your darkest cravings with intense cocoa.", image: "dark fantasy.jpg" },
    { name: "Triple Belgium", price: "₹59 / ₹99", desc: "The ultimate classic with three layers of imported authentic Belgium chocolate.", image: "triple bel.jpg" },
    { name: "Ultimate Oreo", price: "₹59 / ₹99", desc: "Crushed Oreos blended into a smooth and crunchy spread.", image: "oreo.jpg" },
    { name: "Milky Bar", price: "₹59 / ₹99", desc: "Smooth white Milky Bar chocolate melted to perfection.", image: "milky bar.jpg" },
    { name: "Naughty Nutella", price: "₹59 / ₹99", desc: "Loads of creamy original Nutella for the perfect bite.", image: "nutella.jpg" },
    { name: "Kit-Kat Crunch", price: "₹59 / ₹99", desc: "Crispy Kit-Kat wafers combined with melted chocolate.", image: "kitkat.jpg" },
    { name: "Biscoff", price: "₹59 / ₹99", desc: "The iconic caramelized biscuit spread in every bite.", image: "biscof.jpg" },
    { name: "Pistachio", price: "₹59 / ₹99", desc: "Earthy, nutty, and vibrant green pistachio delight.", image: "pistachio.jpg" }
];

const cakeBowls = [
    { name: "Classic Bowl", price: "₹119", desc: "A simple and elegant cake base topped with our signature vanilla cream.", image: "classic bowl.jpg" },
    { name: "Choco Chips Bowl", price: "₹119", desc: "For the chocolate lovers! Loaded with crunchy chocolate chips.", image: "choco chips bowl.jpg" },
    { name: "Triple Bowl", price: "₹119", desc: "A triple layer of cake goodness with three types of chocolate toppings.", image: "triple bowl.jpg" },
    { name: "Double Bowl", price: "₹119", desc: "Double the cake, double the fun! Perfect for a heavy sweet tooth.", image: "double bowl.jpg" },
    { name: "Oreo Bowl", price: "₹119", desc: "Crumbled Oreo biscuits paired with a creamy cake base.", image: "oreo bowl.jpg" },
    { name: "Kitkat Bowl", price: "₹119", desc: "Crunchy Kitkat chunks on a soft and moist cake bowl.", image: "kitkat bowl.jpg" },
    { name: "Nutella Bowl", price: "₹119", desc: "Drizzled with authentic Nutella spread over a warm cake base.", image: "nutella bowl.jpg" }
];

const customs = [
    "Choco Chips (+10)", "Oreo (+10)", "Nutella (+15)", "Kit-Kat (+15)", "Chocolate (+15)", "Biscoff (+15)"
];

// Functions to populate the page
function populateMenu(data, elementId) {
    const list = document.getElementById(elementId);
    if (!list) return;
    list.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.className = 'waffle-card';
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="waffle-img">
            <div class="waffle-info">
                <div class="waffle-label">
                    <h4 class="waffle-name">${item.name}</h4>
                    <span class="waffle-price">${item.price}</span>
                </div>
                <p class="waffle-desc">${item.desc}</p>
            </div>
        `;
        list.appendChild(li);
    });
}

function populateTags(data, elementId) {
    const list = document.getElementById(elementId);
    if (!list) return;
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function showTab(tabId, btn) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the selected tab content
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) selectedContent.classList.add('active');

    // Add active class to the clicked button
    if (btn) {
        btn.classList.add('active');
    } else {
        // Fallback: Find by textContent if called without btn context
        const clickedButton = Array.from(buttons).find(b => b.textContent.toLowerCase().includes(tabId.replace('-', ' ')));
        if (clickedButton) clickedButton.classList.add('active');
    }
}

// Run functions on load
window.onload = () => {

    populateMenu(waffles, 'waffle-list');
    populateMenu(cakeBowls, 'cake-bowl-list');
    populateTags(customs, 'custom-list');
};