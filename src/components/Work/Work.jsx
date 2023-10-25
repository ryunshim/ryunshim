import styles from './Work.module.css';

const Work = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.opening1}>Hey there! I’m Ryun — </p>
        <p className={styles.opening2}>An artist turned product designer driven by interdisciplinary collaboration. Currently @Cornell University.</p>
      </div>

      <div className={styles.caseStudies}>
        <p className={styles.heading}>01. CASE STUDIES</p>
        <div className={styles.caseStudiesContainer}>
          <div className={styles.caseStudiesBox} style={{ background: '#DCC8DF' }}>
            <p className={styles.category}>Product Design, User Testing</p>
            <p className={styles.title}>Bridging the Gap in STEM Education</p>
          </div>
          <div className={styles.caseStudiesBox} style={{ background: '#DAE9C7' }}>
            <p className={styles.category}>User Interface, Visual Design</p>
            <p className={styles.title}>Fostering Continuous Birding Exploration</p>
          </div>
        </div>
      </div>


      <div className={styles.research}>
        <p className={styles.heading}>02. RESEARCH</p>
        <div className={styles.researchContainer}>
          <div className={styles.researchLeft}>
            <div className={styles.researchBox} style={{ background: '#D5F4F9' }}>
              <p className={styles.category}>Co-Design, Future Technologies</p>
              <p className={styles.title}>Mindfulness Enriched Through Creative Collaboration</p>
            </div>
          </div>
          <div className={styles.researchRight} onClick={() => window.open("https://drive.google.com/file/d/1wjj5c1S5hJEm6-0530pJRC3S1Lr7__Fb/view?usp=sharing", "_blank")}>
            <div className={styles.researchBox} style={{ background: '#D1DAFC' }}>
              <p className={styles.category}>LLM-Chain Technologies</p>
              <p className={styles.title}>The Social Media Playwright: Chatbot</p>
            </div>
            <div className={styles.researchBox} style={{ background: 'rgb(255, 129, 129, 0.5)' }} onClick={() => window.open("https://drive.google.com/file/d/1IdgQq4VAM8zWydGm2IOM_fXOLRpWqzoI/view?usp=sharing", "_blank")}>
              <p className={styles.category}>Co-Design, Large Language Models</p>
              <p className={styles.title}>Co-Designing LLM Prompts with Experts</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projects}>
        <p className={styles.heading}>03. SIDE PROJECTS</p>
        <div className={styles.projectsContainer}>
          <div className={styles.project} onClick={() => window.open("https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/stregheria/", "_blank")}>
            <div className={styles.projHeader}>
              <div className={styles.left}>
                <svg className={styles.controller1} width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18.7666C3 21.4366 4.63767 23.1109 7.00205 23.1109C8.35312 23.1109 9.57114 22.4872 10.4923 21.3601L12.3142 19.0949C12.5701 18.7666 12.8362 18.6244 13.1535 18.6244H22.8465C23.1638 18.6244 23.4299 18.7666 23.6858 19.0949L25.5077 21.3601C26.4289 22.4872 27.6469 23.1109 28.998 23.1109C31.3623 23.1109 33 21.4366 33 18.7666C33 17.6176 32.7646 16.3154 32.3654 14.871C31.7308 12.6058 30.6356 9.55281 29.5916 7.20012C28.7011 5.20854 28.2201 4.23463 25.9683 3.68749C23.9928 3.20601 21.2907 2.88867 18.0051 2.88867C14.7195 2.88867 12.0072 3.20601 10.0317 3.68749C7.79017 4.23463 7.29887 5.20854 6.40839 7.20012C5.36438 9.55281 4.26919 12.6058 3.6346 14.871C3.23541 16.3154 3 17.6176 3 18.7666ZM4.92426 18.7447C4.92426 18.0772 5.06755 17.2784 5.38485 16.1185C6.07062 13.5907 7.25793 10.3297 8.28147 7.92234C8.77277 6.77335 9.05937 6.12773 10.2671 5.82133C12.1505 5.35079 14.781 5.03345 18.0051 5.03345C21.219 5.03345 23.8598 5.35079 25.7431 5.82133C26.9509 6.12773 27.217 6.77335 27.7185 7.92234C28.7625 10.3297 29.9089 13.5907 30.6254 16.1185C30.9427 17.2784 31.0757 18.0772 31.0757 18.7447C31.0757 20.1563 30.1546 21.0208 28.9468 21.0208C28.2098 21.0208 27.4831 20.605 26.8997 19.8828L24.8424 17.3878C24.3408 16.7641 23.9314 16.4686 23.0512 16.4686H12.9591C12.0686 16.4686 11.6592 16.7641 11.1576 17.3878L9.11054 19.8828C8.52712 20.605 7.79017 21.0208 7.06346 21.0208C5.84545 21.0208 4.92426 20.1563 4.92426 18.7447ZM9.64278 10.8659C9.64278 11.4787 10.001 11.8617 10.5742 11.8617H12.2938V13.6454C12.2938 14.2582 12.6418 14.6521 13.2047 14.6521C13.7574 14.6521 14.1054 14.2582 14.1054 13.6454V11.8617H15.7226C16.347 11.8617 16.7257 11.4787 16.7257 10.8659C16.7257 10.275 16.347 9.89204 15.7226 9.89204H14.1054V8.11931C14.1054 7.50652 13.7574 7.11258 13.2047 7.11258C12.6418 7.11258 12.2938 7.50652 12.2938 8.11931V9.89204H10.5742C10.001 9.89204 9.64278 10.275 9.64278 10.8659ZM24.392 10.7675C25.2518 10.7675 25.9069 10.0671 25.9069 9.14793C25.9069 8.22874 25.2518 7.51746 24.392 7.51746C23.5527 7.51746 22.8772 8.22874 22.8772 9.14793C22.8772 10.0671 23.5527 10.7675 24.392 10.7675ZM21.3521 14.0503C22.2119 14.0503 22.8669 13.35 22.8669 12.4417C22.8669 11.5225 22.2119 10.8112 21.3521 10.8112C20.5026 10.8112 19.8373 11.5225 19.8373 12.4417C19.8373 13.35 20.5026 14.0503 21.3521 14.0503Z" fill="#B8B8B8" />
                </svg>
                <p className={styles.title}>Stregheria</p>
              </div>
              <svg className={styles.arrow} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6357 16.8965L20.627 8.07227C20.627 7.45703 20.2227 7.03516 19.5898 7.03516H10.7568C10.1592 7.03516 9.74609 7.4834 9.74609 8.01074C9.74609 8.5293 10.1943 8.95996 10.7305 8.95996H13.8857L17.6123 8.83691L16.0127 10.2432L7.67188 18.5928C7.46973 18.8037 7.35547 19.0498 7.35547 19.2959C7.35547 19.8145 7.83008 20.3066 8.36621 20.3066C8.6123 20.3066 8.8584 20.2012 9.06934 19.999L17.4189 11.6494L18.8428 10.0498L18.6934 13.6182V16.9229C18.6934 17.4678 19.124 17.9248 19.6602 17.9248C20.1875 17.9248 20.6357 17.4766 20.6357 16.8965Z" fill="#FFFFFF" />
              </svg>
            </div>
            <p className={styles.desc}>An action-adventure Android game blending action and drawing, where players combat mythical beasts, developed using CUGL, Figma, and Illustrator.</p>
          </div>

          <div className={styles.project} onClick={() => window.open("https://gdiac.cs.cornell.edu/temp/showcase/gallery/plume/", "_blank")}>
            <div className={styles.projHeader}>
              <div className={styles.left}>
                <svg className={styles.controller2} width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18.7666C3 21.4366 4.63767 23.1109 7.00205 23.1109C8.35312 23.1109 9.57114 22.4872 10.4923 21.3601L12.3142 19.0949C12.5701 18.7666 12.8362 18.6244 13.1535 18.6244H22.8465C23.1638 18.6244 23.4299 18.7666 23.6858 19.0949L25.5077 21.3601C26.4289 22.4872 27.6469 23.1109 28.998 23.1109C31.3623 23.1109 33 21.4366 33 18.7666C33 17.6176 32.7646 16.3154 32.3654 14.871C31.7308 12.6058 30.6356 9.55281 29.5916 7.20012C28.7011 5.20854 28.2201 4.23463 25.9683 3.68749C23.9928 3.20601 21.2907 2.88867 18.0051 2.88867C14.7195 2.88867 12.0072 3.20601 10.0317 3.68749C7.79017 4.23463 7.29887 5.20854 6.40839 7.20012C5.36438 9.55281 4.26919 12.6058 3.6346 14.871C3.23541 16.3154 3 17.6176 3 18.7666ZM4.92426 18.7447C4.92426 18.0772 5.06755 17.2784 5.38485 16.1185C6.07062 13.5907 7.25793 10.3297 8.28147 7.92234C8.77277 6.77335 9.05937 6.12773 10.2671 5.82133C12.1505 5.35079 14.781 5.03345 18.0051 5.03345C21.219 5.03345 23.8598 5.35079 25.7431 5.82133C26.9509 6.12773 27.217 6.77335 27.7185 7.92234C28.7625 10.3297 29.9089 13.5907 30.6254 16.1185C30.9427 17.2784 31.0757 18.0772 31.0757 18.7447C31.0757 20.1563 30.1546 21.0208 28.9468 21.0208C28.2098 21.0208 27.4831 20.605 26.8997 19.8828L24.8424 17.3878C24.3408 16.7641 23.9314 16.4686 23.0512 16.4686H12.9591C12.0686 16.4686 11.6592 16.7641 11.1576 17.3878L9.11054 19.8828C8.52712 20.605 7.79017 21.0208 7.06346 21.0208C5.84545 21.0208 4.92426 20.1563 4.92426 18.7447ZM9.64278 10.8659C9.64278 11.4787 10.001 11.8617 10.5742 11.8617H12.2938V13.6454C12.2938 14.2582 12.6418 14.6521 13.2047 14.6521C13.7574 14.6521 14.1054 14.2582 14.1054 13.6454V11.8617H15.7226C16.347 11.8617 16.7257 11.4787 16.7257 10.8659C16.7257 10.275 16.347 9.89204 15.7226 9.89204H14.1054V8.11931C14.1054 7.50652 13.7574 7.11258 13.2047 7.11258C12.6418 7.11258 12.2938 7.50652 12.2938 8.11931V9.89204H10.5742C10.001 9.89204 9.64278 10.275 9.64278 10.8659ZM24.392 10.7675C25.2518 10.7675 25.9069 10.0671 25.9069 9.14793C25.9069 8.22874 25.2518 7.51746 24.392 7.51746C23.5527 7.51746 22.8772 8.22874 22.8772 9.14793C22.8772 10.0671 23.5527 10.7675 24.392 10.7675ZM21.3521 14.0503C22.2119 14.0503 22.8669 13.35 22.8669 12.4417C22.8669 11.5225 22.2119 10.8112 21.3521 10.8112C20.5026 10.8112 19.8373 11.5225 19.8373 12.4417C19.8373 13.35 20.5026 14.0503 21.3521 14.0503Z" fill="#B8B8B8" />
                </svg>
                <p className={styles.title}>Plume</p>
              </div>
              <svg className={styles.arrow} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6357 16.8965L20.627 8.07227C20.627 7.45703 20.2227 7.03516 19.5898 7.03516H10.7568C10.1592 7.03516 9.74609 7.4834 9.74609 8.01074C9.74609 8.5293 10.1943 8.95996 10.7305 8.95996H13.8857L17.6123 8.83691L16.0127 10.2432L7.67188 18.5928C7.46973 18.8037 7.35547 19.0498 7.35547 19.2959C7.35547 19.8145 7.83008 20.3066 8.36621 20.3066C8.6123 20.3066 8.8584 20.2012 9.06934 19.999L17.4189 11.6494L18.8428 10.0498L18.6934 13.6182V16.9229C18.6934 17.4678 19.124 17.9248 19.6602 17.9248C20.1875 17.9248 20.6357 17.4766 20.6357 16.8965Z" fill="#FFFFFF" />
              </svg>
            </div>
            <p className={styles.desc}>Players play as Cupid, reuniting lovers by crafting paths with specialized arrows, in a game developed for Mac and Windows using the LIBGDX engine and Figma</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Work;