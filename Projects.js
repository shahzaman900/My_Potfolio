let projects = [
  {
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
      javascript: 'JavaScript'
    }
  },
  {
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
      javascript: 'JavaScript'
    }
  },
  {
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
      javascript: 'JavaScript'
    }
  },
  {
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
      javascript: 'JavaScript'
    }
  }
]

const section = document.getElementById('works');

const projectMethod = () => {
  projects.map((card) => {
    const project = document.createElement('div');
    project.classList.add('card_works');
    project.classList.add(card.card);
    project.innerHTML= `<img
					class="card_image "
					src=${card.image}
					alt="Tonic Project"
				/>
				<div class="card_detail">
					<div class="card_title">
						<h2>${card.Projectname}</h2>
						<div class="card_history">
							<div class="card_history_detail"><p>${card.history['proName']}</p></div>
							<div>
								<img src="./images/Counter.svg" alt="dot" />
							</div>
							<div class="card_history_detail">
								<p>${card.history['tech']}</p>
							</div>
							<div>
								<img src="./images/Counter.svg" alt="dot" />
							</div>
							<div class="card_history_detail"><p>${card.history['date']}</p></div>
						</div>
					</div>
					<div class="card_discription">
						<p>${card.disc}</p>
					</div>
					<div class="card_tags">
						<div class="tag">
							<span class="small">${card.tags['html']}</span>
						</div>
						<div class="tag">
							<span class="small">${card.tags['css']}</span>
						</div>
						<div class="tag">
							<span class="small">${card.tags['javascript']}</span>
						</div>
					</div>
					<div class="card_action">
						<button type="button">See Project</button>
					</div>
				</div>`

    section.appendChild(project)
  })
}

projectMethod();
