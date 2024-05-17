import './Pagination.css'
import arrow from '../../Images/Arrow.svg'

const Pagination = (action) => {


    return (
        <div class="pagination">
            <img src={arrow} class='arrow-buttom'/>
            <div class='page-buttom selected-buttom'><p class='page-buttom__text'>1</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>2</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>3</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>4</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>5</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>6</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>7</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>8</p></div>
            <div class='page-buttom'><p class='page-buttom__text'>9</p></div>
            <img src={arrow} class='arrow-buttom mirrored'/>
        </div>
    )
}

export default Pagination;