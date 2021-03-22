import './page.css'

function Liked (props) {
   let data = props.likeNews.sort((a,b) => a.id - b.id)


   return (
     <div>
         <h1>
            LIKED
         </h1>
         <ul>
            {
               data.length && props.likeNews.map(item => {
                  return <li className='news__wrap'>
                           <div className='news__body'>
                              <h3 className='news__title'>
                                 {item.title}
                              </h3>
                              <div>
                                 {item.body}
                              </div>
                           </div>
                        </li>
               })
            }
            {
               !data.length && <h2>ЗДЕСЬ ПОКА ПУСТО</h2>
            }
         </ul>
     </div>
   )
}

export default Liked