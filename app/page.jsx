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
      <video src="Laptop.mp4" autoPlay muted loop className="video" />

      <header>
        <div className="header-up">
          <p>
            <Link href="https://chat.openai.com">
              Introducing ChatGPT research release
            </Link>
          </p>
          <p>
            <Link href="https://chat.openai.com">
              <span>Try</span>
            </Link>
            <Image src="/Arrow_U.png" alt="" width="10" height="10" />
          </p>
          <p>
            <Link href="https://openai.com/blog/chatgpt">
              <span>Learn more</span>
            </Link>
            <Image src="/Arrow_L.png" alt="" width="10" height="10" />
          </p>
        </div>
        <div className="header-down">
          <Link href="https://openai.com">
            <Image
              src="/OpenAI_LL.png"
              alt="logo"
              width="120"
              height="30"
              className="logo"
            />
          </Link>
          <div className="betweena"></div>
          <nav>
            <div className="nav-bar">
              <p>
                <Link href="https://openai.com/api/">API</Link>
              </p>
              <p>
                <Link href="https://openai.com/research/">RESEARCH</Link>
              </p>
              <p>
                <Link href="https://openai.com/blog/">BLOG</Link>
              </p>
              <p>
                <Link href="https://openai.com/about/">ABOUT</Link>
              </p>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="conteiner">
          <div className="content">
            <h1>Join us in shaping the future of technology.</h1>
            <div className="buttons">
              <Link href="/laptop.mp4">
                <button className="button">
                  <Image src="/Arrow_BL.png" alt="" width="10" height="10" />
                  WATCH VIDEO
                </button>
              </Link>
              <p>
                <Link href="https://openai.com/careers/">VIEW CAREERS</Link>
                <Image src="/Arrow_L.png" alt="" width="20" height="10" />
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="foother">
          <div className="foother-cointeiner">
            <Image src="/OpenAI_LL.png" alt="logo" width="120" height="30" />
            <div className="flex-box">
              <div className="item">
                <ul>
                  <p>FEATURED</p>
                  <li>
                    <Link href="https://openai.com/blog/chatgpt/">ChatGPT</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/dall-e-2/">DALL·E 2</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/blog/whisper/">Whisper</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/alignment/">Alignment</Link>
                  </li>
                  <li>
                    <Link href="https://openai.fund">Startup Fund</Link>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul>
                  <p>API</p>
                  <li>
                    <Link href="https://openai.com/api/">Overview</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/api/pricing/">Pricing</Link>
                  </li>
                  <li>
                    <Link href="https://beta.openai.com/examples/">
                      Examples
                    </Link>
                  </li>
                  <li>
                    <Link href="https://beta.openai.com/docs/">Docs</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/api/policies/service-terms/">
                      Terms & Policies
                    </Link>
                  </li>
                  <li>
                    <Link href="https://status.openai.com">Status</Link>
                  </li>
                  <li>
                    <Link href="https://beta.openai.com/login/">Log in</Link>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul>
                  <p>BLOG</p>
                  <li>
                    <Link href="https://openai.com/blog/">Index</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/blog/tags/research/">
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/blog/tags/announcements/">
                      Announcements
                    </Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/blog/tags/events/">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/blog/tags/milestones/">
                      Milestones
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="item">
                <ul>
                  <p>INFORMATION</p>
                  <li>
                    <Link href="https://openai.com/about/">About Us</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/charter/">Our Charter</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/research/">
                      Our Research
                    </Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/publications/">
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/newsroom/">Newsroom</Link>
                  </li>
                  <li>
                    <Link href="https://openai.com/careers/">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="end">
            <p>
              <Link href="https://openai.com">OpenAI © 2015-2023</Link>
            </p>
            <p>
              <Link href="https://openai.com/privacy/">Privacy Policy</Link>
            </p>
            <p>
              <Link href="https://openai.com/terms/">Terms of Use</Link>
            </p>
            <div className="bettwenb"></div>
            <div className="media">
              <Image
                src="/Twitter_icon.png"
                alt="Twitter"
                width="23"
                height="23"
              />
              <Image
                src="/Youtube_icon.png"
                alt="Youtobe"
                width="23"
                height="23"
              />
              <Image
                src="/Github_icon.png"
                alt="Github"
                width="23"
                height="23"
              />
              <Image
                src="/Soundcloud_icon.png"
                alt="Soundcloud"
                width="23"
                height="23"
              />
              <Image
                src="/Linkedin_icon.png"
                alt="Linkedin"
                width="23"
                height="23"
              />
              <Image
                src="/Facebook_icon.png"
                alt="Facebook"
                width="23"
                height="23"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
