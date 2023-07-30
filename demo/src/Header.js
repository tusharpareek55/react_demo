import './header.css'
import images from './logo.svg'

export function Header() {
    return (
        <header>
            <nav>
                <div class="logo">
                    <a href="#">
                        <img src={images} alt="Logo"></img>
                    </a>
                </div>
                <ul class="left-nav">
                    <li>
                        <a href="#">Products<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                        </svg></a>

                        <ul class="dropdown">
                            <li><a href="#">Mission</a></li>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">Values</a></li>
                        </ul>
                    </li>
                    <li><a href="#">For team<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                    </svg></a>
                        <ul class="dropdown">
                            <li><a href="#">Mission</a></li>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">Values</a></li>
                        </ul></li>
                    <li><a href="#">Support<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                    </svg></a>
                        <ul class="dropdown">
                            <li><a href="#">Mission</a></li>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">Values</a></li>
                        </ul></li>
                </ul>

                <ul class='right-nav'>
                    <li> <button>Learn more</button></li>
                    <li><a href="#" style={{ color: 'rgb(43, 114, 202)' }}>Buy Now</a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></a></li>
                    <li id="vr"></li>

                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}