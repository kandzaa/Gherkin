import "../App.css";
function Path() {
    return (
        <>
            <div className="w-full h-full grid p-4 m-4 bg-stone-700 rounded text-white items-center">
                <h1 className="text-xl text-green-600">Labais Scenārijs (angļu v. Happy Path Scenario)</h1>
                <p>Paraugs:</p>
                <div>
                    <p> - Lietotajs pievienojas ka autors</p>
                    <p> - Un aiziet uz profila skatu</p>
                    <p> - Un augšupielādē bildi</p>
                    <p> - Kad izvēlas bildi no sava datora</p>
                    <p> - Un autors pievieno bildi</p>
                    <p> - Tad viņš redz ka bilde ir redzema kā autora profila bilde</p>
                </div>
            </div>
        </>
    )
}
export default Path;