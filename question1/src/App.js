import CheckboxList from "./components/CheckboxComponent";
import Header from "./components/Header";

export default function App() {
  return (
    <>
    <section>
      <Header/>
    </section>
    <div className="flex justify-center">
    <section className="m-5 border-4 border-gray-500 w-max p-4 ">
      <CheckboxList/>
    </section>
    </div>
    </>
  )
}