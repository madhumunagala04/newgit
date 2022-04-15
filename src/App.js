import './App.css';

function App() {
  return (
    <div className="App">
      <center>
        <h1><b>Form</b></h1>
        <form>
        <label>FirstName:</label>
        <input type="Text"></input>
        <br></br>
        <br></br>
        <label>LastName:</label>
        <input type="Text"></input>
        <br></br>
        <br></br>
        <label>Email:</label>
        <input type="Text"></input>
        <br></br>
        <br></br>
        <label>Password:</label>
        <input type="password"></input>
        <br></br>
        <br></br>
        <input type="submit" className='tocolor'></input>
      </form>
      </center>
    </div>
  );
}
export default App;


