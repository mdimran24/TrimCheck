import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";


const PricesDetails = ({ prices, barber}) => {

    const { user } = useAuthContext();
    const [error, setError] = useState(null);
    const [haircut, setHaircut] = useState(prices.haircut);
    const [beard, setBeard] = useState(prices.beard);
    const [skinFade, setSkinFade] = useState(prices.skinFade);
    const [childrensCut, setChildrensCut] = useState(prices.childrensCut);

  
    const handleSubmit = async () => {
      if (!user) {
        setError("You must be logged in");
        return;
      }
  
  
      const updatedPrices = { haircut, beard, skinFade, childrensCut };
      
      const response = await fetch('./api/prices/' + prices._id, {
          method: 'PATCH',
          body: JSON.stringify(updatedPrices),
          headers:{
              "Content-Type": "application/json",
              'Authorization': `Bearer ${user.token}`,
          }
      })
      const json = await response.json();
  
    }
  
  return (
    <>
    <div className="bg-white rounded my-10 relative shadow-lg p-5 text-gray-800 lg:min-w-[500px]">
      <h4 className="text-2xl font-bold text-sky-600">
        Prices
      </h4>
      <div className="text-xl">
      <p>
      <strong>Hair Cut: </strong>
        £{prices.haircut}
      </p>
      <p>
        <strong>Beard: </strong>
        £{prices.beard}
      </p>
      <p>
        <strong>Hair Cut(Skin Fade): </strong>
        £{prices.skinFade}
      </p>
      <p>
        <strong>Children's Haircut: </strong>
        £{prices.childrensCut}
      </p>
      </div>
    </div>

    {barber ? 
    <form className="mt-2 m-auto p-4 bg-white rounded min-w-[500px]" onSubmit={handleSubmit}>
      <h3 className="font-bold text-xl text-sky-600 mb-6">Update Prices</h3>
      <label>Hair Cut:</label>
      <input 
        type="number"
        onChange={(e) => setHaircut(e.target.value)}
        value={haircut}
        className=""
      />
      <label>Beard:</label>
        <input 
        type="number"
        onChange={(e) => setBeard(e.target.value)}
        value={beard}
        className=""
      />
      <label>Skin Fade:</label>
        <input 
        type="number"
        onChange={(e) => setSkinFade(e.target.value)}
        value={skinFade}
        className=""
      />
      <label>Children's Hair Cut:</label>
        <input 
        type="number"
        onChange={(e) => setChildrensCut(e.target.value)}
        value={childrensCut}
        className=""
      />
      <button className="mt-4 bg-blue-600 text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:bg-blue-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
        Submit
      </button>
      {error && <div className=" p-3 bg-red-100 border-b-2 border-b-red-400 text-rose-600 mt-5 m-0">{error}</div>}
    </form>
    : null}
    </>
  );
    
};

export default PricesDetails;
