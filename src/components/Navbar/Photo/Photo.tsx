import React from 'react'
import style from "./Photo.module.scss";

const Photo = () => {
  return (
    <div className={style.photo}>
      <a href="/" className={style.wrapperPhoto}>
        <img src="src\assets\photo.jpg" alt="" />
      </a>
    </div>
  )
}
 export default Photo