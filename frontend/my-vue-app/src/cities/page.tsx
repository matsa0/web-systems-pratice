import Link from "next/link";
import CityTable from "../components/CityTable";


export default function Cidade() {

    return(
        <main className="container m-auto">

            <Link href="/">Home</Link>
            <Link href="/cidades/create">Adicionar</Link>

            <h1>Lista de cidades</h1>

            <CityTable />

        </main>

    )

}