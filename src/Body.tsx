import Definition from "./Definition.tsx";
import BodyEntry from "./BodyEntry.tsx";

export default function Body(){
    const stepsToHtmlStudy = [
        {
            id:"1",
            title:"Schritt 1: ",
            content:"Grundlagen verstehen"
        },
        {
            id:"2",
            title:"Schritt 2: ",
            content:"Praxisorientiertes Lernen"
        },
        {
            id:"3",
            title:"Schritt 3: ",
            content:"Vertiefen Sie Ihr Wissen"
        },
        {
            id:"4",
            title:"Schritt 4: ",
            content:"Validierung und Weiterentwicklung"
        }
    ]
    return(

            <div>
                <Definition/>
                <h2>Wie lernt man html nur in 4 Schritten ^-^ ?!</h2>
                {
                    stepsToHtmlStudy.map((step)=>{ return <BodyEntry key={step.id}
                                                                     title={step.title}
                                                                     content={step.content}/>})
                }
            </div>

    )
}