import { VscChecklist } from "react-icons/vsc";
import { LuPackageOpen } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto;

  .heading {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #222;
  }

  .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30%;
    padding: 20px;
    border-radius: 10px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;

    .icon {
      font-size: 5rem;
      font-weight: lighter;
      color: #37803b;
      margin-bottom: 10px;
    }

    p {
      margin: 5px 0;
      font-size: 1.2pc;
      color: #333;
    }

    .heading {
      font-size: 1.5rem;
      font-weight: 500;
      color: black;
    }
  }
`;

const HIW = () => {
  return (
    <Wrapper>
      <p className="heading">How It Works</p>
      <div className="contents">
        <div className="content content1">
          <VscChecklist className="icon" />
          <p className="heading">1. Select Your Meals</p>
          <p>Pick meals that fit your lifestyle easily.</p>
        </div>
        <div className="content content2">
          <LuPackageOpen className="icon" />
          <p className="heading">2. We Cook & Deliver</p>
          <p>Fresh meals prepared and delivered to you.</p>
        </div>
        <div className="content content3">
          <ImSpoonKnife className="icon" />
          <p className="heading">3. Enjoy Healthy Eating</p>
          <p>Eat well with no prep or cleanup needed.</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default HIW;
