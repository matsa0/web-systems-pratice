import Link from "next/link";
import PersonTable from "../components/PersonTable";

export default function Person() {
    return (
        <main className="container m-auto">
            <Link href="/">Home</Link>
            <Link href="/persons/create">Adicionar</Link>

            <h1>Lista de pessoas</h1>

            <PersonTable persons={[]} />
        </main>
    );
}