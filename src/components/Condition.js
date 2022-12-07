import "../App.css";
import '../style.css';
function Condition() {
  return (
    <>
      <p className="text-left text-slate-50 mt-2 custom-res-sm">
        <small>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          aperiam porro tenetur eum quibusdam
          <span class="underline underline-offset-1">asrepellat</span>
        </small>
      </p>

      <div className="flex justify-start">
        <div className="form-check">
          <input
            className="form-check-input h-5 w-5 cursor-pointer accent-orange-600  transition duration-200 align-top  float-left mr-2 mt-2"
            type="checkbox"
          />
          <label
            className="form-check-label inline-block text-white custom-res"
            for="flexCheckDefault"
          >
            <small>
              
              * Lorem ipsum dolor sit amet consectetur
              <span className="underline underline-offset-1">
                adipisicing
              </span>
              elit
            </small>
          </label>
        </div>
      </div>
      <p className="text-start ml-9 text-sm text-white underline underline-offset-1 custom-res-p">
        Lorem ipsum dolor sit amet.
      </p>

      <div className="flex justify-start">
        <div className="form-check">
          <input
            className="form-check-input h-5 w-5 cursor-pointer accent-orange-600  transition duration-200 align-top  float-left mr-1 mt-2"
            type="checkbox"
          />
          <label
            className="form-check-label inline-block text-white custom-res"
            for="flexCheckDefault"
          >
            <small className="ml-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
          </label>
        </div>
      </div>
      <p className="text-start ml-9 text-sm text-white custom-res-p">
        Perspiciatis laborum esse qui deserunt quas aperiam quisquam hic
        repudiandae illum
      </p>
    </>
  );
}

export default Condition;
