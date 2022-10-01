import Loader from 'react-loaders';
import Navbar from '../Navbar'
import Swiper from 'swiper/react';

const bg = {
    width: '100%',
    height: '100%',
    background: '#fefefe'
}

const Home = () => {
    return (
        <>
            <div className='container home-page' style={bg}>
                <Navbar />
            </div>

            <Loader type="ball-pulse-sync" />
        </>
    )
}


<div class="swiper1 will_not_work">
    <!--  const swiper = new Swiper('.will_not_work', {-->


        <div class="swiper will_work">
            <!--  const swiper = new Swiper('.will_work', {-->


                let swiper_setting = {
                spaceBetween: 100,
            pagination: {
                el: '.swiper-pagination',
  }
}

            let swiper_setting_two = {
                spaceBetween: 200,
}

            let swiper_1 = new Swiper("[slider_one]", swiper_setting);

            let swiper_2 = new Swiper("[slider_two]", swiper_setting_two);

            html,
            body {
                background: #403F6B;
}

            .swiper {
                width: 100%;
            height: 100%;
            position: relative;
}

            .swiper-slide {
                text - align: center;
            font-size: 18px;
            background: #fff;
            height: 200px!important;
            /* Center slide text vertically */
            display: flex;
            margin-bottom: 40px!important;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
}

            <script src="https://unpkg.com/swiper@8.3.2/swiper-bundle.min.js"></script>
            <link href="https://unpkg.com/swiper@8.3.2/swiper-bundle.min.css" rel="stylesheet" />
            <!-- Slider main container -->
            <div class="swiper thumbnails-grid" slider_one>
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><a>Slide 1</a></div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    ...
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
            </div>

            <div class="swiper thumbnails-grid" slider_two>
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><a>Slide 1</a></div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
            </div>

            let swiper_setting = {
                spaceBetween: 100,
            pagination: {
                el: '.swiper-pagination',
  }
}

            var swiper_nodes = document.querySelectorAll('.swiper');

            /* loop throw */
            [].forEach.call(swiper_nodes, function(swiper_node) {
                // do whatever
                let swiper = new Swiper(swiper_node, swiper_setting);
  });

            html,
            body {
                background: #403F6B;
}

            main{
                display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 3px;
}
            .swiper {
                width: 100%;
            height: 100%;
            position: relative;
}

            .swiper-slide {
                text - align: center;
            font-size: 18px;
            background: #fff;
            height: 200px!important;
            /* Center slide text vertically */
            display: flex;
            margin-bottom: 40px!important;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
}

            <script src="https://unpkg.com/swiper@8.3.2/swiper-bundle.min.js"></script>
            <link href="https://unpkg.com/swiper@8.3.2/swiper-bundle.min.css" rel="stylesheet" />
            <!-- Slider main container -->

            <main>
                <div class="swiper thumbnails-grid" slider_one>
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><a>Slide 1</a></div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                        <div class="swiper-slide">Slide 4</div>
                        <div class="swiper-slide">Slide 5</div>
                        <div class="swiper-slide">Slide 6</div>
                        <div class="swiper-slide">Slide 7</div>
                        <div class="swiper-slide">Slide 8</div>
                        ...
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </div>

                <div class="swiper thumbnails-grid" slider_two>
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><a>Slide 1</a></div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </div>


                <div class="swiper thumbnails-grid" slider_two>
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><a>Slide 1</a></div>
                        <div class="swiper-slide">Slide 2</div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </div>

            </main>



            export default Home