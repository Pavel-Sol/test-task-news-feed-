
function Liked (props) {
   return (
     <div>
         <h1>
            LIKED
         </h1>
         <ul>
            {
               props.likeNews.length && props.likeNews.map(item => {
                  return <li key={Date.now()}>
                           <div>
                               {item.title}
                           </div>
                        </li>
               })
            }
         </ul>
     </div>
   )
}

export default Liked