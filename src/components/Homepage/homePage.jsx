import "./homePage.css";

const HomePage = () => {
  //HOMEPAGE = FilterOptions + Video Thumbnails

  const filters = [
    "All",
    "Twenty20 Cricket",
    "Coding",
    "Machine Learning",
    "Music",
    "Hindustani Classical",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio Pakistan",
    "Democracy",
    "Pakistani Dramas",
    "Comedy",
  ];

  return (
    <div className="homepage">
      <div className="homepage_options">
        {filters.map((category, index) => {
          return <div className="homepage_option" key={index}>{category}</div>;
        })}
        <div className="content_below_filters"> skyfall </div>
      </div>
    </div>
  );
};

export default HomePage;
