const viewMore = document.getElementById('view-more')
const viewMoreBtn = document.getElementById('view-more-btn')
let isViewed = false;

viewMoreBtn.addEventListener('click', function() {
    if (!isViewed) {
        viewMore.style.display = 'block'
        viewMoreBtn.textContent = "View less"
        isViewed = true
    } else if (isViewed){
        viewMore.style.display = 'none'
        viewMoreBtn.textContent = "View more"
        isViewed = false
    }
})