import styles from "components/FAQComp1/FAQComp1.module.css";
import image1 from "components/FAQComp1/assets/faqimg.png"
const FAQComp1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <h3 className={styles.redcont1}>FREQUENTLY</h3>
        <h3 className={styles.yellowcont1}>ASKED</h3>
        <h3 className={styles.redcont1}>QUESTIONS ?</h3>
      </div>
      <div className={styles.content2}>
        <div className={styles.back4content2}><img src={image1} alt="" /></div>
        <div className={styles.back3content2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="834"
            height="681"
            viewBox="0 0 834 681"
            fill="none"
          >
            <g filter="url(#filter0_f_367_34)">
              <path
                d="M751 164.584C751 335.365 626.81 598 456.147 598C285.484 598 83 335.365 83 164.584C83 -6.19646 270.908 144.163 441.571 144.163C612.234 144.163 751 -6.19646 751 164.584Z"
                fill="#BDA96C"
                fill-opacity="0.28"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_367_34"
                x="0"
                y="0"
                width="834"
                height="681"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="41.5"
                  result="effect1_foregroundBlur_367_34"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.back2content2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="834"
            height="681"
            viewBox="0 0 834 681"
            fill="none"
          >
            <g filter="url(#filter0_f_407_154)">
              <path
                d="M751 164.584C751 335.365 626.81 598 456.147 598C285.484 598 83 335.365 83 164.584C83 -6.19646 270.908 144.163 441.571 144.163C612.234 144.163 751 -6.19646 751 164.584Z"
                fill="#BDA96C"
                fill-opacity="0.28"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_407_154"
                x="0"
                y="0"
                width="834"
                height="681"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="41.5"
                  result="effect1_foregroundBlur_407_154"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.back1content2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="542"
            viewBox="0 0 1920 542"
            fill="none"
          >
            <g filter="url(#filter0_f_414_259)">
              <path
                d="M-2 217C170.833 177.167 559 117.8 729 199C899 280.2 1140.83 244.834 1240.5 217C1364.5 155.334 1648.4 53.8001 1792 141C1935.6 228.2 1897 240.333 1918 242V434.5H-2V217Z"
                fill="#FECE2F"
                fill-opacity="0.75"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_414_259"
                x="-109"
                y="0.12207"
                width="2134"
                height="541.378"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="53.5"
                  result="effect1_foregroundBlur_414_259"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FAQComp1;
