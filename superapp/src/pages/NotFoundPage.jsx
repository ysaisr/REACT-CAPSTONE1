import React from 'react'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1>404, Not Found</h1>
      <h3>Sorry, the page you are looking doesn't exist.</h3>
    </div>
  )
}
