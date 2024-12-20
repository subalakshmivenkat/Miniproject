document.getElementById('compare-btn').addEventListener('click', function() {
    const college1 = document.getElementById('college1').value;
    const college2 = document.getElementById('college2').value;

    if (college1 === college2) {
        alert("Please select two different colleges for comparison.");
        return;
    }

    // Example data for the colleges (in a real app, this would come from your database or API)
    const collegeData = {
        "IIT Madras": {
            tuition: "₹8,58,000",
            programs: "B.Tech, M.Tech, Ph.D.",
            facilities: "Hostels, Libraries, Research Centers, Sports Complex"
        },
        "Anna University": {
            tuition: "₹47,500",
            programs: "B.E., B.Tech, M.E., M.Tech, Ph.D.",
            facilities: "Hostels, Libraries, Laboratories, Sports Facilities"
        },
        "SRMIST": {
            tuition: "₹1,75,000 - ₹18,00,000",
            programs: "B.Tech, M.Tech, MBA, Ph.D.",
            facilities: "Hostels, Libraries, Research Centers, Sports Complex"
        },
        "SSN College": {
            tuition: "₹2,20,000",
            programs: "B.E., B.Tech, M.E., MBA",
            facilities: "Hostels, Libraries, Laboratories, Sports Facilities"
        },
        "Sathyabama University": {
            tuition: "₹2,90,000 - ₹6,15,000",
            programs: "B.E., B.Tech, M.E., M.Tech, Ph.D.",
            facilities: "Hostels, Libraries, Research Centers, Sports Complex"
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
