import './whystyling.css'

type WhyItemProps = {
    id: string
    // title: string
    message: string
    createdAt: Date
}

// const deleteWhy = async (why: { id: any; }) => {
//     return await prisma.why.delete({
//       where: {id: why.id}
//     })
//   }

//   const deleteWhy = async (why: { id: any; }) => {
//     return await prisma.why.delete({
//       where: { id: why.id }
//     })
//   }




//måste skriva om i min db att jag ska ha en titel till mitt why också

export function WhyItem({message} : WhyItemProps){
    return <li className="items-center">
        <div className="whyerinformation">
            <img src='https://picsum.photos/45/45'></img>
            <p>Skapare av why</p>
        </div>
        <div className="whycontainer">     
        <p className="whymessage">
        {message}
        </p>
        </div>
    </li>
}