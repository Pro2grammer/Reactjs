import './App.css';

const App = () => {
  const name = "Jill"
  return (
    <div className="App">

      {name ? (<>

        <h1>{name}</h1>
      </>
      ) : (<>
        "here2"
        <h2>No Name</h2>
        </>
      )}
    </div>
  );
}

export default App;
