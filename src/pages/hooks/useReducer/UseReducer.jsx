import { useReducer } from "react";
import Button from "../../../components/common/Button";

// ----- increase decrease -----
// function reducer(state, action) {
//   switch (action.type) {
//     case "inc":
//       return { count: state.count + 1 };
//     case "dec":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

//  ===== Form -------
// const initialState = {
//   name: "",
//   email: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "updateField":
//       return {
//         ...state,
//         [action.field]: action.value,
//       };
//   }
// }

const initialState = {
  cards: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        cards: [...state.cards, action.item],
      };
    case "removeItem":
      return {
        ...state,
        cards: state.cards.filter((item, index) => index !== action.index),
      };
    default:
  }
}

const UseReducerPage = () => {
  // ----- increase decrease -----
  //   const [state, dispatch] = useReducer(reducer, { count: 0 });

  //   ----- Form -----

  //   const [state, dispatch] = useReducer(reducer, initialState);

  //   const handleChange = (e) => {
  //     dispatch({
  //       type: "updateField",
  //       field: e.target.name,
  //       value: e.target.value,
  //     });
  //   };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // ----- increase decrease -----
    // <div>
    //   <p>Count: {state.count}</p>
    //   <Button
    //     buttonStyle=" bg-blue-600 mx-2 text-white"
    //     title="increment"
    //     buttonClick={() => dispatch({ type: "inc" })}
    //   />
    //   <Button
    //     buttonStyle=" bg-blue-600 mx-2 text-white"
    //     title="decrement"
    //     buttonClick={() => dispatch({ type: "dec" })}
    //   />
    //   <Button
    //     buttonStyle=" bg-blue-600 mx-2 text-white"
    //     title="Unknown"
    //     buttonClick={() => dispatch({ type: "Unknown" })}
    //   />
    // </div>
    // ----- Form -----
    // <div>
    //   <form>
    //     <input
    //       name="name"
    //       type="text"
    //       placeholder="name"
    //       value={state.name}
    //       onChange={handleChange}
    //     />
    //     <input
    //       name="email"
    //       type="text"
    //       placeholder="email"
    //       value={state.email}
    //       onChange={handleChange}
    //     />
    //   </form>
    //   <p>{state.name}</p>
    //   <p>{state.email}</p>
    // </div>

    <div>
      <Button
        buttonStyle=" bg-blue-600 mx-2 text-white"
        title="Add Apple"
        buttonClick={() => dispatch({ type: "addItem", item: "Apple" })}
      />
      <Button
        buttonStyle="bg-blue-600 mx-2 text-white"
        title="Add Orange"
        buttonClick={() => dispatch({ type: "addItem", item: "Orange" })}
      />

      <h3>List:</h3>
      <ul>
        {state.cards.map((item, index) => (
          <li key={index}>
            {item}
            <Button
              buttonStyle="bg-red-600 mx-2 text-white"
              title="Remove"
              buttonClick={() => dispatch({ type: "removeItem", index })}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerPage;
