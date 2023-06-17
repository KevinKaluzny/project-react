import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
      <div className={styles.About}>
        <PageTitle >About</PageTitle>
        <p>Lorem ipsum.</p>
      </div>
    );
  };
  
  export default About;