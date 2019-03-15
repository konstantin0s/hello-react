import React from 'react'
import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
     <LeftFooter />
     <RightFooter />
    </div>
  )
}
