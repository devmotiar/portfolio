// import React from 'react'
// import skills from '../../data/skills.json'
// import history from '../../data/history.json'
// import { getImageUrl } from '../../utils'
// import styles from '../Experience/Experience.module.css'
// const Experience = () => {
//     return (
//         <section className={styles.container} id='experience'>
//             <h2 className={styles.title}>Experience</h2>
//             <div className={styles.content}>
//                 <div className={styles.skills}>
//                     {skills.map((skills, id) => {
//                         return (
//                             <div className={styles.skill} key={id}>
//                                 <div className={styles.skillImageContainer}>
//                                     <img src={getImageUrl(skills.imageSrc)} alt="Skills Image" />
//                                 </div>
//                                 <p>{skills.title}</p>
//                             </div>
//                         )
//                     })}
//                 </div>

//                 <ul className={styles.history}>
//                     {history.map((historyItem, id) => {
//                         return (
//                             <li className={styles.historyItem} key={id}>
//                                 <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
//                                 <div className={styles.historyItemDetails}>
//                                     <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                                     <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
//                                     <ul>
//                                         {historyItem.experiences.map((experience, id) => {
//                                             return (
//                                                 <li key={id}>{experience}</li>
//                                             )
//                                         })}
//                                     </ul>
//                                 </div>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </section>
//     )
// }

// export default Experience


import React from 'react'
import styles from '../Experience/Experience.module.css'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
const Experience = () => {
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skills, id) => {
                        return (
                            <div className={styles.skill} key={id}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skills.imageSrc)} alt="Skills Image" />
                                </div>
                                <p>{skills.title}</p>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <ul className={styles.history}>
                        {history.map((historyItem, id) => {
                            return (
                                <li className={styles.historyItem} key={id}>
                                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} logo`} />
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                                        <ul>
                                            {historyItem.experiences.map((experience, id) => {
                                                return (
                                                    <li key={id}>{experience}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience