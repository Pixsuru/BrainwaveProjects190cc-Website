// Gallery 
const totalImages = 100;
const imagesFolderPath = 'Gallery/';
const imagesExtension = '.jpg';

const gallery = document.querySelector('.gallery');
const paginationContainer = document.querySelector('.pagination');

const imagesPerPage = 20;
let currentPage = 1;

// Function to create image elements for the gallery
function loadImages() {
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `${imagesFolderPath}image${i}${imagesExtension}`;
        img.classList.add('gallery-img');
        gallery.appendChild(img);
    }
}

// Function to show a specific page of images
function showPage(page) {
    const images = document.querySelectorAll('.gallery-img');
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = Math.min(startIndex + imagesPerPage, images.length);

    images.forEach((img, index) => {
        img.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });

    updatePagination(page, images.length);
    
    // Scroll to top of the page when changing pages
    window.scrollTo(0, 0);
}

// Pagination buttons
function updatePagination(page, totalImages) {
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalImages / imagesPerPage);

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Prev';
    prevBtn.classList.add('prev-btn');
    prevBtn.disabled = page === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Numbered buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageNumberBtn = document.createElement('button');
        pageNumberBtn.textContent = i;
        pageNumberBtn.classList.add('page-number');
        if (i === page) {
            pageNumberBtn.classList.add('active');
        }
        pageNumberBtn.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
        });
        paginationContainer.appendChild(pageNumberBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.classList.add('next-btn');
    nextBtn.disabled = page === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
    paginationContainer.appendChild(nextBtn);
}

// Load images
loadImages();
showPage(currentPage);
