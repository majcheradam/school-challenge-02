import Image from 'next/image'
import { Roboto } from '@next/font/google'
import Link from 'next/Link'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin-ext'],
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <header>
        <div className="header-cointeiner">
          <div className="flex-box" id="a">
            <Link href="/#">
              <Image
                src="/OpenAI_LL_B.png"
                alt="Logo"
                width="120"
                height="30"
              />
            </Link>
          </div>
          <div className="flex-box" id="b">
            <p>
              <Link href="/#">Product</Link>
            </p>
            <p>
              <Link href="/#">About</Link>
            </p>
            <p>
              <Link href="/#">Contacts</Link>
            </p>
          </div>
          <div className="flex-box" id="c">
            <button>Download Now</button>
          </div>
        </div>
      </header>

      <main>
        <div className="start-content">
          <h1>Fast and powerful, just like your work</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="second-content">
          <div className="second-text">
            <h1>Nulla commodo aliqua aliqua ut</h1>
            <div className="mini-text">
              <p>
                Lorem quis sunt magna dolor consectetur aliqua officia laborum
                reprehenderit
              </p>
              <div className="read">
                <p>
                  <Link href="/#">Read more</Link>
                </p>
                <Image src="/Arrow.png" alt="" width="14" height="14" />
              </div>
            </div>
            <div className="mini-text">
              <p>
                Lorem quis sunt magna dolor consectetur aliqua officia laborum
                reprehenderit
              </p>
              <div className="read">
                <p>
                  <Link href="/#">Read more</Link>
                </p>
                <Image src="/Arrow.png" alt="" width="14" height="14" />
              </div>
            </div>
          </div>
          <Image
            src="/Image1.png"
            alt="Image1"
            width="534"
            height="534"
            className="img"
          />
        </div>
      </main>
    </div>
  )
}
