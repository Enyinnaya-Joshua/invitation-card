import React, { useState } from "react";
import styled from "styled-components";
import UploadImage from "../GlobalComp/UploadImageBtn";
import NavBtn from "../GlobalComp/NavBtn";
import img1 from "../Assets/download.png";
import codlabLogo from "../Assets/codelab-logo.png";
import OrangeInvitationheader from "../GlobalComp/OrangeInvitationheader";
import { DiMongodb as Mongoicon } from "react-icons/di";
import { DiReact as Reacticon } from "react-icons/di";
import { FaNodeJs as Nodeicon } from "react-icons/fa";
import html2canvas from "html2canvas";
import dummy from "../Assets/dummy-photo.png";

import { FacebookShareButton, FacebookIcon } from "react-share";

const InvitationcardCreation: React.FC = () => {
  const [image, setImage] = useState<any>(dummy);
  const [Fname, setFName] = useState<string>("");
  const [Lname, setLName] = useState<string>("");
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const displayPix = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    console.log(save);
  };

  const printRef: any = React.useRef();

  let dataCatch: string[] = [];

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");

    dataCatch.push(data);

    const link = document.createElement("a");
    console.log(data);

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const shareUrl = dataCatch.toString();

  const Toggle1 = () => {
    setShow1(false);
    setShow2(true);
    setShow3(false);
    setShow4(false);
  };
  const Toggle2 = () => {
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };

  const Toggle3 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(true);
    setShow4(false);
  };

  return (
    <Container>
      {show1 ? (
        <WrapperOne>
          <OrangeInvitationheader wd="500px" tx="Create Invitation Card" />
          <ClientInfo>
            <ImageHold src={image} />
            <ButtonHold htmlFor="pix">
              <UploadImage
                src={img1}
                icondp="block"
                iconwd="30px"
                iconpd=""
                iconmg="0px 0px 0px 20px"
                tx="Upload Image"
                pd="20px 5px"
                mg=""
                bg="orange"
                cl="white"
                wd="100%"
                fw="500"
                br="10px"
                ht=""
              />
            </ButtonHold>
            <ImageInput id="pix" type="file" onChange={displayPix} />
            <InputHold>
              <InputOne
                placeholder="Enter First Name"
                value={Fname}
                onChange={(e: any) => {
                  setFName(e.target.value);
                }}
              ></InputOne>
              <InputTwo
                placeholder="Enter Last Name"
                value={Lname}
                onChange={(e: any) => {
                  setLName(e.target.value);
                }}
              ></InputTwo>
            </InputHold>
          </ClientInfo>
        </WrapperOne>
      ) : null}

      {show2 ? (
        <WrapperTwo>
          <OrangeInvitationheader wd="1200px" tx="Preview Invitation Card" />

          <ClientPreview>
            <CardOne>
              <LeftCard>
                <Text1>
                  I will be attending <br /> Ajegunle Tech Conference
                </Text1>
                <Text2>
                  Theme: <br /> Tech As a Leveler
                </Text2>
                <Text3>POWERED BY | CODELAB</Text3>
              </LeftCard>
              <RightCard>
                <Logo src={codlabLogo} />
                <Venue>
                  <p> VENUE:</p>
                  <p>
                    AJEROMI-IFELODUN <br /> SECETERIANT
                  </p>
                </Venue>
                <Date>
                  <p>
                    {" "}
                    17TH DECEMBER <br /> 10AM-PROMPT
                  </p>
                </Date>
              </RightCard>
            </CardOne>

            <ProfileInfo>
              <ClientProfileInfo>
                <ProfileImage src={image} />
                <Name>{`${Fname} ${Lname}`}</Name>
              </ClientProfileInfo>

              <DevProfile>
                <Sideline></Sideline>
                <Devcard>
                  <Developer>
                    <Title>Developer</Title>
                    <DevName>Enyinnaya Joshua</DevName>
                    <Devline></Devline>
                  </Developer>
                  <Stack>
                    <Title>Stack</Title>
                    <StackName>
                      <Mongodb>
                        <Icon1>
                          <Mongoicon />
                        </Icon1>
                        <Text>mongodb</Text>
                      </Mongodb>
                      <Express>
                        <Icon2>ex</Icon2>
                        <Text>express</Text>
                      </Express>
                      <Reactstack>
                        <Icon3>
                          <Reacticon />
                        </Icon3>
                        <Text>react</Text>
                      </Reactstack>
                      <Node>
                        <Icon4>
                          <Nodeicon />
                        </Icon4>
                        <Text>node</Text>
                      </Node>
                    </StackName>
                    <Stackline></Stackline>
                  </Stack>
                </Devcard>
                <Sideline></Sideline>
              </DevProfile>
            </ProfileInfo>
          </ClientPreview>
        </WrapperTwo>
      ) : null}

      {show3 ? (
        <WrapperThree>
          <OrangeInvitationheader wd="900px" tx="Invitation Card Completed" />

          <ClientPreview ref={printRef}>
            <CardOne>
              <LeftCard>
                <Text1>
                  I will be attending <br /> Ajegunle Tech Conference
                </Text1>
                <Text2>
                  Theme: <br /> Tech As a Leveler
                </Text2>
                <Text3>POWERED BY | CODELAB</Text3>
              </LeftCard>
              <RightCard>
                <Logo src={codlabLogo} />
                <Venue>
                  <p className="venuetitle"> VENUE:</p>
                  <p className="venuedes">
                    AJEROMI-IFELODUN <br /> SECETERIANT
                  </p>
                </Venue>
                <Date>
                  <p>
                    {" "}
                    17TH DECEMBER <br /> 10AM-PROMPT
                  </p>
                </Date>
              </RightCard>
            </CardOne>

            <ProfileInfo>
              <ClientProfileInfo>
                <ProfileImage src={image} />
                <Name>{`${Fname} ${Lname}`}</Name>
              </ClientProfileInfo>

              <DevProfile>
                <Sideline></Sideline>
                <Devcard>
                  <Developer>
                    <Title>Developer</Title>
                    <DevName>Enyinnaya Joshua</DevName>
                    <Devline></Devline>
                  </Developer>
                  <Stack>
                    <Title>Stack</Title>
                    <StackName>
                      <Mongodb>
                        <Icon1>
                          <Mongoicon />
                        </Icon1>
                        <Text>mongodb</Text>
                      </Mongodb>
                      <Express>
                        <Icon2>ex</Icon2>
                        <Text>express</Text>
                      </Express>
                      <Reactstack>
                        <Icon3>
                          {" "}
                          <Reacticon />
                        </Icon3>
                        <Text>react</Text>
                      </Reactstack>
                      <Node>
                        <Icon4>
                          <Nodeicon />
                        </Icon4>
                        <Text>node</Text>
                      </Node>
                    </StackName>
                    <Stackline></Stackline>
                  </Stack>
                </Devcard>
                <Sideline></Sideline>
              </DevProfile>
            </ProfileInfo>
          </ClientPreview>
        </WrapperThree>
      ) : null}

      {Fname.trim() !== "" &&
      Lname.trim() !== "" &&
      image !== dummy &&
      show1 ? (
        <NextButton dp={show1 ? "1" : ""} onClick={Toggle1}>
          <NavBtn
            src=""
            icondp="none"
            iconwd="0px"
            iconpd=""
            iconmg=""
            tx="Next"
            pd=""
            mg=""
            bg="black"
            cl="white"
            wd="100%"
            fw="500"
            br="10px"
            ht="70px"
          />
        </NextButton>
      ) : null}
      <Buttons>
        {show2 ? (
          <PreviewCardSection>
            <BackButton onClick={Toggle2}>
              <NavBtn
                src=""
                icondp="none"
                iconwd=""
                iconpd=""
                iconmg=""
                tx="Back"
                pd=""
                mg=""
                bg="black"
                cl="white"
                wd="200px"
                fw="500"
                br="10px"
                ht="70px"
              />
            </BackButton>
            <FinishButton onClick={Toggle3}>
              <NavBtn
                src=""
                icondp="none"
                iconwd=""
                iconpd=""
                iconmg=""
                tx="Finish"
                pd=""
                mg="10px"
                bg="black"
                cl="white"
                wd=""
                fw="500"
                br="10px"
                ht="70px"
              />
            </FinishButton>
          </PreviewCardSection>
        ) : null}

        {show3 ? (
          <PreviewCardSection>
            <DownloadButton onClick={handleDownloadImage}>
              <NavBtn
                src=""
                icondp="none"
                iconwd=""
                iconpd=""
                iconmg=""
                tx="Download"
                pd=""
                mg=""
                bg="black"
                cl="white"
                wd="200px"
                fw="500"
                br="10px"
                ht="70px"
              />
            </DownloadButton>
            <FacebookShareButton url={shareUrl}>
              <ShareButton>
                <NavBtn
                  src=""
                  icondp="none"
                  iconwd=""
                  iconpd=""
                  iconmg=""
                  tx="Share"
                  pd=""
                  mg=""
                  bg="black"
                  cl="white"
                  wd="200px"
                  fw="500"
                  br="10px"
                  ht="70px"
                />
              </ShareButton>
            </FacebookShareButton>
          </PreviewCardSection>
        ) : null}
      </Buttons>
    </Container>
  );
};

