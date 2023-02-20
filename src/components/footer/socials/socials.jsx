import { Link } from 'react-router-dom';

import facebook from '../../../assets/img/svg/socials/facebook.svg';
import instagram from '../../../assets/img/svg/socials/instagram.svg';
import lnkedin from '../../../assets/img/svg/socials/lnkedin.svg';
import vk from '../../../assets/img/svg/socials/vk.svg';

import styles from './socials.module.scss';

const data = [
  { name: 'Facebook', img: facebook },
  { name: 'Instagram', img: instagram },
  { name: 'Lnkedin', img: lnkedin },
  { name: 'Vk', img: vk },
];

export const SocialsList = () => (
  <ul className={styles.socials}>
    {data.map(({ name, img }) => (
      <li key={name}>
        <Link to='/' target='_blank'>
          <img src={img} alt='' width={24} height={24} />
        </Link>
      </li>
    ))}
  </ul>
);
