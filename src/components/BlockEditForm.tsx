"use client";
import * as actions from "@/actions";
import Editor from '@monaco-editor/react';
import type {Block} from "@prisma/client";
import {useState} from "react";

interface BlockEditFormProps {
    block: {
        id: number;
        title: string;
        code: string;
    }
}

export default function BlockEditForm({block}: BlockEditFormProps) {
    const [code, setCode] = useState(block.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    };

    const editBlockAction = actions.editBlock.bind(null, block.id, code);

    return (
        <div className="mt-10">
            <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={block.code}
                options={{minimap: { enabled: false} }}
                onChange={handleEditorChange}
            /> 
            <form action={editBlockAction}>
                <button type="submit" className="p-2 border rounded">
                    Save
                </button>
            </form>
        </div>
    )
    
}
