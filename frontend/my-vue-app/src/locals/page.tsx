import Link from "next/link";
import LocalTable from "../components/LocalTable";

export default function Local() {
    return (
        <main className="container m-auto">
            <Link href="/">Home</Link>
            <Link href="/locals/create">Adicionar</Link>

            <h1>Lista de locais</h1>

            <LocalTable locals={[]} />
        </main>
    );
}