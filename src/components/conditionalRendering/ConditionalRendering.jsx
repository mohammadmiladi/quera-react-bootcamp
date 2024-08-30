import { useState } from "react";

const ConditionalRendering = () => {
  // IF ELSE
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isError] = useState(false);
  const [isAdmin] = useState(false);
  const [isMember] = useState(true);
  const [productState, setProductState] = useState("success");

  //  product states: error - pending - success

  //   if (isLoggedIn) {
  //     return (
  //       <>
  //         <button>Logout</button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <button>Login</button>
  //       </>
  //     );
  //   }

  // ------ TERNARY -------

  //   return <>{isLoggedIn ? <button >Logout</button> : <button>Login</button>}</>;

  // ' && ' Logical Operator

  //   return <>{isError && <p className=" text-red-700">خطا از سمت سرور</p>}</>;

  // ------ switch case -----

  //   switch (productState) {
  //     case "error":
  //       return (
  //         <div className=" bg-white rounded p-3">
  //           <h3>Error</h3>
  //         </div>
  //       );
  //     case "pending":
  //       return (
  //         <div className=" bg-blue-400 rounded p-3">
  //           <h2>pending</h2>
  //           <p>وضعیت موجود</p>
  //         </div>
  //       );

  //     case "success":
  //       return (
  //         <div className=" bg-green-400 rounded p-3">
  //           <h2>success</h2>
  //           <img src="" alt="Success" />
  //           <p>با موفقیت انجام شد</p>
  //         </div>
  //       );

  //     default:
  //       return (
  //         <div className=" bg-gray-400 rounded p-3">
  //           <p>در انتظار تعیین وضعیت</p>
  //         </div>
  //       );
  //   }

  return (
    <div>
      {(() => {
        if (isAdmin) return <p>Admin</p>;
        if (isMember) return <p>Member</p>;
        return <p>Hello Guest !</p>;
      })()}
    </div>
  );
};

export default ConditionalRendering;
