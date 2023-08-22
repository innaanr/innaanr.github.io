//SIDEBAR
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
  sidebar.style.width = "200px";
  // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

closeBtn.addEventListener('click', function(){
sidebar.style.width = "0";
// document.body.style.backgroundColor = "";

});
//END SIDEBAR


//WORK ITEMS
const work = [
    {
        id: 1,
        title: "Money Management App",
        category: "ui-design",
        img: "./img/img1.png",
        link :"https://dribbble.com/shots/14393908-Money-Management-App",
        desc: `This app is her first mobile design which an application to manage financial income and expenses.`,
    },
    {
        id: 2,
        title: "Ipusnas App",
        category: "ui-design",
        link: "https://dribbble.com/shots/18718211-Ipusnas-app-redesign",
        img: "./img/img2.png",
        desc: `UI concept for the Ipusnas application to make it more attractive and easier for readers to use.`,
    },
    {
        id: 3,
        title: "Growcery App",
        category: "ui-design",
        img: "./img/img3.png",
        link: "https://dribbble.com/shots/18925799-Grocery-App-Detail-product-page",
        desc: `Inspired by GoFood, Growcery App is an application that makes daily online shopping easier.`,
    },
    {
        id: 4,
        title: "An- Naajiyah web design",
        category: "ui-design",
        img: "./img/img4.png",
        link: "https://dribbble.com/shots/17113314-Simple-landing-page",
        desc: `Landing page concept for TPA An-Naajiyah, a non-formal educational institution that educates students 
        to be able to read the Qur'an properly and correctly.`,
    },
    {
        id: 5,
        title: "Indilearn Website",
        category: "web-development",
        img: "./img/img5.png",
        link: "#",
        desc: `Indilearn is an information technology company that focuses on creating academic information 
        systems for campuses.`,
    },
    {
        id: 6,
        title: "Her Own Website",
        category: "web-development",
        img: "./img/img6.png",
        link: "#",
        desc: `For the first time, she built her own website by using HTML, CSS, and vanilla Javascript.`,
    }, 
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

//LOAD ITEMS
window.addEventListener('DOMContentLoaded', function(){
    displayWorkItems(work);
});

//FILTER ITEMS
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e){
    // console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;
    const workCategory = work.filter(function(workItem){
    // console.log(workItem.category);
    // return workItem;
    if (workItem.category === category){
        return workItem;
      }
    });
    // console.log(workCategory);
    if(category === 'all'){
      displayWorkItems(work); 
    }
    else{
      displayWorkItems(workCategory);
    }
  });
});

function displayWorkItems(workItems){
  let displayWork = workItems.map(function(item){
    return `<div class="work-item">
              <div class="item-info">
                <img src=${item.img} class="photo" style="width:100%">
                  <div class="item-text">
                    <h5><a href=${item.link}>${item.title}</a></h5>
                    <hr>
                    <p>${item.desc}</p>
                  </div>
              </div>
            </div>`;
  });
  displayWork = displayWork.join("");
  // console.log(displayWork);
  sectionCenter.innerHTML = displayWork;
}

//FOOTER
const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
//END FOOTER




