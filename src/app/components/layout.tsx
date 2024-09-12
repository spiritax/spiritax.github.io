import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/giveaway">Giveaway</Link>
                    </li>
                    <li>
                        <Link href="/links">Links</Link>
                    </li>
                    <li>
                        <Link href="/star-citizen">Star Citizen</Link>
                    </li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;