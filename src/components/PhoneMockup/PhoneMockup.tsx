import {
  MockupWrap,
  PhoneCard,
  PhoneCardAccent,
  PhoneCardLine,
  PhoneMockup,
  PhoneScreen,
  PhoneStatusBar,
} from "./PhoneMockup.styled";

const ZenfiPhoneMockup = () => {
  return (
    <MockupWrap aria-hidden>
      <PhoneMockup>
        <PhoneScreen>
          <PhoneStatusBar>
            <span>9:41</span>
            <span>Zenfi</span>
          </PhoneStatusBar>
          <PhoneCard>
            <PhoneCardLine $wide />
            <PhoneCardLine />
            <PhoneCardAccent />
          </PhoneCard>
        </PhoneScreen>
      </PhoneMockup>
    </MockupWrap>
  );
};

export default ZenfiPhoneMockup;
