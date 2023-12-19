'use client'

import TextEditor from "@/components/TextEditor";
import { TCourse } from "@/lib/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { Editor as TinyMCEEditor } from 'tinymce';
import '../../../../css/article.css';
import mockCoursesData from '../../../../lib/courses_data.json';

export default function CourseEdit() {

    const params = useParams()
    const { id } = params

    // Copy of course_data.json (Temp)
    const mockCoursesProcessed = (): TCourse[] => JSON.parse(JSON.stringify(mockCoursesData))

    const courseData = mockCoursesProcessed().find(course => course.id === parseInt(id as string))

    const editorRef = useRef<TinyMCEEditor | null>(null)

    const onSave = () => {
        if (editorRef.current) {
            const editorContent = editorRef.current.getContent()

            console.log('Заголовок:', editorContent.slice(editorContent.indexOf('<h1>') + 4, editorContent.indexOf('</h1>')))
            console.log(editorContent)
        }
    }

    return <>
        <main className='main-container'>
            <div className='article-editing'>
                <h1>Редактирование статьи</h1>
                <div className='article-editing-buttons'>
                    <button className='article-editing-save-button' onClick={onSave}>Сохранить</button>
                    <Link href={'/course/' + parseInt(id as string)} className='article-editing-return-button'>Назад к статье</Link>
                </div>
            </div>
            <TextEditor
                rawHtml={`
                <article class='article-container'>
                    <h1>${courseData?.article.title}</h1>
                    <p>${courseData?.article.description}</p>
                    ${courseData?.article.content.map(contentSection => {
                    return `<section class='article-section-container' key=${contentSection.id}>
                            <h2>${contentSection.heading}</h2>
                            <p>${contentSection.course_link}</p>
                            <div class='article-section-image-container'>
                                <img src=${contentSection.image} alt='' />
                            </div>
                            <div class='article-section-price'>${contentSection.price}</div>
                            <div class='article-section-content'>${contentSection.text}</div>
                        </section>`
                })}
                </article>
                `}
                height={800}
                editorRef={editorRef}
            />
        </main>
    </>
}