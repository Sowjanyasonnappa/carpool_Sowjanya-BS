import React, { useEffect, useState } from "react";
import RideCard from "../components/RideCard";
import EmptyState from "../components/EmptyState";

const MyRides = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchMyRides = async () => {
      const res = await fetch("/api/rides/my");
      const data = await res.json();
      setRides(data);
    };
    fetchMyRides();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Rides</h2>
      {rides.length > 0 ? (
        rides.map((ride) => <RideCard key={ride._id} ride={ride} />)
      ) : (
        <EmptyState message="You have not created any rides yet." />
      )}
    </div>
  );
};

export default MyRides;
