import noImgSvg from '../../assets/img/svg/no-img.svg';

export const NoImg = ({ classes, classesImg, ...others }) => (
  <div className={classes}>
    <img
      src={noImgSvg}
      data-test-id='slide-big'
      className={classesImg}
      alt='No img'
      width={48}
      height={48}
      {...others}
    />
  </div>
);
