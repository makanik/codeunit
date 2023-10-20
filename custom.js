
/*
// Get all elements with the class 'animated-element'
const animatedElements = document.querySelectorAll('.animated-element');

// Callback function for Intersection Observer
const revealElement = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal'); // Add a class to trigger the animation
            observer.unobserve(entry.target); // Unobserve the element after animation is triggered
        }
    });
};

// Create Intersection Observer for each animated element
animatedElements.forEach(element => {
    const observer = new IntersectionObserver(revealElement, {
        threshold: 0.5 // Percentage of the element that must be visible to trigger the callback
    });
    observer.observe(element);
});
*/


    



// JavaScript Library
/*
// Example usage
const sectorsData = [
    { title: "Education", description: "E-Learning platforms, online courses, digital classrooms, educational software" },
    // Add more sector objects here
];

// Call the function with element ID and sector data
displaySectors('your-container-id', sectorsData);

*/
function displaySectors(elementId, sectors) {
    const container = document.getElementById(elementId);

    if(container === null){
      return;
    }

    sectors.forEach(sector => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4');

        const sectorCardDiv = document.createElement('div');
        sectorCardDiv.classList.add('sector-card');
        sectorCardDiv.classList.add('animated-element');


        const titleElement = document.createElement('h1');
        titleElement.classList.add('sector-title');
        titleElement.classList.add('display-5');
        titleElement.classList.add('font-weight-bold');
        //titleElement.classList.add('animated-element');
        titleElement.textContent = sector.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('sector-description');
        descriptionElement.textContent = sector.description;

        sectorCardDiv.appendChild(titleElement);
        sectorCardDiv.appendChild(descriptionElement);
        colDiv.appendChild(sectorCardDiv);

        container.appendChild(colDiv);
    });
}



const sectors = [
  {
    title: "Education",
    description: "E-Learning platforms, online courses, digital classrooms, educational software"
  },
  {
    title: "Healthcare",
    description: "Electronic Health Records (EHR), telemedicine, medical imaging, healthcare information systems"
  },
  {
    title: "Business and Commerce",
    description: "Enterprise Resource Planning (ERP) systems, Customer Relationship Management (CRM) software, e-commerce platforms, digital marketing tools"
  },
  {
    title: "Finance",
    description: "Online banking, digital wallets, trading platforms, fraud detection systems, blockchain technology"
  },
  {
    title: "Telecommunications",
    description: "Mobile networks, VoIP (Voice over Internet Protocol), satellite communication, broadband internet services"
  },
  {
    title: "Entertainment",
    description: "Streaming services, video games, virtual reality (VR) and augmented reality (AR) applications, digital content creation tools"
  },
  {
    title: "Government and Public Services",
    description: "E-Government services, digital identification systems, online voting platforms, public safety and security systems"
  },
  {
    title: "Manufacturing",
    description: "Industrial automation, robotics, supply chain management software, Quality Control Systems (QCS)"
  },
  {
    title: "Transportation and Logistics",
    description: "GPS systems, fleet management software, route optimization algorithms, smart traffic management"
  },
  {
    title: "Agriculture",
    description: "Precision agriculture, farm management software, IoT (Internet of Things) sensors for monitoring crops and livestock"
  },
  {
    title: "Energy",
    description: "Smart grid systems, energy management software, renewable energy monitoring solutions"
  },
  {
    title: "Environmental Management",
    description: "Environmental monitoring systems, GIS (Geographic Information System) applications for mapping and analysis"
  },
  {
    title: "Research and Development",
    description: "Data analysis tools, simulation software, collaboration platforms for researchers"
  },
  {
    title: "Media and Journalism",
    description: "Digital publishing platforms, content management systems, social media analytics tools"
  },
  {
    title: "Human Resources",
    description: "HR management software, payroll systems, employee performance tracking tools"
  },
  {
    title: "Real Estate",
    description: "Property management software, online real estate platforms, virtual property tours"
  },
  {
    title: "Non-Profit and Social Services",
    description: "Donor management systems, fundraising platforms, social services management software"
  },
  {
    title: "Legal Services",
    description: "Case management software, legal research databases, online dispute resolution platforms"
  },
  {
    title: "Tourism and Hospitality",
    description: "Online booking platforms, hotel management software, travel planning applications"
  },
  {
    title: "Insurance",
    description: "Actuarial software, claims processing systems, fraud detection algorithms"
  },
  {
    title: "Retail",
    description: "Point of Sale (POS) systems, inventory management software, customer analytics tools"
  },
  {
    title: "Security",
    description: "Cybersecurity solutions, surveillance systems, access control systems"
  }
];




