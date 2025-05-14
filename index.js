const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-menu');

hamburger.addEventListener('click', () =>{
    navlinks.classList.toggle('active');
});
const text = "Hi, I'm Mr. N";
const typedText = document.getElementById('typed-text');
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
    }
}

type();

const projects=[
    {
        image:"image/pexels-life-of-pix-7919.jpg",
        title:"Animated Navbar",
        descripiton: "A responsive navigation bar with smooth animation and"
    },
    {
        image:"image/pexels-life-of-pix-7919.jpg",
        title:"HTML CSS",
        descripiton:"A responsive navigation bar with smooth animations and"
    },
    {
        
        image:"image/pexels-life-of-pix-7919.jpg",
        title:"Landing page",
        descripiton:"A responsive navigation bar with smooth animations and"
    },
]
const container = document.getElementById("project-container");

    projects.forEach(project =>{
        const card = document.createElement("div");
        card.className ="projects-grid";
        card.innerHTML=`
        <img src="${ project.image}" alt="${project.title}" class="project-img"/> 
        <h3>${project.title}</h3>
        <p>${project.descripiton}</p>`;
        container.appendChild(card);
    });
const review=[
    {
        image:"image/review.jpg",        
        title:"Animated Navbar",
        descripiton: "A responsive navigation bar with smooth animation and"

    },
    
     {
        image:"image/review.jpg",        
        title:"Animated Navbar",
        descripiton: "A responsive navigation bar with smooth animation and"

    },
     {
        image:"image/review.jpg",        
        title:"Animated Navbar",
        descripiton: "A responsive navigation bar with smooth animation and"

    },

]

const rev = document.getElementById("reviews");
review.forEach(remark =>{
    const reviews = document.createi
})
