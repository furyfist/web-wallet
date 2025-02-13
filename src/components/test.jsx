

// Parent component
function test() {
    const userName = "John Doe";
    const age = 30;
  
    return (
      <div>
        <Greeting name={userName} />
        <UserInfo personAge={age} />
      </div>
    );
  }
  
  // Child components
  function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }
  
  function UserInfo(props) {
    return <p>Age: {props.personAge}</p>;
  }

export default App