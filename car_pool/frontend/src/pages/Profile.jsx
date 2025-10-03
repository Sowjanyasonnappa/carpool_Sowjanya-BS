import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("/api/users/profile");
      const data = await res.json();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <p className="p-6">Loading profile...</p>;

  return (
    <div className="p-6 max-w-md mx-auto border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default Profile;
