

function Archive (props) {
   return (
      <div>
          <h1>
            ARCHIVE
          </h1>
          <ul>
             {
                props.archiveNews.length && props.archiveNews.map(item => {
                   return <li>
                            <div>
                                {item.title}
                            </div>
                            <button onClick={() => props.returnFromArchiveToMain(item)}>вернуть в основные</button>
                            <button onClick={() => props.deleteFromArchive(item)}>удалить</button>
                         </li>
                })
             }
          </ul>
      </div>
    )
}

export default Archive