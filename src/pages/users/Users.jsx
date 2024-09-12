import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageQuery, setPageQuery] = useState(searchParams.get("page"));
  const [paginationData, setPaginationData] = useState();

  useEffect(() => {
    fetchUsers(pageQuery);
  }, []);

  async function fetchUsers(pageNumber) {
    await axios
      .get("https://reqres.in/api/users", {
        params: { page: pageNumber },
      })
      .then((res) => {
        // console.log(res);
        setSearchParams({ page: pageNumber || 1 });
        setPageQuery(pageNumber);
        setUsers(res.data.data);
        setPaginationData({
          total: res.data.total,
          per_page: res.data.per_page,
        });
      });
  }

  const handlePageClick = (pageNumber) => {
    // console.log(pageNumber);
    fetchUsers(pageNumber);
  };

  if (users) {
    return (
      <div>
        <h3>Users List:</h3>
        <div className="grid gap-7 grid-cols-3">
          {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <div className="p-5 rounded shadow-md bg-white">
                <img
                  src={user.avatar}
                  className=" w-30 h-30 rounded-full mx-auto "
                  alt="avatar"
                />
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          {Array.from(
            {
              length: paginationData.total / paginationData.per_page,
            },
            (item, index) => (
              <button
                className="rounded mx-4 mt-2 p-4 bg-blue-500 text-white font-bold"
                key={index}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    );
  } else {
    return <p>Loading ...</p>;
  }
};

export default Users;
