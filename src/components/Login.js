import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <div>
            <Container>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                    <SignUp>
                        Get The Disney Bundle
                    </SignUp>
                    <Description>
                        Stream now.  <a href="#">Terms apply</a>.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
                    <DisneyPlusOnly>
                        Sign up for Disney+ only.
                    </DisneyPlusOnly>
                </CTA>
            </Container>
        </div>
    )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: url("/images/login-background-2.jpg");
        background-position: top;
        background-repeat: no-repeat;
        z-index: -1;
    }
`

const CTA = styled.div`
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    background-color: #0063e5;
    border-radius: 4px;
    color: #f9f9f9;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1.5px;
    margin: 8px 0 12px;
    padding: 17px 0;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    transition: all 250ms;

    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    color: hsla(0,0%,75.3%,.8);
    font-size: 11px;
    text-align: center;
    line-height: 1.5;

    a{
        color: #f9f9f9;
    }
`

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    width: 100%;
`

const DisneyPlusOnly = styled.a`
    font-size: 1.1em;
    line-height: 1.5;
    text-align: center;
    text-decoration: underline;
`