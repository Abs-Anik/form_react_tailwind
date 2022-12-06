import "../App.css";
function Form(props) {
  return (
    <div className="App">
      <label
        className="text-white text-sm mb-2 flex items-center gap-2 mt-2"
        for="Name"
      >
        
        {props.label == "Phone Number" ? (
          <>
            <span>Phone Number</span>
            <span className="rounded-full h-4 w-4 outline outline-slate-100 outline-1 text-xs">
              &#63;
            </span>
          </>
        ) : (
          props.label
        )}
      </label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-800 focus:outline-none shadow-lg shadow-slate-500/40"
        placeholder={props.placeholder}
        id="Name"
        type={props.type}
      />
    </div>
  );
}

export default Form;
