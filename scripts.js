// Example project data with content array, supporting text and images in any order
const projects = {
  project1: {
    title: "GRID",
    content: [
      { type: "image", src: "/Users/granj/Downloads/_MG_8499.jpg", alt: "Image 1 description" },
      { type: "text", text: "This is a description between the two images." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8497.jpg", alt: "Image 2 description" }
    ]
  },
  project2: {
    title: "Hofhaus",
    content: [
      { type: "text", text: "This is a description. Maybe." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8500.jpg", alt: "Image 3 description" },
      { type: "text", text: "This text explains the content between images." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8501.jpg", alt: "Image 4 description" }
    ]
  },
  project3: {
    title: "Alltagshaus",
    content: [
      { type: "text", text: "This is a description. Maybe. I know it." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8500.jpg", alt: "Image 3 description" },
      { type: "text", text: "This text explains the content between images." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8501.jpg", alt: "Image 4 description" }
    ]
  },
  project4: {
    title: "Vertical Porosity",
    content: [
      { type: "text", text: "This is a description. Maybe. I know it." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8500.jpg", alt: "Image 3 description" },
      { type: "text", text: "This text explains the content between images." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8501.jpg", alt: "Image 4 description" }
    ]
  },
  project5: {
    title: "Climate Change Center",
    content: [
      { type: "text", text: "This is a description. Maybe. I know it." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8500.jpg", alt: "Image 3 description" },
      { type: "text", text: "This text explains the content between images." },
      { type: "image", src: "/Users/granj/Downloads/_MG_8501.jpg", alt: "Image 4 description" },
      { type: "image", src: "/Users/granj/Downloads/_MG_8500.jpg", alt: "Image 5 description" },
    ]
  }
  // Add more projects as needed
};

document.addEventListener("DOMContentLoaded", function() {
  // Select the title element
  const leftColumnTitle = document.getElementById("leftColumnTitle");

  // Get the height of the title element
  const titleHeight = leftColumnTitle.offsetHeight;

  // Update the CSS variable with the title height
  document.documentElement.style.setProperty('--title-height', `${titleHeight}px`);
});

// Function to display project details in the right column and reset scroll to top
function showProject(projectId) {
  const detailsContent = document.getElementById("details-content");

  // Clear current content
  detailsContent.innerHTML = "";

  // Check if the project exists in the data
  if (projects[projectId]) {
    const project = projects[projectId];

    // Create and add title
    const title = document.createElement("h3");
    title.textContent = project.title;
    detailsContent.appendChild(title);

    // Loop through the content array and add elements based on their type
    project.content.forEach(item => {
      if (item.type === "image") {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt || project.title; // Use alt text if provided, otherwise default to title
        img.style.width = "100%";
        img.style.marginTop = "2px";
        img.classList.add("modal-trigger"); // Optional: if you want modal functionality
        detailsContent.appendChild(img);
      } else if (item.type === "text") {
        const text = document.createElement("p");
        text.textContent = item.text;
        text.style.margin = "2px 0";
        detailsContent.appendChild(text);
      }
    });
  } else {
    detailsContent.innerHTML = "<p>Project details not found.</p>";
  }

  // Scroll the right column (details) to the top immediately
  const rightColumn = document.querySelector('.right');
  if (rightColumn) {
    rightColumn.scrollTop = 0; // Instantly jump to the top
  }
}

// Function to reset project details to default message and scroll back to top
function resetProjectDetails() {
  // Reset the project details content
  const detailsContent = document.getElementById("details-content");
  detailsContent.innerHTML = "<p>Select a project to view details.</p>";

  // Scroll the middle column back to the top
  const middleColumn = document.querySelector('.middle');
  if (middleColumn) {
    middleColumn.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }
}

// Modal functionality
function openModal(imageElement) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  modalImage.src = imageElement.src; // Set modal image source to the clicked image
  modal.style.display = "flex"; // Show the modal
}

function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none"; // Hide the modal
}

// Event listener to open the modal only for images in #project-details with 'modal-trigger' class
document.getElementById("project-details").addEventListener("click", function (event) {
  if (event.target.classList.contains("modal-trigger")) {
    openModal(event.target);
  }
});

// Left column scroll to Top
function scrollToTopLeft() {
  // Select the left column
  const leftColumn = document.querySelector('.left');
  if (leftColumn) {
    // Scroll the left column back to the top
    leftColumn.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }
}
function scrollToTopRight() {
  // Select the right column
  const rightColumn = document.querySelector('.right');
  if (rightColumn) {
    // Scroll the right column back to the top
    rightColumn.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }
}