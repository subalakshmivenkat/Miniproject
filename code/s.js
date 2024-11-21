document.getElementById('compare-btn').addEventListener('click', function() {
    const college1 = document.getElementById('college1').value;
    const college2 = document.getElementById('college2').value;

    if (college1 === college2) {
        alert("Please select two different colleges for comparison.");
        return;
    }

    // Example data for the colleges (in a real app, this would come from your database or API)
    const collegeData = {
        "College A": {
            tuition: "$30,000",
            programs: "Engineering, Business, Arts",
            facilities: "Library, Gym, Cafeteria"
        },
        "College B": {
            tuition: "$25,000",
            programs: "Science, Arts, Design",
            facilities: "Lab, Sports Complex, Library"
        },
        "College C": {
            tuition: "$35,000",
            programs: "Business, Law, Computer Science",
            facilities: "Library, Stadium, Dining Hall"
        }
    };

    document.getElementById('college1-name').innerText = college1;
    document.getElementById('college2-name').innerText = college2;

    document.getElementById('tuition-college1').innerText = collegeData[college1].tuition;
    document.getElementById('tuition-college2').innerText = collegeData[college2].tuition;

    document.getElementById('programs-college1').innerText = collegeData[college1].programs;
    document.getElementById('programs-college2').innerText = collegeData[college2].programs;

    document.getElementById('facilities-college1').innerText = collegeData[college1].facilities;
    document.getElementById('facilities-college2').innerText = collegeData[college2].facilities;

    document.getElementById('comparison-result').classList.remove('hidden');
});
