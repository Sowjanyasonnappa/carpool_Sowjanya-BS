import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/rides" className="card btn-primary text-center py-4">Browse Rides</Link>
        <Link to="/create" className="card btn-primary text-center py-4">Offer a Ride</Link>
        <Link to="/my-rides" className="card btn-primary text-center py-4">My Rides</Link>
      </div>
    </div>
  );
};

export default Dashboard;
