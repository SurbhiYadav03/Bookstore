import data from "./Data";
import Card from "./Card";

function App() {
    return (
        <>
            <div className='main' style={{ backgroundColor: 'white', height: '70px' }}>
                <h1 style={{ textAlign: 'center', fontFamily:'revert', marginTop: '5px', padding: '10px', textShadow: '2px 2px 2px black' }}>
                📚 READING CORNER 📚
                </h1>
            </div>

            {/* <Card bookimg='img1.jpg' name='Naruto' author='Masashi Kishimoto' price='₹548' />
            <Card bookimg='img2.jpg' name='Bhagwat Geeta' author='RR Varma' price='₹598' />
            <Card bookimg='img3.jpg' name='A Thousand Splendid Suns' author='Khaleo Hosseini' price='₹598' />
            <Card bookimg='img4.jpg' name='Ikigai' author=' Francesc Miralles ' price='₹391' />
            <Card bookimg='img5.jpg' name='Rich Dad Poor Dad' author='Robert T. Kitosaki' price='₹598' />
            <Card bookimg='img6.jpg' name='Harry Potter' author='JK Rowling' price='₹344' /> */}

            {/* another way */}

            {data.map((val) => {
                return (
                    <Card key={val.id} bookimg={val.bookimg} name={val.name} author={val.author} price={val.price} link={val.link} />
                )
            })}

        </>
    );
}

export default App;