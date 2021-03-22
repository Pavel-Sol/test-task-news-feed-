import './page.css'


function Archive (props) {
   let data = props.archiveNews.sort((a,b) => a.id - b.id)

   return (
      <div>
          <h1>
            ARCHIVE
          </h1>
          <ul>
             {
                data.length && props.archiveNews.map(item => {
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
                              <button onClick={() => props.returnFromArchiveToMain(item)}>вернуть в основные</button>
                              <button onClick={() => props.deleteFromArchive(item)}>удалить</button>
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

export default Archive