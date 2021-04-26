import Hello from '../comp/Hello';

function Home() {
    return (
        <div >
            <div className="Cont-border">
                <Hello greeting="Welcome" name="!"/>
                <h1>This is the home page</h1>
            </div>
            <div className="Cont">
            
            </div>
        </div>
    )
}

export default Home;