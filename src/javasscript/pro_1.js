const vPresidentData = [
    {
      title: "Adeyemi Muteu",
      description: "President",
      image: "https://via.placeholder.com/300",
      link: "#"
    },
  
  ];
  
  // Select the card container
  const VpContainer = document.getElementById("pro");
  
  // Loop through the card data and create the cards
  for (let cardData of vPresidentData) {
    // Create a div element to hold the card
    const card = document.createElement("div");
    card.classList.add("mb-4", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700");
  
    // Create an img element for the card image
    const cardImage = document.createElement("img");
    cardImage.classList.add("rounded-t-lg", "w-full", "h-72");
    cardImage.setAttribute("src", cardData.image);
    cardImage.setAttribute("alt", cardData.title);
  
    // Create a div element for the card content
    const cardContent = document.createElement("div");
    cardContent.classList.add("p-5");
  
    // Create an h5 element for the card title
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-white");
    cardTitle.textContent = cardData.title;
  
    // Create a p element for the card description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("mb-3", "font-normal", "text-gray-700", "dark:text-gray-400");
    cardDescription.textContent = cardData.description;
  
    // Create an input element for the card button
    const cardButton = document.createElement("input");
    cardButton.classList.add("h-8", "w-8");
    cardButton.setAttribute("type", "radio");
    cardButton.setAttribute("name", "president");
    cardButton.setAttribute("id", cardData.title);
    cardButton.setAttribute("onclick", "disableOtherRadio()");
  
    // Create a label element for the card button
    const cardButtonLabel = document.createElement("label");
    cardButtonLabel.classList.add("radio");
    cardButtonLabel.setAttribute("for", cardData.title);
  
    // Append the card image, title, description, button and button label to the card content div
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardButton);
    cardContent.appendChild(cardButtonLabel);
  
    // Append the card image and content to the card div
    card.appendChild(cardImage);
    card.appendChild(cardContent);
  
    // Append the card to the card container
    pro_1.appendChild(card);
  }
  