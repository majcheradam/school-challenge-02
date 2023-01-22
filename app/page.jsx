import Image from 'next/image'
import { Roboto } from '@next/font/google'
import Link from 'next/link'

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
        <div className="third-content">
          <div className="third-description">
            <h1>Nulla ut ea</h1>
            <p>
              Reprehenderit esse labore id veniam ut veniam non ex adipisicing
              amet ullamco dolor proident. Exercitation velit ea incididunt
            </p>
          </div>
          <div className="third-text">
            <div className="third-text-a">
              <p>Graphic Design</p>
              <p>UX Design</p>
              <p>Prototyping</p>
              <p>Webflow</p>
            </div>
            <div className="third-text-b">
              <p>Branding</p>
              <p>Coding</p>
              <p>Back-End</p>
            </div>
          </div>
        </div>
        <div className="fourth-content">
          <div className="fourth-text">
            <h1>Where teams design together</h1>
            <p>
              Lorem quis sunt magna dolor consectetur aliqua officia laborum
              reprehenderit
            </p>
          </div>
          <div className="fourth-image">
            <Image src="/Image2.png" alt="Image2" width="240" height="214" />
            <Image src="/Image3.png" alt="Image3" width="240" height="214" />
            <Image src="/Image4.png" alt="Image4" width="240" height="214" />
          </div>
        </div>
        <div className="fifth-content">
          <h1>Nulla commodo aliqua aliqua ut</h1>
          <div className="fifth-flex">
            <div className="fifth-item">
              <p>
                Reprehenderit esse labore id veniam ut veniam non ex adipisicing
                amet ullamco dolor proident. Exercitation velit ea incididunt
                sit qui do ipsum fugiat laboris minim nostrud dolor qui.
              </p>
              <div className="item-up">
                <p>Ralph Richards</p>
              </div>
              <div className="item-down">
                <p>UX Designer</p>
              </div>
            </div>
            <div className="fifth-item">
              <p>
                Reprehenderit esse labore id veniam ut veniam non ex adipisicing
                amet ullamco dolor proident. Exercitation velit ea incididunt
                sit qui do ipsum fugiat laboris minim nostrud dolor qui.
              </p>
              <div className="item-up">
                <p>Ralph Richards</p>
              </div>
              <div className="item-down">
                <p>UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="foother">
          <Image src="/Vector.png" alt="Figma" width="81" height="116" />
          <div className="information">
            <h4>cillum incididunt</h4>
            <div className="media">
              <Image
                src="/Twitter_icon.png"
                alt="Twitter"
                width="24"
                height="24"
              />
              <Image
                src="/Facebook_icon.png"
                alt="Facebook"
                width="15"
                height="24"
              />
            </div>
            <p>Nostrud aliquip laboris © 2020 Wirefigma</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
