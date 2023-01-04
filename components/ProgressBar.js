import styles from '../styles/Splash.module.css'
import React,{useState,useEffect} from 'react'

function ProgressBar() {
    const [filled,setFilled] = useState(0)
    const [isRunning,setIsRunning] = useState(true)
    
    useEffect(()=>{
        if(filled < 100 && isRunning){
            setTimeout(()=>setFilled(prev => prev += 4),86)
        }
    },[filled,isRunning])
 
    return (
    <>      
      <div className={styles.progressbar} >
        <div style={{
            height:"100%",
            width:`${filled}%`,
            backgroundColor:"#2DB6FE",
            transition:"width 0.1s"
        }}>
            <span className={styles.progressPercent}><b>Chargement...</b>{filled}%</span>
        </div>

      </div>
    </> 
   

    )
  }
  
  export default ProgressBar
  
