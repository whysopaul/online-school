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
                        <div className='header-search'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512" fill="currentColor"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </button>
                        </div>
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
