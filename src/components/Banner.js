import React from 'react'
import {ArrowRightCircle}  from "react-bootstrap-icons";
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from "../assets/img/header-img.svg";
import {useState, useEffect } from "react";
 //import Container from 'react-bootstrap/esm/Container'

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Graphic Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const [index, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

  return (
    <div>
      <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Ayan `}<span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem libero dolore aspernatur. Alias saepe corporis molestiae, accusamus commodi temporibus inventore nulla minus quia vitae aliquid, earum libero in, hic ipsam.</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>

            </Row>
        </Container>
      </section>
    </div>
  )
}
