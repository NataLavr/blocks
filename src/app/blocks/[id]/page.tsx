"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { getBlock } from "./getBlock.server";
import { deleteBlock } from "./edit/deleteBlock";
import { db } from "@/app/db";
import { redirect } from "next/navigation";

export default function BlockShowPage({ params }:any) {
    const [block, setBlock] = useState(null);

    useEffect(() => {
        const fetchBlock = async () => {
            const blockData = await getBlock(parseInt(params.id));
            setBlock(blockData);
        };

        fetchBlock();
    }, [params.id]);

    if (!block) {
        return <p>Loading or Block not found...</p>;
    }

    return (
        <div>
            <Link href="/" className="flex justify-center w-20 my-5 items-center p-2 border rounded bg-blue-300 hover:bd-blue-500">
                <div>Back</div>
            </Link>
            <h3>Title: {block.title}</h3>
            <p>Code: {block.code}</p>
            <div className="flex justify-left gap-5">
            <Link href={`/blocks/${params.id}/edit`} className="flex justify-center w-20 my-5 items-center p-2 border rounded bg-green-300 hover:bd-green-500">
                <div>Edit</div>
            </Link>
            <button 
                className="flex justify-center w-20 my-5 items-center p-2 border rounded bg-red-300 hover:bd-red-500"
                type="button"
                onClick={deleteBlock}
            >Delete
            </button>
            </div>
        </div>
    );
}