document.getElementById('compare-btn').addEventListener('click', function() {
    const college1 = document.getElementById('college1').value;
    const college2 = document.getElementById('college2').value;

    if (college1 === college2) {
        alert("Please select two different colleges for comparison.");
        return;
    }

    // Expanded data for the colleges
    const collegeData = {
        "IIT Madras": {
            tuition: "₹8,58,000",
            programs: "B.Tech, M.Tech, Ph.D.",
            facilities: "Hostels, Libraries, Research Centers, Sports Complex",
            placement: "Top-tier companies with high salary packages",
            accreditation: "Accredited by NAAC with 'A+' grade",
            campusLife: "Vibrant campus with cultural and technical fests"
        },
        "Anna University": {
            tuition: "₹47,500",
            programs: "B.E., B.Tech, M.E., M.Tech, Ph.D.",
            facilities: "Hostels, Libraries, Laboratories, Sports Facilities",
            placement: "Strong placement record with diverse companies",
            accreditation: "Accredited by NAAC with 'A' grade",
            campusLife: "Active student clubs and annual technical fest"
        },
        "SRMIST": {
            tuition: "₹1,75,000 - ₹18,00,000",
            programs: "B.Tech, M.Tech, MBA, Ph.D.",
            facilities: "Hostels, Libraries, Research Centers, Sports Complex",
            placement: "High placement rate with international companies",
            accreditation: "Accredited by NAAC with 'A' grade",
            campusLife: "Dynamic campus with various cultural events"
        },
        "SSN College": {
            tuition: "₹2,20,000",
            programs: "B.E., B.Tech, M.E., MBA",
            facilities: "Hostels, Libraries, Laboratories, Sports Facilities",
            placement: "Good placement opportunities with reputed firms",
            accreditation: "Accredited by NAAC with 'A' grade",
            campusLife: "Engaging campus life with technical workshops"
        },
        "Sathyabama University": {
            tuition: "₹2,90,000 - ₹6,15,000",
            programs: "B.E., B.Tech, M.E., M.Tech, Ph.D.",
            facilities: "Hostels, Libraries, Research Centers, Sports Complex",
            placement: "Consistent placement record with top companies",
            accreditation: "Accredited by NAAC with 'A' grade",
            campusLife: "Lively campus with annual cultural and technical fests"
        }
    };

    // Update the comparison table with the selected colleges' data
    document.getElementById('college1-name').innerText = college1;
    document.getElementById('college2-name').innerText = college2;

    document.getElementById('tuition-college1').innerText = collegeData[college1].tuition;
    document.getElementById('tuition-college2').innerText = collegeData[college2].tuition;

    document.getElementById('programs-college1').innerText = collegeData[college1].programs;
    document.getElementById('programs-college2').innerText = collegeData[college2].programs;

    document.getElementById('facilities-college1').innerText = collegeData[college1].facilities;
    document.getElementById('facilities-college2').innerText = collegeData[college2].facilities;

    document.getElementById('placement-college1').innerText = collegeData[college1].placement;
    document.getElementById('placement-college2').innerText = collegeData[college2].placement;

    document.getElementById('accreditation-college1').innerText = collegeData[college1].accreditation;
    document.getElementById('accreditation-college2').innerText = collegeData[college2].accreditation;

    document.getElementById('campusLife-college1').innerText = collegeData[college1].campusLife;
    document.getElementById('campusLife-college2').innerText = collegeData[college2].campusLife;

    // Display the comparison result
    document.getElementById('comparison-result').classList.remove('hidden');
});
