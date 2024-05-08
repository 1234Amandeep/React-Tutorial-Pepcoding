import "./styles.css";
import Navbar from "./components/Navbar";
import UseFetch from "./components/UseFetch";
import FavoritePage from "./pages/FavoritePage";

export default function App() {
  return (
    <>
      {/*
       *By faith -> <Header />: I beleive 75vw again
       *Main-section-container: I believe 75vw again (just to keep things together)
       *By faith -> <MoviesGrid />: I believe again 75vw
       */}

      {/* faith */}
      <header className="header-container">
        {/* faith */}
        <Navbar
          data={{
            logo: "Movie App",
            links: [
              {
                text: "Favourites",
                href: "/favourites",
              },
            ],
          }}
        />
      </header>

      {/* FAVOURITES PAGE */}
      <FavoritePage />

      {/* faith */}
      {/* <UseFetch /> */}
    </>
  );
}
