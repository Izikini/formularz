import React, { useState } from "react";

/********************************************************
* nazwa klasy/komponentu: App
* pola:
*   kursy (array) - tablica przechowująca listę dostępnych kursów
*   imieNazwisko (string) - stan dla pola formularza "Imię i nazwisko"
*   numerKursu (string) - stan dla pola formularza "Numer kursu"
*
* metody:
*   handleSubmit - obsługuje zdarzenie zatwierdzenia formularza
*
* autor: EE-Informatyk.pl
* ****************************************************/
function App() {
  const kursy = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];

  const [imieNazwisko, setImieNazwisko] = useState("");
  const [numerKursu, setNumerKursu] = useState("");

  /********************************************************
  * nazwa funkcji: handleSubmit
  * parametry wejściowe: e (object) - obiekt zdarzenia
  * wartość zwracana: brak
  * opis: obsługuje zdarzenie zatwierdzenia formularza.
  *       Wyświetla dane w konsoli przeglądarki:
  *       - Imię i nazwisko podane w formularzu
  *       - Nazwę kursu na podstawie numeru wpisanego w formularzu
  *       lub komunikat "Nieprawidłowy numer kursu" w przypadku błędnego numeru.
  * autor: EE-Informatyk.pl
  * ****************************************************/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imieNazwisko);

    const index = parseInt(numerKursu) - 1;
    if (index >= 0 && index < kursy.length) {
      console.log(kursy[index]);
    }
    else {
      console.log("Nieprawidłowy numer kursu");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Liczba kursów: {kursy.length}</h2>

      <ol>
        {kursy.map((kurs, index) => (
          <li key={index}>{kurs}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko:
          </label>
          <input
            type="text"
            id="imieNazwisko"
            className="form-control"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numerKursu" className="form-label">
            Numer kursu:
          </label>
          <input
            type="number"
            id="numerKursu"
            className="form-control"
            value={numerKursu}
            onChange={(e) => setNumerKursu(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz do kursu
        </button>
      </form>
    </div>
  );
}

export default App;
