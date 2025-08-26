import AddBlock from "../AddBlock/AddBlock";
import Filters from "../Filters/Filters";
import Statistics from "../Statistics/Statistics";

const Dashboard = () => {
  return (
    <div>
      <Filters />
      <Statistics />
      <AddBlock />
    </div>
  );
};

export default Dashboard;
