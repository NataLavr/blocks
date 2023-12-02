import { db } from "@/app/db";
import BlockEditForm from "@/components/BlockEditForm";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

interface BlockEditProps {
    params: {
        id: string
    }
}
export default async function BlockEditPage({params}: BlockEditProps) {

    const id = parseInt(params.id);
    const block = await db.block.findFirst({
        where: { id },
    });

    if (!block) {
        return notFound();
    }

     return (
        <div>
            <BlockEditForm block={block} />
        </div>

    )

  }