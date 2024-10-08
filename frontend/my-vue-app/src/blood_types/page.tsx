import Link from "next/link";
import BloodTypeTable from "../components/BloodTypeTable";

export default function BloodType() {
    return (
        <main className="container m-auto">
            <Link href="/">Home</Link>
            <Link href="/bloodTypes/create">Adicionar</Link>

            <h1>Lista de tipos sanguíneos</h1>

            <BloodTypeTable bloodTypes={[]} />
        </main>
    );
}