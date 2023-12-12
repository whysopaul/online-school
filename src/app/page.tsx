import { mockCategories, mockCourses } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Welcome from '../../public/welcome.webp';
import '../css/home.css';

export default function Home() {
    return <>
        <main className='main-container'>
            <div className='home-welcome-container'>
                <div className='home-welcome-text'>
                    <h1>Сравниваем курсы онлайн-школ и сервисы</h1>
                    <p>Сравниваем онлайн-курсы по IT, бизнесу, менеджменту, Digital, маркетингу и графике, а также онлайн-сервисы. Выбирайте курсы по стоимости, продолжительности, программе обучения и другим критериям!</p>
                    <p><em>Категории и список курсов ниже:</em></p>
                </div>
                <div className='home-welcome-image'>
                    <Image src={Welcome} alt='' />
                </div>
            </div>
            <div className='home-categories-container'>
                {mockCategories.map(category => {
                    return <div className='home-category-block' key={category.id}>
                        <p className='home-category-name'>{category.name}</p>
                        <ul className='home-category-courses-list'>
                            {mockCourses.filter(course => course.category_id === category.id).map(course => {
                                return <li key={course.id}><Link href={'/course/' + course.id}>{course.name}</Link></li>
                            })}
                        </ul>
                    </div>
                })}
            </div>
        </main>
    </>
}