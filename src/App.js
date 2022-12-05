import './App.css';
function App() {
  return (
    <div className="App">
    <div className="flex justify-center my-8 mx-4">
        <div className="w-full lg:w-[480px] rounded-md bg-slate-800">
            
            <section className='p-4'>
            <form action="">
            <label className="text-white text-sm mb-2 flex items-center gap-2" for="Name"> Your Name</label>
            <input className="border rounded w-full py-2 px-3 text-gray-800 focus:outline-none shadow-lg shadow-slate-500/40" placeholder='Enter Your Name' id='Name' type="text"/>

            <label className="text-white text-sm mb-2 mt-2 flex items-center gap-2" for="Number">Phone Number <span className='rounded-full h-4 w-4 outline outline-slate-100 outline-1 text-xs'>&#63;</span></label>
            <input className="border rounded w-full py-2 px-3 text-gray-800 focus:outline-none shadow-lg shadow-slate-500/40" placeholder='Enter Your Phone Number' id='Name' type="text"/>

            <label className="text-white text-sm mb-2 mt-2 flex items-center gap-2" for="Email">E-mail</label>
            <input className="border rounded w-full py-2 px-3 text-gray-800 focus:outline-none shadow-lg shadow-slate-500/40" placeholder='Enter Your Email' id='Name' type="email"/>

            <p className="text-left text-slate-50">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aperiam porro tenetur eum quibusdam <span class="underline underline-offset-1">asrepellat</span>
              </small>
            </p>


            <div className="flex justify-start">

                <div className="form-check">
                  <input className="form-check-input h-5 w-5 cursor-pointer accent-orange-600  transition duration-200 align-top  float-left mr-2 mt-2" type="checkbox" />
                  <label className="form-check-label inline-block text-white" for="flexCheckDefault">
                    <small> * Lorem ipsum dolor sit amet consectetur <span className="underline underline-offset-1">adipisicing</span> elit</small>
                  </label>
                </div>
            </div>
           <p className="text-start ml-9 text-sm text-white underline underline-offset-1">Lorem ipsum dolor sit amet.</p>
            
           <div className="flex justify-start">

            <div className="form-check">
              <input className="form-check-input h-5 w-5 cursor-pointer accent-orange-600  transition duration-200 align-top  float-left mr-1 mt-2" type="checkbox" />
              <label className="form-check-label inline-block text-white" for="flexCheckDefault">
                <small className="ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </small>
              </label>
            </div>
            </div>
            <p className="text-start ml-9 text-sm text-white">Perspiciatis laborum esse qui deserunt quas aperiam quisquam hic repudiandae illum</p>

            <button type="button" className="bg-orange-600 text-white px-10 py-2 w-35 rounded-full hover:bg-orange-800 shadow-sm shadow-slate-500/40 mt-2">Submit</button>

            </form>

            </section>
            <footer className='rounded-md'>
                <div className='bg-red-400 rounded-md text-slate-100 text-sm'>&copy;2022 Abu Bakkar Siddik</div>
            </footer>
        </div>

    </div>
    </div>
  );
}

export default App;
