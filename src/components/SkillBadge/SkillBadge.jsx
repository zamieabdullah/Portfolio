import React from 'react';
import styles from './SkillBadge.module.scss';

const SkillBadge = ({ skill }) => {
  return (
    <div className={styles.badge}>
      {skill}
    </div>
  );
};

export default SkillBadge; 