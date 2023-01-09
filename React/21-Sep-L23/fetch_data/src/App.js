
import { useState, useEffect } from 'react';

function App() {

  const [list, setList ] = useState([]);

  useEffect(_ => {
    (async _ => {
      const response = await fetch("https://api.github.com/users/rvishl");
      const data = await response.json();
      console.log(data);
      setList(data)
    })();
  }, []);

  return (
   <>
    <ul>
      {
        <li>{list.name} {list.created_at}</li>
      }
    </ul>
   </>
  );
}

export default App;
