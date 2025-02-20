import React from "react";

type ListProps = {
  items: string[];
};

const ListComponent: React.FC<ListProps> = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Example usage
const App: React.FC = () => {
  const itemList = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div>
      <ListComponent items={itemList} />
    </div>
  );
};

export default App;
