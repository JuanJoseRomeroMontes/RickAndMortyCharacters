import './InfoCard.css'

const InfoCard = () => {
    const urlTmep = 'https://www.ecophon.com/globalassets/new-site/assets-from-mw/ecophonscaledimage80c264e07bfd7ea6890221972ca2f3743b4e4befd3c1cf6df56223887abdfa63.png?width=900';
    const nameTemp = 'Rick Sanchez'

    return (
        <div class="background">
            <img class='image' src={urlTmep} />
            <div id='main-information'>
                <p class='information'>Name: {nameTemp}</p>
                <p class='information'>Species: {nameTemp}</p>
                <p class='information'>Gender: {nameTemp}</p>
                <p class='information'>Status: {nameTemp}</p>
            </div>
            
            <div id='secondary-information'>
                <p class='information'>Origin: {nameTemp}</p>
                <p class='information'>Location: {nameTemp}</p>
                <p class='information'>First aired: {nameTemp}</p>
                <p class='information'>Last aired: {nameTemp}</p>
            </div>
        </div>
    )
}

export default InfoCard;