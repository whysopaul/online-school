import { TCourse } from '@/lib/types';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import '../../css/search.css';
import mockCoursesData from '../../lib/courses_data.json';

export default function SearchResults({ searchParams }: { searchParams: { query?: string } }) {

    const mockCoursesProcessed: TCourse[] = JSON.parse(JSON.stringify(mockCoursesData))

    if (!searchParams.query) {
        redirect('/')
    }

    return <>
        <main className='main-container'>
            <div className='search-results-heading'>
                <h1>Результаты поиска по запросу {searchParams.query}:</h1>
            </div>
            <div className='search-results-container'>
                {mockCoursesProcessed.filter(course => JSON.stringify(course).includes(searchParams.query!.toLocaleLowerCase())).map(course => {
                    return <div className='search-results-item' key={course.id}>
                        <h2><Link href={'/course/' + course.id}>{course.article.title}</Link></h2>
                        <p>{course.article.description}</p>
                    </div>
                })}
            </div>
        </main>
    </>
}