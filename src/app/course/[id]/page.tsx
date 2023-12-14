import { mockCourses } from "@/lib/data";
import { TCourse } from "@/lib/types";
import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";
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

    const IS_ADMIN = true

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
                {IS_ADMIN && <div className='article-floating-edit-button'>
                    <Link href={'/course/' + parseInt(courseId) + '/edit'}>
                        <svg xmlns="http://www.w3.org/2000/svg" height='32' width='32' viewBox="0 0 512 512" fill='#fff'><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                    </Link>
                </div>}
            </article>
        </main>
    </>
}