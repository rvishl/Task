const ColorContainer = (props) => {

  
    const styling={
      backgroundColor: props.color,
    }
    const coloring={
      color: props.color,
      fontSize:"small",
      fontWeight:"bold",
    }
  
      return(
          <div className="main_container">
            <div className="color_container" style={styling}>
            
            </div>
            <div className="footer">
              <div className="footer_element">
                <h5>{props.color}</h5>
                  <p style={coloring}>{props.name}</p>
              </div>
            </div>
          </div> 
      )
  }
  
  export default ColorContainer;