export default InvitationcardCreation;

const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ClientInfo = styled.div`
  transition: all 360ms;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 2px 10px 1px rgba(20, 20, 20, 0.4);
  padding: 50px 0px;

  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 4250px) {
  }
`;

const ClientPreview = styled.div`
  transition: all 360ms;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 1px 2px 10px 1px rgba(20, 20, 20, 0.4);
  transition: all 360ms;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

const ShareButton = styled.div`
  :hover {
    transform: scale(0.9);
  }
  transition: all 360ms;

  @media screen and (max-width: 390px) {
    margin: 10px 0px;
  }

  @media screen and (max-width: 960px) {
    :hover {
      transform: scale(0.9);
    }
  }
`;

const DownloadButton = styled.div`
  :hover {
    transform: scale(0.9);
  }
  transition: all 360ms;

  @media screen and (max-width: 390px) {
    margin: 10px 0px;
  }

  @media screen and (max-width: 960px) {
    :hover {
      transform: scale(0.9);
    }
  }
`;

const WrapperThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  margin-bottom: 200px;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%;
    margin-bottom: 70px;
    flex-direction: column;
  }
`;

const Icon4 = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  font-size: 23px;

  @media screen and (max-width: 960px) {
    font-size: 17px;
  }

  @media screen and (max-width: 325px) {
    font-size: 23px;
  }
