let searchText = "13";

function searchHandler(isShowAll) {
  loading(true);
  const searchField = document.getElementById("searchField");
  searchText = searchField.value;
  loadPhone(searchText, isShowAll);
}

const loading = (isLoading) => {
  const loading = document.getElementById("loading");
  if (isLoading) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
};

const loadPhone = async (searchText, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

loadPhone(searchText);
const displayPhones = (phones, isShowAll) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";

  const showAll = document.getElementById("showALLBtn");
  if (phones.length > 12 && !isShowAll) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-xl p-5`;
    phoneCard.innerHTML = `
                    <figure class="px-10 pt-10 pb-5">
                      <img src="${phone.image}" alt="phone" class="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <div class="card-actions">
                        <button onclick="showDetailsHandler('${phone.slug}')" class="btn btn-primary text-white hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">Show Details</button>
                      </div>
                    </div>

        `;
    phoneContainer.appendChild(phoneCard);
  });
  loading(false);
};

function showBtn() {
  searchHandler(true);
}

// Show Details
const showDetailsHandler = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();

  const phone = data.data;
  showPhoneDetails(phone);
};

// single phone details
const showPhoneDetails = (details) => {
  my_modal.showModal();

  const modelName = document.getElementById("detailsPhoneName");
  const brandName = document.getElementById("detailsBrand");
  const detailsSpec = document.getElementById("detailsSpec");
  const releaseDate = document.getElementById("releaseDate");
  const imageDiv = document.getElementById("imgContainer");

  // Image container styling
  imageDiv.innerHTML = `<img src="${details.image}" alt="Phone Image" class="rounded-lg shadow-lg mx-auto w-[50%] max-w-xs transition-transform duration-300 ease-in-out transform hover:scale-105">`;

  // Model name styling
  modelName.innerText = details.name;
  modelName.classList.add("text-2xl", "font-bold", "mt-4", "text-gray-800");

  // Brand name styling
  brandName.innerText = `Brand: ${details.brand}`;
  brandName.classList.add("text-lg", "text-gray-600", "mt-2");

  // Specifications styling
  const features = details.mainFeatures;
  let string = "";
  for (const key in features) {
    string += `📱 ${key.toUpperCase()} : ${features[key]}` + "\n";
  }
  detailsSpec.innerText = string;
  detailsSpec.classList.add(
    "text-sm",
    "text-start",
    "text-gray-700",
    "mt-4",
    "whitespace-pre-wrap"
  );

  // Release date styling
  releaseDate.innerText = details.releaseDate
    ? `Released: ${details.releaseDate}`
    : "Release date not available";
  releaseDate.classList.add(
    "text-sm",
    "text-gray-400",
    "text-start",
    "mt-2",
    "italic"
  );
};
