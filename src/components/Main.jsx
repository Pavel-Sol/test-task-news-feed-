

function Main (props) {
   return (
     <div>
         <h1>
            MAIN
         </h1>
         <ul>
            {
               props.mainNews.length && props.mainNews.map(item => {
                  return <li>
                           <div>
                               {item.title}
                           </div>
                           <button onClick={() => props.moveFromMainToArchive(item)}>в архив</button>
                           <button onClick={() => props.deleteFromMain(item)}>удалить</button>
                           <button onClick={() => props.toggleLike(item)}>{
                              (props.likeNews.filter((el) => el.id === item.id).length > 0)
                              ? 'убрать лайк'
                              : 'поставить лайк'
                           }</button>
                        </li>
               })
            }
         </ul>
     </div>
   )
}

export default Main