`;
const Icon3 = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: navy;
  font-size: 23px;

  @media screen and (max-width: 960px) {
    font-size: 17px;
    color: navy;
  }

  @media screen and (max-width: 325px) {
    font-size: 27px;
    color: navy;
  }
`;
const Icon2 = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;

  @media screen and (max-width: 960px) {
    font-size: 17px;
  }

  @media screen and (max-width: 325px) {
    font-size: 27px;
  }
`;
const Icon1 = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  font-size: 23px;

  @media screen and (max-width: 960px) {
    font-size: 17px;
    color: green;
  }

  @media screen and (max-width: 325px) {
    font-size: 27px;
    color: green;
  }
`;

const Text = styled.div`
  font-size: 10px;
  font-weight: bolder;
  @media screen and (max-width: 325px) {
    display: none;
  }
`;

const Node = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Reactstack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Express = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const Mongodb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const StackName = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    font-size: 17px;
  }

  @media screen and (max-width: 350px) {
    font-size: 17px;
    display: flex;
    justify-content: space-evenly;
  }
`;

const DevName = styled.h2`
  margin-top: 0px;
  margin-bottom: 7px;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }

  @media screen and (max-width: 325px) {
    font-size: 20px;
    width: 200px;
  }
`;

const Title = styled.h2`
  margin-bottom: 5px;

  @media screen and (max-width: 960px) {
    font-size: 17px;
  }

  @media screen and (max-width: 325px) {
    font-size: 20px;
  }
`;

const Stackline = styled.div`
  height: 3px;
  width: 150px;
  background-color: orange;
  margin-top: 7px;
  border-radius: 10px;
  @media screen and (max-width: 325px) {
    margin-top: 7px;
    width: 90px;
  }
`;

const Devline = styled.div`
  height: 3px;
  width: 150px;
  border-radius: 10px;
  background-color: orange;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    margin-bottom: 10px;
    width: 70px;
  }

  @media screen and (max-width: 325px) {
    margin-bottom: 10px;
    width: 150px;
  }
`;

const Stack = styled.div`
  width: 230px;

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

const Developer = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 90%;
  }

  @media screen and (max-width: 325px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const Devcard = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 200px;
    margin: 0px auto;
  }
`;

const Sideline = styled.div`
  height: 150px;
  width: 3px;
  background-color: black;
`;

const DevProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;

  @media screen and (max-width: 960px) {
    width: 300px;
    padding-bottom: 17px;
    margin-top: 130px;
  }

  @media screen and (max-width: 490px) {
    width: 80%;
    padding-bottom: 17px;
    margin-top: 130px;
  }
`;

const Date = styled.div`
  font-size: 20px;
  @media screen and (max-width: 960px) {
    font-weight: 500;

    p {
      margin-right: 3px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 325px) {
    font-size: 13px;
    font-weight: 500;

    p {
      margin-right: 3px;
      font-size: 10px;
    }
  }
`;

const Venue = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  font-size: 20px;
  margin-right: 10px;
  p {
    margin-right: 3px;
  }
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    font-weight: 500;

    p {
      margin-right: 3px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 325px) {
    font-size: 13px;
    font-weight: 500;

    p {
      margin-right: 3px;
      font-size: 10px;
    }
  }
