import './whystyling.css'

type WhyItemProps = {
    id: string
    message: string
    createdAt: Date
}

function nothingWorks() {
    alert("Nothing works.");
}



export function WhyItem({message, createdAt} : WhyItemProps){
    return <li className="items-center">
        <div className="whyerinformation">
            <img className='profileimg' src='https://picsum.photos/45/45'></img>
            <p>Creator of why: <i>#notyetImplemented</i></p>
            <p className='dateofwhy'>{createdAt.toDateString()} {createdAt.toLocaleTimeString()}</p>
        </div>
        <div className="whycontainer">     
        <p className="whymessage">
        {message}
        </p>
        </div>
        <section className='flexsection'>
        <button className='btn'>Like this why <i>#NYI</i></button>
        <button className='btn'>Dislike this why <i>#NYI</i></button>
        </section>
    </li>
}