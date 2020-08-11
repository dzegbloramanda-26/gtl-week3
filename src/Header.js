import React from 'react'

import './CSS/components.css'
import './CSS/global.css'
import './CSS/layout.css'
import './CSS/sample-wallpaper.css'

import Venom1 from './images/venom-1.jpg'
import Hulk from './images/hulk-1.jpg'
import Venom2 from './images/venom-2.jpg'

function Header() {
        return(
            <header className="header">
            <div className="container">
                    <h1 className="title">Mavel's Fearless</h1>
                    <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                molestias earum eveniet.</p>
                    <div className="search-bar">
                        <input type="search" placeholder="Search" />
                    </div>

                    <div className="sample-wallpaper">
                        <article className="wallpaper">
                            <img src={Venom1} alt="Wallpaper #1" class="wallpaper" />
                        </article>

                        <article className="wallpaper">
                            <img src={Hulk} alt="Wallpaper #1" className="wallpaper" />
                        </article>

                        <article className="wallpaper">
                            <img src={Venom2} alt="Wallpaper #1" class="wallpaper" />
                        </article>
                    </div>
                </div>
            </header>

)

}
export default Header