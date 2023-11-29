"use server";
import { db } from "@/app/db";

export async function getBlock(id) {
    const blockId = parseInt(id, 10);

    if (isNaN(blockId)) {
        throw new Error("Invalid block ID");
    }

    return await db.block.findUnique({
        where: { id: blockId },
        select: { title: true, code: true }
    });
}

