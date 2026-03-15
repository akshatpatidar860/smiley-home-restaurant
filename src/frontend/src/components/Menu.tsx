import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { MenuItem } from "../backend.d";
import { Category, useMenuByCategory } from "../hooks/useQueries";

const CATEGORIES = [
  { key: Category.fastFood, label: "Fast Food", emoji: "🍔" },
  { key: Category.tandoori, label: "Tandoori", emoji: "🔥" },
  { key: Category.sandwich, label: "Sandwiches", emoji: "🥪" },
  { key: Category.friesSnacks, label: "Fries & Snacks", emoji: "🍟" },
  { key: Category.soup, label: "Soups", emoji: "🍜" },
  { key: Category.chaat, label: "Chaat", emoji: "🌽" },
];

const FALLBACK_ITEMS: Record<Category, MenuItem[]> = {
  [Category.fastFood]: [
    {
      name: "Vada Pav",
      description:
        "Classic Mumbai street food — spiced potato fritter in a soft bun",
      available: true,
      category: Category.fastFood,
      price: BigInt(3000),
    },
    {
      name: "Pav Bhaji",
      description: "Buttery spiced vegetable curry served with toasted pav",
      available: true,
      category: Category.fastFood,
      price: BigInt(8000),
    },
    {
      name: "Veg Burger",
      description: "Crispy veggie patty with fresh veggies in a sesame bun",
      available: true,
      category: Category.fastFood,
      price: BigInt(7000),
    },
    {
      name: "Paneer Frankie Roll",
      description:
        "Soft chapati rolled with spiced paneer and fresh vegetables",
      available: true,
      category: Category.fastFood,
      price: BigInt(6000),
    },
    {
      name: "Aloo Tikki",
      description: "Crispy spiced potato patties with tangy chutneys",
      available: true,
      category: Category.fastFood,
      price: BigInt(4000),
    },
    {
      name: "Cheese Veg Burger",
      description: "Classic veg burger loaded with melted cheese",
      available: true,
      category: Category.fastFood,
      price: BigInt(9000),
    },
  ],
  [Category.tandoori]: [
    {
      name: "Paneer Tikka",
      description: "Marinated paneer cubes grilled to perfection in tandoor",
      available: true,
      category: Category.tandoori,
      price: BigInt(16000),
    },
    {
      name: "Tandoori Paneer Malai",
      description: "Creamy white paneer tikka with mild aromatic spices",
      available: true,
      category: Category.tandoori,
      price: BigInt(18000),
    },
    {
      name: "Veg Seekh Kebab",
      description: "Seasoned vegetable kebab grilled on skewer in tandoor",
      available: true,
      category: Category.tandoori,
      price: BigInt(14000),
    },
    {
      name: "Tandoori Roti",
      description: "Whole wheat flatbread baked in clay oven",
      available: true,
      category: Category.tandoori,
      price: BigInt(1500),
    },
    {
      name: "Paneer Tikka Masala Skewer",
      description: "Paneer skewer coated with rich tandoori masala",
      available: true,
      category: Category.tandoori,
      price: BigInt(17000),
    },
    {
      name: "Mushroom Tikka",
      description: "Juicy mushrooms marinated and grilled in tandoor",
      available: true,
      category: Category.tandoori,
      price: BigInt(15000),
    },
  ],
  [Category.sandwich]: [
    {
      name: "Grilled Veg Sandwich",
      description:
        "Toasted sandwich with seasoned vegetables and melted cheese",
      available: true,
      category: Category.sandwich,
      price: BigInt(6000),
    },
    {
      name: "Club Sandwich",
      description: "Triple-decker toasted sandwich with fresh vegetables",
      available: true,
      category: Category.sandwich,
      price: BigInt(10000),
    },
    {
      name: "Paneer Sandwich",
      description: "Soft paneer with herbs and spices in toasted bread",
      available: true,
      category: Category.sandwich,
      price: BigInt(8000),
    },
    {
      name: "Corn Cheese Sandwich",
      description: "Sweet corn and melted cheese in golden toasted bread",
      available: true,
      category: Category.sandwich,
      price: BigInt(7000),
    },
    {
      name: "Bombay Sandwich",
      description: "Mumbai-style layered sandwich with green chutney",
      available: true,
      category: Category.sandwich,
      price: BigInt(5000),
    },
    {
      name: "Garlic Bread Sandwich",
      description: "Crispy garlic butter bread with herbs and cheese",
      available: true,
      category: Category.sandwich,
      price: BigInt(8000),
    },
  ],
  [Category.friesSnacks]: [
    {
      name: "Masala Fries",
      description: "Crispy fries tossed with chaat masala and coriander",
      available: true,
      category: Category.friesSnacks,
      price: BigInt(5000),
    },
    {
      name: "Cheese Fries",
      description: "Golden fries topped with generous melted cheese sauce",
      available: true,
      category: Category.friesSnacks,
      price: BigInt(7000),
    },
    {
      name: "Samosa (2 pcs)",
      description: "Crispy pastry filled with spiced potatoes and peas",
      available: true,
      category: Category.friesSnacks,
      price: BigInt(2000),
    },
    {
      name: "Paneer Pakora",
      description: "Soft paneer pieces dipped in spiced chickpea batter",
      available: true,
      category: Category.friesSnacks,
      price: BigInt(9000),
    },
    {
      name: "Onion Bhaji",
      description: "Crispy spiced onion fritters, a classic Indian snack",
      available: true,
      category: Category.friesSnacks,
      price: BigInt(5000),
    },
    {
      name: "Mix Pakora Basket",
      description: "Assortment of crispy fried fritters for sharing",
      available: true,
      category: Category.friesSnacks,
      price: BigInt(12000),
    },
  ],
  [Category.soup]: [
    {
      name: "Tomato Soup",
      description: "Rich creamy tomato soup garnished with fresh cream",
      available: true,
      category: Category.soup,
      price: BigInt(7000),
    },
    {
      name: "Sweet Corn Soup",
      description: "Thick comforting soup with sweet corn kernels",
      available: true,
      category: Category.soup,
      price: BigInt(8000),
    },
    {
      name: "Mushroom Soup",
      description: "Earthy creamy mushroom soup with herbs",
      available: true,
      category: Category.soup,
      price: BigInt(9000),
    },
    {
      name: "Hot & Sour Soup",
      description: "Indo-Chinese style bold and tangy broth with vegetables",
      available: true,
      category: Category.soup,
      price: BigInt(8000),
    },
    {
      name: "Manchow Soup",
      description: "Spicy broth topped with crispy fried noodles",
      available: true,
      category: Category.soup,
      price: BigInt(8000),
    },
    {
      name: "Lemon Coriander Soup",
      description: "Light refreshing soup with fresh lemon and coriander",
      available: true,
      category: Category.soup,
      price: BigInt(7000),
    },
  ],
  [Category.chaat]: [
    {
      name: "Pani Puri (6 pcs)",
      description: "Crispy hollow puris filled with spiced tamarind water",
      available: true,
      category: Category.chaat,
      price: BigInt(4000),
    },
    {
      name: "Bhel Puri",
      description: "Puffed rice tossed with vegetables, sev, and chutneys",
      available: true,
      category: Category.chaat,
      price: BigInt(5000),
    },
    {
      name: "Dahi Puri",
      description: "Puris filled with creamy yogurt, chutneys, and sev",
      available: true,
      category: Category.chaat,
      price: BigInt(6000),
    },
    {
      name: "Sev Puri",
      description: "Crispy puris topped with potatoes and crunchy sev",
      available: true,
      category: Category.chaat,
      price: BigInt(5000),
    },
    {
      name: "Ragda Pattice",
      description: "Crispy potato patties with white peas curry and chutneys",
      available: true,
      category: Category.chaat,
      price: BigInt(7000),
    },
    {
      name: "Aloo Chaat",
      description: "Crispy potatoes tossed with spices and tangy chutneys",
      available: true,
      category: Category.chaat,
      price: BigInt(5000),
    },
  ],
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const price = Number(item.price) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      data-ocid={`menu.item.${index + 1}`}
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-warm transition-all hover:-translate-y-1 group"
    >
      {/* Photo Coming Soon placeholder */}
      <div className="relative h-44 bg-amber-50 border-b-2 border-dashed border-amber-200 flex flex-col items-center justify-center gap-1">
        <span className="text-3xl">📸</span>
        <p className="text-amber-600 font-semibold text-xs">
          Photo Coming Soon
        </p>
        {!item.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Unavailable
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-display text-base font-semibold text-foreground mb-1 line-clamp-1">
          {item.name}
        </h4>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-amber-700 text-lg">₹{price}</span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
            Pure Veg
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryMenuContent({ category }: { category: Category }) {
  const { data: backendItems, isLoading } = useMenuByCategory(category);
  const items =
    backendItems && backendItems.length > 0
      ? backendItems
      : FALLBACK_ITEMS[category];

  if (isLoading) {
    return (
      <div
        data-ocid="menu.loading_state"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        {["sk0", "sk1", "sk2", "sk3", "sk4", "sk5"].map((sk) => (
          <div key={sk} className="bg-muted animate-pulse rounded-2xl h-64" />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      key={category}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      {items.map((item, i) => (
        <MenuCard key={item.name} item={item} index={i} />
      ))}
    </motion.div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>(
    Category.fastFood,
  );

  return (
    <section id="menu" className="section-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Our Menu
          </h2>
          <p className="text-muted-foreground text-lg">
            Fresh, pure vegetarian food made with love
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.key}
              data-ocid="menu.tab"
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? "bg-amber-700 text-white shadow-warm"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              }`}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <CategoryMenuContent key={activeCategory} category={activeCategory} />
        </AnimatePresence>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/919981716485"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="menu.primary_button"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 text-base transition-all hover:scale-105 shadow-warm"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
