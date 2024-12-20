document.addEventListener('DOMContentLoaded', function() {
    const collegesList = document.getElementById('collegesList');
    const colleges = Array.from(collegesList.getElementsByClassName('college-card'));
    const collegesPerPage = 5;
    let currentPage = 1;

    function loadColleges() {
        const start = (currentPage - 1) * collegesPerPage;
        const end = currentPage * collegesPerPage;
        const collegesToShow = colleges.slice(start, end);

        collegesToShow.forEach(college => {
            college.style.display = 'block';
        });

        if (end >= colleges.length) {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            currentPage++;
            loadColleges();
        }
    }

    // Initialize: hide all colleges and load the first set
    colleges.forEach(college => {
        college.style.display = 'none';
    });
    loadColleges();

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
});
