import Search from '@/components/Search';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import '../css/global.css';
import '../css/layout.css';

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
    title: 'online-school',
    description: 'Сравнение курсов онлайн-школ',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <header className='header'>
                    <div className='header-container'>
                        <div className='header-logo'>
                            <Link href={'/'}>Online-School</Link>
                        </div>
                        <nav className='header-navigation'>
                            <ul>
                                <li><Link href={'/'}>Блог</Link></li>
                                <li><Link href={'/'}>Статьи</Link></li>
                                <li><Link href={'/'}>Контакты</Link></li>
                            </ul>
                        </nav>
                        <Search />
                    </div>
                </header>
                {children}
                <footer className='footer'>
                    <div className='footer-container'>
                        <div className='footer-copyright'>
                            <p>2023. Online-School.info</p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
