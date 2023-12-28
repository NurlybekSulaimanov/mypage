import React, { Component } from "react";
import guitar from "./photos/me.jpg";
import sun from "./photos/sun.png";
import moon from "./photos/moon.png";
import homeIconGrey from "./photos/house-grey.png";
import homeIconLightGrey from "./photos/house-light-grey.png";
import homeIconWhite from "./photos/house-white.png";
import aboutGrey from "./photos/person-grey.png";
import aboutLightGrey from "./photos/person-light-grey.png";
import aboutWhite from "./photos/person-white.png";
import portfolioGrey from "./photos/briefcase-grey.png";
import portfolioLightGrey from "./photos/briefcase-light-grey.png";
import portfolioWhite from "./photos/briefcase-white.png";
import arrow from "./photos/right-arrow.png";
import phoneImage from "./photos/phone-screen.png";
import downloadIconWhite from "./photos/download.png";
import Chart from "react-apexcharts";
import newsProject from "./photos/News_homepage.jpg";
import browser from "./photos/browser.png";
import browserWhite from "./photos/browserWhite.png";
import git from "./photos/git.png";
import gitWhite from "./photos/gitWhite.png";
import languages from "./photos/languages.png";
import languagesWhite from "./photos/languagesWhite.png";
import project from "./photos/project.png";
import projectWhite from "./photos/projectWhite.png";
import closeIcon from "./photos/close.png";
import closeWhiteIcon from "./photos/closeWhite.png";
import toDoList from "./photos/ToDo_list.jpg";
import trnmnt from "./photos/Tournament.jpg";
import advice from "./photos/advice.jpg";
import tipCalcImg from "./photos/tipCalc.jpg";
import rate from "./photos/rate.jpg";
import nft from "./photos/nft.jpg";
import qr from "./photos/QR.jpg";
import compon from "./photos/compon.jpg";
import griddd from "./photos/grid.jpg";
class Home extends Component {
  state = {
    shownProject: {},
    showProject: false,
    myProjects: {
      newsHomepage: {
        projName: "newsHomepage",
        name: "News-Homepage",
        image: newsProject,
        type: "Web page",
        langs: "HTML, CSS, Javascript",
        repos: "https://github.com/NurlybekSulaimanov/news-homepage-main",
        prev: "https://nurlybeksulaimanov.github.io/news-homepage-main/",
        show: false,
        hover: false,
      },
      DoList: {
        projName: "DoList",
        name: "ToDo-List",
        image: toDoList,
        type: "React App",
        langs: "HTML, CSS, Javascript",
        repos: "https://github.com/NurlybekSulaimanov/to-do-list",
        prev: "https://nurlybeksulaimanov.github.io/to-do-list/",
        show: false,
        hover: false,
      },
      tournam: {
        projName: "tournam",
        name: "Tournament-App",
        image: trnmnt,
        type: "React App",
        langs: "HTML, Javascript",
        repos: "https://github.com/NurlybekSulaimanov/tournament/",
        prev: "https://nurlybeksulaimanov.github.io/tournament/",
        show: false,
        hover: false,
      },
      advice: {
        projName: "advice",
        name: "Advice-App",
        image: advice,
        type: "Web Component",
        langs: "HTML, CSS, Javascript",
        repos:
          "https://github.com/NurlybekSulaimanov/advice-generator-app-main/",
        prev: "https://nurlybeksulaimanov.github.io/advice-generator-app-main/",
        show: false,
        hover: false,
      },
      tipCalc: {
        projName: "tipCalc",
        name: "Tip-Calculator",
        image: tipCalcImg,
        type: "Web App",
        langs: "HTML, CSS, Javascript",
        repos: "https://github.com/NurlybekSulaimanov/tip-calculator-app-main/",
        prev: "https://nurlybeksulaimanov.github.io/tip-calculator-app-main/",
        show: false,
        hover: false,
      },
      rating: {
        projName: "rating",
        name: "Interactive-Rating",
        image: rate,
        type: "Web Component",
        langs: "HTML, CSS, Javascript",
        repos:
          "https://github.com/NurlybekSulaimanov/interactive-rating-component-main/",
        prev: "https://nurlybeksulaimanov.github.io/interactive-rating-component-main/",
        show: false,
        hover: false,
      },
      nft: {
        projName: "nft",
        name: "Nft-Card",
        image: nft,
        type: "Web Component",
        langs: "HTML, CSS",
        repos:
          "https://github.com/NurlybekSulaimanov/nft-preview-card-component-main/",
        prev: "https://nurlybeksulaimanov.github.io/nft-preview-card-component-main/",
        show: false,
        hover: false,
      },
      productCard: {
        projName: "productCard",
        name: "product-Component",
        image: compon,
        type: "Web Component",
        langs: "HTML, CSS",
        repos:
          "https://github.com/NurlybekSulaimanov/product-preview-card-component-main/",
        prev: "https://nurlybeksulaimanov.github.io/product-preview-card-component-main/",
        show: false,
        hover: false,
      },
      QR: {
        projName: "QR",
        name: "QR-Code-Component",
        image: qr,
        type: "Web Component",
        langs: "HTML, CSS",
        repos: "https://github.com/NurlybekSulaimanov/qr-code-component-main/",
        prev: "https://nurlybeksulaimanov.github.io/qr-code-component-main/",
        show: false,
        hover: false,
      },
      gridd: {
        projName: "gridd",
        name: "Testimonials-Component",
        image: griddd,
        type: "Web Component",
        langs: "HTML, CSS",
        repos:
          "https://github.com/NurlybekSulaimanov/testimonials-grid-section-main/",
        prev: "https://nurlybeksulaimanov.github.io/testimonials-grid-section-main/",
        show: false,
        hover: false,
      },
    },
    pages: {
      HOME: {
        name: "HOME",
        width: "135px",
        status: true,
        hover: false,
        iconGrey: homeIconGrey,
        iconLightGrey: homeIconLightGrey,
        iconWhite: homeIconWhite,
      },
      ABOUT: {
        name: "ABOUT",
        width: "145px",
        status: false,
        hover: false,
        iconGrey: aboutGrey,
        iconLightGrey: aboutLightGrey,
        iconWhite: aboutWhite,
      },
      PORTFOLIO: {
        name: "PORTFOLIO",
        width: "185px",
        status: false,
        hover: false,
        iconGrey: portfolioGrey,
        iconLightGrey: portfolioLightGrey,
        iconWhite: portfolioWhite,
      },
    },
    darkMode: false,
    screenWidth: window.innerWidth,
  };
  componentDidUpdate() {
    console.log(this.state.shownProject);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
  };
  sideIcons() {
    const { pages, darkMode, screenWidth } = this.state;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(10, 10%)",
          marginRight: "1rem",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            zIndex: "5",
            margin: "1rem 2rem 1rem 1rem",
          }}
        >
          <button
            style={{
              marginRight: screenWidth <= 991 ? "1rem" : "0",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              cursor: "pointer",
              border: "none",
              backgroundColor: darkMode ? "#656565" : "#EEEEEE",
            }}
            onClick={() => {
              this.setState({ darkMode: !darkMode });
            }}
          >
            <img
              src={darkMode ? sun : moon}
              alt="light-mode"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>
        <div
          style={
            screenWidth > 991
              ? {
                  position: "fixed",
                  right: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  top: "50%",
                  transform: "translateY(-50%)",
                }
              : {
                  display: "flex",
                  bottom: "0",
                  left: "0",
                  right: "auto",
                  position: "absolute",
                  width: "100%",
                  justifyContent: "space-around",
                  background: darkMode ? "#2B2A2A" : "#FFFFFF",
                  height: "60px",
                  alignItems: "center",
                  boxShadow: darkMode ? "none" : "0 0 47px #dedede",
                  zIndex: "9999",
                }
          }
        >
          {Object.values(pages).map((page) => (
            <div
              style={{
                position: "relative",
                marginBottom: screenWidth >= 991 ? "80px" : "0",
              }}
              key={page.name}
            >
              <div
                style={{
                  width: page.hover ? page.width : `calc(${page.width} - 35px)`,
                  height: "50px",
                  border: "none",
                  backgroundColor: page.hover
                    ? "#FFB400" // hover true, always set color to #FFB400
                    : darkMode
                    ? "#656565" // darkMode true and hover false
                    : page.status
                    ? "#FFB400" // darkMode false and home true
                    : "#EEEEEE", // darkMode false and home false
                  borderRadius: "30px",
                  display: screenWidth <= 991 ? "none" : "flex",
                  opacity: page.hover ? "1" : "0",
                  justifyContent: "flex-start",
                  paddingLeft: "30px",
                  alignItems: "center",
                  transition: "width 0.3s",
                  position: "absolute",
                  right: ".5rem",
                  letterSpacing: "1px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const updatedPages = { ...pages };
                  Object.keys(updatedPages).forEach((key) => {
                    updatedPages[key].status = key === page.name;
                  });

                  this.setState({
                    pages: updatedPages,
                  });
                }}
                onMouseEnter={() => {
                  const updatedPages = { ...pages };
                  updatedPages[page.name].hover = true;

                  this.setState({
                    pages: updatedPages,
                  });
                }}
                onMouseLeave={() => {
                  const updatedPages = { ...pages };
                  updatedPages[page.name].hover = false;

                  this.setState({
                    pages: updatedPages,
                  });
                }}
              >
                {page.hover && <p style={{ fontSize: "15px" }}>{page.name}</p>}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  position: "relative",
                  width: "50px",
                  height: "50px",
                }}
                onClick={() => {
                  const updatedPages = { ...pages };
                  Object.keys(updatedPages).forEach((key) => {
                    updatedPages[key].status = key === page.name;
                  });

                  this.setState({
                    pages: updatedPages,
                  });
                }}
                onMouseEnter={() => {
                  const updatedPages = { ...pages };
                  updatedPages[page.name].hover = true;

                  this.setState({
                    pages: updatedPages,
                  });
                }}
                onMouseLeave={() => {
                  const updatedPages = { ...pages };
                  updatedPages[page.name].hover = false;

                  this.setState({
                    pages: updatedPages,
                  });
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: page.status
                      ? "#FFB400"
                      : page.hover
                      ? "#FFB400"
                      : darkMode
                      ? "#656565"
                      : "#EEEEEE",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={
                      page.status
                        ? page.iconWhite // show page.iconWhite when page.status is true
                        : page.hover
                        ? page.iconWhite // show page.iconWhite when hover is true
                        : darkMode
                        ? page.iconLightGrey // show page.iconLightGrey when darkMode is true and hover is false
                        : page.iconGrey // show page.iconGrey when darkMode is false and hover is false
                    }
                    alt="homepage"
                    style={{
                      width: "18px",
                      height: "18px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  _homepage() {
    const { darkMode, screenWidth } = this.state;
    return (
      <div
        style={{
          height: "100%",
          background:
            screenWidth <= 991
              ? darkMode
                ? "black"
                : "white"
              : darkMode
              ? "linear-gradient(75deg, #FFB400 22.5%, black 22.5%)"
              : "linear-gradient(75deg, #FFB400 22.5%, white 22.5%)",
          display: screenWidth <= 991 ? "flex" : "grid",
          gridTemplateColumns: screenWidth <= 991 ? "none" : "4fr 5fr 1fr",
          fontFamily: "sans-serif",
          paddingBottom: screenWidth <= 991 ? "120px" : "0",
          overflowY: "auto",
          flexDirection: "column",
          textAlign:
            screenWidth <= 991 ? "center !important" : "left !importrant",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            paddingLeft: "3rem",
            paddingRight: "3rem",
          }}
        >
          <img
            src={screenWidth <= 991 ? phoneImage : guitar}
            style={{
              marginTop: screenWidth <= 991 ? "6rem" : "0",
              border:
                screenWidth <= 991
                  ? darkMode
                    ? "4px solid #252525"
                    : "4px solid #eee"
                  : "none",
              borderRadius: screenWidth <= 991 ? "50%" : "30px",
              height:
                screenWidth > 991
                  ? "650px"
                  : screenWidth < 556
                  ? "222px"
                  : "262px",
              width:
                screenWidth <= 991
                  ? "262px"
                  : screenWidth < 556
                  ? "222px"
                  : "450px",
            }}
            alt="portrait"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginRight: screenWidth <= 991 ? "0" : "3rem",
          }}
        >
          <h1
            style={{
              fontSize:
                screenWidth <= 1200
                  ? screenWidth <= 991
                    ? "29px"
                    : "42px"
                  : "51px",
              lineHeight:
                screenWidth <= 1200
                  ? screenWidth <= 991
                    ? "39px"
                    : "52px"
                  : "62px",
              color: "#FFB400",
              fontWeight: "700",
            }}
          >
            I'M Nurlybek (Nurik).
          </h1>
          <h1
            style={{
              fontSize:
                screenWidth <= 1200
                  ? screenWidth <= 991
                    ? "29px"
                    : "42px"
                  : "51px",
              color: darkMode ? "white" : "#666666",
              lineHeight:
                screenWidth <= 1200
                  ? screenWidth <= 991
                    ? "39px"
                    : "52px"
                  : "62px",
              fontWeight: "700",
            }}
          >
            Web developer
          </h1>
          <p
            style={{
              margin: "15px 0 28px",
              fontSize: screenWidth <= 991 ? "14px" : "16px",
              lineHeight: screenWidth <= 991 ? "28px" : "30px",
              color: darkMode ? "#F9F9F9" : "#6E6E6E",
              fontFamily: "sans-serif",
              maxWidth: screenWidth <= 991 ? "550px" : "auto",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            I am a proficient web developer specializing in front-end
            technologies. With expertise in HTML, CSS, and JavaScript, I am
            dedicated to crafting visually appealing and interactive user
            experiences. Passionate about staying abreast of the latest industry
            trends, I am committed to delivering high-quality and responsive
            websites.
          </p>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "225px",
                display: "flex",
                flexDirection: "row-reverse",
                position: "relative", // Set parent div to relative position
              }}
            >
              <div
                style={{
                  width: "225px",
                  height: "55px",
                  borderRadius: "30px",
                  borderWidth: "1px",
                  borderColor: "#FFB400",
                  borderStyle: "solid",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: "1.5rem",
                  background:
                    "linear-gradient( to left, #FFB400 50%, transparent 50% )",
                  transition: "all ease .3s",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "left bottom",
                  color: darkMode ? "white" : "#666666",
                  fontFamily: "inherit",
                  fontWeight: "600",
                  fontSize: "15px",
                  cursor: "pointer",
                  position: "absolute",
                  zIndex: "0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = "right bottom";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = "left bottom";
                  if (!darkMode) {
                    e.currentTarget.style.color = "#666666";
                  }
                }}
              >
                MORE ABOUT ME
              </div>
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "#FFB400",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  position: "static",
                  zIndex: "1",
                  transition: "all ease .3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.previousSibling.style.backgroundPosition =
                    "right bottom";
                  e.currentTarget.previousSibling.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.previousSibling.style.backgroundPosition =
                    "left bottom";
                  if (!darkMode) {
                    e.currentTarget.previousSibling.style.color = "#666666";
                  }
                }}
              >
                <img
                  src={arrow}
                  alt="homepage"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {this.sideIcons()}
      </div>
    );
  }
  _about() {
    const { darkMode, screenWidth } = this.state;
    const skillsData = [
      { label: "HTML", percentage: 89 },
      { label: "JavaScript", percentage: 70 },
      { label: "CSS", percentage: 66 },
      { label: "Redux", percentage: 95 },
      { label: "Next", percentage: 25 },
      { label: "Nest", percentage: 20 },
      { label: "Docker", percentage: 45 },
      { label: "React", percentage: 80 },
    ];

    const chartOptions = {
      barSize: screenWidth <= 550 ? "140" : "185",
      labels: skillsData.map((data) => data.label),
      series: skillsData.map((data) => data.percentage),
      colors: [
        "#FFB400",
        "#FFB400",
        "#FFB400",
        "#FFB400",
        "#FFB400",
        "#FFB400",
        "#FFB400",
        "#FFB400",
      ],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%",
            background: "transparent",
          },
          dataLabels: {
            name: {
              fontSize: "16px",
              color: "transparent",
              offsetY: 50,
            },
            value: {
              fontSize: "20px",
              color: darkMode ? "white" : "#666",
              offsetY: -10,
            },
          },
        },
      },
    };
    return (
      <div
        style={{
          height: "100%",
          background: darkMode ? "black" : "white",
          display: "flex",
          fontFamily: "sans-serif",
          paddingBottom: screenWidth <= 991 ? "120px" : "0",
          flexDirection: "column",
          overflowY: "auto",
          textAlign:
            screenWidth <= 991 ? "center !important" : "left !importrant",
        }}
      >
        <div name="main">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3rem",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color: darkMode ? "#222222" : "#1E253012",
                  fontSize:
                    screenWidth <= 550
                      ? "30px"
                      : screenWidth <= 991
                      ? "40px"
                      : "50px",
                  position: "absolute",
                  letterSpacing: "10px",
                  lineHeight: ".7",
                  zIndex: "1",
                }}
              >
                <h1 style={{ fontWeight: "800" }}>RESUME</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize:
                    screenWidth <= 550
                      ? "18px"
                      : screenWidth <= 991
                      ? "23px"
                      : "28px",
                  fontWeight: "700",
                  color: darkMode ? "white" : "#666",
                  position: "static",
                  zIndex: "2",
                }}
              >
                <h1 style={{ fontWeight: "800" }}>ABOUT </h1>
                <h1
                  style={{
                    color: "#FFB400",
                    marginLeft: "1rem",
                    fontWeight: "800",
                  }}
                >
                  ME
                </h1>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: screenWidth < 991 ? "column" : "row",
                margin: "5% 10% 0 10%",
              }}
            >
              <div style={{ flex: "0 0 50%" }}>
                <div style={{ color: darkMode ? "white" : "#666" }}>
                  <h3 style={{ fontSize: "24px" }}>PERSONAL INFOS</h3>
                </div>
                <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        First Name:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        Nurlybek
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Last Name:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        Sulaimanov
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Age:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        24 Years
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Nationality:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        Kazakh
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Freelancer:{" "}
                      </span>
                      <span style={{ color: "#3BC83B", fontWeight: "600" }}>
                        Available
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Address:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        Seoul, South Korea
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Phone:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        +821044879904
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Email:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        kaistnurlybek@gmail.com
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Github:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        <a
                          href="https://github.com/NurlybekSulaimanov"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#D89C00" }}
                        >
                          Nurlybek's Git
                        </a>
                      </span>
                    </li>
                    <li
                      style={{
                        flex: "0 0 50%",
                        maxWidth: "50%",
                        paddingBlock: "20px",
                      }}
                    >
                      <span style={{ color: darkMode ? "#BBBBBB" : "#858585" }}>
                        Languages:{" "}
                      </span>
                      <span
                        style={{
                          color: darkMode ? "white" : "#666666",
                          fontWeight: "600",
                        }}
                      >
                        English, Korean, Kazakh, Russian, Uzbek, Turkish
                      </span>
                    </li>
                  </ul>
                </div>
                <div style={{ position: "relative" }}>
                  <a
                    href="/src\components\photos\Full_Stack_Nurlybek_Sulaimanov.pdf" // Specify the path to your PDF file
                    download="your-cv.pdf" // Specify the desired name for the downloaded file
                    style={{
                      width: "225px",
                      display: "flex",
                      flexDirection: "row-reverse",
                      position: "relative", // Set parent div to relative position
                    }}
                  >
                    <div
                      style={{
                        width: "225px",
                        height: "55px",
                        borderRadius: "30px",
                        borderWidth: "1px",
                        borderColor: "#FFB400",
                        borderStyle: "solid",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingLeft: "1.5rem",
                        background:
                          "linear-gradient( to left, #FFB400 50%, transparent 50% )",
                        transition: "all ease .3s",
                        backgroundSize: "200% 100%",
                        backgroundPosition: "left bottom",
                        color: darkMode ? "white" : "#666666",
                        fontFamily: "inherit",
                        fontWeight: "600",
                        fontSize: "15px",
                        cursor: "pointer",
                        position: "absolute",
                        zIndex: "0",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundPosition =
                          "right bottom";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundPosition =
                          "left bottom";
                        if (!darkMode) {
                          e.currentTarget.style.color = "#666666";
                        }
                      }}
                    >
                      DOWNLOAD CV
                    </div>
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#FFB400",
                        borderRadius: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        position: "static",
                        zIndex: "1",
                        transition: "all ease .3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.previousSibling.style.backgroundPosition =
                          "right bottom";
                        e.currentTarget.previousSibling.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.previousSibling.style.backgroundPosition =
                          "left bottom";
                        if (!darkMode) {
                          e.currentTarget.previousSibling.style.color =
                            "#666666";
                        }
                      }}
                    >
                      <img
                        src={downloadIconWhite}
                        alt="homepage"
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div style={{ flex: "0 0 50%" }}>
                {screenWidth <= 991 && (
                  <hr
                    style={{
                      borderTop: "1px solid #333",
                      margin: "70px auto 55px",
                      maxWidth: "40%",
                      opacity: ".1",
                    }}
                  />
                )}
                <h3
                  style={{
                    color: darkMode ? "white" : "#666",
                    fontSize: "24px",
                  }}
                >
                  EXPERIENCE & EDUCATION
                </h3>
                <div
                  style={{
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    marginTop: "1rem",
                  }}
                >
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <li
                      style={{
                        position: "relative",
                        padding: "0 20px 0 60px",
                        margin: " 0 0 20px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          position: "absolute",
                          left: "0",
                          right: "0",
                          lineHeight: "40px",
                          textAlign: "center",
                          zIndex: "1",
                          borderRadius: "50%",
                          backgroundColor: "#FFB400",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src={portfolioWhite}
                          alt="job"
                        />
                      </div>
                      <span
                        style={{
                          color: darkMode ? "#BDBDBD" : "#898989",
                          backgroundColor: darkMode ? "#212121" : "#eee",
                          fontSize: "12px",
                          padding: "1px 10px",
                          display: "block",
                          marginBottom: "12px",
                          borderRadius: "20px",
                          fontWeight: "600",
                          opacity: ".8",
                          width: "fit-content",
                        }}
                      >
                        2023 April - 2023 October
                      </span>
                      <h5
                        style={{
                          color: darkMode ? "white" : "#666",
                          fontSize: "18px",
                          margin: "7px 0 10px 0",
                        }}
                      >
                        Web Developer
                        <span
                          style={{
                            opacity: ".8",
                            fontWeight: "600",
                            fontSize: "15px",
                            position: "relative",
                            paddingLeft: "6px",
                            color: darkMode ? "#C5C5C5" : "#666",
                          }}
                        >
                          - DFRC
                        </span>
                        <p
                          style={{
                            color: darkMode ? "#E1E1E1" : "#666",
                            marginTop: "1rem",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          Developing <strong>new user-facing features</strong>,
                          determining the <strong>structure and design</strong>{" "}
                          of web pages, building <strong>reusable code</strong>,
                          and collaborating with <strong>REST APIs</strong> and{" "}
                          <strong>data engineering</strong>. Utilizing
                          technologies such as <strong>React-Redux</strong>,{" "}
                          <strong>Sass</strong>, <strong>Core UI</strong>,{" "}
                          <strong>Typescript</strong>, <strong>Nest.js</strong>,
                          and other libraries and frameworks.
                        </p>
                      </h5>
                    </li>
                    <li
                      style={{
                        position: "relative",
                        padding: "0 20px 0 60px",
                        margin: " 0 0 20px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          position: "absolute",
                          left: "0",
                          right: "0",
                          lineHeight: "40px",
                          textAlign: "center",
                          zIndex: "1",
                          borderRadius: "50%",
                          backgroundColor: "#FFB400",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src={portfolioWhite}
                          alt="job"
                        />
                      </div>
                      <span
                        style={{
                          color: darkMode ? "#BDBDBD" : "#898989",
                          backgroundColor: darkMode ? "#212121" : "#eee",
                          fontSize: "12px",
                          padding: "1px 10px",
                          display: "block",
                          marginBottom: "12px",
                          borderRadius: "20px",
                          fontWeight: "600",
                          opacity: ".8",
                          width: "fit-content",
                        }}
                      >
                        2022
                      </span>
                      <h5
                        style={{
                          color: darkMode ? "white" : "#666",
                          fontSize: "18px",
                          margin: "7px 0 10px 0",
                        }}
                      >
                        Certificates
                        <span
                          style={{
                            opacity: ".8",
                            fontWeight: "600",
                            fontSize: "15px",
                            position: "relative",
                            paddingLeft: "6px",
                            color: darkMode ? "#C5C5C5" : "#666",
                          }}
                        >
                          - Codecademy & Coursera
                        </span>
                        <p
                          style={{
                            color: darkMode ? "#E1E1E1" : "#666",
                            marginTop: "1rem",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          Successfully completed the courses{" "}
                          <span style={{ fontWeight: "bold" }}>
                            Learn JavaScript,
                          </span>{" "}
                          <span style={{ fontWeight: "bold" }}>
                            Introduction to Front-End Development,
                          </span>{" "}
                          and{" "}
                          <span style={{ fontWeight: "bold" }}>
                            Programming with JavaScript,
                          </span>{" "}
                          acquiring relevant certificates.
                        </p>
                      </h5>
                    </li>
                    <li
                      style={{
                        position: "relative",
                        padding: "0 20px 0 60px",
                        margin: " 0 0 50px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          position: "absolute",
                          left: "0",
                          right: "0",
                          lineHeight: "40px",
                          textAlign: "center",
                          zIndex: "1",
                          borderRadius: "50%",
                          backgroundColor: "#FFB400",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src={portfolioWhite}
                          alt="job"
                        />
                      </div>
                      <span
                        style={{
                          color: darkMode ? "#BDBDBD" : "#898989",
                          backgroundColor: darkMode ? "#212121" : "#eee",
                          fontSize: "12px",
                          padding: "1px 10px",
                          display: "block",
                          marginBottom: "12px",
                          borderRadius: "20px",
                          fontWeight: "600",
                          opacity: ".8",
                          width: "fit-content",
                        }}
                      >
                        2022
                      </span>
                      <h5
                        style={{
                          color: darkMode ? "white" : "#666",
                          fontSize: "18px",
                          margin: "7px 0 10px 0",
                        }}
                      >
                        Bachelor Degree
                        <span
                          style={{
                            opacity: ".8",
                            fontWeight: "600",
                            fontSize: "15px",
                            position: "relative",
                            paddingLeft: "6px",
                            color: darkMode ? "#C5C5C5" : "#666",
                          }}
                        >
                          - KAIST
                        </span>
                        <p
                          style={{
                            color: darkMode ? "#E1E1E1" : "#666",
                            marginTop: "1rem",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          Achieved a Bachelor's Degree from KAIST, one of the
                          premier universities in South Korea. Completed
                          coursework in subjects such as Introduction to
                          Artificial Intelligence, Linear Algebra, and a range
                          of courses directly related to the field of web
                          development.
                        </p>
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
              }}
            >
              <hr
                style={{
                  borderTop: "1px solid #333",
                  margin: "70px auto 55px",
                  maxWidth: "40%",
                  opacity: ".1",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 10% 20px 10%",
                }}
              >
                <div style={{ textAlign: "center", margin: "0 10% 20px 10%" }}>
                  <h2
                    style={{
                      fontSize: "26px",
                      color: darkMode ? "white" : "#666",
                    }}
                  >
                    My Skills
                  </h2>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {skillsData.map((data, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: screenWidth <= 550 ? "150px" : "auto",
                      }}
                    >
                      <Chart
                        options={chartOptions}
                        series={[data.percentage]}
                        type="radialBar"
                        height={chartOptions.barSize}
                      />
                      <h3 style={{ color: darkMode ? "white" : "#666" }}>
                        {data.label}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.sideIcons()}
      </div>
    );
  }
  _portfolio() {
    const { darkMode, screenWidth, myProjects, showProject, shownProject } =
      this.state;
    return (
      <div
        style={{
          height: "100%",
          background: darkMode ? "black" : "white",
          display: "flex",
          fontFamily: "sans-serif",
          paddingBottom: screenWidth <= 991 ? "120px" : "0",
          flexDirection: "column",
          overflowY: "auto",
          textAlign:
            screenWidth <= 991 ? "center !important" : "left !importrant",
        }}
      >
        <div name="main">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  color: darkMode ? "#222222" : "#1E253012",
                  fontSize:
                    screenWidth <= 550
                      ? "30px"
                      : screenWidth <= 991
                      ? "40px"
                      : "50px",
                  position: "absolute",
                  letterSpacing: "10px",
                  lineHeight: ".7",
                  zIndex: "1",
                }}
              >
                <h1 style={{ fontWeight: "800" }}>WORKS</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize:
                    screenWidth <= 550
                      ? "16px"
                      : screenWidth <= 991
                      ? "19px"
                      : "24px",
                  fontWeight: "700",
                  color: darkMode ? "white" : "#666",
                  position: "static",
                  zIndex: "2",
                }}
              >
                <h1 style={{ fontWeight: "800" }}>MY </h1>
                <h1
                  style={{
                    color: "#FFB400",
                    marginLeft: "1rem",
                    fontWeight: "800",
                  }}
                >
                  PORTFOLIO
                </h1>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  screenWidth <= 550
                    ? "1fr"
                    : screenWidth <= 991
                    ? "repeat(2,1fr)"
                    : "repeat(3,1fr)",
                gridGap: "30px",
                gap: "30px",
                paddingBottom: "120px",
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
                padding: "1rem 10%",
              }}
            >
              {Object.values(myProjects).map((myProject) => (
                <div
                  key={myProject.name}
                  // data-aos="fade-right"
                  onMouseEnter={() => {
                    console.log(myProject.hover);
                    const updatedProjects = { ...myProjects };
                    updatedProjects[myProject.projName].hover = true;

                    this.setState({
                      myProjects: updatedProjects,
                    });
                  }}
                  onMouseLeave={() => {
                    const updatedProjects = { ...myProjects };
                    updatedProjects[myProject.projName].hover = false;

                    this.setState({
                      myProjects: updatedProjects,
                    });
                  }}
                  onClick={() => {
                    const updatedProjects = { ...myProjects };
                    updatedProjects[myProject.projName].show = true;
                    this.setState({
                      myProjects: updatedProjects,
                      shownProject: myProject,
                      showProject: true,
                    });
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                      cursor: "pointer",
                      height: "250px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#C1D0DB",
                      borderRadius: "1rem",
                    }}
                  >
                    <img
                      alt="project"
                      src={myProject.image}
                      style={{
                        borderRadius: "1rem",
                        height: "90%",
                        width: "auto",
                        maxWidth: "95%",
                      }}
                    ></img>
                    <h3
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        height: "100%",
                        width: "100%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#FFB400",
                        visibility: myProject.hover ? "visible" : "hidden",
                        opacity: myProject.hover ? "1" : "0",
                        transition: "all .5s",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "1rem",
                        fontSize: "18px",
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                          transform: myProject.hover
                            ? "translateY(0px)"
                            : "translateY(-20px)",
                          transition: ".5s",
                        }}
                      >
                        {myProject.name}
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            zIndex: 99,
            display: showProject ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: showProject ? "block" : "none",
              maxWidth: "700px",
              width: "85%",
              borderRadius: "1rem",
              padding: "2rem",
              zIndex: 100,
              backgroundColor: darkMode ? "#252525" : "#F5F5F5",
            }}
          >
            <div
              data-aos="fade"
              className="aos-init aos-animate"
              style={{ textAlign: "center", color: "#FFB400" }}
            >
              <h2>{shownProject.name}</h2>
              <div>
                <div
                  style={{
                    margin: "1rem 1rem 2rem 1rem",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "5%",
                      padding: "5% 5% 0 0",
                      flex: "0 0 50%",
                    }}
                  >
                    <img
                      alt="projectName"
                      src={darkMode ? projectWhite : project}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginRight: ".5rem",
                      }}
                    />
                    <p
                      style={{
                        marginRight: ".5rem",
                        color: darkMode ? "white" : "#898989",
                      }}
                    >
                      Project:
                    </p>
                    <span
                      style={{
                        color: darkMode ? "white" : "#666666",
                        fontWeight: "600",
                      }}
                    >
                      {shownProject.type}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "0 0 50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="Language"
                      src={darkMode ? languagesWhite : languages}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginRight: ".5rem",
                      }}
                    />
                    <p
                      style={{
                        marginRight: ".5rem",
                        color: darkMode ? "white" : "#898989",
                      }}
                    >
                      Languages:
                    </p>
                    <span
                      style={{
                        color: darkMode ? "white" : "#666666",
                        fontWeight: "600",
                      }}
                    >
                      {shownProject.langs}
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "0 0 50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="git"
                      src={darkMode ? gitWhite : git}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginRight: ".5rem",
                      }}
                    />
                    <p
                      style={{
                        marginRight: ".5rem",
                        color: darkMode ? "white" : "#898989",
                      }}
                    >
                      Code:
                    </p>
                    <span
                      style={{
                        color: darkMode ? "white" : "#666666",
                        fontWeight: "600",
                      }}
                    >
                      <a
                        href={shownProject.repos}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#D89C00" }}
                      >
                        Repository
                      </a>
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "0 0 50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      alt="preview"
                      src={darkMode ? browserWhite : browser}
                      style={{
                        width: "15px",
                        height: "15px",
                        marginRight: ".5rem",
                      }}
                    />
                    <p
                      style={{
                        marginRight: ".5rem",
                        color: darkMode ? "white" : "#898989",
                      }}
                    >
                      Preview:
                    </p>
                    <span
                      style={{
                        color: darkMode ? "white" : "#666666",
                        fontWeight: "600",
                      }}
                    >
                      <a
                        href={shownProject.prev}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#D89C00" }}
                      >
                        {shownProject.name}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#C1D0DB",
                  borderRadius: "1rem",
                  padding: "1rem",
                }}
              >
                <img
                  src={shownProject.image}
                  alt="projectIMG"
                  style={{
                    borderRadius: "1rem",
                    height: "auto",
                    maxHeight: "400px",
                    maxWidth: "95%",
                  }}
                />
              </div>
              <button
                style={{
                  position: "absolute",
                  top: "-52px",
                  right: "-86px",
                  backgroundColor: "transparent",
                  height: "50px",
                  width: "50px",
                  border: "none",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({
                    shownProject: {},
                    showProject: false,
                  });
                }}
              >
                <img
                  src={darkMode ? closeIcon : closeWhiteIcon}
                  alt="closeIcon"
                  style={{ width: "50px", height: "50px" }}
                />
              </button>
            </div>
          </div>
        </div>
        {this.sideIcons()}
      </div>
    );
  }

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        {this.state.pages.HOME.status && this._homepage()}
        {this.state.pages.ABOUT.status && this._about()}
        {this.state.pages.PORTFOLIO.status && this._portfolio()}
      </div>
    );
  }
}

export default Home;
