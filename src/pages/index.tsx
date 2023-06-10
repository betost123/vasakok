import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { styled } from "styled-components";
import { Col, Container, Hidden, Row, Visible } from "react-grid-system";

export enum MediaQuery {
  XS = "@media (max-width: 576px)",
  SM = "@media (min-width: 576px)",
  MD = "@media (min-width: 768px)",
  LG = "@media (min-width: 992px)",
  XL = "@media (min-width: 1200px)",
  XXL = "@media (min-width: 1440px)",
}

const HorizontalSpacer = styled.div<{ spacing: number }>`
  height: ${(props) => `${props.spacing * 16}px`};
`;

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#ecebe4",
  overflowX: "hidden",
};

const HeroImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Footer = styled.div`
  width: 100vw;
  padding: 4rem 0;
  background-color: #1e1b1b;
  color: white;
`;

const Subtext = styled.div`
  font-size: 32px;
  font-weight: 700;

  ${MediaQuery.XS} {
    font-size: 22px;
    text-align: center;
  }
`;

const BookButton = styled.div`
  position: fixed;
  bottom: 120px;
  right: 0;
  background-color: black;
  padding: 1.5rem;
  border-bottom-left-radius: 24px;
  border-top-left-radius: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;

  ${MediaQuery.XS} {
    padding: 1rem;
  }
`;

const BookText = styled.div`
  color: white;
  top: 40%;
  left: 10%;
  font-size: 22px;
  text-align: center;
  font-weight: 500;

  ${MediaQuery.XS} {
    font-size: 16px;
  }
`;

const IntroTextBox = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  background-color: #ffffff7b;
  padding: 3rem;

  ${MediaQuery.XS} {
    padding: 1rem;
    bottom: 0px;
    right: 0px;
  }
`;

const LargeText = styled.div`
  font-size: 72px;
  font-weight: 700;

  ${MediaQuery.XS} {
    font-size: 36px;
    text-align: center;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Container>
        <HorizontalSpacer spacing={4} />
        <Row align="center">
          <Col md={4}>
            <img
              src="https://vasakok.se/wp-content/uploads/2023/05/logo-vasakok.png"
              alt="Vasa kök logga"
            />
          </Col>
        </Row>
        <HorizontalSpacer spacing={4} />
        <div style={{ position: "relative" }}>
          <HeroImage
            src="https://i0.wp.com/vasakok.se/wp-content/uploads/2023/05/Tenori-swe-2-1.jpg?w=2048&ssl=1"
            alt="Kök av VasaKök"
          />
          <IntroTextBox>
            <Row justify="center">
              <LargeText>50% rabatt på köksluckor*</LargeText>
            </Row>
            <HorizontalSpacer spacing={2} />
            <Row justify="center">
              <Subtext>Nya luckor på befintliga stommar i Vänersborg</Subtext>
            </Row>
            <HorizontalSpacer spacing={2} />
            <Row justify="center">
              <div>*Gäller på alla köksluckor, ej montering.</div>
            </Row>
          </IntroTextBox>
        </div>

        <HorizontalSpacer spacing={3} />
        <Row align="center">
          <Col md={6} style={{ padding: "2rem" }}>
            <Row>
              <div style={{ fontSize: 32, fontWeight: 600 }}>
                Vi byter luckor i Vänersborg
              </div>
            </Row>
            <HorizontalSpacer spacing={2} />
            <Row>
              <div style={{ fontSize: 24 }}>
                Kontakta våra köksexperter direkt eller bokat ett konstadfritt
                hembesök direkt via hemsidan
              </div>
            </Row>
            <HorizontalSpacer spacing={2} />
            <Row>
              <div style={{ fontSize: 24, fontWeight: 600 }}>
                <a href="mailto:info@vasakok.se" style={{ color: "black" }}>
                  info@vasakok.se
                </a>
              </div>
            </Row>
            <HorizontalSpacer spacing={2} />

            <Row>
              <div style={{ fontSize: 24, fontWeight: 600 }}>
                <a href="tel:+46703151136" style={{ color: "black" }}>
                  070-315 11 36
                </a>
              </div>
            </Row>
          </Col>
          <Col md={6}>
            <BoxImage
              src="https://i0.wp.com/vasakok.se/wp-content/uploads/2023/05/nastan-swing-40.jpeg?w=612&ssl=1"
              alt="Kök Vasa Kök Vänersborg"
            />
          </Col>
        </Row>
        <a href="https://vasakok.se/boka-hembesok/">
          <BookButton>
            <BookText>
              Boka <Hidden xs> kostnadsfritt </Hidden>hembesök
            </BookText>
          </BookButton>
        </a>
      </Container>
      <HorizontalSpacer spacing={3} />
      <Footer>
        <Container>
          <Row justify="between" gutterWidth={60}>
            <Col md={4}>
              <div style={{ fontSize: 32, fontWeight: 700 }}>VasaKök</div>
              <HorizontalSpacer spacing={2} />
              <div style={{ fontSize: 20 }}>
                Vi bygger hållbara och funktionella kök i Vänersborg.
              </div>
            </Col>
            <Col md={4}>
              <Visible xs>
                <HorizontalSpacer spacing={2} />
              </Visible>
              <a
                href="https://vasakok.se/koksluckor/"
                style={{ color: "white", textDecoration: "none" }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>Köksluckor</div>
              </a>
              <HorizontalSpacer spacing={2} />
              <a
                href="https://vasakok.se/inspiration/"
                style={{ color: "white", textDecoration: "none" }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>Inspiration</div>
              </a>
              <HorizontalSpacer spacing={2} />
              <a
                href="https://vasakok.se/vi-ar-vasakok/"
                style={{ color: "white", textDecoration: "none" }}
              >
                <div style={{ fontSize: 22, fontWeight: 700 }}>
                  Vi är VasaKök
                </div>
              </a>
            </Col>
            <Col md={4}>
              <Visible xs>
                <HorizontalSpacer spacing={2} />
              </Visible>
              <div style={{ fontSize: 22, fontWeight: 700 }}>Kontakt</div>
              <HorizontalSpacer spacing={2} />
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                <a href="mailto:info@vasakok.se" style={{ color: "white" }}>
                  info@vasakok.se
                </a>
              </div>
              <HorizontalSpacer spacing={2} />
              <div style={{ fontSize: 20, fontWeight: 600 }}>
                <a href="tel:+46703151136" style={{ color: "white" }}>
                  070-315 11 36
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
