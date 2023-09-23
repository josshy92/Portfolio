import './Projects.css'
export default function Projects() {
    return (
        <div className="row justify-content-center ">
            <div className="col-3 textCenter">
                <h2 className='top projectTitle'>Bumbu</h2>
                <a className='shorten1' target="_blank" rel="noopener noreferrer" href="https://bumbu-recipe-book.herokuapp.com/">
                    <p className="projectTitle">See it live here!</p> <br />
                </a>
                <a className='shorten2' target="_blank" rel="noopener noreferrer" href="https://github.com/Cocineros/bumbu-frontend">
                    <p className="projectTitle">Check out the Repository!</p>
                </a>
            <div><img className="fromLeft projects"
                    src="https://user-images.githubusercontent.com/88861538/159187590-33ae5f1c-a3f8-44c4-8ccb-28f41f72582e.png"
                    alt="Bumbu" /></div>
            </div>

            <div className="col-3 textCenter ">
                <h2 className='top projectTitle'>NeighborGoods</h2>
                <a className='shorten1' target="_blank" rel="noopener noreferrer" href="https://bread-winners-neighborgoods.herokuapp.com/">
                    <p className="projectTitle ">See it live here!</p> <br />
                </a>
                <a className='shorten2' target="_blank" rel="noopener noreferrer" href="https://github.com/Bread-Winners/NeighborGoods">
                    <p className="projectTitle">Check out the Repository!</p>
                </a>
                <div className='bottom'><img className="fromLeft projects "
                    src="https://user-images.githubusercontent.com/87889660/150652622-f50b105c-e134-42ba-b07c-2365ab5e39b4.png"
                    alt="NeighborGoods" /></div>
            </div>

            <div className="col-3 textCenter ">
                <h2 className="top projectTitle">What's Your Food Temp</h2>
                <a className='shorten1' target="_blank" rel="noopener noreferrer"
                    href="https://seasons-of-food.github.io/whats-your-food-temp/">
                    <p className="projectTitle ">See it live here!</p> <br />
                </a>
                <a className='shorten2' target="_blank" rel="noopener noreferrer"
                    href="https://github.com/seasons-of-food/whats-your-food-temp">
                    <p className="projectTitle">Check out the Repository!</p>
                </a>
                <div><img className="fromLeft projects"
                    src="https://user-images.githubusercontent.com/88861538/270085765-251ab8ce-a137-434e-93bb-dffa36fba246.png"
                    alt="What's Your Food Temp" /></div>
            </div>
            <div></div>

            <div className="col-3 textCenter">
                <h2 className='projectTitle'>Social Network</h2>
                <a className='shorten1' target="_blank" rel="noopener noreferrer" href="https://watch.screencastify.com/v/N488YYVHrpByVGwSk7tI">
                    <p className="projectTitle">See it live here!</p> <br />
                </a>
                <a className='shorten2' target="_blank" rel="noopener noreferrer" href="https://github.com/josshy92/Social-Network">
                    <p className="projectTitle">Check out the Repository!</p>
                </a>
                <div><img className="projects"
                    src="https://user-images.githubusercontent.com/88861538/154174033-ff64c534-0daa-4820-9405-2bf4ac7c9faa.png"
                    alt="" /></div>
            </div>

            <div className="col-3 textCenter">
                <h2 className='projectTitle'>Note Taker</h2>
                <a className='shorten1' target="_blank" rel="noopener noreferrer" href="https://peaceful-hollows-01900.herokuapp.com/">
                    <p className="projectTitle">See it live here!</p> <br />
                </a>
                <a className='shorten2' target="_blank" rel="noopener noreferrer" href="https://github.com/josshy92/note-taker">
                    <p className="projectTitle">Check out the Repository!</p>
                </a>
                <div><img className="fromLeft projects"
                    src="https://user-images.githubusercontent.com/88861538/145732694-0f203557-16c2-4d59-9570-fca92c4188c1.png"
                    alt="What's Your Food Temp" /></div>
            </div>

            <div className="col-3 textCenter">
                <h2 className='projectTitle'>Poké App</h2>
                <a className='shorten1' target="_blank" rel="noopener noreferrer" href="https://josshy92.github.io/PokeApp/">
                    <p className="projectTitle">See it live here!</p> <br />
                </a>
                <a className='shorten2' target="_blank" rel="noopener noreferrer" href="https://github.com/josshy92/PokeApp#pokemon-randomizer-for-scarlet-and-violet-">
                    <p className="projectTitle">Check out the Repository!</p>
                </a>
                <div><img className="fromLeft projects"
                    src="https://user-images.githubusercontent.com/88861538/270082256-f60909ec-349b-4d17-b3a6-5458983a462b.png"
                    alt="What's Your Food Temp" /></div>
            </div>


        </div>
    )
}