import "./App.css";
import UserStory from "./components/UserStory";
import Scenario from "./components/Scenario";
import Path from "./components/Path";
import Feature from "./components/Feature";
import Rubik from "./components/Rubik";
function App() {

  return (
    <>
    
    <div className="container mx-auto p-4 flex flex-col items-center">
    <h1 className="text-[50px]  text-green-600 font-extrabold font-serif">Gherkin</h1>
      <table border="1" className="bg-stone-700 text-white border-collapse border border-white">
        <thead className="bg-green-600">
          <tr>
            <th className="border border-white p-2">Keyword</th>
            <th className="border border-white p-2">Equivalent(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Feature</td>
            <td className="border border-white p-2">Funkcionālā iezīme</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Background</td>
            <td className="border border-white p-2">Konteksts</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2 line-through">Rule</td>
            <td className="border border-white p-2 line-through" >Noteikums</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Scenario</td>
            <td className="border border-white p-2">Scenārijs</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Scenario outline</td>
            <td className="border border-white p-2">Scenārijs pēc parauga</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Examples</td>
            <td className="border border-white p-2">Piemēri</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Given</td>
            <td className="border border-white p-2">Kad</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">When</td>
            <td className="border border-white p-2">Ja</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Then</td>
            <td className="border border-white p-2">Tad</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">And</td>
            <td className="border border-white p-2">Un</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">But</td>
            <td className="border border-white p-2">Bet</td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="border border-white p-2">Or</td>
            <td className="border border-white p-2">Vai</td>
          </tr>
        </tbody>
      </table>
      <Feature />
      <UserStory />
      <Scenario />
      <Rubik />
      <Path />
      </div>
    </>
  )
  
}

export default App
