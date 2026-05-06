import useUserData from "../hooks/useUserData";

const UserDashboard = () => {
  const { userData } = useUserData();

  return (
    <div>
      <h3>User Dashboard</h3>

      <p>UserName: {userData.userName}</p>
      <p>Subscription Status: {userData?.subscriptionStatus}</p>
    </div>
  );
};

export default UserDashboard;