`;

const Logo = styled.img`
  width: 50%;
  @media screen and (max-width: 325px) {
    width: 70px;
  }
`;

const RightCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  margin: 20px;
  margin-left: 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 960px) {
    width: 50%;
    margin-right: 10px;
    margin-left: 7px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 325px) {
    width: 100px;
    margin-right: 10px;
    margin-left: 7px;
  }
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding: 10px 0px;
  width: 300px;
  box-shadow: 1px 2px 10px 1px rgba(237, 162, 11, 0.798);
  color: black;
  background-color: #ffffff;
  border-radius: 10px;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 960px) {
    font-size: 17px;
    font-weight: 500;
    padding: 10px 0px;
    width: 70%;
    box-shadow: 1px 2px 10px 1px rgba(237, 162, 11, 0.798);
    color: black;
    background-color: #ffffff;
    margin-top: 10px;
    border-radius: 10px;
  }

  @media screen and (max-width: 325px) {
    font-size: 20px;
    padding: 10px 10px;
  }
`;

const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    box-shadow: 1px 2px 10px 1px rgba(20, 20, 20, 0.4);
    object-fit: cover;
  }

  @media screen and (max-width: 325px) {
    height: 110px;
    width: 110px;
    border-radius: 50%;
  }
`;

const ClientProfileInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    text-align: center;
    width: 300px;
    position: absolute;
    bottom: 70%;
  }

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    text-align: center;
    width: 90%;
    position: absolute;
    bottom: 70%;
  }
`;

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  border-left: 3px solid white;
  width: 50%;
  margin: 20px;
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 960px) {
    margin-left: 5px;
    width: 50%;
    margin-bottom: 45px;
  }

  @media screen and (max-width: 325px) {
    margin-left: 5px;
    width: 100px;
  }
`;

const Text3 = styled.h3`
  @media screen and (max-width: 960px) {
    font-size: 13px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

const Text2 = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

const Text1 = styled.h2`
  margin-top: 0px;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }
  @media screen and (max-width: 325px) {
    font-size: 13px;
  }
`;

const CardOne = styled.div`
  color: white;
  width: 100%;
  border-bottom: 20px solid orange;
  border-radius: 0px 0px 120px 120px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 0px 0px 70px 70px;
  }

  @media screen and (max-width: 325px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0px 0px 70px 70px;
  }
`;

const WrapperTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  margin-bottom: 200px;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%;
    margin-bottom: 70px;
    flex-direction: column;
  }

  @media screen and (max-width: 325px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%;
    margin-bottom: 70px;
    flex-direction: column;
  }
`;

const ButtonHold = styled.label`
  display: flex;
  justify-content: center;
  padding: 0px 10px;
  width: 60%;
  :hover {
    transform: scale(0.9);
    transition: all 360ms;
  }
`;

const BackButton = styled.div``;

const FinishButton = styled.div``;

const PreviewCardSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 0px;

  @media screen and (max-width: 960px) {
    margin: 0px;
  }
`;

const InputTwo = styled.input`
  width: 100%;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  height: 20px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
`;

const InputOne = styled.input`
  background-color: transparent;

  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 20px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  border-radius: 10px;
`;

const InputHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px;
  width: 370px;

  @media screen and (max-width: 960px) {
    width: 300px;
  }

  @media screen and (max-width: 790px) {
    width: 300px;
  }

  @media screen and (max-width: 385px) {
    width: 75%;
  }

  @media screen and (max-width: 325px) {
    width: 80%;
  }
`;

const NextButton = styled.div<{ dp: string }>`
  border-radius: 10px;
  background-color: transparent;
  box-shadow: 1px 3px 10px 1px rgba(20, 20, 20, 0.4);
  margin: 30px 0px 30px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: ${(props) => (props.dp ? "block" : "none")};
    width: 100px;
    background-color: transparent;
    margin-right: 70px;
  }

  @media screen and (max-width: 790px) {
    display: ${(props) => (props.dp ? "block" : "none")};
    width: 100px;
    background-color: transparent;
    margin-right: 70px;
  }

  @media screen and (max-width: 390px) {
    display: ${(props) => (props.dp ? "block" : "none")};
    width: 100px;
    margin-right: 70px;
  }
`;

const ImageHold = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 50px;
  box-shadow: 1px 2px 10px 1px rgba(20, 20, 20, 0.4);
  object-fit: cover;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    width: 260px;
    height: 260px;
    object-fit: cover;
  }
  @media screen and (max-width: 790px) {
    width: 270px;
    height: 270px;
  }
  @media screen and (max-width: 475px) {
    width: 230px;
    height: 230px;
  }
`;

const WrapperOne = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 360ms;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 325px) {
    width: 100%;
  }
`;
