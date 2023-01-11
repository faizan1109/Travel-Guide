import "./styles.css";
import { useState } from "react";

var travelPlaces = {
  Bihar: [
    {
      name: "1. Rajgir Glass Bridge:",
      description:
        "This glass bridge locates at Rajgir in Nalanda.The bridge is between five hills.Anyone who wants to experience adventure can visit here.",
      rating: "Rating:-✪✪✪✪✪,5/5"
    },
    {
      name: "2. Kakolat Falls:",
      description:
        "Kakolat Waterfall is a picturesque waterfall in Nawada district of Bihar,India.It is situated on the Kakolat hill,located on the border of Bihar and Jharkhand.The fall is approximately 160 feet (49 m) in height.",
      rating: "Rating:-✪✪✪✪,4/5"
    },
    {
      name: "3. Nalanda University:",
      description:
        "Nalanda University is a UNESCO world heritage site is located South Bihar.Considered by historians to be the world's first residential university is spread over an area of 14 hectares and is a major place of tourist attraction.",
      rating: "Rating:-✪✪✪✪✪,5/5"
    }
  ],
  Kerala: [
    {
      name: "1.Alleppey:",
      description:
        "Esteemed as the ‘Backwater Capital of India’ or the ‘Venice of the East’,Alleppey is known for its silent backwaters and bountiful beauty.Visit this paradise to enjoy houseboat cruise and stay,village walks,Ayurvedic therapies and lot more.",
      rating: "Rating:-✪✪✪✪✪,5/5"
    },
    {
      name: "2. Cochin:",
      description:
        "Fondly called the ‘Queen of the Arabian Sea’,this imposing port-city has always been an attraction point since the beginning of history.Be it the essence of the Dutch establishments, British history, Chinese nets, or the traditional spice markets,Cochin will surely make you fall in love with itself.",
      rating: "Rating:-✪✪✪✪,4/5"
    },
    {
      name: "3. Munnar:",
      description:
        "A gorgeous hill station in the lap of the fascinating Western Ghats,Munnar needs no introduction.Rising 1,600m above the sea level,a vacation in the beguiling locales of this hilly retreat is all about the lofty clouds, picturesque mountains, rolling hills, and a soothing ambience.",
      rating: "Rating:-✪✪✪✪✪,5/5"
    }
  ],
  Tamilnadu: [
    {
      name: "1. Kanyakumari:",
      description:
        "The southermost part of India,Kanyakumari is a paradise for experience-seekers.The art,architecture of temples,Vattakottai Fort,the Kanyakumari Beach,the famous Vivekananda Rock Memorialand even the local cuisine along with so many places to see in Kanyakumari that reflects every bit of its culture will leave you fascinated.",
      rating: "Rating:-✪✪✪✪,4/5"
    },
    {
      name: "2. Mahabalipuram:",
      description:
        "Popular for its intricately carved temples and caves,Mahabalipuram is another gem to marvel at.The city has beautiful beaches,magnificent architecture,specially the shore temple & Krishna's butterball,and its soothing weather,offers a refreshing experience to every kind of tourists visiting this place.",
      rating: "Rating:-✪✪✪✪✪,5/5"
    },
    {
      name: "3. Ooty – Queen Of Hill Stations:",
      description:
        "Situated in the Nilgiris district of Tamil Nadu,Ooty is one of the cool tourist places in Tamil Nadu.With a gorgeous backdrop of the hills and greenery,Ooty sightseeing is everything one needs to rejuvenate.Government Rose Garden,the Tea Factory,the Tea Museum,Botanical Garden & Ooty lake are some of the places to visit at Ooty.",
      rating: "Rating:-✪✪✪✪,4/5"
    }
  ]
};

var newPlace = Object.keys(travelPlaces);

export default function App() {
  var [travel, setTravel] = useState("Bihar");
  function placeHandler(travel) {
    setTravel(travel);
  }

  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "black",
          color: "red",
          borderRadius: "2rem",
          padding: "1rem"
        }}
      >
        <h1
          style={{
            fontSize: "xx-large",
            textDecoration: "underline",
            color: "yellow"
          }}
        >
          Planning for a trip?
          <br />
          Get some top recommendations here :-
        </h1>
        <small
          style={{
            border: "1px solid white",
            backgroundColor: "white",
            padding: "0.5rem"
          }}
        >
          Click on the state name to know about the tourist places of that
          particular state.
        </small>
      </nav>
      <div className="list--buttons"></div>

      {newPlace.map((travel) => {
        return (
          <button className="buttonstyle" onClick={() => placeHandler(travel)}>
            {travel}
          </button>
        );
      })}
      <div className="Explanation">
        {travelPlaces[travel].map((items) => {
          return (
            <ul style={{ marginBlock: "1rem" }}>
              <li
                style={{
                  color: "white",
                  border: "1px solid blue",
                  margin: "0.5rem"
                }}
              >
                {items.name}
              </li>
              <li style={{ border: "1px solid white", margin: "1rem" }}>
                {items.description}
              </li>
              <li
                style={{
                  color: "yellow",
                  border: "1px solid blue",
                  margin: "0.5rem"
                }}
              >
                {items.rating}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
