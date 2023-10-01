type BodyEntryProps = {
    title: string
    content: string
}
export default function BodyEntry(props: BodyEntryProps){
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}