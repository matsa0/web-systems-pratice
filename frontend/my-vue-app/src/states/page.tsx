import Link from "next/link";
import StateTable from "../components/StateTable";

export default function State() {
    return (
        <main className="container m-auto">
            <Link href="/">Home</Link>
            <Link href="/states/create">Adicionar</Link>

            <h1>Lista de estados</h1>

            <StateTable states={[]} />
        </main>
    );
}