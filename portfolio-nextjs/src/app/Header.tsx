import Image from 'next/image'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>

            <Image
              className="m-1"
              src="/logo.png"
              alt="PN Logo"
              width={64}
              height={64}
              priority
            />

            <Navbar/>

        </header>
    );
};

export default Header;