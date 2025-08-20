const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const links = document.querySelectorAll("#menu ul li a");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	menu.classList.toggle("active");
});

links.forEach(link => {
	link.addEventListener("click", () => {
		hamburger.classList.remove("active");
		menu.classList.remove("active");
	});
});

const openModal = imageSrc => {
	const modal = document.querySelector("#modal");
	const modalImg = document.querySelector("#modalImage");
	modal.style.opacity = 100;
	modal.style.scale = 1;
	modal.style.zIndex = 2000;
	modalImg.style.scale = 1;
	modalImg.src = imageSrc;
	document.body.style.overflow = "hidden";
};

const closeModal = () => {
	const modal = document.querySelector("#modal");
	const modalImg = document.querySelector("#modalImage");
	modal.style.opacity = 0;
	modal.style.scale = 0;
	modal.style.zIndex = 1;
	modalImg.style.scale = 0;
	document.body.style.overflow = "auto";
};

const imgModals = document.querySelectorAll(".image-modal");
imgModals.forEach(img => {
	img.addEventListener("click", () => {
		openModal(img.src);
	});
});

function toggleAccordion(header) {
	const content = header.nextElementSibling;
	const icon = header.querySelector("i");

	document.querySelectorAll(".accordion-content").forEach(item => {
		if (item !== content) {
			item.classList.remove("active");
			item.previousElementSibling
				.querySelector("i")
				.classList.remove("fa-minus");
			item.previousElementSibling.querySelector("i").classList.add("fa-plus");
		}
	});

	content.classList.toggle("active");
	if (content.classList.contains("active")) {
		icon.classList.remove("fa-plus");
		icon.classList.add("fa-minus");
	} else {
		icon.classList.remove("fa-minus");
		icon.classList.add("fa-plus");
	}
}

const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach(header => {
	header.addEventListener("click", () => {
		toggleAccordion(header);
	});
});

const observerOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("visible");
		}
	});
}, observerOptions);

document.querySelectorAll(".fade-in").forEach(e => {
	observer.observe(e);
});

document.querySelector("#modalImage").addEventListener("click", e => {
	if (e.target === this) {
		closeModal();
	}
});

document.addEventListener("keydown", e => {
	if (e.key === "Escape") {
		closeModal();
	}
});

document
	.querySelector("#modal span")
	.addEventListener("click", () => closeModal());
