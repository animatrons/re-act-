import Hello from '../comp/Hello';

function About() {
    return (
        <div >
            <div className="Cont-border">
                <Hello greeting="Goodbye" name="..."/>
                <h1>This is the about page</h1>
            </div>
        </div>
    )
}

export default About;