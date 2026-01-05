
interface InventoryItemProps {
    name: string;
    quantity: number;
    category: string;
}

function InventoryItem({ name, quantity, category }: InventoryItemProps) {

    const statusColor = quantity > 10 ? "green" : quantity > 0 ? "orange" : "red";

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}
    >
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
        <p>Status: <span style={{ color: statusColor }}>{quantity > 10 ? "In Stock" : quantity > 0 ? "Low Stock" : "Out of Stock"}</span></p>

    </div>
  );
}

export default InventoryItem;