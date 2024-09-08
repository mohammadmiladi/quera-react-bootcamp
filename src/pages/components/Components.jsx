import { Outlet } from "react-router-dom";
import Button from '../../components/common/Button'

const ComponentsPage = () => {
  return (
    <div>
      <h3>Components:</h3>
      <Button
        buttonStyle="rounded bg-blue-500 py-1 px-7 text-white"
        title="Toggle Component"
      />
      <Outlet />
    </div>
  );
};

export default ComponentsPage;
