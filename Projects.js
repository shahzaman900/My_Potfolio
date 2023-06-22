const projects = [{
  id: 1,
  card: 'card1',
  image: './images/SnapshootPortfolio.svg',
  Projectname: 'Tonic',
  history: {
    proName: 'CANOPY',
    tech: 'Backend Dev',
    date: 2015,
  },
  disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  button: 'myBtn',
},
{
  id: 2,
  card: 'card2',
  image: './images/multiPostStories.svg',
  Projectname: 'Multi-Post',
  history: {
    proName: 'CANOPY',
    tech: 'Backend Dev',
    date: 2015,
  },
  disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  button: 'myBtn',
},
{
  id: 3,
  card: 'card3',
  image: './images/SnapshootPortfolio.svg',
  Projectname: 'Tonic',
  history: {
    proName: 'CANOPY',
    tech: 'Backend Dev',
    date: 2015,
  },
  disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  button: 'myBtn',
},
{
  id: 4,
  card: 'card4',
  image: './images/multiPostStories.svg',
  Projectname: 'MultiPost',
  history: {
    proName: 'CANOPY',
    tech: 'Backend Dev',
    date: 2015,
  },
  disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
  tags: {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
  },
  button: 'myBtn',
},
];

const section = document.getElementById('works');

const projectMethod = () => {
  projects.map((card) => {
    const project = document.createElement('div');
    project.classList.add('card_works');
    project.classList.add(card.card);
    project.innerHTML = `<img
              class="card_image "
              src=${card.image}
              alt="Tonic Project"
              />
              <div class="card_detail">
              <div class="card_title">
              <h2>${card.Projectname}</h2>
                <div class="card_history">
                  <div class="card_history_detail"><p>${card.history.proName}</p></div>
                <div>
                   <img src="./images/Counter.svg" alt="dot" />
                </div>
                <div class="card_history_detail">
                <p>${card.history.tech}</p>
                  </div>
                  <div>
                  <img src="./images/Counter.svg" alt="dot" />
                   </div>
                  <div class="card_history_detail"><p>${card.history.date}</p></div>
                </div>
              </div>
              <div class="card_discription">
              <p>${card.disc}</p>
              </div>
               <div class="card_tags">
                <div class="tag">
                 <span class="small">${card.tags.html}</span>
                 </div>
                  <div class="tag">
                      <span class="small">${card.tags.css}</span>
                 </div>
                 <div class="tag">
                         <span class="small">${card.tags.javascript}</span>
                 </div>
               </div>
              <div class="card_action">
              <button onclick="button(${card.id})" class="btn" id="btn" type="button">See Project</button>
              </div>
               </div>`;

    return section.appendChild(project);
  });
};

projectMethod();

const modal = document.getElementById('model');
const btn = document.getElementById('btn');

function button(id) {
  modal.style.display = 'flex';
  const card = projects.find((card) => card.id === id);
  const project = document.createElement('div');
  project.classList.add('modelsection');
  project.classList.add(card.card);
  project.innerHTML = `<div class="header">
             <div>
            <h2>${card.Projectname}</h2>
             <div class="card_historyy">
               <div class="card_history_detaill"><p>${card.history.proName}</p></div>
              <div>
                     <img src="./images/Counter.svg" alt="dot" />
              </div>
                 <div class="card_history_detail">
                <p>${card.history.tech}</p>
              </div>
                <div>
               <img src="./images/Counter.svg" alt="dot" />
               </div>
               <div class="card_history_detail"><p>${card.history.date}</p></div>
             </div>
             </div>
             <a href="#" id="modelcross" class="Menuicon"
            ><span
                    id="modelcrossIcon"
             style="color: black"
                  class="material-symbols-outlined"
              >
                  close
            </span>
          </a>
        </div>
     <div class="modelimage">
          <img
             class="card_imagee"
              src=${card.image}
           alt="Tonic Project"
           />
           </div>
           <div class="modeldisc">
            <div class="card_discription">
             <p>
                 ${card.disc}
               </p>
          </div>
            <div class="card_tags">
              <div class="modeltags">
               <div class="tag">
                 <span class="small">${card.tags.html}</span>
              </div>
              <div class="tag">
               <span class="small">${card.tags.css}</span>
              </div>
              <div class="tag">
                <span class="small"
                 >${card.tags.javascript}</span
                       >
              </div>
            </div>
            <hr class="hr">
            <div class="card_action">
                  <button class="modelbtn" type="button"> See lice <img style="height: 24px; width: 24px; margin-left: 6px;" src="./images/see_live.svg" alt=""></button>
                   <button class="modelbtn" type="button"> See source <img style="height: 24px; width: 24px; margin-left: 6px;" src="./images/see source.svg" alt=""> </button>
         </div>
          </div>
       </div>`;

  modal.appendChild(project);
  setTimeout(() => {
    const span = document.getElementById('modelcrossIcon');
    span.onclick = function shah() {
      modal.style.display = 'none';
      modal.removeChild(project);
    };
  }, 50);
}
let id;
const cardID = projects.find((card) => card.id === id);
btn.onclick = button(cardID.id);