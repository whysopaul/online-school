import { mockCourses } from "@/lib/data";
import { TCourse } from "@/lib/types";
import parse from 'html-react-parser';
import Image from "next/image";
import '../../../css/article.css';
import Error from "./error";

export function generateStaticParams() {
    return mockCourses.map((course) => ({
        id: course.id.toString()
    }))
}

export default function Course({ params }: { params: { id: string } }) {

    const courseId = params.id
    const courseData: TCourse = mockCourses.find(course => course.id === parseInt(courseId))!

    if (!courseData) return <Error />

    return <>
        <main className='main-container'>
            <article className='article-container'>
                <h1>{courseData.article.title}</h1>
                <p>{courseData.article.description}</p>
                {courseData.article.content.map(contentSection => {
                    return <section className='article-section-container' key={contentSection.id}>
                        <h2><a href={contentSection.course_link} target='_blank'>{contentSection.heading}</a></h2>
                        <a href={contentSection.course_link} target='_blank'>{contentSection.course_link}</a>
                        <div className='article-section-image-container'>
                            <Image src={contentSection.image} fill style={{ objectFit: 'contain', objectPosition: 'left' }} alt='' />
                        </div>
                        <div className='article-section-price'>{contentSection.price && parse(contentSection.price)}</div>
                        <div className='article-section-content'>{contentSection.text && parse(contentSection.text)}</div>
                    </section>
                })}
            </article>
        </main>
    </>
}