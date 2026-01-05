import { useState } from "react";
import CottageItem from "./../CottageItem";

interface CottageItemMaintenanceProps {
  name: string;
  price: number;
  description: string;
  imgurl: string;
  status: "available" | "unavailable" | "maintenance";
}

function CottageItemMaintenance({
  name,
  price,
  description,
  imgurl,
  status: initialStatus,
}: CottageItemMaintenanceProps) {
  const [currentState, setCurrentStatus] = useState<
    "available" | "unavailable" | "maintenance"
  >(initialStatus);

  const toggleStatus = () => {
    setCurrentStatus((prev) =>
      prev === "available"
        ? "unavailable"
        : prev === "unavailable"
        ? "maintenance"
        : "available"
    );
  };

  const statusColor =
    currentState === "available"
      ? "green"
      : currentState === "unavailable"
      ? "red"
      : "orange";

  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <h3>{name}</h3>
        <img
          src={imgurl}
          alt={name}
          style={{ width: "200px", height: "150px", objectFit: "cover" }}
        />
        <p>{description}</p>
        <p>Price: {price} pesos</p>
        <p>
          Status:{" "}
          <span
            onClick={toggleStatus}
            style={{
              color: statusColor,
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {currentState}
          </span>
        </p>
      </div>
    </>
  );
}


export default CottageItemMaintenance;