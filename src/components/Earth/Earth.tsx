import EarthCanvas from '@/components/EarthCanvas/EarthCanvas'
import styles from "./Earth.module.css";

const Earth = () => {
  return (
    <div className="earth h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] relative flex">
      <EarthCanvas />
      <button
        className='earth__button absolute bg-black md:w-[30px] w-[20px] md:h-[70px] h-[50px] outline outline-white outline-1 left-[48%] bottom-0 rounded-[30px]'
      />
      <p
        className={`earth__license absolute md:text-[1.4rem] md:left-0 md:top-[50%] left-[25%] top-[35%] w-[50%] md:w-full bg-black text-white rounded-[10px] outline outline-white outline-1 p-4 text-center`}
      >
        This work is based on&nbsp;
        <a
          className={styles.earth__link}
          href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
        >
          "Stylized planet"
        </a>
        &nbsp;
        <a
          className={styles.earth__link}
          href="https://sketchfab.com/cmzw"
        >
          by cmzw
        </a>
        &nbsp;
        <a
          className={styles.earth__link}
          href="http://creativecommons.org/licenses/by/4.0/"
        >
          licensed under CC-BY-4.0
        </a>
      </p>
    </div>
  )
}

export default Earth