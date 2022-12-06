import "./App.css";
import Condition from "./components/Condition";
import Footer from "./components/Footer";
import Form from "./components/Form";
function App() {
  const items = [
    {
      lebel: "Your Name",
      type: "text",
      placeholder: "Enter Your Name",
    },
    {
      lebel: "Phone Number",
      type: "text",
      placeholder: "Enter Your Phone Number",
    },
    {
      lebel: "E-mail",
      type: "email",
      placeholder: "Enter Your e-mail",
    },
  ];
  return (
    <div className="App">
      <div className="flex justify-center my-8 mx-4">
        <div className="w-full lg:w-[480px] rounded-md bg-slate-800">
          <section className="p-4">
            <form action="">
              <>
                {items.map((user) => (
                  <>
                    <Form
                      label={user.lebel}
                      text={user.text}
                      placeholder={user.placeholder}
                    />
                  </>
                ))}
              </>

              <Condition />

              <button
                type="button"
                className="bg-orange-600 text-white px-10 py-2 w-35 rounded-full hover:bg-orange-800 shadow-sm shadow-slate-500/40 mt-2"
              >
                Submit
              </button>
            </form>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
