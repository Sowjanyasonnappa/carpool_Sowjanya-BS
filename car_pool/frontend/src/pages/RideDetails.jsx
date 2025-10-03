import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RideDetails = () => {
  const { id } = useParams();
  const [ride, setRide] = useState(null);

  useEffect(() => {
    const fetchRide = async () => {
      const res = await fetch(`/api/rides/${id}`);
      const data = await res.json();
      setRide(data);
    };
    fetchRide();
  }, [id]);

  if (!ride) return <p className="p-6">Loading ride details...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">
        {ride.source} → {ride.destination}
      </h2>
      <p>Date: {new Date(ride.date).toLocaleDateString()}</p>
      <p>Seats: {ride.seats}</p>
      <p>Price: ₹{ride.price}</p>
    </div>
  );
};

export default RideDetails;
