export default function Post(){
    return(
        <div className="post">
        <div className="image">
        <img src ="https://images.nationalgeographic.org/image/upload/v1639146339/EducationHub/photos/pillars-of-creation.jpg" alt="pillars of creation"></img>
        </div>
        <div className="texts">
        <h2>Pillars of Creation</h2>
        <p className="info">
          <a classname="author">Shouvik Dey</a>
          <time>2023-12-09 15:32</time>
        </p>
        <p className="summary">Pillars of Creation is a photograph taken by the Hubble Space Telescope of elephant trunks of interstellar gas and dust in the Eagle Nebula, in the Serpens constellation, some 6,500–7,000 light-years (2,000–2,100 pc; 61–66 Em) from Earth.[1] These elephant trunks had been discovered by John Charles Duncan in 1920 on a plate made with the Mount Wilson Observatory 60-inch telescope.[2][3] They are named so because the gas and dust are in the process of creating new stars, while also being eroded by the light from nearby stars that have recently formed.[4]</p>
        </div>
      </div>
    );
}