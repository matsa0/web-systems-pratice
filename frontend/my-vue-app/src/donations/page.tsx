import Link from "next/link";
import DonationTable from "../components/DonationTable";

export default function Donation() {
    return (
        <main className="container m-auto">
            <Link href="/">Home</Link>
            <Link href="/donations/create">Adicionar</Link>

            <h1>Lista de doações</h1>

            <DonationTable donations={[]} />
        </main>
    );
}