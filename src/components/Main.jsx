import './page.css'
import likeTrue from './../assets/img/like-true.png'
import likeFalse from './../assets/img/like-false.png'

function Main (props) {
   let data = props.mainNews.sort((a,b) => a.id - b.id)
   
   return (
     <div>
         <h1>
            ГЛАВНАЯ
         </h1>
         <ul>
            {
               data.length && props.mainNews.map(item => {
                  return <li className='news__wrap'>
                           <div className='news__body'>
                              <h3 className='news__title'>
                                 {item.title}
                              </h3>
                              <div>
                                 {item.body}
                              </div>
                           </div>
                           <div className='news__control'>
                              <button onClick={() => props.moveFromMainToArchive(item)}>в архив</button>
                              <button onClick={() => props.deleteFromMain(item)}>удалить</button>
                              <div className='like__wrap' onClick={() => props.toggleLike(item)}>{
                                 (props.likeNews.filter((el) => el.id === item.id).length > 0)
                                 ? <img src={likeTrue}/>
                                 : <img src={likeFalse}/>
                              }</div>
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

export default Main