import { db } from "@/app/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";

interface BlockShowPageProps {
    params: {id: string};
}

export default async function BlockShowPage({params}: BlockShowPageProps ) {
    const block = await db.block.findFirst({
        where: { id: parseInt(params.id) },
    });

    if (!block) {
        return notFound();
    }

const deleteBlockAction = actions.deleteBlock.bind(null, block.id)
    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <div className="flex-col">
                <h1 className="text-xl font-bold">{block.title}</h1>
            </div>
                <div className="flex gap-4">
                <Link className="p-2 border" href={`/`}>Back</Link>
                    <Link className="p-2 border" href={`/blocks/${block.id}/edit`}>Edit</Link>
                    <form action={deleteBlockAction}>
                      <button className="p-2 border rounded">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 rounded bg-gray-200 border-gray-200">{block.code}</pre>
        </div>
    )
}