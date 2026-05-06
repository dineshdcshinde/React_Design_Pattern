import useUserData from "../hooks/useUserData";

const MissingProviderExample = () => {
  useUserData();

  return <p>This text will not render because UserProvider is missing.</p>;
};

export default MissingProviderExample;
