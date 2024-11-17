import './qualification.css'
import { useState } from 'react';


const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>

                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">

                    <div className={toggleState === 1 ?
                        "qualification__content qualification__content-active"
                        : "qualification__content "}
                    >

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelor of Engineering - Computer Engineering</h3>
                                <span className="qualification__subtitle">khwopa College of Engineering - TU</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2021 - Present</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Secondary School</h3>
                                <span className="qualification__subtitle">United Academy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">2018 - 2020</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>



                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__content-active"
                        : "qualification__content "}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Web Developer</h3>
                                <span className="qualification__subtitle">AR Treasure Hunt - 2024</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Oct 2024 - Present</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Deputy Campus Director</h3>
                                <span className="qualification__subtitle">Hult Prize at Khwopa College of Engineering</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Dec 2023 - Feb 2024</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Semi Finalist</h3>
                                <span className="qualification__subtitle">Hult Prize at IOE, Pulchowk Campus</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Dec 2022 - Feb 2023</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Qualification