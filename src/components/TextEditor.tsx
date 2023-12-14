'use client'

import { Editor } from "@tinymce/tinymce-react";
import { MutableRefObject } from "react";
import { Editor as TinyMCEEditor } from 'tinymce';

export default function TextEditor({ rawHtml, height, editorRef }: { rawHtml: string, height: number, editorRef: MutableRefObject<TinyMCEEditor | null> }) {
    return <>
        <Editor
            tinymceScriptSrc={'/tinymce/tinymce.min.js'}
            initialValue={rawHtml}
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
                height,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', /* 'charmap', */
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    /* 'insertdatetime', */ 'media', 'table', 'preview', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'image | removeformat | code | help | fullscreen',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
    </>
}