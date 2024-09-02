import ReactImage from "../../assets/images/React.webp";

const Dashboard = () => {
  return (
    <div className="h-full flex justify-center items-center gap-10 flex-col">
      <h2 className="text-3xl font-bold">Welcome To React Bootcamp</h2>
      <img src={ReactImage} width="200" alt="react" />
    </div>
  );
};

export default Dashboard;
