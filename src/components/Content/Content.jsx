import Display from "../Display/Display"
import Pagination from "../Pagination/Pagination"
import './Content.css'

const Content = (action) => {

    return (
        <div class="content">
            <Display />
            <Pagination />
        </div>
    )
}

export default Content;