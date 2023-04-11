import EarthCanvas from '@/components/EarthCanvas/EarthCanvas'
import styles from "./Earth.module.css";

const Earth = () => {
  return (
    <div className="earth h-[400px] w-[400px] md:w-[600px] md:h-[600px] relative">
      <EarthCanvas />
      <button
        className='earth__button absolute bg-black md:w-[30px] w-[20px] md:h-[70px] h-[50px] outline outline-white outline-1 left-[48%] bottom-0 rounded-[30px]'
      />
      <p
        className={`earth__license bg-black text-white rounded-[10px] outline outline-white outline-1 p-4`}
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