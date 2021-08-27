import React from 'react';
import PropTypes from 'prop-types';
import './slide.css'
import { useState } from 'react';
import { useEffect } from 'react';

Slide.propTypes = {
    listPhoto: PropTypes.array
};

function Slide(props) {
    const [slide, setSlide] = useState(0);
    const [select, setSlect] = useState(false)
    useEffect(() => {
        const max = 3
        if(select){
            return
        }
        setTimeout(() => {
            if (max - 1 === slide) {
                setSlide(0)
                return
            }
            setSlide(slide + 1)
        }, 6000);
    })
    return (
        <>
            <div className="slider">
                <div className="slide" style={{ marginLeft: `${slide * -100}%` }} >
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <div className="info">
                        <h1>Good food is wise <p>medicine</p></h1>
                        <p>
                            Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Beatae rerum voluptatibus
                            recusandae adipisci. Sequi, ea repudiandae excepturi nam aliquam est
                            ab laudantium molestias dolores modi officiis, eum nihil magnam atque!
                        </p>
                    </div>
                </div>
                <div className="slide ">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <div className="info">
                        <h1>Love at <p>first bite</p></h1>
                        <p>
                            Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Beatae rerum voluptatibus
                            recusandae adipisci. Sequi, ea repudiandae excepturi nam aliquam est
                            ab laudantium molestias dolores modi officiis, eum nihil magnam atque!
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="" />
                    <div className="info">
                        <h1>The belly rules <p>the mind</p></h1>
                        <p>
                            Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Beatae rerum voluptatibus
                            recusandae adipisci. Sequi, ea repudiandae excepturi nam aliquam est
                            ab laudantium molestias dolores modi officiis, eum nihil magnam atque!
                        </p>
                    </div>
                </div>
                <div className='dot'>
                    <div className={slide === 0 ? 'dot__item active' : 'dot__item'}
                        onClick={() => {
                            setSlide(0)
                            setSlect(true)
                        }}
                    />
                    <div className={slide === 1 ? 'dot__item active' : 'dot__item'}
                        onClick={() => {
                            setSlect(true)
                            setSlide(1)
                        }}
                    />
                    <div className={slide === 2 ? 'dot__item active' : 'dot__item'}
                        onClick={() => {
                            setSlect(true)
                            setSlide(2)
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default Slide;