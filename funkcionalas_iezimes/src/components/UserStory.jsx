import "../App.css";
function UserStory() {
    return (
        <>
            <div className="w-full h-full grid p-4 m-4 bg-stone-700 rounded text-white items-center">
                <h1 className="text-xl">Lietotājstāstus (angļu v. User Story)</h1>
                <p>Paraugs:</p>
                <div>
                    <p>- Kā [Lietotājs]</p>
                    <p>- Es gribu [specifisku iznākumu]</p>
                    <p>- Lai tiktu [lidz labajam rezultātam]</p>
                </div>
            </div>
        </>
    )
}
export default UserStory;