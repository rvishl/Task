import './App.css';
import Card from './components/Card';



function App() {

  const colorcode=
  [
    {
      color:"#FF6663",name:"PINK"
    },
    {  
      color:"#333333",name:"GRAY"
    },
    {  
      color:"#000000",name:"BLACK"
    }, 
    {  
      color:"#38BB14",name:"GREEN"
    },
    {
      color:"#C90B0B",name:"RED"
    },
    {
      color:"#FF8000",name:"ORANGE"
    },
    {
      color:"#FFF500",name:"YELLOW"
    },
    {
      color:"#CCCCCC",name:"LIGHT GRAY"
    },
    {
      color:"#7E41A2",name:"PURPLE"
    },
    {
      color:"#C14911",name:"BROWN"
    },
  ];


  return (
    <>
    <div>
      {colorcode.map((element, idx1) =>{
        return(
            <Card color={element.color} key={idx1} name={element.name}/>  
        )
      })}
    </div>
    </>
  );
}

export default App;