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
    return <li data-testid="whyitem" className="items-center">
        <div className="whyerinformation">
            <img className='profileimg' alt='profileimg' src='https://picsum.photos/45/45'></img>
            <p data-testid="creator">Creator of why: <i>#notyetImplemented</i></p>
            <p className='dateofwhy'>{createdAt.toDateString()} {createdAt.toLocaleTimeString()}</p>
        </div>
        <div className="whycontainer">     
        <p className="whymessage" data-testid="message">
        {message}
        </p>
        </div>
        <section className='flexsection'>
        <button className='btn'>Like this why <i>#NYI</i></button>
        <button className='btn'>Dislike this why <i>#NYI</i></button>
        </section>
    </li>
}