type BodyEntryProps = {
    title: string
    content: string
    myCallback: (info:string) => void
}
export default function BodyEntry(props: BodyEntryProps){
   function myButtonClick(){
       console.log("Button click")
       props.myCallback("Der Titel des Schritts ist: " + props.title)
   }

    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={myButtonClick}>
                Click
            </button>
        </div>
    )
}