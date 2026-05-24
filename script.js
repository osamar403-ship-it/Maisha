const iconPaths = {
  drinks:
    '<path d="M8 2h8l-.7 8.7a4.3 4.3 0 0 1-8.6 0L6 2Z"/><path d="M5 22h14"/><path d="M10 14.5V22"/><path d="M14 14.5V22"/>',
  breakfast:
    '<path d="M4 11h16"/><path d="M6 11V8a6 6 0 0 1 12 0v3"/><path d="M7 11v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7"/>',
  bakery:
    '<path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z"/><path d="M8 12a4 4 0 0 1 8 0"/><path d="M12 4v16"/>',
  pizza:
    '<path d="M12 2 3 20l18-7L12 2Z"/><path d="M12 2c1.5 4.5 4.5 7.5 9 11"/><circle cx="11" cy="12" r="1"/><circle cx="15" cy="14" r="1"/>',
  pasta:
    '<path d="M4 13h16"/><path d="M6 13a6 6 0 0 0 12 0"/><path d="M8 10c1.4-1.2 2.6 1.2 4 0s2.6 1.2 4 0"/><path d="M9 17h6"/>',
  salads:
    '<path d="M5 12c4.5-7 10.5-7 14-6-1 6-5.5 10-12 10"/><path d="M5 12c3 0 5 1.2 7 4"/><path d="M4 20h16"/>',
};

