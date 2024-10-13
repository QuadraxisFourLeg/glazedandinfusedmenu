import React from 'react';
import './App.css';

const menuData = {
  coveredDonuts: [
    { name: "Don't Stop Bavarian", description: "Chocolate Frosting, Bavarian Cream" },
    { name: "I Love Rock N' Road", description: "Chocolate Frosting, Almonds, Marshmallow Drizzle" },
    { name: "Brown Eyed Swirl", description: "Chocolate Frosting, Chocolate Chips, Vanilla Frosting" },
    { name: "S'More Than A Filling", description: "Chocolate Frosting, Graham Crackers, Marshmallows" },
    { name: "Don't Fear The Reese's", description: "Chocolate Frosting, Reese's Cups, Peanut Butter Drizzle" },
    { name: "The Spirit Of Oreo", description: "Chocolate Frosting, Oreos, Whipped Cream" },
    { name: "Caramel Chameleon", description: "Caramel Frosting, Sea Salt, Chocolate Frosting" },
    { name: "Bohemian Raspberry", description: "Chocolate Frosting, Raspberry Frosting, Whipped Cream" },
    { name: "Whole Latte Love", description: "Mocha Frosting, Whipped Cream, Caramel Drizzle" },
    { name: "Purple Glaze", description: "Blueberry Frosting, Fruity Pebbles" },
    { name: "Feel Like Bacon Love", description: "Maple Frosting, Bacon, Caramel Drizzle" },
    { name: "Strawberry Frills Forever", description: "Strawberry Frosting, Sprinkles" },
    { name: "Sweet Home Applebama", description: "Cinnamon Sugar, Apple Pie Filling, Graham Crackers, Caramel Drizzle" },
    { name: "Yellow Submaringue", description: "Lemon Frosting, Marshmallows, Marshmallow Drizzle" },
    { name: "Key Limelight", description: "Key Lime Frosting, Graham Crackers, Vanilla Frosting" }
  ],
  plainDonuts: [
    { name: "Smells Like Plain Donuts", description: "Plain Cake Donuts" },
    { name: "Cinnamon Girls", description: "Cinnamon Sugar" },
    { name: "Glaze Of Glory", description: "Vanilla Glaze" },
    { name: "Blinded By The White", description: "Powdered Sugar" }
  ],
  drinks: [
    { name: "Hot Coffee", sizes: ["16 oz."] },
    { name: "Iced Coffee", sizes: ["16 oz.", "32 oz."] },
    { name: "Lemonade", sizes: ["16 oz.", "32 oz."] },
    { name: "Sweet Tea", sizes: ["16 oz.", "32 oz."] },
    { name: "Hot Chocolate", sizes: ["16 oz."] },
    { name: "Milk", sizes: ["16 oz."] },
    { name: "Chocolate Milk", sizes: ["16 oz."] },
    { name: "Bottled Water", sizes: ["16 oz."] }
  ],
  creamersAndSyrups: [
    "Whole Milk", "Half & Half", "Oat Milk", "Almond Milk",
    "Chocolate", "Caramel", "Hazelnut", "White Chocolate",
    "French Vanilla", "Peppermint", "Lavender", "Honey", "Brown Sugar",
    "Sugar Free Caramel", "Sugar Free Hazelnut", "Sugar Free Vanilla"
  ],
  syrupInfusions: [
    "Mago", "Peach", "Watermelon", "Strawberry", "Raspberry",
    "Blackberry", "Honey", "Lavender", "Sugar Free Raspberry"
  ],
  addOns: [
    "Chocolate Drizzle", "Caramel Drizzle", "Peanut Butter Drizzle",
    "Blueberry Drizzle", "Lemon Drizzle", "Vanilla Glaze",
    "Raspberry Drizzle", "Bavarian Cream", "Whipped Cream", "Sprinkles"
  ]
};

const MenuSection: React.FC<{ title: string; items: any[]; description?: string }> = ({ title, items, description }) => (
  <div className="menu-section">
    <h2 className="text-2xl font-bold mb-4 text-yellow-300">{title}</h2>
    {description && <p className="text-gray-400 mb-2">{description}</p>}
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="border-b border-gray-700 pb-2">
          <span className="font-semibold text-pink-500">{item.name || item}</span>
          {item.description && <p className="text-sm text-gray-400">{item.description}</p>}
          {item.sizes && (
            <p className="text-sm text-gray-400">
              Sizes: {item.sizes.join(", ")}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-300">Long Live Rock! (and donuts)</h1>
        
        <div className="menu-container">
          <div>
            <MenuSection title="Covered Donuts" items={menuData.coveredDonuts} description="6, 12 or 24 One Flavor per Pack" />
            <MenuSection title="Plain Donuts" items={menuData.plainDonuts} description="6, 12 or 24 One Flavor per Pack" />
          </div>
          <div>
            <MenuSection title="Drinks" items={menuData.drinks} />
            
            <div className="menu-section">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Creamers and Syrup Infusions</h2>
              <ul className="grid grid-cols-2 gap-2">
                {menuData.creamersAndSyrups.map((item, index) => (
                  <li key={index} className="text-sm text-gray-400">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="menu-section">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Syrup Infusions</h2>
              <ul className="grid grid-cols-2 gap-2">
                {menuData.syrupInfusions.map((item, index) => (
                  <li key={index} className="text-sm text-gray-400">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="menu-section">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Add-ons</h2>
              <ul className="grid grid-cols-2 gap-2">
                {menuData.addOns.map((item, index) => (
                  <li key={index} className="text-sm text-gray-400">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;