import React from 'react'

const styles = {
    text: {
        color: "black"
    },
    position: {
        alignContent: "center"
    }
}

export default function Footer() {
    return (
        <div className="card bg-warning fixed-bottom">
            <div className="card-body" style={styles.position}>
                <a style={styles.text} className="mx-5 badge col-2" href="https://www.linkedin.com/in/nolanterpstra/" target="_blank">LinkedIn</a>
                <a style={styles.text} className="mx-5 badge col-2" href="https://github.com/Nolanbt" target="_blank">GitHub</a>
                <span className="mx-5 badge col-2" style={styles.text}>Email: nbakert@gmail.com</span>
                <span className="mx-5 badge col-2" style={styles.text}>(832) 406-9419</span>
            </div>
        </div>
    )
}
