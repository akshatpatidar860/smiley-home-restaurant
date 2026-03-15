import Array "mo:core/Array";

actor {
  type Category = {
    #fastFood;
    #tandoori;
    #sandwich;
    #friesSnacks;
    #soup;
    #chaat;
  };

  type MenuItem = {
    name : Text;
    description : Text;
    price : Nat;
    available : Bool;
    category : Category;
  };

  type Review = {
    customerName : Text;
    rating : Nat;
    comment : Text;
    date : Text;
  };

  type RestaurantInfo = {
    instagram : Text;
    whatsapp : Text;
    email : Text;
    address : Text;
    openingHours : Text;
    phone : Text;
  };

  public query ({ caller }) func getMenuByCategory(category : Category) : async [MenuItem] {
    menu.filter(func(item) { item.category == category });
  };

  public query ({ caller }) func getAllReviews() : async [Review] {
    reviews;
  };

  public query ({ caller }) func getRestaurantInfo() : async RestaurantInfo {
    restaurantInfo;
  };

  let menu = [
    // Fast Food
    {
      name = "Vada Pav";
      description = "Classic Mumbai-style vada pav with spicy chutney";
      price = 3000;
      available = true;
      category = #fastFood;
    },
    {
      name = "Pav Bhaji";
      description = "Rich and buttery vegetable curry served with pav";
      price = 8000;
      available = true;
      category = #fastFood;
    },
    {
      name = "Veg Burger";
      description = "Crispy veggie patty with fresh veggies and sauces";
      price = 7000;
      available = true;
      category = #fastFood;
    },
    {
      name = "Paneer Frankie Roll";
      description = "Soft roti roll stuffed with spicy paneer filling";
      price = 6000;
      available = true;
      category = #fastFood;
    },
    {
      name = "Aloo Tikki";
      description = "Golden fried potato patties with chutneys";
      price = 4000;
      available = true;
      category = #fastFood;
    },
    {
      name = "Cheese Veg Burger";
      description = "Veg burger with a generous layer of cheese";
      price = 9000;
      available = true;
      category = #fastFood;
    },
    // Tandoori
    {
      name = "Paneer Tikka";
      description = "Marinated paneer cubes grilled to perfection";
      price = 16000;
      available = true;
      category = #tandoori;
    },
    {
      name = "Tandoori Paneer Malai";
      description = "Creamy paneer grilled in a tandoor";
      price = 18000;
      available = true;
      category = #tandoori;
    },
    {
      name = "Veg Seekh Kebab";
      description = "Spicy vegetable kebabs cooked on skewers";
      price = 14000;
      available = true;
      category = #tandoori;
    },
    {
      name = "Tandoori Roti";
      description = "Classic Indian bread baked in a tandoor";
      price = 1500;
      available = true;
      category = #tandoori;
    },
    {
      name = "Paneer Tikka Masala Skewer";
      description = "Spicy paneer tikka on skewers";
      price = 17000;
      available = true;
      category = #tandoori;
    },
    {
      name = "Mushroom Tikka";
      description = "Grilled mushrooms in spicy marinade";
      price = 15000;
      available = true;
      category = #tandoori;
    },
    // Sandwich
    {
      name = "Grilled Veg Sandwich";
      description = "Veggie-packed sandwich with grilled bread";
      price = 6000;
      available = true;
      category = #sandwich;
    },
    {
      name = "Club Sandwich";
      description = "Triple layer sandwich with veggies and cheese";
      price = 10000;
      available = true;
      category = #sandwich;
    },
    {
      name = "Paneer Sandwich";
      description = "Sandwich stuffed with spicy paneer filling";
      price = 8000;
      available = true;
      category = #sandwich;
    },
    {
      name = "Corn Cheese Sandwich";
      description = "Creamy corn and cheese sandwich, grilled";
      price = 7000;
      available = true;
      category = #sandwich;
    },
    {
      name = "Bombay Sandwich";
      description = "Spicy Mumbai-style layered sandwich";
      price = 5000;
      available = true;
      category = #sandwich;
    },
    {
      name = "Garlic Bread Sandwich";
      description = "Sandwich with garlic butter bread and fillings";
      price = 8000;
      available = true;
      category = #sandwich;
    },
    // Fries & Snacks
    {
      name = "Masala Fries";
      description = "Crispy fries tossed in Indian spices";
      price = 5000;
      available = true;
      category = #friesSnacks;
    },
    {
      name = "Cheese Fries";
      description = "Fries loaded with cheesy goodness";
      price = 7000;
      available = true;
      category = #friesSnacks;
    },
    {
      name = "Samosa (2 pcs)";
      description = "Classic potato-stuffed crispy pastry";
      price = 2000;
      available = true;
      category = #friesSnacks;
    },
    {
      name = "Paneer Pakora";
      description = "Battered and fried paneer snack";
      price = 9000;
      available = true;
      category = #friesSnacks;
    },
    {
      name = "Onion Bhaji";
      description = "Spicy battered and fried onion fritters";
      price = 5000;
      available = true;
      category = #friesSnacks;
    },
    {
      name = "Mix Pakora Basket";
      description = "Assorted vegetable fritters";
      price = 12000;
      available = true;
      category = #friesSnacks;
    },
    // Soup
    {
      name = "Tomato Soup";
      description = "Classic creamy tomato soup";
      price = 7000;
      available = true;
      category = #soup;
    },
    {
      name = "Sweet Corn Soup";
      description = "Savory Chinese-style corn soup";
      price = 8000;
      available = true;
      category = #soup;
    },
    {
      name = "Mushroom Soup";
      description = "Warm and hearty mushroom soup";
      price = 9000;
      available = true;
      category = #soup;
    },
    {
      name = "Hot & Sour Soup";
      description = "Spicy and tangy Chinese-style soup";
      price = 8000;
      available = true;
      category = #soup;
    },
    {
      name = "Manchow Soup";
      description = "Spicy Indo-Chinese vegetable soup";
      price = 8000;
      available = true;
      category = #soup;
    },
    {
      name = "Lemon Coriander Soup";
      description = "Fresh and zesty clear soup";
      price = 7000;
      available = true;
      category = #soup;
    },
    // Chaat
    {
      name = "Pani Puri (6 pcs)";
      description = "Crispy puris filled with spicy water";
      price = 4000;
      available = true;
      category = #chaat;
    },
    {
      name = "Bhel Puri";
      description = "Mixed puffed rice with chutneys and veggies";
      price = 5000;
      available = true;
      category = #chaat;
    },
    {
      name = "Dahi Puri";
      description = "Puris stuffed with yoghurt and chutneys";
      price = 6000;
      available = true;
      category = #chaat;
    },
    {
      name = "Sev Puri";
      description = "Puris topped with spicy potato & sev";
      price = 5000;
      available = true;
      category = #chaat;
    },
    {
      name = "Ragda Pattice";
      description = "Potato patties in spicy chickpea curry";
      price = 7000;
      available = true;
      category = #chaat;
    },
    {
      name = "Aloo Chaat";
      description = "Tangy and spicy potato chaat";
      price = 5000;
      available = true;
      category = #chaat;
    },
  ];

  let reviews = [
    {
      customerName = "Rakesh Malviya";
      rating = 5;
      comment = "Bahut accha khana mila yahan. Paneer tikka bilkul fresh tha...";
      date = "2026-01-18";
    },
    {
      customerName = "Sunita Rathore";
      rating = 4;
      comment = "Cheese grilled sandwich bachon ko bahut pasand aayi...";
      date = "2026-01-25";
    },
    {
      customerName = "Ankit Chouhan";
      rating = 5;
      comment = "Masala chaap aur afghani chaap dono try kiye...";
      date = "2026-02-03";
    },
    {
      customerName = "Pooja Dangi";
      rating = 4;
      comment = "Dahi puri aur cafe special sandwich dono fresh the...";
      date = "2026-02-11";
    },
    {
      customerName = "Nikhil Patidar";
      rating = 5;
      comment = "Pehli baar gaya tha, mushroom tikka ne dil jeet liya...";
      date = "2026-02-19";
    },
    {
      customerName = "Kavita Sharma";
      rating = 4;
      comment = "Pure veg restaurant jo genuinely tasty khana de...";
      date = "2026-02-28";
    },
    {
      customerName = "Deepak Patidar";
      rating = 5;
      comment = "Smiley mein khana khaya pehli baar...";
      date = "2026-03-05";
    },
    {
      customerName = "Priya Verma";
      rating = 4;
      comment = "Ghar jaisa swad milta hai yahan...";
      date = "2026-03-10";
    },
  ];

  let restaurantInfo = {
    email = "smileyhomerestaurant@gmail.com";
    whatsapp = "919981716485";
    instagram = "@smiley_home_mandsaur_";
    address = "New Collector Road, Opposite D-Mart, Mandsaur, Madhya Pradesh 458001";
    openingHours = "Mon-Sun: 11:00 AM - 11:00 PM";
    phone = "+91 99817 16485";
  };
};
