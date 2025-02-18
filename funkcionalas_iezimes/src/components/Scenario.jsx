import "../App.css";
function Scenario() {
    return (
        <>
            <div className="w-full h-full grid p-4 m-4 bg-stone-700 rounded text-white items-center">
                <h1 className="text-xl">Scenārijus</h1>
                <p>Paraugs:</p>
                <div>
                <p> - Kad iedod [Nosacijumu]</p>
                <p> - Kad [Darbība izdarīta]</p>
                <p> - Tad [rezultāts tiek parādīts]</p>
                </div>
            </div>
        </>
    )
}
export default Scenario;