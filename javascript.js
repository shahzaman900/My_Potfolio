const menuIcon = document.getElementById('menu');
const menuItems = document.querySelectorAll('li > a');

document.getElementById('icon').onclick = () => {
	menuIcon.style.display =
		menuIcon.style.display === 'flex' ? 'none' : 'flex';
};

document.getElementById('crossIcon').onclick = () => {
	menuIcon.style.display =
		menuIcon.style.display === 'flex' ? 'none' : 'flex';
};

menuItems.forEach((individualSection) => {
	individualSection.onclick = () => {
		menuIcon.style.display =
			menuIcon.style.display === 'flex' ? 'none' : 'flex';
	};
});

function scrollSection(event) {
	event.preventDefault();
	const sectionId = this.getAttribute('href');
	const targetedSection = document.querySelector(sectionId);
	targetedSection.scrollIntoView({ behavior: 'smooth' });
}
