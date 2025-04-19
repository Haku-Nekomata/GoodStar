

function handleSearch() {
    const query = document.getElementById("searchInput").value;
    if (query.trim() !== "") {
        window.location.href = `/Home/Search?keyword=${encodeURIComponent(query)}`;
    }
}
function closePopup() {
    const overlay = document.getElementById("popupOverlay");
    if (overlay) {
        overlay.style.display = "none";
    }
}

let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let autoSlide;

function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3000); // Chuyển ảnh mỗi 3 giây
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

document.querySelector(".next").addEventListener("click", function() {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

document.querySelector(".prev").addEventListener("click", function() {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

startAutoSlide(); // Bắt đầu tự động lướt ngay khi trang tải