const categories = [
  {
    id: "drinks",
    label: "Drinks",
    title: "Drinks Menu",
    image: "assets/drinks-section.png",
    subCategories: [
      {
        title: "Hot Drinks",
        items: [
          { name: "Espresso", price: "2/2.5 jd" },
          { name: "Americano", price: "3 jd" },
          { name: "Latte", price: "3 jd" },
          { name: "Cappuccino", price: "3 jd" },
          { name: "Flat White", price: "3 jd" },
          { name: "Spanish Latte", price: "3.5 jd" },
          { name: "Mocha", price: "3.5 jd" },
          { name: "Spicy Mocha", price: "3.5 jd" },
          { name: "Turkish Coffee", price: "2.5 jd" },
          { name: "Hot Chocolate", price: "3 jd" },
          { name: "Spicy Hot Chocolate", price: "3 jd" },
          { name: "Regular Tea", price: "2/4 jd" },
          { name: "Turtle Green Tea", price: "3 jd" },
          { name: "Golden Winter Latte", price: "3.5 jd" },
        ],
      },
      {
        title: "Cold Drinks",
        items: [
          { name: "Iced Americano", price: "3 jd" },
          { name: "Iced Latte", price: "3 jd" },
          { name: "Frappe", price: "3 jd" },
          { name: "Iced Spanish Latte", price: "3.5 jd" },
          { name: "Iced Mocha", price: "3.5 jd" },
          { name: "Milkshake", price: "3.5 jd" },
          { name: "Iced Tea", price: "3 jd" },
          { name: "Smoothies", price: "2/4 jd" },
          { name: "Lemonade", price: "2/4 jd" },
          { name: "Lavender Lemonade", price: "2/4 jd" },
          { name: "Basil Lemonade", price: "2/4 jd" },
          { name: "Pink Lemonade", price: "2/4 jd" },
          { name: "Karkade", price: "2/4 jd" },
          { name: "Fresh Juice", price: "3 jd" },
          { name: "Mojito", price: "3.5 jd" },
        ],
      },
      {
        title: "Add Ons",
        items: [
          { name: "Shot", price: "0.5 jd" },
          { name: "Non-Dairy Milk", price: "0.5 jd" },
          { name: "Flavor", price: "0.5 jd" },
        ],
      },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    title: "Breakfast Menu",
    image: "assets/breakfast-section.png",
    subCategories: [
      {
        title: "Toasties",
        items: [
          {
            name: "Walnut Toasts",
            price: "3.5/4 jd",
            description:
              "Walnut toasts with your choice of toppings: Halloumi & pesto, Eggs, Feta / Feta chilli, Labneh, Zait & zaatar, Cream cheese, Jam & butter, Peanut butter, Chocolate",
          },
        ],
      },
      {
        title: "Pancakes",
        items: [
          {
            name: "Fluffy Pancakes",
            price: "4 jd",
            description: "Fluffy pancakes with chocolate or maple syrup or honey & fruits",
          },
        ],
      },
      {
        title: "French Toast",
        items: [
          {
            name: "French Toast",
            price: "4 jd",
            description: "With our walnut bread and your choice of jam or maple syrup & fruits",
          },
        ],
      },
      {
        title: "Granola Jar",
        items: [
          {
            name: "Granola Jar",
            price: "3.5 jd",
            description:
              "One layer of our homemade granola topped with yogurt mixed with honey & fruit smoothie of your choice",
          },
        ],
      },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    title: "Bakery Menu",
    image: "assets/bakery-section.png",
    subCategories: [
      {
        title: "Breads",
        items: [
          { name: "Walnut Bread", price: "4.5 jd" },
          { name: "Seeded Sourdough", price: "3 jd" },
          { name: "Baguette", price: "1.5 jd" },
          { name: "Ciabatta", price: "2.25 jd" },
          { name: "Focaccia", price: "1.75 jd" },
        ],
      },
      {
        title: "Croissants",
        items: [
          { name: "Plain", price: "1.75 jd" },
          { name: "Thyme", price: "1.75 jd" },
          { name: "Cheese", price: "2.25 jd" },
          { name: "Chocolate", price: "2.25 jd" },
          { name: "Almond", price: "3.5 jd" },
          { name: "Turkey & Cheese", price: "3 jd" },
          { name: "Halloumi & Pesto", price: "3 jd" },
          { name: "Eggs / Eggs with Cheese", price: "3 jd" },
          { name: "Cookie Roll", price: "1.75 jd" },
          { name: "Bow Tie", price: "2.25 jd" },
        ],
      },
      {
        title: "Savory Bites",
        items: [
          { name: "Thyme & Cheese Sweet Dough", price: "0.6 jd" },
          { name: "Turkish Cheese Pastry", price: "0.75 jd" },
        ],
      },
      {
        title: "Sweet Pastries",
        items: [
          { name: "Chocolate Chip Sweet Dough", price: "0.6 jd" },
          { name: "Cinnamon Sweet Dough", price: "0.6 jd" },
          { name: "Chocolate Buns", price: "1.25 jd" },
          { name: "Date Cake", price: "3 jd" },
          { name: "Lemon Blueberry Cake", price: "2.25 jd" },
          { name: "Muffins", price: "2.25/2.75 jd" },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Cookies", price: "1.75 jd" },
          { name: "Tiramisu Jar", price: "3.5/4 jd" },
          { name: "Brownie", price: "2.25 jd" },
          { name: "Red Velvet Cake", price: "3.5 jd" },
          { name: "Swiss Roll Cake", price: "3.5 jd" },
          { name: "Espresso Cheesecake", price: "3.5 jd" },
        ],
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    title: "Italian Napoli Pizza",
    note: "Everyday from 4pm - 10pm",
    image: "assets/pizza-section.png",
    subCategories: [
      {
        title: "Our Pizzas",
        items: [
          {
            name: "Diavola Pizza",
            price: "5.5 jd",
            description: "With tomato sauce, Italian mozzarella, pepperoni",
          },
          {
            name: "Caprese Pizza",
            price: "5.5 jd",
            description: "With tomato sauce, Italian baby mozzarella, fresh basil leaves",
          },
          {
            name: "Funghi Pizza",
            price: "5.5 jd",
            description: "With tomato sauce, Italian mozzarella, mushrooms",
          },
          {
            name: "Pepperoni Pizza",
            price: "5.5 jd",
            description: "With tomato sauce, Italian mozzarella, pepperoni",
          },
          {
            name: "Vegetariana Pizza",
            price: "5.5 jd",
            description: "With tomato sauce, Italian mozzarella, seasonal vegetables",
          },
        ],
      },
      {
        title: "Add Ons",
        items: [
          { name: "Extra Cheese", price: "0.75 jd" },
          { name: "Extra Pepperoni", price: "0.75 jd" },
        ],
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    title: "Pasta Menu",
    note: "Everyday from 4pm - 10pm",
    image: "assets/pasta-section.png",
    subCategories: [
      {
        title: "Pasta",
        items: [
          {
            name: "Alfredo",
            price: "5 jd",
            description: "With creamy Alfredo sauce and pasta",
          },
          {
            name: "Marinara",
            price: "5 jd",
            description: "With tomato marinara sauce and pasta",
          },
          {
            name: "Rose",
            price: "5 jd",
            description: "With tomato cream sauce and pasta",
          },
          {
            name: "Pesto",
            price: "5 jd",
            description: "With basil pesto sauce and pasta",
          },
          {
            name: "Creamy Pesto",
            price: "5 jd",
            description: "With creamy basil pesto sauce and pasta",
          },
        ],
      },
      {
        title: "Add Ons",
        items: [
          { name: "Extra Mushroom", price: "Free" },
          { name: "Extra Chicken", price: "0.5 jd" },
        ],
      },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    title: "Salads Menu",
    note: "Everyday from 4pm - 10pm",
    image: "assets/salads-section.png",
    subCategories: [
      {
        title: "Salads",
        items: [
          {
            name: "Greek Salad",
            price: "3.5 jd",
            description: "With fresh vegetables, feta, olives, and dressing",
          },
          {
            name: "Date Salad",
            price: "3.5 jd",
            description: "With fresh greens, dates, and house dressing",
          },
        ],
      },
    ],
  },
];

const nav = document.querySelector("#categoryNav");
const menu = document.querySelector("#menuContent");

function icon(id) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[id]}</svg>`;
}

function renderNav() {
  nav.innerHTML = categories
    .map(
      (category, index) => `
        <button class="tab-button${index === 0 ? " is-active" : ""}" type="button" data-target="${category.id}">
          ${icon(category.id)}
          <span>${category.label}</span>
        </button>
      `
    )
    .join("");
}

function renderMenuItem(item) {
  const price = item.price ? `<span class="menu-item__price">${item.price}</span>` : "";
  const description = item.description ? `<p class="menu-item__description">${item.description}</p>` : "";

  return `
    <article class="menu-item">
      <div>
        <span class="menu-item__name">${item.name}</span>
        ${description}
      </div>
      ${price}
    </article>
  `;
}

function renderSubCategory(subCategory) {
  return `
    <section class="subcategory">
      <h3>${subCategory.title}</h3>
      <div class="item-list">
        ${subCategory.items.map(renderMenuItem).join("")}
      </div>
    </section>
  `;
}

function renderMenu() {
  menu.innerHTML = categories
    .map(
      (category) => `
        <section class="category reveal" id="${category.id}">
          <div class="category__cover">
            <img src="${category.image}" alt="${category.title}" loading="lazy" />
            <div class="category__shade"></div>
            <div class="category__title">
              <h2>${category.title}</h2>
              ${category.note ? `<p>${category.note}</p>` : ""}
            </div>
          </div>
          ${category.subCategories.map(renderSubCategory).join("")}
        </section>
      `
    )
    .join("");
}

function activateTab(id) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.target === id;
    button.classList.toggle("is-active", isActive);
  });
}

function bindNav() {
  nav.addEventListener("click", (event) => {
    const button = event.target.closest(".tab-button");
    if (!button) return;
    const target = document.getElementById(button.dataset.target);
    if (!target) return;

    activateTab(button.dataset.target);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bindObservers() {
  const categoryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activateTab(entry.target.id);
      });
    },
    { rootMargin: "-130px 0px -60% 0px", threshold: 0.1 }
  );

  document.querySelectorAll(".category").forEach((section, index) => {
    section.style.transitionDelay = `${index * 45}ms`;
    categoryObserver.observe(section);
  });
}

renderNav();
renderMenu();
bindNav();
bindObservers();