function displayVideos(elementId, videos) {
    const container = document.getElementById(elementId);
    var viewerElement=''

        if(container === null){
      return;
    }

    
    videos.forEach(video => {

      videoElement=''

        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4');

        const sectorCardDiv = document.createElement('div');
        sectorCardDiv.classList.add('sector-card');
        sectorCardDiv.classList.add('animated-element');
       
        colDiv.appendChild(sectorCardDiv);

        container.appendChild(colDiv);

        viewerElement = '<figure class="mbr-figure align-center container">        <div class="video-block" style="width: 80%;">            <div><iframe class="mbr-embedded-video" src="'+video.title+'" allowfullscreen="" style="height: 418.5px;" width="1280" height="720" frameborder="0"></iframe></div>         </div>    </figure>'
        sectorCardDiv.innerHTML += viewerElement;
        


})
  }

const videos = [
  {
    title: 'https://www.youtube-nocookie.com/embed/mVKAyw0xqxw?si=waDwTrJ74Coy-vyi',
    description: "E-Learning platforms, online courses, digital classrooms, educational software"
  },
  {
    title: 'https://www.youtube.com/embed/Mus_vwhTCq0?si=biY4Yvl9bA9I7t87',
    description: "E-Learning platforms, online courses, digital classrooms, educational software"
  },
  {
    title: 'https://www.youtube.com/embed/8PhdfcX9tG0?si=WoQpV4sEBfr95zzi',
    description: "E-Learning platforms, online courses, digital classrooms, educational software"
  },
  {
    title: 'https://www.youtube.com/embed/8PhdfcX9tG0?si=WoQpV4sEBfr95zzi',
    description: "E-Learning platforms, online courses, digital classrooms, educational software"
  }
]






const insights = [
  { title: "Microsoft-affiliated research finds flaws in GPT-4", url: "https://techcrunch.com/2023/10/17/microsoft-affiliated-research-finds-flaws-in-gtp-4/", source: "TechCrunch", date: "2023-10-17" },
  { title: "Digital Nigeria International Conference 2023", url: "https://digitalnigeria.gov.ng/#1#pre-register", source: "NITDA", date: "2023-10-17" },
  // Add more items as needed
];

let currentIndex = 0;
//const insightTitleElement = document.getElementById('insight-title');

function displayInsight(id) {
  const insightTitleElement = document.getElementById('insight-title');

  if(insightTitleElement===null){return;}

  const insight = insights[currentIndex];
  insightTitleElement.innerHTML = `<a href="${insight.url}" target="_blank" class=" bold_underlined ">${insight.title}</a> - ${insight.source} (${insight.date})`;
  fadeIn(insightTitleElement);
  setTimeout(() => {
    fadeOut(insightTitleElement);
    currentIndex = (currentIndex + 1) % insights.length;
    setTimeout(displayInsight, 1000); // 1s for fadeIn, 5s for display, 1s for fadeOut
  }, 8000); // Delay before displaying the next insight (1 second in this case)
}

function fadeIn(element) {
  element.style.transition = "opacity 1s ease-in-out";
  element.style.opacity = 1;
}

function fadeOut(element) {
  element.style.transition = "opacity 1s ease-in-out";
  element.style.opacity = 0;
}

//displayInsight();



















window.addEventListener("load", function() {
    // Code to be executed after all assets (including images, stylesheets, etc.) have been loaded
    //console.log("Page finished loading (load event)");
    // Add your code here
    displaySectors('sectors', sectors);

    displayVideos('videos', videos);

    displayInsight('insight-title',insights);

    revealOnScroll({
        selector: '.animated-element',
        threshold: 0.5,
        revealClass: 'reveal',
    });

});

