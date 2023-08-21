import { animate } from "motion"
import { useEffect } from "react"


const App = () => {

    useEffect(() => {
        animate(
            "#box",
            { rotate: 90 },
            {
                duration: 0.5,
                easing: "ease-in-out",
                repeat: 3,
                direction: "alternate"
            }
        );
    }, []); // The empty dependency array ensures the effect runs once after initial render



    return (
        <>
            <div id="box" style={{height: "100px", width: "100px",background: "green"}}  />            
        </>
    )
}



export default App
