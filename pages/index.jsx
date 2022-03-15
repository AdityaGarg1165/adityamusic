import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'
import { FaPauseCircle } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';
import { FaFastForward } from 'react-icons/fa';
let songs = [
  { songName: "Crazy - NCS", cover: "covers/1.jpg" },
  { songName: "Mortals - NCS", cover: "covers/2.jpg" },
];

export default function Home() {
  return (
    <div>
      <script defer src="script.js"></script>
      <title>Home</title>
      {/* <div className="songitems">
        <div className="item">
          <h3 className="hitem" id="1">sdfg</h3>
          <FaPlayCircle className="plcrcle"size={30}/>
          </div>
        <div className="item">
          <h3 className='hitem'>sdfg</h3>
          <FaPlayCircle className="plcrcle"size={30}/>
          </div> */}
      {/* </div> */}
      {/* <div className="itmbx"></div> */}
      <div className={styles.box}> 
      <FaPauseCircle id="pau" className={styles.play} size={40}/>
      <FaPlayCircle id="pla" className={styles.pause} size={40}/>
      <FaFastForward id='for' className={styles.forw} size={40}/>
      <FaFastForward id="backward" className={styles.back} size={40}/>
      <div className="range">
        <input type="range" id="seek" className={styles.seekbar} min="0"  max="100" />
      </div>
      <h4 className={styles.title} id="titleid">Crazy - NCS</h4>
      <img src="covers/1.jpg" className={styles.c1} alt="" />
      </div>

    </div>
  )
}
